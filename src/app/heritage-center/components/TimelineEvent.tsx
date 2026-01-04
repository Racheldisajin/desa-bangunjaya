interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  isLeft: boolean;
}

export default function TimelineEvent({ year, title, description, image, alt, isLeft }: TimelineEventProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-6 md:gap-8 items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="w-full md:w-1/2 space-y-3">
        <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full font-cta font-bold text-lg">
          {year}
        </div>
        <h3 className="font-headline font-semibold text-2xl text-foreground">{title}</h3>
        <p className="font-body text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}