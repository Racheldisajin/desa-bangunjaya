'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  urgent: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Annual Village Festival scheduled for January 15, 2026 - Registration now open",
    date: "2025-12-20",
    category: "Events",
    urgent: false
  },
  {
    id: 2,
    title: "New community center construction begins next month - Public meeting on January 5",
    date: "2025-12-22",
    category: "Development",
    urgent: false
  },
  {
    id: 3,
    title: "Water supply maintenance scheduled for December 30 - 8 AM to 2 PM",
    date: "2025-12-27",
    category: "Maintenance",
    urgent: true
  },
  {
    id: 4,
    title: "Village council meeting minutes from December 15 now available for review",
    date: "2025-12-18",
    category: "Governance",
    urgent: false
  }
];

export default function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHydrated]);

  const currentNews = newsItems[currentIndex];

  if (!isHydrated) {
    return (
      <div className="bg-primary text-primary-foreground py-3 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Icon name="MegaphoneIcon" size={20} className="text-primary-foreground" />
              <span className="font-cta font-semibold text-sm md:text-base">Latest News</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="font-body text-sm md:text-base truncate">
                {newsItems[0].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${currentNews.urgent ? 'bg-cta' : 'bg-primary'} text-primary-foreground py-3 md:py-4 transition-colors duration-500`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
            <Icon 
              name={currentNews.urgent ? "ExclamationTriangleIcon" : "MegaphoneIcon"} 
              size={20} 
              className="text-primary-foreground" 
            />
            <span className="font-cta font-semibold text-sm md:text-base">
              {currentNews.urgent ? 'Urgent Notice' : 'Latest News'}
            </span>
            <span className="hidden sm:inline-block bg-white/20 px-2 py-1 rounded text-xs font-body">
              {currentNews.category}
            </span>
          </div>
          
          <div className="flex-1 overflow-hidden mx-4">
            <p className="font-body text-sm md:text-base truncate animate-fade-in">
              {currentNews.title}
            </p>
          </div>

          <Link
            href="/homepage"
            className="flex-shrink-0 flex items-center space-x-1 hover:opacity-80 transition-opacity duration-300"
          >
            <span className="font-body text-sm hidden md:inline">View All</span>
            <Icon name="ArrowRightIcon" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}