'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Beranda', href: '/', icon: 'HomeIcon' },
    { label: 'Profil Desa', href: '/village-profile', icon: 'BuildingLibraryIcon' },
    { label: 'UMKM', href: '/umkm-directory', icon: 'BuildingStorefrontIcon' },
    { label: 'IDM', href: '/idm', icon: 'ChartBarIcon' },
    { label: 'PPID', href: '/ppid', icon: 'DocumentTextIcon' },
    { label: 'Berita', href: '/berita', icon: 'NewspaperIcon' },
    { label: 'Admin', href: '/admin', icon: 'ShieldCheckIcon' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900/80 backdrop-blur-lg border-b border-white/10 ${
        scrolled 
          ? 'shadow-lg py-2' 
          : 'py-4'
      } ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative overflow-hidden rounded-xl bg-slate-800 p-1 shadow-sm border border-white/10 group-hover:shadow-md transition-all">
              <img
                src="/assets/pnd.png"
                alt="Logo Desa Bangunjaya"
                className="w-10 h-10 lg:w-11 lg:h-11 object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-headline font-bold text-lg lg:text-xl tracking-tight text-white transition-colors duration-300">
                Bangunjaya
              </span>
              <span className="text-[10px] lg:text-xs font-body font-medium text-emerald-400 transition-colors duration-300 hidden sm:block">
                Website Resmi Pemerintahan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-800/50 rounded-full px-2 py-1 border border-white/10">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
                    isActive 
                      ? 'bg-emerald-600 text-white shadow-md' 
                      : 'text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/20'
                  }`}
                >
                  <Icon name={item.icon as any} size={16} className={isActive ? 'text-white' : ''} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Emergency Contact Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact-information"
              className="flex items-center space-x-2 px-5 py-2.5 bg-red-500/90 hover:bg-red-500 text-white rounded-full transition-all duration-300 font-cta font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-red-400 backdrop-blur-sm group"
            >
              <Icon name="PhoneIcon" size={18} className="animate-pulse" />
              <span>Darurat</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 backdrop-blur-md ${
              scrolled 
                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
                : 'bg-white/20 text-white hover:bg-white/30 border border-white/20'
            }`}
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={24}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out absolute left-4 right-4 top-[110%] rounded-2xl shadow-xl border border-white/10 bg-slate-900/95 backdrop-blur-xl ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100 pointer-events-auto py-4' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <nav className="flex flex-col space-y-1 px-4">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-body font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-emerald-400'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} className={isActive ? 'text-emerald-400' : 'text-slate-500'} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-white/10">
              <Link
                href="/contact-information"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-red-500 text-white rounded-xl font-cta font-bold shadow-md active:scale-95 transition-transform"
              >
                <Icon name="PhoneIcon" size={20} />
                <span>Panggilan Darurat</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
