'use client';

import { PRESETS } from '@/lib/presets';

interface PresetSelectorProps {
  activePresets: Set<string>;
  onTogglePreset: (presetKey: string) => void;
  onClearAll: () => void;
}

export function PresetSelector({ activePresets, onTogglePreset, onClearAll }: PresetSelectorProps) {
  return (
    <div className="flex flex-wrap gap-0 items-center">
      {Object.entries(PRESETS).filter(([key]) => key !== 'blank').map(([key, preset]) => (
        <button
          key={key}
          onClick={() => onTogglePreset(key)}
          className={`px-4 py-2 font-mono text-sm transition-colors ${
            activePresets.has(key)
              ? 'bg-white text-black'
              : 'bg-transparent text-text-muted hover:text-text-primary'
          }`}
        >
          {preset.name}
        </button>
      ))}
      {activePresets.size > 0 && (
        <button
          onClick={onClearAll}
          className="px-3 py-2 font-mono text-xs text-red-400 hover:text-red-300 transition-colors"
        >
          ✕ Clear
        </button>
      )}
    </div>
  );
}
