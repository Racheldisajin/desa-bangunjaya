'use client';
interface StatCardProps {
  icon: string;
  label: string;
  value: string;
  trend?: string;
}

const StatCard = ({ icon, label, value, trend }: StatCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-subtle border border-border hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-body text-muted-foreground mb-1">
            {label}
          </p>
          <p className="text-3xl font-headline font-semibold text-foreground">
            {value}
          </p>
          {trend && (
            <p className="text-xs font-body text-success mt-2">
              {trend}
            </p>
          )}
        </div>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

interface VillageStatsProps {
  className?: string;
}

const VillageStats = ({ className = '' }: VillageStatsProps) => {
  const stats = [
    {
      icon: '👥',
      label: 'Jumlah Penduduk',
      value: '4.992',
      trend: 'Naik 6,51% dari tahun sebelumnya'
    },
    {
      icon: '🏘️',
      label: 'Jumlah Kepala Keluarga',
      value: '1.718',
      trend: 'Naik 1,8% dari tahun sebelumnya'
    },
    {
      icon: '📏',
      label: 'Luas Wilayah',
      value: '12,72 km²'
    },
    {
      icon: '🌾',
      label: 'Luas Lahan Pertanian',
      value: '32,8 km²',
      trend: '72,6% dari total wilayah'
    }
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default VillageStats;
