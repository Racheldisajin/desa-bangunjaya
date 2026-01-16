'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Slide {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "http://localhost:4028/assets/images/kebun.png",
    alt: "Tampilan udara lanskap Desa Bangunjaya",
    title: "SELAMAT DATANG DI DESA BANGUNJAYA",
    description: "JAYA KARSA MAKARYA PRAJA",
    ctaText: "Profil Desa",
    ctaLink: "/village-profile"
  },
  {
    id: 2,
    image: "http://localhost:4028/assets/images/sunrise.jpeg",
    alt: "Kegiatan kebersamaan masyarakat desa",
    title: "Kehidupan Masyarakat yang Harmonis",
    description: "Bersama melestarikan warisan budaya dan tradisi desa",
    ctaText: "Lihat UMKM",
    ctaLink: "/umkm-directory"
  },
  {
    id: 3,
    image: "http://localhost:4028/assets/images/curug.jpeg",
    alt: "Keindahan alam Desa Bangunjaya",
    title: "Keindahan Alam dan Ketenteraman",
    description: "Nikmati pesona alam yang mengelilingi Desa Bangunjaya",
    ctaText: "Hubungi Kami",
    ctaLink: "/contact-information"
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!isHydrated) {
    return (
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-muted">
        <AppImage
          src={slides[0].image}
          alt={slides[0].alt}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <AppImage
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            priority={index === 0}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center text-white">
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
                  {slide.title}
                </h1>

                <p className="font-body text-lg md:text-xl mb-6 opacity-90">
                  {slide.description}
                </p>

                <button
                  onClick={() => router.push(slide.ctaLink)}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition shadow-lg"
                >
                  <span>{slide.ctaText}</span>
                  <Icon name="ArrowRightIcon" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur"
      >
        <Icon name="ChevronLeftIcon" size={24} className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur"
      >
        <Icon name="ChevronRightIcon" size={24} className="text-white" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-3 rounded-full transition-all ${
              i === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
