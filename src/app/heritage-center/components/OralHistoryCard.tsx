'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface OralHistoryCardProps {
  name: string;
  role: string;
  yearRecorded: string;
  duration: string;
  thumbnail: string;
  alt: string;
  excerpt: string;
}

export default function OralHistoryCard({ name, role, yearRecorded, duration, thumbnail, alt, excerpt }: OralHistoryCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-56 overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <button
            onClick={handlePlayToggle}
            className="w-14 h-14 flex items-center justify-center bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg"
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          >
            <Icon name={isPlaying ? 'PauseIcon' : 'PlayIcon'} size={24} />
          </button>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <div>
          <h4 className="font-headline font-semibold text-xl text-foreground">{name}</h4>
          <p className="font-body text-sm text-muted-foreground">{role}</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Icon name="CalendarIcon" size={16} />
            {yearRecorded}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="ClockIcon" size={16} />
            {duration}
          </span>
        </div>
        <p className="font-body text-muted-foreground text-sm leading-relaxed line-clamp-3">{excerpt}</p>
      </div>
    </div>
  );
}