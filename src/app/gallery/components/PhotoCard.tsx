'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface PhotoCardProps {
  photo: {
    id: number;
    title: string;
    category: string;
    image: string;
    alt: string;
    date: string;
    photographer: string;
    description: string;
  };
  onPhotoClick: (photo: any) => void;
}

export default function PhotoCard({ photo, onPhotoClick }: PhotoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-card rounded-lg overflow-hidden shadow-subtle hover:shadow-lg transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPhotoClick(photo)}
    >
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden">
        <AppImage
          src={photo.image}
          alt={photo.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-headline font-semibold text-lg mb-1">
              {photo.title}
            </h3>
            <p className="font-body text-sm opacity-90 line-clamp-2">
              {photo.description}
            </p>
          </div>
        </div>

        {/* View Icon */}
        <div
          className={`absolute top-4 right-4 bg-white/90 rounded-full p-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <Icon name="MagnifyingGlassIcon" size={20} className="text-primary" />
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground font-body">
          <div className="flex items-center space-x-2">
            <Icon name="CameraIcon" size={16} />
            <span>{photo.photographer}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CalendarIcon" size={16} />
            <span>{photo.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}