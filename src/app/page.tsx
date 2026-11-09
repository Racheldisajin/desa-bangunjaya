import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from './homepage/components/Footer';

import HeroSlideshow from './homepage/components/HeroSlideshow';
import LayananCepat from './homepage/components/LayananCepat';
import StatistikDesa from './homepage/components/StatistikDesa';
import ApbdDesa from './homepage/components/ApbdDesa';
import BeritaTerbaru from './homepage/components/BeritaTerbaru';
import CommunityAchievements from './homepage/components/CommunityAchievements';
import PetaDesa from './homepage/components/PetaDesa';
import VideoProfil from './homepage/components/VideoProfil';

export const metadata: Metadata = {
  title: 'Desa Bangunjaya - Beranda',
  description: 'Portal resmi Desa Bangunjaya. Temukan informasi, layanan masyarakat, berita, dan statistik desa.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow pt-16 lg:pt-20">
        <HeroSlideshow />
        <LayananCepat />
        <VideoProfil />
        <ApbdDesa />
        <PetaDesa />
        <StatistikDesa />
        <BeritaTerbaru />
        <CommunityAchievements />
      </main>

      <Footer />
    </div>
  );
}
