'use client';
import Icon from '@/components/ui/AppIcon';

interface InfrastructureItemProps {
  icon: string;
  title: string;
  description: string;
  status: 'excellent' | 'good' | 'developing';
}

const InfrastructureItem = ({ icon, title, description, status }: InfrastructureItemProps) => {
  const statusColors = {
    excellent: 'bg-success/10 text-success',
    good: 'bg-conversion/10 text-conversion',
    developing: 'bg-warning/10 text-warning'
  };

  const statusLabels = {
    excellent: 'Excellent',
    good: 'Good',
    developing: 'Developing'
  };

  return (
    <div className="bg-background rounded-lg p-6 border border-border hover:border-primary/30 transition-colors duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name={icon as any} size={24} className="text-primary" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-body font-semibold ${statusColors[status]}`}>
          {statusLabels[status]}
        </span>
      </div>
      <h4 className="text-lg font-headline font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground font-body">{description}</p>
    </div>
  );
};

interface InfrastructureOverviewProps {
  className?: string;
}

const InfrastructureOverview = ({ className = '' }: InfrastructureOverviewProps) => {
  const infrastructureData = [
    {
      icon: 'BoltIcon',
      title: 'Electricity',
      description: '24/7 power supply with 98% uptime. Solar panels installed in 45% of households.',
      status: 'excellent' as const
    },
    {
      icon: 'WifiIcon',
      title: 'Internet & Connectivity',
      description: 'High-speed broadband available. 4G coverage across 95% of the village area.',
      status: 'good' as const
    },
    {
      icon: 'TruckIcon',
      title: 'Transportation',
      description: 'Well-maintained roads connecting to major highways. Regular bus services available.',
      status: 'good' as const
    },
    {
      icon: 'BuildingLibraryIcon',
      title: 'Education',
      description: '3 primary schools, 2 secondary schools, and 1 higher secondary school.',
      status: 'excellent' as const
    },
    {
      icon: 'HeartIcon',
      title: 'Healthcare',
      description: 'Primary health center with 24/7 emergency services. 2 private clinics available.',
      status: 'good' as const
    },
    {
      icon: 'HomeModernIcon',
      title: 'Housing',
      description: 'Mix of traditional and modern housing. Government housing schemes active.',
      status: 'developing' as const
    }
  ];

  return (
    <div className={`bg-card rounded-lg p-6 shadow-subtle border border-border ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-headline font-semibold text-foreground">Infrastructure Overview</h3>
        <p className="text-muted-foreground font-body mt-2">
          Modern amenities and essential services available in our village
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {infrastructureData.map((item, index) => (
          <InfrastructureItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default InfrastructureOverview;