'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Product, ScrapedProduct } from '@/types';
import { PRESETS } from '@/lib/presets';

interface BrandResult {
  name: string;
  domain: string;
  icon: string;
  brandId: string;
}

interface SearchResult {
  type: 'preset' | 'brand';
  name: string;
  image: string;
  url: string;
  category?: string;
  domain?: string;
  product?: Product;
}

interface AddProductFormProps {
  onAddProduct: (product: ScrapedProduct) => void;
}

export function AddProductForm({ onAddProduct }: AddProductFormProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  // Build a flat index of all preset items
  const allPresetItems = useMemo(() => {
    const items: (Product & { category: string })[] = [];
    Object.entries(PRESETS).forEach(([key, preset]) => {
      if (key === 'blank') return;
      preset.products.forEach(p => items.push({ ...p, category: preset.name }));
    });
    return items;
  }, []);

  const search = useCallback(async (q: string) => {
    if (q.length < 1) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const lower = q.toLowerCase();

    // 1. Search preset items locally (instant)
    const presetMatches: SearchResult[] = allPresetItems
      .filter(p => p.name.toLowerCase().includes(lower))
      .slice(0, 6)
      .map(p => ({
        type: 'preset' as const,
        name: p.name,
        image: p.image,
        url: p.url,
        category: p.category,
        product: p,
      }));

    // Show preset results immediately
    if (presetMatches.length > 0) {
      setResults(presetMatches);
      setIsOpen(true);
      setSelectedIndex(-1);
    }

    // 2. Search Brandfetch API (async)
    setIsLoading(true);
    try {
      const res = await fetch(`/api/brand-search?q=${encodeURIComponent(q)}`);
      if (res.ok) {
        const data = await res.json();
        const brandResults: SearchResult[] = (Array.isArray(data) ? data : [])
          .slice(0, 6)
          .map((b: BrandResult) => ({
            type: 'brand' as const,
            name: b.name,
            image: b.icon,
            url: `https://${b.domain}`,
            domain: b.domain,
          }));

        // Merge: presets first, then brands (dedupe by name)
        const seen = new Set(presetMatches.map(r => r.name.toLowerCase()));
        const merged = [
          ...presetMatches,
          ...brandResults.filter(b => !seen.has(b.name.toLowerCase())),
        ].slice(0, 10);

        setResults(merged);
        setIsOpen(merged.length > 0);
        setSelectedIndex(-1);
      }
    } catch {
      // Keep preset results if API fails
    } finally {
      setIsLoading(false);
    }
  }, [allPresetItems]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => search(value), 200);
  };

  const selectResult = (result: SearchResult) => {
    onAddProduct({
      name: result.name,
      image: result.image,
      url: result.url,
    });
    setQuery('');
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      selectResult(results[selectedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !inputRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => results.length > 0 && setIsOpen(true)}
        placeholder="Search anything... (brands, exercises, influencers)"
        className="w-full px-4 py-3 bg-surface border border-border text-text-primary font-mono text-sm placeholder-text-muted focus:outline-none focus:border-text-muted"
      />
      {isLoading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted text-xs font-mono">
          ...
        </div>
      )}

      {isOpen && results.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 z-50 mt-0 bg-surface border border-border border-t-0 max-h-[320px] overflow-y-auto"
        >
          {results.map((result, index) => (
            <button
              key={`${result.type}-${result.name}-${index}`}
              onClick={() => selectResult(result)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left font-mono text-sm transition-colors ${
                index === selectedIndex
                  ? 'bg-white/10 text-white'
                  : 'text-text-secondary hover:bg-white/5 hover:text-white'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={result.image}
                alt={result.name}
                className="w-6 h-6 object-contain bg-white rounded-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="truncate">{result.name}</span>
              <span className="text-text-muted text-xs ml-auto">
                {result.type === 'preset' ? result.category : result.domain}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
