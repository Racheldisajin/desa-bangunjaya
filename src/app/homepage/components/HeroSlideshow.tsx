'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

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
  image:"http://localhost:4028/assets/images/kebun.png",
  alt: "Aerial view of green village landscape with traditional houses nestled among rolling hills and farmland",
  title: "SELAMAT DATANG DI DESA BANGUNJAYA",
  description: "JAYA KARSA MAKARYA PRAJA",
  ctaText: "Explore Desa Bangunjaya",
  ctaLink: "/village-profile"
},
{
  id: 2,
  image: "http://localhost:4028/assets/images/sunrise.jpeg",
  alt: "Community gathering at village festival with colorful decorations and residents celebrating together",
  title: "Vibrant Community Life",
  description: "Join us in celebrating our rich cultural heritage and traditions",
  ctaText: "View Heritage Center",
  ctaLink: "/heritage-center"
},
{
  id: 3,
  image: "http://localhost:4028/assets/images/curug.jpeg",
  alt: "Scenic mountain landscape with village buildings in foreground during golden hour sunset",
  title: "Natural Beauty & Serenity",
  description: "Discover the breathtaking landscapes that surround our community",
  ctaText: "Browse Gallery",
  ctaLink: "/gallery"
}];


export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHydrated]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!isHydrated) {
    return (
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-muted">
        <div className="absolute inset-0">
          <AppImage
            src={slides[0].image}
            alt={slides[0].alt}
            className="w-full h-full object-cover"
            priority />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
      </div>);

  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-muted">
      {slides.map((slide, index) =>
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-1000 ${
        index === currentSlide ? 'opacity-100' : 'opacity-0'}`
        }>

          <AppImage
          src={slide.image}
          alt={slide.alt}
          className="w-full h-full object-cover"
          priority={index === 0} />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center text-white">
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6">
                  {slide.title}
                </h1>
                <p className="font-body text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90">
                  {slide.description}
                </p>
                <Link
                href={slide.ctaLink}
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-lg font-cta font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl">

                  <span>{slide.ctaText}</span>
                  <Icon name="ArrowRightIcon" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 z-10"
        aria-label="Previous slide">

        <Icon name="ChevronLeftIcon" size={24} className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 z-10"
        aria-label="Next slide">

        <Icon name="ChevronRightIcon" size={24} className="text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) =>
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentSlide ?
          'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}`
          }
          aria-label={`Go to slide ${index + 1}`} />

        )}
      </div>
    </div>);

}