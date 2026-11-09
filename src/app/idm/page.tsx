'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

type Dimension = {
  name: string;
  value: number;
  description: string;
};

export default function IDMPage() {
  const [mounted, setMounted] = useState(false);

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
    <div className="min-h-screen bg-background flex flex-col text-white">
      <Header />

      <main className="flex-grow pt-20 lg:pt-24">
        {/* Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-body font-extrabold mb-6 tracking-tight drop-shadow-md">
              Indeks Desa Membangun (IDM)
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl font-body font-light">
              IDM digunakan untuk mengukur tingkat kemandirian desa berdasarkan
              dimensi sosial, ekonomi, dan lingkungan.
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-transparent relative -mt-8 z-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 p-8 lg:p-12 text-center hover:shadow-2xl transition-shadow duration-300 hover:bg-white/10">
              <p className="text-slate-400 mb-3 font-body font-medium uppercase tracking-wider text-sm">Status Desa Saat Ini</p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline text-emerald-400 drop-shadow-sm">{status}</h2>
              <p className="text-slate-300 font-body text-lg">
                Nilai rata-rata IDM Desa Bangunjaya:
                <span className="font-bold text-white ml-2 bg-emerald-500/20 px-3 py-1 rounded-lg border border-emerald-500/30"> {average.toFixed(1)}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Dimensions */}
        <section className="py-12 bg-transparent pb-24">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-3 gap-8">
            {dimensions.map((d) => (
              <div
                key={d.name}
                className="bg-white/5 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 p-8 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-3 font-headline text-white group-hover:text-emerald-400 transition-colors">{d.name}</h3>
                <p className="text-sm text-slate-300 mb-6 font-body leading-relaxed">{d.description}</p>

                <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden shadow-inner mb-4">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full relative"
                    style={{
                      width: mounted ? `${d.value}%` : '0%',
                      transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50"></div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm font-body">
                  <span className="text-slate-400 font-medium">Nilai</span>
                  <span className="font-bold text-white text-lg">{d.value}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
