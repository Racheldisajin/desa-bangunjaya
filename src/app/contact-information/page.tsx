import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactInteractive from './components/ContactInteractive';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Desa Bangunjaya',
  description: 'Portal digital resmi Desa Bangunjaya',
};

export default function ContactInformationPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Icon name="PhoneIcon" size={40} className="text-white" />
          </div>

          <h1 className="font-headline font-semibold text-4xl md:text-5xl lg:text-6xl mb-4">
            Kontak & Informasi
          </h1>

          <p className="font-body text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Hubungi kami untuk layanan desa, informasi publik, dan kebutuhan masyarakat Desa Bangunjaya.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto max-w-7xl px-4 py-16">
        <ContactInteractive />
      </main>

      {/* FOOTER */}
      <footer className="bg-primary text-white mt-16">
        <div className="container mx-auto max-w-6xl px-4 py-12">

          {/* TOP FOOTER */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mb-10">

            {/* LOGO & DESKRIPSI */}
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
                Portal digital resmi Desa Bangunjaya sebagai pusat informasi,
                layanan publik, dan komunikasi masyarakat.
              </p>
            </div>

            {/* MENU */}
            <div>
              <h4 className="font-semibold mb-3">Menu</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>
                  <Link href="/homepage" className="hover:text-white transition">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white transition">
                    Galeri
                  </Link>
                </li>
                <li>
                  <Link href="/contact-information" className="hover:text-white transition">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>

            {/* KONTAK */}
            <div>
              <h4 className="font-semibold mb-3">Kontak</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex items-start gap-2 justify-center md:justify-start">
                  <Icon name="PhoneIcon" size={16} />
                  <span>(555) 100-2000</span>
                </li>
                <li className="flex items-start gap-2 justify-center md:justify-start">
                  <Icon name="EnvelopeIcon" size={16} />
                  <span>info@desabangunjaya.id</span>
                </li>
                <li className="flex items-start gap-2 justify-center md:justify-start">
                  <Icon name="MapPinIcon" size={16} />
                  <span>
                    Kantor Desa Bangunjaya<br />
                    Kabupaten Pangandaran
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM FOOTER */}
          <div className="border-t border-white/20 pt-6 text-center text-white/80 text-sm">
            © {currentYear} KKN 122 Desa Bangunjaya – Universitas Siliwangi.  
            All rights reserved.
          </div>

        </div>
      </footer>
    </div>
  );
}
