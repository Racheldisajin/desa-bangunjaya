'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { fetchDownloads, DownloadItem } from '@/utils/storage';

type Item = {
  title: string;
  content: string;
};

export default function PPIDPage() {
  const sections: Item[] = [
    {
      title: 'Profil PPID',
      content:
        'PPID Desa Bangunjaya bertugas mengelola dan memberikan layanan informasi publik secara transparan, cepat, dan akuntabel kepada masyarakat.',
    },
    {
      title: 'Hak Pemohon Informasi',
      content:
        'Setiap warga berhak memperoleh informasi publik, melihat dan mengetahui informasi, serta mendapatkan salinan dokumen sesuai ketentuan.',
    },
    {
      title: 'Jenis Informasi Publik',
      content:
        'Informasi berkala, informasi serta-merta, informasi setiap saat, dan informasi yang dikecualikan sesuai peraturan perundang-undangan.',
    },
    {
      title: 'Prosedur Permohonan',
      content:
        'Pemohon mengajukan permintaan secara tertulis atau lisan kepada PPID Desa. Petugas akan memproses dan memberikan jawaban dalam batas waktu yang ditentukan.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);
  const [isLoadingDownloads, setIsLoadingDownloads] = useState(true);

  useEffect(() => {
    const loadDownloads = async () => {
      try {
        const data = await fetchDownloads();
        setDownloads(data);
      } catch (error) {
        console.error('Failed to fetch downloads:', error);
      } finally {
        setIsLoadingDownloads(false);
      }
    };

    loadDownloads();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col text-white">
      <Header />

      <main className="flex-grow pt-20 lg:pt-24">
        {/* Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-body font-extrabold mb-6 tracking-tight drop-shadow-md">
              Transparansi & PPID Desa
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl font-body font-light">
              Layanan informasi publik Desa Bangunjaya yang transparan,
              cepat, dan akuntabel. Wujud nyata pemerintahan yang terbuka.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-transparent relative -mt-8 z-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 p-8 lg:p-12 text-center hover:shadow-2xl hover:bg-white/10 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 font-headline text-white">Tentang PPID</h2>
              <p className="text-slate-300 max-w-3xl mx-auto font-body text-lg leading-relaxed">
                PPID (Pejabat Pengelola Informasi dan Dokumentasi) bertanggung jawab
                dalam penyediaan, pendokumentasian, dan pelayanan informasi publik
                di lingkungan Pemerintah Desa Bangunjaya.
              </p>
            </div>
          </div>
        </section>

        {/* Accordion */}
        <section className="pb-16 bg-transparent">
          <div className="container mx-auto px-4 max-w-4xl space-y-4">
            {sections.map((item, i) => {
              const open = openIndex === i;

              return (
                  <div
                    key={item.title}
                    className={`bg-white/5 backdrop-blur-sm rounded-2xl shadow-sm overflow-hidden border ${open ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/10' : 'border-white/10 hover:border-white/20'} transition-all duration-300`}
                  >
                    <button
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                      <span className="font-semibold text-white font-headline text-lg">{item.title}</span>
                      <span className={`text-2xl transition-transform duration-300 ${open ? 'rotate-45 text-emerald-400' : 'text-slate-400'}`}>+</span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 py-6 text-slate-300 leading-relaxed font-body bg-slate-900/50 border-t border-white/5">
                        {item.content}
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>
        </section>

        {/* Dokumen & Laporan (Transparansi) */}
        <section className="py-16 bg-transparent relative overflow-hidden border-y border-white/10">
           <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
           <div className="container mx-auto px-4 max-w-6xl relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-2xl mb-4 text-emerald-400 shadow-sm border border-emerald-500/30">
                   <Icon name="DocumentTextIcon" size={32} />
                </div>
                <h2 className="text-3xl font-bold font-headline text-white mb-4">Laporan & Dokumen Desa</h2>
                <p className="text-slate-300 max-w-2xl mx-auto font-body">Unduh dokumen resmi, laporan kegiatan, dan produk hukum desa sebagai bentuk transparansi publik pemerintahan Desa Bangunjaya.</p>
              </div>

              {isLoadingDownloads ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {downloads.length > 0 ? (
                    downloads.map((item) => (
                      <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-emerald-500/50 hover:bg-white/10 transition-all group">
                        <div className="flex items-start gap-4 mb-6">
                           <div className="w-12 h-12 bg-slate-800 rounded-xl shadow-sm flex items-center justify-center text-emerald-400 shrink-0 border border-white/10">
                             <Icon name="DocumentChartBarIcon" size={24} />
                           </div>
                           <h3 className="font-bold text-white font-headline leading-tight line-clamp-3 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                        </div>
                        
                        <a 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); alert('Ini adalah versi demo. File asli akan diunduh pada versi produksi.'); }}
                          className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 border border-white/10 text-slate-300 rounded-xl font-bold font-body text-sm hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                        >
                          <Icon name="ArrowDownTrayIcon" size={16} />
                          Unduh Dokumen
                        </a>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-1 md:col-span-2 text-center py-12 text-slate-400">
                      Belum ada dokumen yang dipublikasikan.
                    </div>
                  )}
                </div>
              )}
           </div>
        </section>

        {/* Contact */}
        <section className="py-24 relative overflow-hidden bg-slate-900 mt-12">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline tracking-tight text-white">Butuh Bantuan Lebih Lanjut?</h2>
              <p className="text-slate-300 font-body text-lg max-w-2xl mx-auto">
                Tim Pejabat Pengelola Informasi dan Dokumentasi (PPID) Desa Bangunjaya siap melayani kebutuhan informasi publik Anda.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-left">
                <h3 className="text-xl font-bold text-white font-headline mb-6">Pusat Layanan PPID</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20">
                      <Icon name="BuildingOfficeIcon" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-semibold font-body">Kantor Desa Bangunjaya</p>
                      <p className="text-slate-400 text-sm font-body mt-1">Senin – Jumat, 08.00 – 16.00 WIB</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20">
                      <Icon name="EnvelopeIcon" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-semibold font-body">Email Resmi</p>
                      <p className="text-slate-400 text-sm font-body mt-1">ppid@bangunjaya.desa.id</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex flex-col gap-4">
                <a 
                  href="https://wa.me/6285724412461" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold font-cta transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:-translate-y-1"
                >
                  <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={20} />
                  Chat via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
