import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface EmergencyContact {
  id: number;
  service: string;
  number: string;
  icon: string;
}

const emergencyContacts: EmergencyContact[] = [
  {
    id: 1,
    service: "Kepolisian",
    number: "110",
    icon: "ShieldCheckIcon",
  },
  {
    id: 2,
    service: "Pemadam Kebakaran",
    number: "113",
    icon: "FireIcon",
  },
  {
    id: 3,
    service: "Layanan Medis Darurat",
    number: "119",
    icon: "HeartIcon",
  },
  {
    id: 4,
    service: "Kantor Desa Bangunjaya",
    number: "(0265) 123-456",
    icon: "BuildingOfficeIcon",
  },
];

export default function EmergencyBanner() {
  return (
    <section className="bg-transparent text-emerald-50 py-8 md:py-12 border-t border-white/5 relative z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Icon name="PhoneIcon" size={32} className="text-emerald-400" />
            <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              Kontak Darurat
            </h2>
          </div>
          <p className="font-body text-base md:text-lg text-emerald-100">
            Akses cepat ke layanan darurat penting · Siaga 24 Jam
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {emergencyContacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white/5 rounded-2xl p-4 md:p-6 text-center border border-white/10 hover:shadow-lg hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="flex justify-center mb-3">
                <div className="bg-emerald-500/20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <Icon
                    name={contact.icon as any}
                    size={24}
                    className="text-emerald-400"
                  />
                </div>
              </div>
              <h3 className="font-cta font-semibold text-base md:text-lg mb-2 text-white">
                {contact.service}
              </h3>
              <a
                href={`tel:${contact.number.replace(/[^0-9]/g, '')}`}
                className="font-body text-xl md:text-2xl font-bold text-emerald-300 hover:text-emerald-200 hover:underline transition-colors"
              >
                {contact.number}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact-information"
            className="inline-flex items-center space-x-2 bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 px-6 md:px-8 py-3 md:py-4 rounded-xl font-cta font-semibold text-base md:text-lg hover:bg-emerald-500/30 hover:text-emerald-200 transition-all duration-300 shadow-sm"
          >
            <span>Lihat Seluruh Informasi Kontak</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
