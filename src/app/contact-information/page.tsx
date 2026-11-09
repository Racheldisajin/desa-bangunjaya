import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';
import ContactInteractive from './components/ContactInteractive';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Kontak & Informasi - Desa Bangunjaya',
  description: 'Portal digital resmi Desa Bangunjaya',
};

export default function ContactInformationPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col text-white">
      <Header />

      <main className="flex-grow pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

          <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <Icon name="PhoneIcon" size={40} className="text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-body font-extrabold mb-6 tracking-tight drop-shadow-md">
              Hubungi Kami
            </h1>

            <p className="font-body text-lg md:text-xl text-emerald-50 font-light max-w-3xl mx-auto">
              Layanan desa, informasi publik, dan saluran komunikasi langsung dengan Pemerintah Desa Bangunjaya.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="flex-1 container mx-auto max-w-7xl px-4 py-16 relative -mt-8 z-20">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <ContactInteractive />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
