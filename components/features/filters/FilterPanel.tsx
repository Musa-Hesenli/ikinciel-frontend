'use client';

import { useState } from 'react';
import { Button, Input, Select } from '@/components/ui';
import { SearchFilters } from '@/types';
import { PRODUCT_CONDITIONS, SORT_OPTIONS } from '@/constants';

interface FilterPanelProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export default function FilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  const [localFilters, setLocalFilters] = useState<SearchFilters>(filters);

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
  };

  const applyFilters = () => {
    onFilterChange(localFilters);
  };

  const resetFilters = () => {
    const emptyFilters: SearchFilters = {};
    setLocalFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={resetFilters}
          className="text-sm text-primary hover:text-primary-dark transition-colors"
        >
          Reset all
        </button>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={localFilters.minPrice || ''}
            onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
          />
          <Input
            type="number"
            placeholder="Max"
            value={localFilters.maxPrice || ''}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
          />
        </div>
      </div>

      {/* Condition */}
      <div>
        <Select
          label="Condition"
          options={[
            { value: '', label: 'All conditions' },
            ...PRODUCT_CONDITIONS.map(c => ({ value: c.value, label: c.label }))
          ]}
          value={localFilters.condition || ''}
          onChange={(e) => handleFilterChange('condition', e.target.value || undefined)}
        />
      </div>

      {/* Sort By */}
      <div>
        <Select
          label="Sort By"
          options={SORT_OPTIONS.map(s => ({ value: s.value, label: s.label }))}
          value={localFilters.sortBy || 'latest'}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
        />
      </div>

      {/* Apply Button */}
      <Button onClick={applyFilters} className="w-full">
        Apply Filters
      </Button>
    </div>
  );
}
