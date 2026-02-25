'use client';

import { Product, TierKey, TIER_BG_COLORS } from '@/types';
import { Droppable } from '@hello-pangea/dnd';
import { ProductItem } from './ProductItem';

interface TierRowProps {
  tier: TierKey;
  products: Product[];
  onDeleteProduct: (productId: string) => void;
}

export function TierRow({ tier, products, onDeleteProduct }: TierRowProps) {
  const bgColor = TIER_BG_COLORS[tier] || '#666';

  return (
    <div className="tier-row">
      <div
        className="tier-label"
        style={{ backgroundColor: bgColor }}
      >
        {tier}
      </div>
      <Droppable droppableId={tier} direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`tier-content ${
              snapshot.isDraggingOver ? 'bg-white/5' : ''
            }`}
          >
            {products.map((product, index) => (
              <ProductItem
                key={product.id}
                product={product}
                index={index}
                onDelete={onDeleteProduct}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
