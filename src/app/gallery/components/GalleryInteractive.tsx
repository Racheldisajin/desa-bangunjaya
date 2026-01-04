'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import GalleryFilters from './GalleryFilters';
import PhotoCard from './PhotoCard';
import PhotoModal from './PhotoModal';
import SubmissionForm from './SubmissionForm';
import GalleryStats from './GalleryStats';

interface Photo {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  date: string;
  photographer: string;
  description: string;
}

interface GalleryInteractiveProps {
  photos: Photo[];
}

export default function GalleryInteractive({ photos }: GalleryInteractiveProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Photos');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isSubmissionFormOpen, setIsSubmissionFormOpen] = useState(false);
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>(photos);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (activeCategory === 'All Photos') {
      setFilteredPhotos(photos);
    } else {
      setFilteredPhotos(photos.filter((photo) => photo.category === activeCategory));
    }
  }, [activeCategory, photos]);

  const categories = [
    'All Photos',
    ...Array.from(new Set(photos.map((photo) => photo.category))),
  ];

  const stats = [
    { icon: 'PhotoIcon', label: 'Total Photos', value: photos.length.toString() },
    { icon: 'FolderIcon', label: 'Categories', value: (categories.length - 1).toString() },
    { icon: 'UserGroupIcon', label: 'Contributors', value: '47' },
    { icon: 'EyeIcon', label: 'Total Views', value: '12.5K' },
  ];

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handlePreviousPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const previousIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
    setSelectedPhoto(filteredPhotos[previousIndex]);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 bg-muted rounded"></div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-80 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Gallery Stats */}
      <GalleryStats stats={stats} />

      {/* Submit Photo Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsSubmissionFormOpen(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-cta text-white rounded-md hover:bg-error transition-colors duration-300 font-cta font-semibold shadow-subtle"
        >
          <Icon name="PlusIcon" size={20} />
          <span>Submit Your Photo</span>
        </button>
      </div>

      {/* Gallery Filters */}
      <GalleryFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Photo Grid */}
      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} onPhotoClick={handlePhotoClick} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Icon name="PhotoIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="font-headline font-semibold text-xl text-foreground mb-2">
            No Photos Found
          </h3>
          <p className="font-body text-muted-foreground">
            No photos available in this category yet.
          </p>
        </div>
      )}

      {/* Photo Modal */}
      <PhotoModal
        photo={selectedPhoto}
        onClose={handleCloseModal}
        onNext={handleNextPhoto}
        onPrevious={handlePreviousPhoto}
      />

      {/* Submission Form */}
      {isSubmissionFormOpen && (
        <SubmissionForm onClose={() => setIsSubmissionFormOpen(false)} />
      )}
    </>
  );
}