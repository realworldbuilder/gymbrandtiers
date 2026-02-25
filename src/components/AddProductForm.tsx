'use client';

import { useState } from 'react';
import { ScrapedProduct } from '@/types';

interface AddProductFormProps {
  onAddProduct: (product: ScrapedProduct) => void;
}

export function AddProductForm({ onAddProduct }: AddProductFormProps) {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to scrape URL');

      onAddProduct(data);
      setUrl('');
    } catch (error) {
      console.error('Error adding product:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 max-w-lg">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Add product... (e.g. gymshark.com)"
        className="w-full px-4 py-3 bg-surface border border-border text-text-primary font-mono text-sm placeholder-text-muted focus:outline-none focus:border-text-muted"
        disabled={isLoading}
        onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(e); }}
      />
      {error && <p className="mt-1 text-red-400 text-xs font-mono">{error}</p>}
    </form>
  );
}
