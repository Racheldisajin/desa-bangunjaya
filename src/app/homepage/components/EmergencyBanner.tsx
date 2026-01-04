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
    service: "Police",
    number: "911",
    icon: "ShieldCheckIcon"
  },
  {
    id: 2,
    service: "Fire Department",
    number: "(555) 123-4567",
    icon: "FireIcon"
  },
  {
    id: 3,
    service: "Medical Emergency",
    number: "(555) 987-6543",
    icon: "HeartIcon"
  },
  {
    id: 4,
    service: "Village Office",
    number: "(555) 246-8135",
    icon: "BuildingOfficeIcon"
  }
];

export default function EmergencyBanner() {
  return (
    <section className="bg-cta text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Icon name="PhoneIcon" size={32} className="text-white" />
            <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-semibold">
              Emergency Contacts
            </h2>
          </div>
          <p className="font-body text-base md:text-lg opacity-90">
            Quick access to essential emergency services - Available 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {emergencyContacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center">
                  <Icon name={contact.icon as any} size={24} className="text-white" />
                </div>
              </div>
              <h3 className="font-cta font-semibold text-base md:text-lg mb-2">
                {contact.service}
              </h3>
              <a
                href={`tel:${contact.number.replace(/[^0-9]/g, '')}`}
                className="font-body text-xl md:text-2xl font-bold hover:underline"
              >
                {contact.number}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact-information"
            className="inline-flex items-center space-x-2 bg-white text-cta px-6 md:px-8 py-3 md:py-4 rounded-lg font-cta font-semibold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            <span>View All Contact Information</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}