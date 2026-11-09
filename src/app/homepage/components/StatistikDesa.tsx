'use client';

import React, { useEffect, useState } from 'react';
import { getResidents } from '@/utils/storage';
import Icon from '@/components/ui/AppIcon';

export default function StatistikDesa() {
  const [stats, setStats] = useState({
    total: 0,
    pria: 0,
    wanita: 0,
    kk: 0,
  });
  
  useEffect(() => {
    const fetchData = async () => {
      const residents = await getResidents();
      const pria = residents.filter(r => r.gender === 'Pria').length;
      const wanita = residents.filter(r => r.gender === 'Wanita').length;
      setStats({
        total: residents.length,
        pria,
        wanita,
        kk: Math.ceil(residents.length / 3) || 0, // Estimasi sederhana
      });
    };
    fetchData();
  }, []);

  const statItems = [
    { label: 'Total Penduduk', value: stats.total, unit: 'Jiwa', icon: 'UserGroupIcon', color: 'text-blue-500' },
    { label: 'Laki-laki', value: stats.pria, unit: 'Jiwa', icon: 'UserIcon', color: 'text-emerald-500' },
    { label: 'Perempuan', value: stats.wanita, unit: 'Jiwa', icon: 'UserIcon', color: 'text-pink-500' },
    { label: 'Kepala Keluarga', value: stats.kk, unit: 'KK', icon: 'HomeIcon', color: 'text-amber-500' },
  ];

  return (
    <section className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/20 text-blue-400 rounded-2xl mb-6 border border-blue-500/20">
              <Icon name="ChartBarIcon" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
              Demografi & Statistik
            </h2>
            <p className="text-slate-300 font-body text-lg mb-8">
              Data kependudukan Desa Bangunjaya yang diperbarui secara berkala untuk transparansi informasi publik.
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg font-cta inline-flex items-center gap-2">
              <span>Lihat Detail</span>
              <Icon name="ArrowRightIcon" size={18} />
            </button>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {statItems.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all">
                <div className={`mx-auto w-12 h-12 flex items-center justify-center bg-white/10 rounded-2xl shadow-inner border border-white/5 mb-4 ${item.color}`}>
                  <Icon name={item.icon} size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold font-headline text-white mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider font-body mb-2">
                  {item.unit}
                </div>
                <div className="text-slate-300 font-medium font-body text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
