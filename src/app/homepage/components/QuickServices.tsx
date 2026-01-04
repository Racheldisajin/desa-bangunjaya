import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Village Profile",
    description: "Learn about our community, demographics, and infrastructure",
    icon: "BuildingLibraryIcon",
    link: "/village-profile",
    color: "bg-primary"
  },
  {
    id: 2,
    title: "Heritage Center",
    description: "Explore our rich history, traditions, and cultural heritage",
    icon: "BookOpenIcon",
    link: "/heritage-center",
    color: "bg-secondary"
  },
  {
    id: 3,
    title: "Photo Gallery",
    description: "View beautiful images of our village and community events",
    icon: "PhotoIcon",
    link: "/gallery",
    color: "bg-accent"
  },
  {
    id: 4,
    title: "Contact Us",
    description: "Get in touch with village officials and emergency services",
    icon: "PhoneIcon",
    link: "/contact-information",
    color: "bg-civic"
  }
];

export default function QuickServices() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Quick Access Services
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate to essential village services and information with just one click
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group bg-card rounded-xl p-6 md:p-8 shadow-subtle hover:shadow-lg transition-all duration-300 border border-border hover:border-primary"
            >
              <div className={`${service.color} w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={service.icon as any} size={28} className="text-white" />
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-semibold text-foreground mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-primary font-cta font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-2">Learn More</span>
                <Icon name="ArrowRightIcon" size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}