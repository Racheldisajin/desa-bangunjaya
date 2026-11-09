'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getArticles, getPengumuman, Article, Pengumuman } from '@/utils/storage';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

export default function BeritaTerbaru() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pengumuman, setPengumuman] = useState<Pengumuman[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const arts = await getArticles();
      const pengums = await getPengumuman();
      setArticles(arts.slice(0, 4)); // Ambil 4 terbaru
      setPengumuman(pengums.slice(0, 4)); // Ambil 4 terbaru
    };
    fetchData();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4">
              Kabar & Pengumuman
            </h2>
            <p className="text-slate-300 font-body text-lg">
              Tetap terhubung dengan informasi terbaru seputar kegiatan dan perkembangan Desa Bangunjaya.
            </p>
          </div>
          <Link href="#" className="mt-6 md:mt-0 text-emerald-400 hover:text-emerald-300 font-semibold font-cta inline-flex items-center gap-2">
            <span>Lihat Semua Kabar</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Berita/Artikel (Kiri - 2 Kolom) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.length === 0 ? (
              <div className="col-span-full py-10 text-center text-slate-400 font-body bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                Belum ada kabar desa saat ini.
              </div>
            ) : (
              articles.map((article) => (
                <div key={article.id} className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 group flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <AppImage src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-sm border border-white/10">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs text-slate-400 font-body mb-2">{article.date}</div>
                    <h3 className="text-xl font-bold font-headline text-white mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-300 font-body text-sm line-clamp-3 mb-6">
                      {article.content}
                    </p>
                    <Link href="#" className="mt-auto text-emerald-400 font-semibold text-sm inline-flex items-center gap-1 group-hover:underline font-cta">
                      Baca Selengkapnya
                      <Icon name="ChevronRightIcon" size={16} />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pengumuman (Kanan - 1 Kolom) */}
          <div className="bg-emerald-500/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-emerald-500/20 shadow-lg flex flex-col h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                <Icon name="BellAlertIcon" size={20} className="animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold font-headline text-white">Papan Pengumuman</h3>
            </div>
            
            <div className="space-y-4 flex-grow">
              {pengumuman.length === 0 ? (
                <div className="text-slate-400 font-body text-center py-10 text-sm">
                  Tidak ada pengumuman baru.
                </div>
              ) : (
                pengumuman.map((p) => (
                  <div key={p.id} className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-sm hover:bg-white/10 transition-colors relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                    <div className="text-xs text-emerald-400 font-bold font-body mb-1">{p.date}</div>
                    <h4 className="text-white font-bold font-headline mb-2 text-sm line-clamp-2 group-hover:text-emerald-300 transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-slate-400 text-xs font-body line-clamp-2">
                      {p.content}
                    </p>
                  </div>
                ))
              )}
            </div>

            <button className="w-full mt-6 py-3 bg-white/5 hover:bg-emerald-500/20 text-emerald-400 font-semibold rounded-xl text-sm border border-white/10 hover:border-emerald-500/30 transition-all font-cta">
              Lihat Semua Pengumuman
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
