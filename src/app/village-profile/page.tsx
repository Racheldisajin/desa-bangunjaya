import type { Metadata } from 'next';
import Header from '@/components/common/Header';
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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-headline font-bold mb-6">
                Desa Bangunjaya
              </h1>
              <p className="text-lg lg:text-xl font-body opacity-90 leading-relaxed">
                Desa yang terus berkembang dengan memadukan tradisi,
                kebersamaan, dan kemajuan pembangunan.
              </p>
            </div>
          </div>
        </section>

        {/* Vision, Mission & History */}
        <section className="py-16 lg:py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
              <VisionMissionHistory />
            </div>
          </div>
        </section>

        {/* Village Statistics */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <VillageStats />
          </div>
        </section>

        {/* Demographics (Usia) */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <DemographicsChart />
          </div>
        </section>

        {/* Education Statistics */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <EducationStats />
          </div>
        </section>

        {/* Occupation Statistics (SETELAH PENDIDIKAN) */}
        <section className="py-16 lg:py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <OccupationStats />
          </div>
        </section>

        {/* Geography */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <GeographySection />
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <InfrastructureOverview />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-primary text-white mt-16">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mb-10">
            {/* LOGO */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12">
                  <img
                    src="http://localhost:4028/assets/pnd.png"
                    alt="Logo Desa Bangunjaya"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-headline font-semibold text-xl">
                  Desa Bangunjaya
                </h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                Portal resmi Desa Bangunjaya untuk informasi, layanan,
                dan pembangunan masyarakat.
              </p>
            </div>

            {/* MENU */}
            <div>
              <h4 className="font-semibold mb-3">Menu</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="/homepage">Beranda</a></li>
                <li><a href="/gallery">Galeri</a></li>
                <li><a href="/contact-information">Kontak</a></li>
              </ul>
            </div>

            {/* KONTAK */}
            <div>
              <h4 className="font-semibold mb-3">Kontak</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Kantor Desa Bangunjaya<br />
                Senin – Jumat<br />
                08.00 – 16.00
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 text-center text-white/80 text-sm">
            © {currentYear} KKN 122 Bangunjaya – Universitas Siliwangi.  
            All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
