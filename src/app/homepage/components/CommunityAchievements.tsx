'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface UMKM {
  id: number;
  name: string;
  owner: string;
  description: string;
  image: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  whatsapp: string;
}

const umkmList: UMKM[] = [
  {
    id: 1,
    name: 'Salegor',
    owner: 'Siti Rukoyah',
    description: 'Sale pisang manis legit khas desa.',
    image: 'http://localhost:4028/assets/images/sale.jpeg',
    category: 'Makanan & Minuman',
    price: 'Rp 4.000',
    rating: 4.6,
    reviews: 64,
    whatsapp: '6285724412461',
  },
  {
    id: 2,
    name: 'Telur Asin',
    owner: 'Indrayani Tirtasari',
    description: 'Produk telur asin dan bebek segar dari peternakan lokal.',
    image: 'http://localhost:4028/assets/images/telurasin.jpeg',
    category: 'Makanan & Minuman',
    price: 'Rp 3.500 - Rp 4.000 per butir',
    rating: 4.6,
    reviews: 64,
    whatsapp: '6285559696113',
  },
  {
    id: 3,
    name: 'Donat',
    owner: 'Neng kusmayati',
    description: 'Donat lembut dan enak.',
    image: 'http://localhost:4028/assets/donat.jpeg',
    category: 'Makanan & Minuman',
    price: 'Rp 5.000 - Rp 40.000',
    rating: 4.6,
    reviews: 64,
    whatsapp: '6285607334921',
  },
  {
    id: 4,
    name: 'Keripik Kebaya',
    owner: 'Yayat Kusyati',
    description: 'Keripik singkong renyah khas desa.',
    image: 'http://localhost:4028/assets/keripik.jpeg',
    category: 'Makanan & Minuman',
    price: 'Rp 5.000 - Rp 40.000',
    rating: 4.6,
    reviews: 64,
    whatsapp: '6285797957815',
  },
  {
    id: 5,
    name: 'GUSELA',
    owner: 'Abdul Rojak',
    description: 'Gula Semut Alami dari Tebu Pilihan.',
    image: 'http://localhost:4028/assets/gulasemut.jpeg',
    category: 'Makanan & Minuman',
    price: 'Rp 5.000 - Rp 30.000',
    rating: 4.6,
    reviews: 64,
    whatsapp: '6281323993796',
  },
];

export default function CommunityUMKM() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const maxIndex = Math.max(0, umkmList.length - visible);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  const handleOrder = (item: UMKM) => {
    const msg = `Halo, saya tertarik dengan produk *${item.name}* dari ${item.owner}. Mohon info lebih lanjut.`;
    window.open(
      `https://wa.me/${item.whatsapp}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section className="py-16 bg-[#faf8f3]">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              UMKM Unggulan
            </h2>
            <p className="text-muted-foreground mt-1">
              Produk berkualitas dari warga Desa Bangunjaya
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-muted"
            >
              <Icon name="ChevronLeftIcon" size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-muted"
            >
              <Icon name="ChevronRightIcon" size={18} />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 33.333}%)` }}
          >
            {umkmList.map((umkm) => (
              <div
                key={umkm.id}
                className="w-full md:w-[calc(33.333%-16px)] flex-shrink-0 bg-white rounded-2xl shadow-soft overflow-hidden border border-border flex flex-col"
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden bg-muted">
                  <AppImage
                    src={umkm.image}
                    alt={umkm.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 z-10 bg-[#4f6f52] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {umkm.category}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-2">
                    <h3 className="font-semibold text-lg leading-tight">
                      {umkm.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {umkm.owner}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {umkm.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm mb-4">
                    <span className="font-semibold">⭐ {umkm.rating}</span>
                    <span className="text-muted-foreground">
                      ({umkm.reviews} ulasan)
                    </span>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">Harga</p>
                      <p className="text-lg font-semibold text-[#4f6f52]">
                        {umkm.price}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOrder(umkm)}
                      className="bg-[#5aa469] hover:bg-[#4f6f52] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2"
                    >
                      <Icon name="ChatBubbleLeftRightIcon" size={16} />
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
