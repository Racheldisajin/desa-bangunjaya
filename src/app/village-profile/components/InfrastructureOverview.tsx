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
    excellent: 'Sangat Baik',
    good: 'Baik',
    developing: 'Dalam Pengembangan'
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
      <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground font-body">
        {description}
      </p>
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
      title: 'Listrik',
      description:
        'Pasokan listrik tersedia 24 jam dengan tingkat keandalan 98%. Panel surya telah terpasang di sekitar 45% rumah warga.',
      status: 'excellent' as const
    },
    {
      icon: 'WifiIcon',
      title: 'Internet dan Konektivitas',
      description:
        'Akses internet berkecepatan tinggi tersedia. Jaringan 4G menjangkau sekitar 95% wilayah desa.',
      status: 'good' as const
    },
    {
      icon: 'TruckIcon',
      title: 'Transportasi',
      description:
        'Kondisi jalan terpelihara dengan baik dan terhubung ke jalur utama. Tersedia layanan angkutan umum secara berkala.',
      status: 'good' as const
    },
    {
      icon: 'BuildingLibraryIcon',
      title: 'Pendidikan',
      description:
        'Tersedia 3 sekolah dasar, 2 sekolah menengah pertama, dan 1 sekolah menengah atas.',
      status: 'excellent' as const
    },
    {
      icon: 'HeartIcon',
      title: 'Kesehatan',
      description:
        'Puskesmas dengan layanan gawat darurat 24 jam serta didukung oleh 2 klinik swasta.',
      status: 'good' as const
    },
    {
      icon: 'HomeModernIcon',
      title: 'Perumahan',
      description:
        'Terdapat perpaduan rumah tradisional dan modern. Program perumahan pemerintah masih terus berjalan.',
      status: 'developing' as const
    }
  ];

  return (
    <div className={`bg-card rounded-lg p-6 shadow-subtle border border-border ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-headline font-semibold text-foreground">
          Gambaran Infrastruktur Desa
        </h3>
        <p className="text-muted-foreground font-body mt-2">
          Fasilitas umum dan layanan dasar yang tersedia di Desa Bangunjaya
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
