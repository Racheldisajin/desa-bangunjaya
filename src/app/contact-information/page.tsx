import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactInteractive from './components/ContactInteractive';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact & Information - Village Connect',
  description: 'Connect with Village Connect through multiple channels including emergency contacts, department directory, meeting schedules, and feedback forms. Find office locations, hours, and accessibility resources.',
};

export default function ContactInformationPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Icon name="PhoneIcon" size={40} className="text-white" />
            </div>
            <h1 className="font-headline font-semibold text-4xl md:text-5xl lg:text-6xl mb-4">
              Contact & Information
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              We're here to serve you. Reach out through multiple channels, attend public meetings, or visit our office. Your voice matters in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-4 py-16">
        <ContactInteractive />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white mt-16">
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="24" cy="24" r="22" fill="white" />
                    <path d="M24 8L16 18H20V28H28V18H32L24 8Z" fill="#2D5A27" />
                    <rect x="20" y="28" width="8" height="8" fill="#8B4513" />
                    <path d="M12 36C12 34 14 32 16 32H32C34 32 36 34 36 36V38H12V36Z" fill="#228B22" />
                  </svg>
                </div>
                <span className="font-headline font-semibold text-xl">Village Connect</span>
              </div>
              <p className="font-body text-white/80 mb-4">
                Your comprehensive digital portal for village services, information, and community engagement. Connecting residents with their local government.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-headline font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 font-body">
                <li>
                  <Link href="/homepage" className="text-white/80 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/village-profile" className="text-white/80 hover:text-white transition-colors">
                    Profil Desa
                  </Link>
                </li>
                <li>
                  <Link href="/heritage-center" className="text-white/80 hover:text-white transition-colors">
                    Destinasi Desa
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-white/80 hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-headline font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 font-body text-white/80">
                <li className="flex items-start space-x-2">
                  <Icon name="PhoneIcon" size={18} className="mt-1 flex-shrink-0" />
                  <span>(555) 100-2000</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="EnvelopeIcon" size={18} className="mt-1 flex-shrink-0" />
                  <span>info@villageconnect.gov</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="MapPinIcon" size={18} className="mt-1 flex-shrink-0" />
                  <span>123 Main Street<br />Greenfield Village, State 12345</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-white/80 text-sm text-center md:text-left">
              &copy; {currentYear} Village Connect. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 font-body text-sm">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}