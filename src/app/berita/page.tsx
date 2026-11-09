'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';
import { getArticles, fetchArticles, Article } from '@/utils/storage';

export default function BeritaPage() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    // Load local cache instantly
    setNews(getArticles());
    // Fetch fresh from Supabase
    fetchArticles().then(data => setNews(data));
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
              Kabar Desa
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl font-body font-light">
              Pusat informasi terbaru seputar kegiatan, peristiwa, dan pembangunan di Desa Bangunjaya.
            </p>
          </div>
        </section>

        {/* News List */}
        <section className="py-16 md:py-24 bg-transparent relative -mt-8 z-20">
          <div className="container mx-auto px-4 max-w-5xl space-y-8">
            {news.map((item) => {
              const open = openId === item.id;

              return (
                <article
                  key={item.id}
                  className="bg-white/5 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 overflow-hidden border border-white/10"
                >
                  <div className="grid md:grid-cols-3 gap-0 md:gap-6">
                    <div className="h-56 md:h-full w-full overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-emerald-400 shadow-lg border border-white/10 md:hidden">
                        {item.category}
                      </div>
                    </div>

                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="hidden md:inline-block bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold font-body">
                          {item.category}
                        </span>
                        <p className="text-sm text-slate-400 font-body font-medium">{item.date}</p>
                      </div>
                      
                      <h2 className="text-2xl font-headline font-bold mb-4 text-white leading-tight">
                        {item.title}
                      </h2>
                      
                      <p className="text-slate-300 mb-6 font-body leading-relaxed">
                        {!open && item.content.length > 150
                          ? item.content.substring(0, 150) + '...'
                          : item.content}
                      </p>

                      {!open && (
                        <div>
                          <button
                            onClick={() => setOpenId(item.id)}
                            className="text-emerald-400 font-bold text-sm hover:text-emerald-300 transition-colors inline-flex items-center gap-1 group font-cta"
                          >
                            Baca Selengkapnya
                            <span className="transform transition-transform group-hover:translate-x-1">→</span>
                          </button>
                        </div>
                      )}

                      {open && (
                        <div className="mt-2 space-y-4 text-slate-300 font-body leading-relaxed whitespace-pre-line border-t border-white/10 pt-6">
                          {/* Tombol Tutup di Bawah */}
                          <div className="pt-2">
                            <button
                              onClick={() => setOpenId(null)}
                              className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
                            >
                              Sembunyikan
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
