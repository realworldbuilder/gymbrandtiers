'use client';

import { useEffect } from 'react';
import { Product } from '@/types';
import { Draggable } from '@hello-pangea/dnd';
import { cacheImage } from '@/lib/imageCache';

interface ProductItemProps {
  product: Product;
  index: number;
  onDelete: (productId: string) => void;
}

export function ProductItem({ product, index, onDelete }: ProductItemProps) {
  // Pre-cache image for export as soon as it renders
  useEffect(() => {
    cacheImage(product.image);
  }, [product.image]);

  return (
    <Draggable draggableId={product.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`product-item group ${snapshot.isDragging ? 'scale-110 z-50 shadow-lg' : ''}`}
          title={product.name}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain bg-white"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              try {
                const domain = new URL(product.url).hostname;
                target.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
              } catch {
                target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"><rect fill="%23333" width="60" height="60"/><text x="50%" y="55%" fill="white" font-size="20" text-anchor="middle">${product.name.charAt(0)}</text></svg>`;
              }
            }}
          />
          <div className="product-name">{product.name}</div>
          <button
            className="delete-button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(product.id);
            }}
          >
            ×
          </button>
        </div>
      )}
    </Draggable>
  );
}
