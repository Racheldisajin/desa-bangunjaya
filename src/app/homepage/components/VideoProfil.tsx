'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function VideoProfil() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full mb-4 border border-emerald-100">
            <Icon name="PlayCircleIcon" size={20} className="text-emerald-600" />
            <span className="text-sm font-bold font-body text-emerald-700 uppercase tracking-wider">Multimedia</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4">Mengenal Lebih Dekat</h2>
          <p className="text-slate-600 font-body max-w-2xl mx-auto text-lg">
            Saksikan keindahan alam, budaya, dan kearifan lokal masyarakat Desa Bangunjaya melalui tayangan profil berikut.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative group rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-900/10 border border-slate-100">
          {!isPlaying ? (
            <div className="relative w-full aspect-video bg-slate-800 cursor-pointer" onClick={() => setIsPlaying(true)}>
              <img 
                src="https://images.unsplash.com/photo-1596422846543-74c6fc0e285d?q=80&w=1600" 
                alt="Thumbnail Profil Desa" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-emerald-600/90 text-white rounded-full flex items-center justify-center shadow-[0_0_0_15px_rgba(5,150,105,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_0_25px_rgba(5,150,105,0.2)] transition-all duration-300">
                  <Icon name="PlayIcon" size={36} className="ml-2" />
                </div>
              </div>

              <div className="absolute bottom-6 left-8 right-8 text-white">
                <h3 className="text-2xl md:text-3xl font-headline font-bold mb-2">Video Profil Desa Bangunjaya</h3>
                <p className="text-slate-300 font-body text-sm md:text-base">Mewujudkan desa mandiri, inovatif, dan sejahtera berbasis pertanian lokal.</p>
              </div>
            </div>
          ) : (
            <div className="relative w-full aspect-video bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Video Profil Desa" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          )}
        </div>
        
        {/* Gallery Snippet Below Video */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600',
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600',
            'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600',
            'https://images.unsplash.com/photo-1517409259218-c0b7be3b708e?q=80&w=600',
          ].map((img, idx) => (
             <div key={idx} className="rounded-2xl overflow-hidden aspect-[4/3] relative group">
                <img 
                  src={img} 
                  alt={`Galeri ${idx+1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/30 transition-colors duration-300"></div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
