'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  icon: string;
}

const upcomingEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "Village Council Meeting",
    date: "2026-01-05",
    time: "6:00 PM",
    location: "Community Hall",
    category: "Governance",
    icon: "UsersIcon"
  },
  {
    id: 2,
    title: "Annual Village Festival",
    date: "2026-01-15",
    time: "10:00 AM",
    location: "Village Square",
    category: "Cultural",
    icon: "SparklesIcon"
  },
  {
    id: 3,
    title: "Community Clean-Up Drive",
    date: "2026-01-20",
    time: "8:00 AM",
    location: "Village Park",
    category: "Community Service",
    icon: "HandRaisedIcon"
  },
  {
    id: 4,
    title: "Heritage Workshop",
    date: "2026-01-25",
    time: "3:00 PM",
    location: "Heritage Center",
    category: "Educational",
    icon: "AcademicCapIcon"
  }
];

export default function CommunityCalendar() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const formatDate = (dateString: string) => {
    if (!isHydrated) return dateString;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Community Calendar
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with upcoming events, meetings, and community activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-background rounded-xl p-6 shadow-subtle hover:shadow-lg transition-all duration-300 border border-border"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={event.icon as any} size={24} className="text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-headline text-lg md:text-xl font-semibold text-foreground">
                      {event.title}
                    </h3>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-body font-medium">
                      {event.category}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Icon name="CalendarIcon" size={16} />
                      <span className="font-body text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Icon name="ClockIcon" size={16} />
                      <span className="font-body text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Icon name="MapPinIcon" size={16} />
                      <span className="font-body text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/homepage"
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-lg font-cta font-semibold text-base md:text-lg transition-all duration-300 shadow-subtle"
          >
            <span>View Full Calendar</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}