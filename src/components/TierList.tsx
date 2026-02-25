'use client';

import { useState, useEffect, useCallback } from 'react';
import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd';
import { toPng } from 'html-to-image';
import { Product, TierData, TierKey, TIER_LABELS, ScrapedProduct } from '@/types';
import { PRESETS } from '@/lib/presets';
import { saveToLocalStorage, loadFromLocalStorage } from '@/lib/storage';
import { TierRow } from './TierRow';
import { ProductItem } from './ProductItem';
import { AddProductForm } from './AddProductForm';
import { PresetSelector } from './PresetSelector';

export function TierList() {
  const [currentPreset, setCurrentPreset] = useState('blank');
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

  const loadPreset = useCallback((presetKey: string) => {
    const preset = PRESETS[presetKey];
    if (!preset) return;

    const newTiers: TierData = {
      SS: [], S: [], 'A+': [], A: [], 'B+': [], B: [], C: [],
      unranked: [...preset.products]
    };

    if (preset.tierPositions) {
      Object.entries(preset.tierPositions).forEach(([tierKey, products]) => {
        if (products && Array.isArray(products)) {
          newTiers[tierKey as TierKey] = [...products];
          products.forEach(product => {
            const index = newTiers.unranked.findIndex(p => p.id === product.id);
            if (index !== -1) newTiers.unranked.splice(index, 1);
          });
        }
      });
    }

    setTiers(newTiers);
    setCurrentPreset(presetKey);
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
    const el = document.getElementById('tier-list-container');
    if (!el) return;
    setIsExporting(true);
    try {
      // Convert all images to base64 to avoid CORS issues
      const images = el.querySelectorAll('img');
      const originals: { img: HTMLImageElement; src: string }[] = [];

      await Promise.all(
        Array.from(images).map(async (img) => {
          try {
            originals.push({ img, src: img.src });
            const response = await fetch('/api/proxy-image?url=' + encodeURIComponent(img.src));
            if (response.ok) {
              const blob = await response.blob();
              const reader = new FileReader();
              const base64 = await new Promise<string>((resolve) => {
                reader.onloadend = () => resolve(reader.result as string);
                reader.readAsDataURL(blob);
              });
              img.src = base64;
            }
          } catch {
            // Keep original src if proxy fails
          }
        })
      );

      // Small delay for images to settle
      await new Promise(r => setTimeout(r, 100));

      const dataUrl = await toPng(el, {
        backgroundColor: '#0a0a0a',
        pixelRatio: 2,
        skipFonts: true,
      });

      // Restore original srcs
      originals.forEach(({ img, src }) => { img.src = src; });

      const link = document.createElement('a');
      link.download = 'product-tier-list.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to export PNG:', error);
      alert('Export failed — try again');
    } finally {
      setIsExporting(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="font-display text-6xl tracking-wider text-text-primary">
            Product Tier List
          </h1>
          <p className="font-mono text-sm text-text-muted mt-1">
            Drag and drop to rank products
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-0">
            <PresetSelector currentPreset={currentPreset} onPresetChange={loadPreset} />
          </div>
          <button
            onClick={handleExportPng}
            disabled={isExporting}
            className="px-4 py-2 font-mono text-sm bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {isExporting ? 'Exporting...' : 'Export PNG'}
          </button>
        </div>

        {/* Add Product Input */}
        <div className="mb-6">
          <AddProductForm onAddProduct={handleAddProduct} />
        </div>

        {/* Tier List */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <div id="tier-list-container" className="border border-border">
            {TIER_LABELS.map(tier => (
              <TierRow
                key={tier}
                tier={tier}
                products={tiers[tier]}
                onDeleteProduct={handleDeleteProduct}
              />
            ))}
          </div>

          {/* Unranked */}
          <div className="unranked-section">
            <p className="font-mono text-sm text-text-muted mb-2">Unranked</p>
            <Droppable droppableId="unranked" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`unranked-grid border border-border ${
                    snapshot.isDraggingOver ? 'bg-white/5' : ''
                  }`}
                >
                  {tiers.unranked.map((product, index) => (
                    <ProductItem
                      key={product.id}
                      product={product}
                      index={index}
                      onDelete={handleDeleteProduct}
                    />
                  ))}
                  {provided.placeholder}
                  {tiers.unranked.length === 0 && (
                    <div className="text-text-muted text-xs font-mono w-full text-center py-6">
                      Add products using the input above or select a preset
                    </div>
                  )}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
