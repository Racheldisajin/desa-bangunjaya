'use client';

import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';
import Icon from '@/components/ui/AppIcon';
import UMKMInteractive from './components/UMKMInteractive';

export default function UMKMDirectoryClient() {
  return (
    <div className="min-h-screen bg-background flex flex-col text-white">
      <Header />

      <main className="flex-grow pt-20 lg:pt-24">
        {/* HERO */}
        <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

          <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6 shadow-sm border border-emerald-400/30">
              <Icon name="BuildingStorefrontIcon" size={20} className="text-emerald-50" />
              <span className="text-sm font-bold font-body text-emerald-50 uppercase tracking-wider">Direktori UMKM</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-body font-extrabold mb-6 tracking-tight drop-shadow-md">
              UMKM Desa Bangunjaya
            </h1>

            <p className="font-body text-lg md:text-xl text-emerald-50 font-light max-w-3xl mx-auto mb-10">
              Dukung ekonomi lokal dengan membeli produk berkualitas dari UMKM desa kami.
              Setiap pembelian Anda membantu meningkatkan kesejahteraan masyarakat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-xl hover:bg-white/20 transition-colors">
                <Icon name="CheckCircleIcon" size={20} className="text-emerald-100" />
                <span className="text-sm font-semibold font-body">Produk Asli</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-xl hover:bg-white/20 transition-colors">
                <Icon name="ShieldCheckIcon" size={20} className="text-emerald-100" />
                <span className="text-sm font-semibold font-body">Terpercaya</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-xl hover:bg-white/20 transition-colors">
                <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-emerald-100" />
                <span className="text-sm font-semibold font-body">Pesan via WhatsApp</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 md:py-24 relative -mt-8 z-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 p-6 md:p-10 hover:shadow-2xl transition-shadow duration-300 hover:bg-white/10">
              {/* Di sinilah seluruh logika seperti:
                  - search
                  - filter kategori
                  - statistik kecil
                  - grid UMKM
                  ditangani oleh UMKMInteractive */}
              <UMKMInteractive />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
