'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';

type Item = {
  title: string;
  content: string;
};

export default function PPIDPage() {
  const currentYear = new Date().getFullYear();

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">PPID Desa</h1>
            <p className="max-w-2xl mx-auto text-white/90">
              Layanan informasi publik Desa Bangunjaya yang transparan,
              cepat, dan akuntabel.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12 text-center">
              <h2 className="text-2xl font-bold mb-3">Tentang PPID</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                PPID (Pejabat Pengelola Informasi dan Dokumentasi) bertanggung jawab
                dalam penyediaan, pendokumentasian, dan pelayanan informasi publik
                di lingkungan Pemerintah Desa Bangunjaya.
              </p>
            </div>
          </div>
        </section>

        {/* Accordion */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-4">
            {sections.map((item, i) => {
              const open = openIndex === i;

              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/20 transition"
                  >
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-xl">{open ? '−' : '+'}</span>
                  </button>

                  {open && (
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Kontak PPID</h2>
              <p className="text-gray-700">
                Kantor Desa Bangunjaya<br />
                Senin – Jumat, 08.00 – 16.00<br />
                Email: ppid@bangunjaya.desa.id
              </p>
            </div>
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
