'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface GalleryFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GalleryFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: GalleryFiltersProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full bg-card rounded-lg shadow-subtle p-4 mb-8">
      {/* Desktop Filter Buttons */}
      <div className="hidden md:flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 rounded-md font-cta font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-primary/10'
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
          className="w-full flex items-center justify-between px-4 py-3 bg-muted rounded-md font-cta font-semibold text-foreground"
        >
          <span>{activeCategory}</span>
          <Icon
            name={isDropdownOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
            size={20}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-lg shadow-lg border border-border z-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-3 font-body transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                } first:rounded-t-lg last:rounded-b-lg`}
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