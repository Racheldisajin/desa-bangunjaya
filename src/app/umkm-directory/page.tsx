'use client';

import Header from '@/components/common/Header';
import Icon from '@/components/ui/AppIcon';
import UMKMInteractive from './components/UMKMInteractive';

export default function UMKMDirectoryClient() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* HERO */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Icon name="BuildingStorefrontIcon" size={20} />
              <span className="text-sm font-medium">Direktori UMKM</span>
            </div>

            <h1 className="font-headline font-semibold text-3xl md:text-4xl lg:text-5xl mb-4">
              UMKM Desa Bangunjaya
            </h1>

            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Dukung ekonomi lokal dengan membeli produk berkualitas dari UMKM desa kami.
              Setiap pembelian Anda membantu meningkatkan kesejahteraan masyarakat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Icon name="CheckCircleIcon" size={18} />
                <span className="text-sm">Produk Asli</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Icon name="ShieldCheckIcon" size={18} />
                <span className="text-sm">Terpercaya</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Icon name="ChatBubbleLeftRightIcon" size={18} />
                <span className="text-sm">Pesan via WhatsApp</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-8 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Di sinilah seluruh logika seperti:
                - search
                - filter kategori
                - statistik kecil
                - grid UMKM
                ditangani oleh UMKMInteractive */}
            <UMKMInteractive />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-primary text-white mt-16">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mb-10">
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
                Mendukung pertumbuhan ekonomi desa melalui promosi UMKM lokal
                dan penguatan usaha masyarakat.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Menu</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="/homepage" className="hover:text-white">Beranda</a></li>
                <li><a href="/gallery" className="hover:text-white">Galeri</a></li>
                <li><a href="/contact-information" className="hover:text-white">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Kontak</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Kantor Desa Bangunjaya <br />
                Senin – Jumat <br />
                08.00 – 16.00
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 text-center text-white/80 text-sm">
            © {currentYear} KKN 122 Bangunjaya – Universitas Siliwangi.
          </div>
        </div>
      </footer>
    </div>
  );
}
