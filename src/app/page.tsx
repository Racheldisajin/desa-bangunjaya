import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSlideshow from './components/HeroSlideshow';
import NewsTicker from './components/NewsTicker';
import QuickServices from './components/QuickServices';
import SearchBar from './components/SearchBar';
import EmergencyBanner from './components/EmergencyBanner';
import CommunityCalendar from './components/CommunityCalendar';
import CommunityAchievements from './components/CommunityAchievements';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Homepage - Village Connect',
  description: 'Welcome to Village Connect - Your comprehensive community portal for accessing village services, news, heritage information, and connecting with local officials. Experience transparent governance and community engagement.',
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