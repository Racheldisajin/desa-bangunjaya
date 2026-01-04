interface ContactCardProps {
  icon: string;
  title: string;
  details: string[];
  variant?: 'default' | 'emergency';
}

export default function ContactCard({ icon, title, details, variant = 'default' }: ContactCardProps) {
  const cardClasses = variant === 'emergency' ?'bg-cta text-white shadow-lg' :'bg-card text-foreground shadow-subtle';

  return (
    <div className={`${cardClasses} rounded-lg p-6 transition-all duration-300 hover:shadow-md`}>
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
          variant === 'emergency' ? 'bg-white/20' : 'bg-primary/10'
        }`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className={`font-headline font-semibold text-lg mb-3 ${
            variant === 'emergency' ? 'text-white' : 'text-primary'
          }`}>
            {title}
          </h3>
          <div className="space-y-2">
            {details.map((detail, index) => (
              <p key={index} className={`font-body text-sm ${
                variant === 'emergency' ? 'text-white/90' : 'text-muted-foreground'
              }`}>
                {detail}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}