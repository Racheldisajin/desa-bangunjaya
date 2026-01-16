'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';

type News = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
};

export default function BeritaPage() {
  const [openId, setOpenId] = useState<number | null>(null);
  const currentYear = new Date().getFullYear();

  const news: News[] = [
    {
      id: 1,
      title: 'Kerja Bakti Warga Desa Bangunjaya',
      date: '10 Januari 2026',
      excerpt:
        'Warga Desa Bangunjaya melaksanakan kerja bakti membersihkan lingkungan sebagai wujud kepedulian terhadap kebersihan dan kesehatan bersama.',
      content:
        'Warga Desa Bangunjaya melaksanakan kerja bakti membersihkan lingkungan sebagai bentuk kepedulian terhadap kebersihan dan kesehatan bersama.\n\nKegiatan ini melibatkan berbagai elemen masyarakat mulai dari pemuda, ibu-ibu PKK, hingga perangkat desa.\n\nKerja bakti difokuskan pada pembersihan jalan desa, saluran air, dan fasilitas umum. Selain menciptakan lingkungan yang bersih dan sehat, kegiatan ini juga mempererat rasa kebersamaan antarwarga.',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200',
    },
    {
      id: 2,
      title: 'Turnamen Voli Karang Taruna',
      date: '5 Januari 2026',
      excerpt:
        'Dalam rangka mempererat silaturahmi antarwarga, Karang Taruna Desa Bangunjaya mengadakan turnamen bola voli.',
      content:
        'Karang Taruna Desa Bangunjaya mengadakan turnamen bola voli yang diikuti oleh perwakilan tiap dusun.\n\nKegiatan ini bertujuan mempererat silaturahmi sekaligus menumbuhkan semangat sportivitas.\n\nTurnamen berlangsung meriah dan mendapat sambutan hangat dari masyarakat.',
      image:
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Berita Desa</h1>
            <p className="max-w-2xl mx-auto text-white/90">
              Informasi terbaru seputar kegiatan dan peristiwa di Desa Bangunjaya.
            </p>
          </div>
        </section>

        {/* News List */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl space-y-6">
            {news.map((item) => {
              const open = openId === item.id;

              return (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="h-44 md:h-full w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="md:col-span-2 p-6">
                      <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                      <h2 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h2>
                      <p className="text-gray-700 mb-4">
                        {item.excerpt}
                      </p>

                      {!open && (
                        <button
                          onClick={() => setOpenId(item.id)}
                          className="text-primary font-medium text-sm hover:underline"
                        >
                          Baca Selengkapnya
                        </button>
                      )}

                      {open && (
                        <div className="mt-4 space-y-4 text-gray-700 leading-relaxed whitespace-pre-line">
                          <div>{item.content}</div>

                          {/* Tombol Tutup di Bawah */}
                          <div className="pt-4 border-t">
                            <button
                              onClick={() => setOpenId(null)}
                              className="text-sm text-gray-500 hover:text-primary transition"
                            >
                              Tutup berita
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
