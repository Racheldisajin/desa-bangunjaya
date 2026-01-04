'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface PhotoModalProps {
  photo: {
    id: number;
    title: string;
    category: string;
    image: string;
    alt: string;
    date: string;
    photographer: string;
    description: string;
  } | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function PhotoModal({
  photo,
  onClose,
  onNext,
  onPrevious,
}: PhotoModalProps) {
  useEffect(() => {
    if (photo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [photo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose, onNext, onPrevious]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
        aria-label="Close modal"
      >
        <Icon name="XMarkIcon" size={24} className="text-white" />
      </button>

      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
        aria-label="Previous photo"
      >
        <Icon name="ChevronLeftIcon" size={24} className="text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="fixed right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
        aria-label="Next photo"
      >
        <Icon name="ChevronRightIcon" size={24} className="text-white" />
      </button>

      {/* Modal Content */}
      <div className="w-full max-w-6xl max-h-[90vh] flex flex-col bg-card rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
          <AppImage
            src={photo.image}
            alt={photo.alt}
            className="max-w-full max-h-[70vh] object-contain"
          />
        </div>

        {/* Photo Details */}
        <div className="p-6 bg-card">
          <h2 className="font-headline font-semibold text-2xl text-foreground mb-2">
            {photo.title}
          </h2>
          <p className="font-body text-muted-foreground mb-4">
            {photo.description}
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body">
            <div className="flex items-center space-x-2">
              <Icon name="TagIcon" size={16} />
              <span>{photo.category}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CameraIcon" size={16} />
              <span>{photo.photographer}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CalendarIcon" size={16} />
              <span>{photo.date}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-300 font-cta font-semibold">
              <Icon name="ArrowDownTrayIcon" size={20} />
              <span>Download</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors duration-300 font-cta font-semibold">
              <Icon name="ShareIcon" size={20} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}