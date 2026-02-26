'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ScrapedProduct } from '@/types';

interface BrandResult {
  name: string;
  domain: string;
  icon: string;
  brandId: string;
}

interface AddProductFormProps {
  onAddProduct: (product: ScrapedProduct) => void;
}

export function AddProductForm({ onAddProduct }: AddProductFormProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<BrandResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  const searchBrands = useCallback(async (q: string) => {
    if (q.length < 1) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    try {
      // Call Brandfetch API directly from client-side
      const res = await fetch(`https://api.brandfetch.io/v2/search/${encodeURIComponent(q)}`, {
        headers: {
          'Authorization': `Bearer Yd83VKTqp7BsUI6Wo3YXImTbzo76R2l7JFAdK7Fc-Bls-OgMMyEFH559R9JHaAwCtgMzmFSNyxgDXLqpynD0cg`,
        },
      });

      if (!res.ok) {
        setResults([]);
        setIsOpen(false);
        setSelectedIndex(-1);
        return;
      }

      const data = await res.json();

      // Map to simplified format, take top 8 results
      const results = (Array.isArray(data) ? data : []).slice(0, 8).map((item: Record<string, unknown>) => ({
        name: item.name as string,
        domain: item.domain as string,
        // Use higher quality icon format
        icon: `https://cdn.brandfetch.io/${item.brandId}/w/400/h/400/theme/dark/icon.jpeg`,
        brandId: item.brandId as string,
      }));

      setResults(results);
      setIsOpen(results.length > 0);
      setSelectedIndex(-1);
    } catch {
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => searchBrands(value), 200);
  };

  const selectBrand = (brand: BrandResult) => {
    onAddProduct({
      name: brand.name,
      image: brand.icon,
      url: `https://${brand.domain}`,
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
      selectBrand(results[selectedIndex]);
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
    <div className="relative flex-1 max-w-lg">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => results.length > 0 && setIsOpen(true)}
        placeholder="Add product... (e.g. gymshark)"
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
          {results.map((brand, index) => (
            <button
              key={`${brand.brandId}-${index}`}
              onClick={() => selectBrand(brand)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left font-mono text-sm transition-colors ${
                index === selectedIndex
                  ? 'bg-white/10 text-white'
                  : 'text-text-secondary hover:bg-white/5 hover:text-white'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.icon}
                alt={brand.name}
                className="w-6 h-6 object-contain bg-white rounded-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://www.google.com/s2/favicons?domain=${brand.domain}&sz=64`;
                }}
              />
              <span className="truncate">{brand.name}</span>
              <span className="text-text-muted text-xs ml-auto">{brand.domain}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
