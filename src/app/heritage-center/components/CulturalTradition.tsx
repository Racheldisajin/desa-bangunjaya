interface CulturalTraditionProps {
  name: string;
  description: string;
  image: string;
  alt: string;
  season?: string;
}

export default function CulturalTradition({ name, description, image, alt, season }: CulturalTraditionProps) {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {season && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground rounded-full font-cta font-semibold text-sm">
            {season}
          </div>
        )}
      </div>
      <div className="p-6 space-y-3">
        <h3 className="font-headline font-semibold text-xl text-foreground">{name}</h3>
        <p className="font-body text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}