'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/common/Header';

type Dimension = {
  name: string;
  value: number;
  description: string;
};

export default function IDMPage() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  const dimensions: Dimension[] = [
    {
      name: 'Dimensi Sosial',
      value: 72,
      description:
        'Menggambarkan kondisi pendidikan, kesehatan, dan kehidupan sosial masyarakat.',
    },
    {
      name: 'Dimensi Ekonomi',
      value: 65,
      description:
        'Mencerminkan tingkat kemandirian ekonomi, UMKM, dan aktivitas produktif warga.',
    },
    {
      name: 'Dimensi Lingkungan',
      value: 78,
      description:
        'Menunjukkan kualitas lingkungan, sanitasi, dan keberlanjutan desa.',
    },
  ];

  const average =
    dimensions.reduce((acc, d) => acc + d.value, 0) / dimensions.length;

  const status =
    average >= 80
      ? 'Desa Mandiri'
      : average >= 70
      ? 'Desa Maju'
      : average >= 60
      ? 'Desa Berkembang'
      : 'Desa Tertinggal';

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Indeks Desa Membangun (IDM)
            </h1>
            <p className="max-w-2xl mx-auto text-white/90">
              IDM digunakan untuk mengukur tingkat kemandirian desa berdasarkan
              dimensi sosial, ekonomi, dan lingkungan.
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12 text-center">
              <p className="text-gray-600 mb-2">Status Desa Saat Ini</p>
              <h2 className="text-3xl font-bold mb-4">{status}</h2>
              <p className="text-gray-700">
                Nilai rata-rata IDM Desa Bangunjaya:
                <span className="font-semibold"> {average.toFixed(1)}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Dimensions */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-3 gap-6">
            {dimensions.map((d) => (
              <div
                key={d.name}
                className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">{d.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{d.description}</p>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-1000"
                    style={{
                      width: mounted ? `${d.value}%` : '0%',
                    }}
                  />
                </div>

                <div className="mt-2 text-sm text-gray-700">
                  Nilai: <span className="font-semibold">{d.value}</span>
                </div>
              </div>
            ))}
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
