export interface Product {
  id: string;
  name: string;
  image: string;
  url: string;
}

export interface TierData {
  [key: string]: Product[];
}

export type TierKey = 'SS' | 'S' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'unranked';

export interface PresetData {
  name: string;
  products: Product[];
  tierPositions?: Partial<TierData>;
}

export interface ScrapedProduct {
  name: string;
  image: string;
  url: string;
}

export const TIER_LABELS: TierKey[] = ['SS', 'S', 'A+', 'A', 'B+', 'B', 'C'];

export const TIER_BG_COLORS: Record<string, string> = {
  'SS': '#e74c3c',
  'S': '#e67e22',
  'A+': '#f1c40f',
  'A': '#2ecc71',
  'B+': '#1abc9c',
  'B': '#3498db',
  'C': '#9b59b6',
};
