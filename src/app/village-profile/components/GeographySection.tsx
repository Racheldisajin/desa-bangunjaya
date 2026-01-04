
import Icon from '@/components/ui/AppIcon';

interface GeographySectionProps {
  className?: string;
}

const GeographySection = ({ className = '' }: GeographySectionProps) => {
  const geographicFeatures = [
    {
      icon: 'MapPinIcon',
      title: 'Location',
      description: 'Situated in the heart of the valley, 45 km from the district headquarters'
    },
    {
      icon: 'GlobeAltIcon',
      title: 'Coordinates',
      description: 'Latitude: -7.504805669842216, Longitude: 108.4029034790073'
    },
    {
      icon: 'CloudIcon',
      title: 'Climate',
      description: 'Moderate climate with average temperature ranging from 15°C to 32°C'
    },
    {
      icon: 'BeakerIcon',
      title: 'Soil Type',
      description: 'Predominantly alluvial soil, ideal for agricultural activities'
    }
  ];

  return (
    <div className={`bg-card rounded-lg shadow-subtle border border-border overflow-hidden ${className}`}>
      <div className="p-6 border-b border-border">
        <h3 className="text-2xl font-headline font-semibold text-foreground">Geographic Information</h3>
        <p className="text-muted-foreground font-body mt-2">
          Explore the natural landscape and geographic characteristics of our village
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <div className="space-y-4">
          {geographicFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={feature.icon as any} size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-body font-semibold text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground font-body">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-80 lg:h-full rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Village Location Map"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=-7.504805669842216,108.4029034790073&z=14&output=embed"
            className="border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default GeographySection;