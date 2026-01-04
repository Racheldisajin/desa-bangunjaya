import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeritageCenterInteractive from './components/HeritageCenterInteractive';

export const metadata: Metadata = {
  title: 'Heritage Center - Village Connect',
  description: 'Explore our rich historical timeline, founding stories, cultural traditions, and archival materials. Discover the heritage that shapes our community through interactive timelines, oral histories, and historical photo comparisons.',
};

export default function HeritageCenterPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeritageCenterInteractive />
      </main>
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Village Connect. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/contact-information" className="font-body text-muted-foreground hover:text-foreground transition-colors duration-300">
                Contact Us
              </a>
              <a href="/village-profile" className="font-body text-muted-foreground hover:text-foreground transition-colors duration-300">
                About Village
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}