'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    title: 'Layanan Surat',
    description: 'Ajukan permohonan surat keterangan secara online.',
    icon: 'EnvelopeOpenIcon',
    color: 'from-blue-500 to-indigo-600',
    link: '/layanan-surat', 
  },
  {
    title: 'Direktori UMKM',
    description: 'Jelajahi produk lokal unggulan warga desa.',
    icon: 'BuildingStorefrontIcon',
    color: 'from-emerald-500 to-teal-600',
    link: '/umkm-directory',
  },
  {
    title: 'Data Kependudukan',
    description: 'Informasi demografi dan statistik penduduk.',
    icon: 'UsersIcon',
    color: 'from-orange-500 to-red-600',
    link: '#',
  },
  {
    title: 'Pengaduan Warga',
    description: 'Sampaikan aspirasi atau keluhan secara langsung.',
    icon: 'MegaphoneIcon',
    color: 'from-purple-500 to-pink-600',
    link: '/contact-information',
  },
];

export default function LayananCepat() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4">Layanan Cepat</h2>
          <p className="text-slate-300 font-body max-w-2xl mx-auto text-lg">
            Akses berbagai layanan dan informasi penting Desa Bangunjaya dengan mudah dan cepat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="group">
              <div className="h-full bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden flex flex-col">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full transition-opacity duration-300 group-hover:opacity-20`}></div>
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon name={service.icon} size={28} />
                </div>
                
                <h3 className="text-xl font-bold font-headline text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 font-body text-sm mb-6 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-slate-500 group-hover:text-emerald-400 transition-colors mt-auto pt-4 border-t border-white/10">
                  <span>Akses Layanan</span>
                  <Icon name="ArrowRightIcon" size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
