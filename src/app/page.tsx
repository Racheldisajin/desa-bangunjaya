'use client';

import type { Metadata } from 'next';
import Header from '@/components/common/Header';

import HeroSlideshow from './homepage/components/HeroSlideshow';
import NewsTicker from './homepage/components/NewsTicker';
import QuickServices from './homepage/components/QuickServices';
import SearchBar from './homepage/components/SearchBar';
import EmergencyBanner from './homepage/components/EmergencyBanner';
import CommunityCalendar from './homepage/components/CommunityCalendar';
import CommunityAchievements from './homepage/components/CommunityAchievements';
import Footer from './homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Homepage - Village Connect',
  description:
    'Welcome to Village Connect - Your comprehensive community portal for accessing village services, news, heritage information, and connecting with local officials. Experience transparent governance and community engagement.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16 lg:pt-20">
        <HeroSlideshow />
        <NewsTicker />
        <SearchBar />
        <QuickServices />
        <EmergencyBanner />
        <CommunityCalendar />
        <CommunityAchievements />
      </main>

      <Footer />
    </div>
  );
}
