import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ApbdDesa() {
  const apbdData = {
    year: new Date().getFullYear(),
    pendapatan: {
      target: 1500000000,
      realization: 1250000000,
    },
    belanja: {
      target: 1450000000,
      realization: 1100000000,
    },
    pembiayaan: {
      target: 50000000,
      realization: 50000000,
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calculatePercentage = (realization: number, target: number) => {
    return Math.min(Math.round((realization / target) * 100), 100);
  };

  const dataSections = [
    {
      title: 'Pendapatan Desa',
      icon: 'ArrowTrendingUpIcon',
      color: 'emerald',
      data: apbdData.pendapatan
    },
    {
      title: 'Belanja Desa',
      icon: 'ShoppingCartIcon',
      color: 'amber',
      data: apbdData.belanja
    },
    {
      title: 'Pembiayaan Desa',
      icon: 'BanknotesIcon',
      color: 'blue',
      data: apbdData.pembiayaan
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 px-4 py-2 rounded-full mb-4 border border-emerald-500/30">
            <Icon name="ChartBarIcon" size={20} className="text-emerald-400" />
            <span className="text-sm font-bold font-body text-emerald-300 uppercase tracking-wider">Transparansi</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4">APBDesa {apbdData.year}</h2>
          <p className="text-slate-300 font-body max-w-2xl mx-auto text-lg">
            Wujud nyata transparansi dan akuntabilitas pengelolaan keuangan Pemerintah Desa Bangunjaya kepada masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {dataSections.map((section, idx) => {
            const percentage = calculatePercentage(section.data.realization, section.data.target);
            
            // Tailwind doesn't support dynamic class names natively in safelist if we do text-${color}-600.
            // But since these are standard colors, we will use hardcoded classes to avoid missing styles, or map them.
            const colorConfig: Record<string, { bg: string, text: string, bar: string, light: string }> = {
              emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', bar: 'bg-emerald-500', light: 'bg-emerald-500/10' },
              amber: { bg: 'bg-amber-500/20', text: 'text-amber-400', bar: 'bg-amber-500', light: 'bg-amber-500/10' },
              blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', bar: 'bg-blue-500', light: 'bg-blue-500/10' }
            };

            const conf = colorConfig[section.color];
            
            return (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:shadow-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${conf.bg} flex items-center justify-center ${conf.text} border border-white/5`}>
                    <Icon name={section.icon} size={28} />
                  </div>
                  <h3 className="text-xl font-bold font-headline text-white">{section.title}</h3>
                </div>

                <div className="space-y-4 relative z-10">
                  <div>
                    <div className="flex justify-between text-sm mb-1 font-body">
                      <span className="text-slate-400">Anggaran</span>
                      <span className="font-semibold text-slate-200">{formatCurrency(section.data.target)}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1 font-body">
                      <span className="text-slate-400">Realisasi</span>
                      <span className={`font-bold ${conf.text}`}>{formatCurrency(section.data.realization)}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Serapan</span>
                      <span className={`text-2xl font-bold font-headline ${conf.text}`}>{percentage}%</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className={`h-full ${conf.bar} rounded-full relative`}
                        style={{ width: `${percentage}%`, transition: 'width 2s ease-in-out' }}
                      >
                         <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-sm text-slate-400 font-body">Data diperbarui secara berkala sesuai dengan realisasi pelaksanaan anggaran di lapangan.</p>
        </div>
      </div>
    </section>
  );
}
