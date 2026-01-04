'use client';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CharacteristicCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const CharacteristicCard = ({ icon, title, description, image, alt }: CharacteristicCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-subtle border border-border hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />

      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name={icon as any} size={20} className="text-primary" />
          </div>
          <h4 className="text-lg font-headline font-semibold text-foreground">{title}</h4>
        </div>
        <p className="text-sm text-muted-foreground font-body">{description}</p>
      </div>
    </div>);

};

interface UniqueCharacteristicsProps {
  className?: string;
}

const UniqueCharacteristics = ({ className = '' }: UniqueCharacteristicsProps) => {
  const characteristics = [
  {
    icon: 'SparklesIcon',
    title: 'Annual Harvest Festival',
    description: 'A vibrant three-day celebration showcasing traditional music, dance, and local cuisine that brings the entire community together.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9d9dd03-1766817401297.png",
    alt: 'Colorful harvest festival celebration with people in traditional attire dancing in village square'
  },
  {
    icon: 'BuildingLibraryIcon',
    title: 'Heritage Temple',
    description: 'A 200-year-old temple featuring intricate stone carvings and serving as the spiritual heart of our community.',
    image: "https://images.unsplash.com/photo-1700422046415-d590b98beea7",
    alt: 'Ancient stone temple with detailed carvings and traditional architecture surrounded by trees'
  },
  {
    icon: 'SunIcon',
    title: 'Organic Farming Hub',
    description: 'Pioneer in organic farming practices with 70% of agricultural land certified organic, producing premium quality crops.',
    image: "https://images.unsplash.com/photo-1712432146274-58f1c0b73f0f",
    alt: 'Lush green organic farm fields with farmers working under clear blue sky'
  },
  {
    icon: 'AcademicCapIcon',
    title: 'Community Library',
    description: 'A well-stocked library with over 5,000 books and digital resources, serving as a learning center for all ages.',
    image: "https://images.unsplash.com/photo-1710093227496-86653497a463",
    alt: 'Modern community library interior with wooden shelves filled with books and reading tables'
  },
  {
    icon: 'UserGroupIcon',
    title: 'Women Empowerment',
    description: 'Active self-help groups running successful handicraft and dairy cooperatives, empowering over 300 women.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_145f6658f-1766611006562.png",
    alt: 'Group of women artisans working together on traditional handicrafts in workshop'
  },
  {
    icon: 'HomeIcon',
    title: 'Traditional Architecture',
    description: 'Preserved heritage homes showcasing unique local architectural style with eco-friendly materials and designs.',
    image: "https://images.unsplash.com/photo-1729850670796-8dfafae41be9",
    alt: 'Traditional village house with mud walls, tiled roof and wooden doors in rustic setting'
  }];


  return (
    <div className={`bg-background rounded-lg p-6 ${className}`}>
      <div className="mb-8">
        <h3 className="text-2xl font-headline font-semibold text-foreground">What Makes Us Special</h3>
        <p className="text-muted-foreground font-body mt-2">
          Discover the unique characteristics that define our village identity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characteristics.map((characteristic, index) =>
        <CharacteristicCard key={index} {...characteristic} />
        )}
      </div>
    </div>);

};

export default UniqueCharacteristics;