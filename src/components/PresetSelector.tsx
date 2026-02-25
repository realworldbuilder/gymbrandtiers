'use client';

import { PRESETS } from '@/lib/presets';

interface PresetSelectorProps {
  currentPreset: string;
  onPresetChange: (presetKey: string) => void;
}

export function PresetSelector({ currentPreset, onPresetChange }: PresetSelectorProps) {
  return (
    <div className="flex flex-wrap gap-0">
      {Object.entries(PRESETS).map(([key, preset]) => (
        <button
          key={key}
          onClick={() => onPresetChange(key)}
          className={`px-4 py-2 font-mono text-sm transition-colors ${
            currentPreset === key
              ? 'bg-white text-black'
              : 'bg-transparent text-text-muted hover:text-text-primary'
          }`}
        >
          {preset.name}
        </button>
      ))}
    </div>
  );
}
