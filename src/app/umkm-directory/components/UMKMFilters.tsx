'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface UMKMFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function UMKMFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: UMKMFiltersProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full bg-card rounded-lg shadow-soft p-4 md:p-5 lg:p-6 mb-8 border border-border">
      <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Icon name="FunnelIcon" size={20} />
        <span>Kategori UMKM</span>
      </h3>

      {/* Desktop Filter Buttons */}
      <div className="hidden md:flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-soft'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile Filter Dropdown */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-muted rounded-lg font-semibold text-foreground"
        >
          <span>{activeCategory}</span>
          <Icon
            name={isDropdownOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
            size={20}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-lg shadow-lg border border-border z-10 overflow-hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
