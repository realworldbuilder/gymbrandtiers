'use client';

import { Product } from '@/types';
import { Draggable } from '@hello-pangea/dnd';

interface ProductItemProps {
  product: Product;
  index: number;
  onDelete: (productId: string) => void;
}

export function ProductItem({ product, index, onDelete }: ProductItemProps) {
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
                target.src = `https://via.placeholder.com/60x60/333/fff?text=${encodeURIComponent(product.name.charAt(0))}`;
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
