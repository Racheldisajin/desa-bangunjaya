'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto max-w-6xl px-4 py-12">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mb-10">

          {/* LOGO & DESKRIPSI */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12">
                <img
                  src="http://localhost:4028/assets/pnd.png"
                  alt="Logo Desa Bangunjaya"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-headline font-semibold text-xl">
                Desa Bangunjaya
              </span>
            </div>

            <p className="font-body text-sm opacity-90 max-w-xs leading-relaxed">
              Mendukung pertumbuhan ekonomi desa melalui promosi UMKM lokal
              dan penguatan usaha masyarakat.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/homepage">Beranda</Link></li>
              <li><Link href="/gallery">Galeri</Link></li>
              <li><Link href="/umkm-directory">UMKM</Link></li>
              <li><Link href="/contact-information">Kontak</Link></li>
            </ul>
          </div>

          {/* KONTAK */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-2 text-sm opacity-90">
              <p>Kantor Desa Bangunjaya</p>
              <p>Senin – Jumat</p>
              <p>08.00 – 16.00</p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 pt-6 text-center text-sm opacity-90">
          © {year} KKN 122 Desa Bangunjaya – Universitas Siliwangi.  
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}
