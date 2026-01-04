'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would be implemented here
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="py-8 md:py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for documents, officials, services, or information..."
                className="w-full px-6 py-4 md:py-5 pr-14 rounded-xl border-2 border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-body text-base md:text-lg transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Search"
              >
                <Icon name="MagnifyingGlassIcon" size={24} />
              </button>
            </div>
          </form>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <span className="font-body text-sm text-muted-foreground">Popular searches:</span>
            {['Birth Certificate', 'Property Tax', 'Water Bill', 'Meeting Minutes'].map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-3 py-1 bg-background hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-body transition-all duration-300 border border-border"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}