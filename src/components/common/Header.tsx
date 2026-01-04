'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'Village Profile', href: '/village-profile', icon: 'BuildingLibraryIcon' },
    { label: 'Heritage Center', href: '/heritage-center', icon: 'BookOpenIcon' },
    { label: 'Gallery', href: '/gallery', icon: 'PhotoIcon' },
    { label: 'Contact', href: '/contact-information', icon: 'PhoneIcon' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full bg-card shadow-md fixed top-0 left-0 right-0 z-50 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* LOGO SECTION */}
          <Link
            href="/homepage"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-300"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
              <img
                src="/public/assets/images/logo.jpg"
                alt="logo.jpg"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-headline font-semibold text-lg lg:text-xl text-primary">
                DESA BANGUNJAYA
              </span>
              <span className="font-body text-xs text-muted-foreground hidden sm:block">
                Kabupaten Pangandaran
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-md text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body font-medium"
              >
                <Icon name={item.icon as any} size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* DESKTOP EMERGENCY BUTTON */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact-information"
              className="flex items-center space-x-2 px-4 py-2 bg-cta text-white rounded-md hover:bg-error transition-colors duration-300 font-cta font-semibold shadow-subtle"
            >
              <Icon name="PhoneIcon" size={20} />
              <span>Darurat</span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={24}
              className="text-foreground"
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <nav className="py-4 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body font-medium"
                >
                  <Icon name={item.icon as any} size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}

              <Link
                href="/contact-information"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 mx-4 mt-2 bg-cta text-white rounded-md hover:bg-error transition-colors duration-300 font-cta font-semibold justify-center"
              >
                <Icon name="PhoneIcon" size={20} />
                <span>Kontak Darurat</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
