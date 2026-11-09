import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function PetaDesa() {
  const mapHighlights = [
    { label: 'Balai Desa', icon: 'BuildingOfficeIcon', color: 'bg-emerald-600', position: 'top-[30%] left-[40%]' },
    { label: 'Puskesmas', icon: 'PlusCircleIcon', color: 'bg-red-500', position: 'top-[45%] left-[60%]' },
    { label: 'Sekolah Dasar', icon: 'AcademicCapIcon', color: 'bg-blue-500', position: 'top-[60%] left-[30%]' },
    { label: 'Pusat UMKM', icon: 'BuildingStorefrontIcon', color: 'bg-amber-500', position: 'top-[20%] left-[70%]' },
    { label: 'Masjid Jami', icon: 'HomeModernIcon', color: 'bg-teal-600', position: 'top-[70%] left-[55%]' },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full mb-2 border border-indigo-100">
              <Icon name="MapIcon" size={20} className="text-indigo-600" />
              <span className="text-sm font-bold font-body text-indigo-700 uppercase tracking-wider">Pemetaan</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight">
              Peta Potensi & <br/> Geografis Desa
            </h2>
            <p className="text-slate-600 font-body text-lg leading-relaxed">
              Jelajahi titik-titik penting, fasilitas umum, dan pusat kegiatan ekonomi warga Desa Bangunjaya melalui pemetaan interaktif.
            </p>

            <ul className="space-y-4 pt-4">
              {mapHighlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 ${item.color} text-white rounded-xl flex justify-center items-center shadow-md`}>
                    <Icon name={item.icon} size={20} />
                  </div>
                  <span className="font-headline font-bold text-slate-700">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="bg-white/5 p-4 rounded-[2.5rem] shadow-xl border border-white/10 relative group overflow-hidden">
              
              {/* Dummy Map Image / Texture */}
              <div className="w-full h-[500px] bg-slate-200 rounded-[2rem] overflow-hidden relative border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600" 
                  alt="Peta Desa"
                  className="w-full h-full object-cover opacity-80 filter grayscale sepia-[.3] hue-rotate-[90deg] transition-all duration-700 group-hover:scale-105 group-hover:filter-none"
                />
                <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
                
                {/* Map Markers */}
                {mapHighlights.map((marker, idx) => (
                  <div key={idx} className={`absolute ${marker.position} flex flex-col items-center group/marker cursor-pointer z-10 hover:z-20`}>
                    <div className="bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-200 shadow-lg mb-1 opacity-0 transform translate-y-2 group-hover/marker:opacity-100 group-hover/marker:translate-y-0 transition-all duration-300">
                      {marker.label}
                    </div>
                    <div className={`w-12 h-12 ${marker.color} text-white rounded-full flex justify-center items-center shadow-xl border-4 border-white transform transition-transform duration-300 group-hover/marker:scale-110 animate-bounce`}>
                      <Icon name={marker.icon} size={20} />
                    </div>
                  </div>
                ))}

              </div>
              
            </div>
            
            {/* Decorative background blob behind the map */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
