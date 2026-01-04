import Icon from '@/components/ui/AppIcon';

interface StatItem {
  icon: string;
  label: string;
  value: string;
}

interface GalleryStatsProps {
  stats: StatItem[];
}

export default function GalleryStats({ stats }: GalleryStatsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-lg p-6 shadow-subtle hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name={stat.icon as any} size={20} className="text-primary" />
            </div>
            <span className="font-body text-sm text-muted-foreground">
              {stat.label}
            </span>
          </div>
          <p className="font-headline font-semibold text-3xl text-foreground">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}