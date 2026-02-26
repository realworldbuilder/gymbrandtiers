'use client';

import { useState, useEffect, useCallback } from 'react';
import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd';
import html2canvas from 'html2canvas-pro';
import { Product, TierData, TierKey, TIER_LABELS, ScrapedProduct } from '@/types';
import { PRESETS } from '@/lib/presets';
import { saveToLocalStorage, loadFromLocalStorage } from '@/lib/storage';
import { getCachedImage, cacheImage } from '@/lib/imageCache';
import { TierRow } from './TierRow';
import { ProductItem } from './ProductItem';
import { AddProductForm } from './AddProductForm';
import { PresetSelector } from './PresetSelector';
import { BASE_PATH } from '@/lib/config';
import { EmailGate } from './EmailGate';

export function TierList() {
  const [activePresets, setActivePresets] = useState<Set<string>>(new Set());
  const [tiers, setTiers] = useState<TierData>({
    SS: [], S: [], 'A+': [], A: [], 'B+': [], B: [], C: [], unranked: []
  });
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    const saved = loadFromLocalStorage();
    if (saved) setTiers(saved);
  }, []);

  useEffect(() => {
    saveToLocalStorage(tiers);
  }, [tiers]);

  // Get all product IDs currently in any tier
  const allCurrentIds = useCallback(() => {
    const ids = new Set<string>();
    Object.values(tiers).forEach(products => {
      products.forEach(p => ids.add(p.id));
    });
    return ids;
  }, [tiers]);

  const handleTogglePreset = useCallback((presetKey: string) => {
    setActivePresets(prev => {
      const next = new Set(prev);
      const preset = PRESETS[presetKey];
      if (!preset) return next;

      if (next.has(presetKey)) {
        // Remove: delete this preset's products from all tiers
        next.delete(presetKey);
        const presetIds = new Set(preset.products.map(p => p.id));
        setTiers(prev => {
          const newTiers = { ...prev };
          (Object.keys(newTiers) as TierKey[]).forEach(key => {
            newTiers[key] = prev[key].filter(p => !presetIds.has(p.id));
          });
          // Also filter unranked
          newTiers.unranked = prev.unranked.filter(p => !presetIds.has(p.id));
          return newTiers;
        });
      } else {
        // Add: merge this preset's products into unranked (skip dupes)
        next.add(presetKey);
        const currentIds = allCurrentIds();
        const newProducts = preset.products.filter(p => !currentIds.has(p.id));
        setTiers(prev => ({
          ...prev,
          unranked: [...prev.unranked, ...newProducts],
        }));
      }
      return next;
    });
  }, [allCurrentIds]);

  const handleClearAll = useCallback(() => {
    setActivePresets(new Set());
    setTiers({
      SS: [], S: [], 'A+': [], A: [], 'B+': [], B: [], C: [], unranked: []
    });
  }, []);

  const handleDragEnd = useCallback((result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const sourceKey = source.droppableId as TierKey;
    const destKey = destination.droppableId as TierKey;
    const product = tiers[sourceKey].find(p => p.id === draggableId);
    if (!product) return;

    setTiers(prev => {
      const newTiers = { ...prev };
      newTiers[sourceKey] = prev[sourceKey].filter(p => p.id !== draggableId);
      const destProducts = [...prev[destKey]];
      destProducts.splice(destination.index, 0, product);
      newTiers[destKey] = destProducts;
      return newTiers;
    });
  }, [tiers]);

  const handleAddProduct = useCallback((scrapedProduct: ScrapedProduct) => {
    const newProduct: Product = {
      id: `product_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: scrapedProduct.name,
      image: scrapedProduct.image,
      url: scrapedProduct.url
    };
    setTiers(prev => ({ ...prev, unranked: [...prev.unranked, newProduct] }));
  }, []);

  const handleDeleteProduct = useCallback((productId: string) => {
    setTiers(prev => {
      const newTiers = { ...prev };
      Object.keys(newTiers).forEach(tierKey => {
        newTiers[tierKey as TierKey] = prev[tierKey as TierKey].filter(p => p.id !== productId);
      });
      return newTiers;
    });
  }, []);

  const handleExportPng = useCallback(async () => {
    const el = document.getElementById('tier-list-export');
    if (!el) return;
    setIsExporting(true);
    try {
      // Ensure all images are cached
      const images = Array.from(el.querySelectorAll('img'));
      await Promise.all(images.map(img => cacheImage(img.src)));

      // Swap to base64 versions
      const originals = images.map(img => {
        const origSrc = img.src;
        const cached = getCachedImage(origSrc);
        if (cached) img.src = cached;
        return { img, src: origSrc };
      });

      // Wait for DOM
      await new Promise(r => setTimeout(r, 300));

      const canvas = await html2canvas(el, {
        backgroundColor: '#0a0a0a',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      // Restore originals
      originals.forEach(({ img, src }) => { img.src = src; });

      canvas.toBlob(async (blob) => {
        if (!blob) {
          alert('Export failed');
          setIsExporting(false);
          return;
        }

        // Try native share (mobile)
        if (navigator.share && navigator.canShare) {
          const file = new File([blob], 'tier-list.png', { type: 'image/png' });
          const shareData = { files: [file], title: 'My Product Tier List', text: 'Check out my tier list — gymbrandtiers.vercel.app' };
          if (navigator.canShare(shareData)) {
            try {
              await navigator.share(shareData);
              setIsExporting(false);
              return;
            } catch (e) {
              // User cancelled share — fall through to download
              if ((e as Error).name === 'AbortError') {
                setIsExporting(false);
                return;
              }
            }
          }
        }

        // Fallback: download
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'product-tier-list.png';
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
        setIsExporting(false);
      }, 'image/png');
      return;
    } catch (error) {
      console.error('Failed to export PNG:', error);
      alert('Export failed — try again');
    } finally {
      setIsExporting(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Header - compact */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-display text-4xl tracking-wider text-text-primary leading-none">
              Product Tier List
            </h1>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="font-mono text-xs text-text-muted">presented by</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BASE_PATH}/gs-icon.png`} alt="GymSignal" className="w-4 h-4 rounded-sm" />
              <span className="font-mono text-xs text-text-secondary">GymSignal</span>
            </div>
          </div>
          <button
            onClick={handleExportPng}
            disabled={isExporting}
            className="px-4 py-2 font-mono text-sm bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {isExporting ? '...' : '↗ Share'}
          </button>
        </div>

        {/* Search - full width */}
        <div className="mb-3">
          <AddProductForm onAddProduct={handleAddProduct} />
        </div>

        {/* Category toggles */}
        <div className="mb-3">
          <PresetSelector activePresets={activePresets} onTogglePreset={handleTogglePreset} onClearAll={handleClearAll} />
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          {/* Unranked - right after controls */}
          <div className="mb-3">
            <Droppable droppableId="unranked" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`flex flex-wrap gap-1 min-h-[70px] p-2 border border-border ${
                    snapshot.isDraggingOver ? 'bg-white/5' : ''
                  }`}
                >
                  {tiers.unranked.length === 0 && (
                    <div className="text-text-muted text-xs font-mono w-full text-center py-4">
                      Search for brands above or select a preset to get started
                    </div>
                  )}
                  {tiers.unranked.map((product, index) => (
                    <ProductItem
                      key={product.id}
                      product={product}
                      index={index}
                      onDelete={handleDeleteProduct}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          {/* Tier List */}
          <div id="tier-list-export" className="border border-border">
            {/* Watermark header for export */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-surface/80 border-b border-border">
              <div className="flex items-center gap-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE_PATH}/gs-icon.png`} alt="GymSignal" className="w-3.5 h-3.5 rounded-sm" />
                <span className="font-mono text-[10px] text-text-muted">gymsignal.app</span>
              </div>
              <span className="font-mono text-[10px] text-text-muted">Product Tier List</span>
            </div>
            {TIER_LABELS.map(tier => (
              <TierRow
                key={tier}
                tier={tier}
                products={tiers[tier]}
                onDeleteProduct={handleDeleteProduct}
              />
            ))}
          </div>
        </DragDropContext>

        {/* Email Collection */}
        <div className="mt-8">
          <EmailGate />
        </div>
      </div>
    </div>
  );
}
