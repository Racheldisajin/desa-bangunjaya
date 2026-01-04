import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import VillageStats from './components/VillageStats';
import DemographicsChart from './components/DemographicsChart';
import GeographySection from './components/GeographySection';
import InfrastructureOverview from './components/InfrastructureOverview';
import HistoricalTimeline from './components/HistoricalTimeline';
import UniqueCharacteristics from './components/UniqueCharacteristics';
import DownloadSection from './components/DownloadSection';
import ContactInquiry from './components/ContactInquiry';

export const metadata: Metadata = {
  title: 'Village Profile - Village Connect',
  description: 'Comprehensive overview of our village including demographics, geography, infrastructure, and unique characteristics that make our community special.',
};

export default function VillageProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-headline font-bold mb-6">
                Discover Our Village
              </h1>
              <p className="text-lg lg:text-xl font-body opacity-90 leading-relaxed">
                A thriving community where tradition meets progress. Explore our rich heritage, modern infrastructure, and the unique characteristics that make our village a wonderful place to call home.
              </p>
            </div>
          </div>
        </section>

        {/* Village Statistics */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <VillageStats />
          </div>
        </section>

        {/* Demographics Section */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <DemographicsChart />
          </div>
        </section>

        {/* Geography Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <GeographySection />
          </div>
        </section>

        {/* Infrastructure Overview */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <InfrastructureOverview />
          </div>
        </section>

        {/* Historical Timeline */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <HistoricalTimeline />
          </div>
        </section>

        {/* Unique Characteristics */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <UniqueCharacteristics />
          </div>
        </section>

        {/* Download Resources */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <DownloadSection />
            </div>
          </div>
        </section>

        {/* Contact Inquiry */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <ContactInquiry />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-headline font-semibold mb-4">Village Connect</h3>
                <p className="text-sm opacity-90 font-body">
                  Your digital gateway to community services, information, and engagement.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-headline font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm font-body">
                  <li><a href="/homepage" className="hover:text-accent transition-colors">Home</a></li>
                  <li><a href="/heritage-center" className="hover:text-accent transition-colors">Destinasi Desa</a></li>
                  <li><a href="/gallery" className="hover:text-accent transition-colors">Gallery</a></li>
                  <li><a href="/contact-information" className="hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-headline font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-2 text-sm font-body">
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Email: info@villageconnect.gov</li>
                  <li>Address: Village Administration Office</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center">
              <p className="text-sm font-body opacity-80">
                &copy; {new Date().getFullYear()} Village Connect. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}