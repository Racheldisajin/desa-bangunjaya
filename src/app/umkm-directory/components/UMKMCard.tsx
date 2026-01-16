'use client';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface UMKMCardProps {
  umkm: {
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
    featured: boolean;
  };
}

export default function UMKMCard({ umkm }: UMKMCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Halo ${umkm.ownerName}, saya tertarik dengan produk dari ${umkm.businessName}. Bisa minta informasi lebih lanjut?`
    );
    window.open(`https://wa.me/${umkm.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-card rounded-lg shadow-soft overflow-hidden transition-all hover:shadow-lg group border border-border flex flex-col">
      {/* IMAGE */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-muted">
        <AppImage
          src={umkm.image}
          alt={umkm.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {umkm.featured && (
          <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow">
            <Icon name="StarIcon" size={14} />
            <span>Unggulan</span>
          </div>
        )}

        <div className="absolute top-3 right-3 bg-[#4f6f52] text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
          {umkm.category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 md:p-5 lg:p-6 flex flex-col flex-1">
        <div className="mb-2">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground line-clamp-1">
            {umkm.businessName}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {umkm.ownerName}
          </p>
        </div>

        <div className="flex items-center gap-2 mb-3 text-muted-foreground">
          <Icon name="MapPinIcon" size={14} />
          <span className="text-xs line-clamp-1">{umkm.location}</span>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {umkm.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Harga</p>
            <p className="text-lg md:text-xl font-bold text-primary">
              {umkm.priceRange}
            </p>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="ClockIcon" size={16} />
            <span className="text-xs">{umkm.operatingHours}</span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleWhatsAppClick}
          className="mt-auto w-full min-h-[48px] bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-4 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg leading-normal"
        >
          <Icon name="ChatBubbleLeftRightIcon" size={18} />
          <span className="whitespace-nowrap">Pesan via WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
