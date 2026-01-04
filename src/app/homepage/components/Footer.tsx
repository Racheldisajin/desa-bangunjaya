'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/homepage" },
      { label: "Village Profile", href: "/village-profile" },
      { label: "Heritage Center", href: "/heritage-center" },
      { label: "Gallery", href: "/gallery" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Resident Services", href: "/homepage" },
      { label: "Document Requests", href: "/homepage" },
      { label: "Complaint System", href: "/homepage" },
      { label: "Meeting Minutes", href: "/homepage" }
    ]
  },
  {
    title: "Contact",
    links: [
      { label: "Contact Information", href: "/contact-information" },
      { label: "Emergency Services", href: "/contact-information" },
      { label: "Office Hours", href: "/contact-information" },
      { label: "Feedback", href: "/contact-information" }
    ]
  }
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="24" cy="24" r="22" fill="#FFFFFF" />
                  <path d="M24 8L16 18H20V28H28V18H32L24 8Z" fill="#2D5A27" />
                  <rect x="20" y="28" width="8" height="8" fill="#8B4513" />
                  <path d="M12 36C12 34 14 32 16 32H32C34 32 36 34 36 36V38H12V36Z" fill="#228B22" />
                </svg>
              </div>
              <span className="font-headline font-semibold text-xl">Village Connect</span>
            </div>
            <p className="font-body text-sm opacity-90 mb-4">
              Your trusted community portal connecting residents with essential services, information, and local heritage.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                <Icon name="EnvelopeIcon" size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                <Icon name="PhoneIcon" size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300">
                <Icon name="MapPinIcon" size={18} />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-headline text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="font-body text-sm opacity-90">
                &copy; {currentYear || '2025'} Village Connect. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="/homepage" className="font-body text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300">
                  Privacy Policy
                </Link>
                <Link href="/homepage" className="font-body text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300">
                  Terms of Service
                </Link>
                <Link href="/homepage" className="font-body text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300">
                  Accessibility
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPinIcon" size={16} className="opacity-90" />
              <p className="font-body text-sm opacity-90">
                123 Village Square, Rural County, State 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}