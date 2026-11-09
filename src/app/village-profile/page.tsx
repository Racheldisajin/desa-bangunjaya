import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';
import VillageStats from './components/VillageStats';
import DemographicsChart from './components/DemographicsChart';
import GeographySection from './components/GeographySection';
import InfrastructureOverview from './components/InfrastructureOverview';
import VisionMissionHistory from './components/VisionMissionHistory';
import EducationStats from './components/EducationStats';
import OccupationStats from './components/OccupationStats';

export const metadata: Metadata = {
  title: 'Desa Bangunjaya',
  description:
    'Profil lengkap Desa Bangunjaya meliputi demografi, geografi, dan infrastruktur desa.',
};

export default function VillageProfilePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background flex flex-col text-white">
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-body font-extrabold mb-6 tracking-tight drop-shadow-md">
                Desa Bangunjaya
              </h1>
              <p className="text-lg lg:text-xl font-body text-slate-300 leading-relaxed font-light">
                Desa yang terus berkembang dengan memadukan tradisi,
                kebersamaan, dan kemajuan pembangunan.
              </p>
            </div>
          </div>
        </section>

        {/* Vision, Mission & History */}
        <section className="py-16 lg:py-20 bg-transparent">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 p-8 lg:p-12 hover:shadow-2xl transition-shadow duration-300 hover:bg-white/10">
              <VisionMissionHistory />
            </div>
          </div>
        </section>

        {/* Village Statistics */}
        <section className="py-16 lg:py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <VillageStats />
          </div>
        </section>

        {/* Demographics (Usia) */}
        <section className="py-16 lg:py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <DemographicsChart />
          </div>
        </section>

        {/* Education Statistics */}
        <section className="py-16 lg:py-20 bg-transparent">
          <div className="container mx-auto px-4 max-w-6xl">
            <EducationStats />
          </div>
        </section>

        {/* Occupation Statistics */}
        <section className="py-16 lg:py-20 bg-transparent">
          <div className="container mx-auto px-4 max-w-6xl">
            <OccupationStats />
          </div>
        </section>

        {/* Geography */}
        <section className="py-16 lg:py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <GeographySection />
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-16 lg:py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <InfrastructureOverview />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
