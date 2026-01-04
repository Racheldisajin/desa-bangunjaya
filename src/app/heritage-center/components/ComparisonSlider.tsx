'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComparisonSliderProps {
  location: string;
  historicalImage: string;
  historicalAlt: string;
  modernImage: string;
  modernAlt: string;
  historicalYear: string;
  modernYear: string;
}

export default function ComparisonSlider({
  location,
  historicalImage,
  historicalAlt,
  modernImage,
  modernAlt,
  historicalYear,
  modernYear
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="font-headline font-semibold text-xl text-foreground">{location}</h3>
      </div>
      <div
        className="relative w-full h-96 overflow-hidden cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Modern Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={modernImage}
            alt={modernAlt}
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-background/90 rounded-full font-cta font-semibold text-sm text-foreground">
            {modernYear}
          </div>
        </div>

        {/* Historical Image (Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={historicalImage}
            alt={historicalAlt}
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute bottom-4 left-4 px-3 py-1 bg-background/90 rounded-full font-cta font-semibold text-sm text-foreground">
            {historicalYear}
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Icon name="ChevronLeftIcon" size={16} className="text-foreground -mr-1" />
            <Icon name="ChevronRightIcon" size={16} className="text-foreground -ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}