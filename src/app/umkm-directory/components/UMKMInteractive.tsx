'use client';

import { useState } from 'react';
import UMKMFilters from './UMKMFilters';
import UMKMCard from './UMKMCard';
import Icon from '@/components/ui/AppIcon';

interface UMKM {
  id: number;
  businessName: string;
  ownerName: string;
  category: string;
  description: string;
  products: string[];
  priceRange: string;
  image: string;
  alt: string;
  whatsappNumber: string;
  operatingHours: string;
  location: string;
}

const mockUMKMData: UMKM[] = [
  {
    id: 1,
    businessName: 'Salegor',
    ownerName: 'Siti Rukoyah',
    category: 'Makanan & Minuman',
    description: 'Homemade traditional sale pisang',
    products: ['Sale Pisang Original'],
    priceRange: 'Rp 4.000',
    image: 'http://localhost:4028/assets/images/sale.jpeg',
    alt: 'Sale pisang',
    whatsappNumber: '6285724412461',
    operatingHours: '08:00 - 18:00',
    location: 'Cibitung, RT 03 RW 08,Ds.Bangunjaya,Kec.Langkaplancar,Kab Pangandaran',
  },
  {
    id: 2,
    businessName: 'Kebaya',
    ownerName: 'Yayat Kusyati',
    category: 'Makanan & Minuman',
    description: 'Keripik singkong renyah khas desa',
    products: ['Keripik Singkong'],
    priceRange: 'Rp 5.000 - Rp 40.000',
    image: 'http://localhost:4028/assets/keripik.jpeg',
    alt: 'Keripik singkong',
    whatsappNumber: '6285797957815',
    operatingHours: '08:00 - 18:00',
    location: 'Dusun Cibitung, RT 08 RW 08, desa bangunjaya,kec langkap lancar,kab pangandaran',
  },
  {
    id: 3,
    businessName: 'Kue Tradisional Donat',
    ownerName: 'Neng kusmayati',
    category: 'Makanan & Minuman',
    description: 'Donat lembut dan enak',
    products: ['Kue basah, kue kering'],
    priceRange: 'Rp 5.000 - Rp 40.000',
    image: 'http://localhost:4028/assets/donat.jpeg',
    alt: 'Donat',
    whatsappNumber: '6285607334921',
    operatingHours: '08:00 - 17:00',
    location: 'Cibitung,RT 06 RW 03,Desa bangunjaya,Kec.Cikatomas Kab.Tasikmalaya',
  },
  {
    id: 4,
    businessName: 'Zezi Farms',
    ownerName: 'Indrayani Tirtasari',
    category: 'Makanan & Minuman',
    description: 'Produk telur asin dan bebek segar dari peternakan lokal',
    products: ['Bebek', 'Telur Bebek', 'Telur Asin'],
    priceRange: 'Rp 3.500 - Rp 4.000 per butir',
    image: 'http://localhost:4028/assets/images/telurasin.jpeg',
    alt: 'Telur asin dan bebek segar',
    whatsappNumber: '6285559696113',
    operatingHours: '06:00 - 12:00',
    location: 'jl Raya bangunjaya,Dusun limus nunggal,Desa bangunjaya,kecamatan langkaplancar,Kab.Pangandaran',
  },
  {
    id: 5,
    businessName: 'GUSELA',
    ownerName: 'Abdul Rojak',
    category: 'Makanan & Minuman',
    description: 'Gula Semut Alami dari Tebu Pilihan',
    products: ['Gula semut'],
    priceRange: 'Rp 5.000 - Rp 30.000',
    image: 'http://localhost:4028/assets/gulasemut.jpeg',
    alt: 'Gula semut',
    whatsappNumber: '6281323993796',
    operatingHours: '06:00 - 12:00',
    location: 'Dusun limusnunggal, Desa bangunjaya, Kec.langkaplancar,Kab.Pangandaran',
  },
  {
    id: 6,
    businessName: 'Dapur Ina',
    ownerName: 'Ina ersela',
    category: 'Makanan & Minuman',
    description: 'Kue dan bolu homemade untuk segala acara',
    products: ['Aneka bolu, Kue tart, Caterinng, Snack box, Dessert, Wedding Cake'],
    priceRange: 'Rp 10.000 - Rp 1.000.000',
    image: 'http://localhost:4028/assets/images/dessert.jpeg',
    alt: 'Kue dan bolu homemade',
    whatsappNumber: '6285722584806',
    operatingHours: '06:00 - 12:00',
    location: 'Dusun cibitung, RT 01 RW 03 Desa bangunjaya,Kec langkaplancar,Kab pangandaran',
  },
  {
    id: 7,
    businessName: 'Peedfood',
    ownerName: 'Soleh Hidayat',
    category: 'Makanan & Minuman',
    description: 'Sale pisang dan molen homemade',
    products: ['Sale, Molen'],
    priceRange: 'Rp 6.000/pcs',
    image: 'http://localhost:4028/assets/images/peedfood.jpeg',
    alt: 'Sale pisang dan molen homemade',
    whatsappNumber: '6281573281127',
    operatingHours: '06:00 - 12:00',
    location: 'Dusun Limusnunggal RT 004 RW 001 Desa Bangunjaya kecamatan Langkaplancar',
  },
];

export default function UMKMInteractive() {
  const [activeCategory, setActiveCategory] = useState('Semua Kategori');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Semua Kategori',
    ...Array.from(new Set(mockUMKMData.map((u) => u.category))),
  ];

  const filteredUMKM = mockUMKMData.filter((umkm) => {
    const matchCategory =
      activeCategory === 'Semua Kategori' || umkm.category === activeCategory;

    const q = searchQuery.toLowerCase();
    const matchSearch =
      umkm.businessName.toLowerCase().includes(q) ||
      umkm.description.toLowerCase().includes(q) ||
      umkm.products.some((p) => p.toLowerCase().includes(q));

    return matchCategory && matchSearch;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* SIDEBAR */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-card rounded-lg shadow-subtle p-4">
          <div className="relative">
            <Icon
              name="MagnifyingGlassIcon"
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Cari UMKM atau produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <UMKMFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* CONTENT */}
      <div className="lg:col-span-3">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          {activeCategory === 'Semua Kategori'
            ? 'Semua UMKM'
            : activeCategory}
          <span className="text-sm text-muted-foreground ml-2">
            ({filteredUMKM.length} UMKM)
          </span>
        </h2>

        {filteredUMKM.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredUMKM.map((u) => (
              <UMKMCard key={u.id} umkm={u} />
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-lg shadow-subtle p-10 text-center">
            <Icon
              name="MagnifyingGlassIcon"
              size={40}
              className="mx-auto text-muted-foreground mb-3"
            />
            <p className="text-muted-foreground">
              UMKM tidak ditemukan. Coba kategori atau kata kunci lain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
