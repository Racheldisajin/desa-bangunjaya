'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface DownloadSectionProps {
  className?: string;
}

const DownloadSection = ({ className = '' }: DownloadSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleDownload = (documentType: string) => {
    if (!isHydrated) return;
    alert(`Downloading ${documentType}... This is a demo feature.`);
  };

  const documents = [
    {
      icon: 'DocumentTextIcon',
      title: 'Village Fact Sheet',
      description: 'Comprehensive overview with key statistics and information',
      size: '2.4 MB',
      format: 'PDF'
    },
    {
      icon: 'ChartBarIcon',
      title: 'Demographic Report',
      description: 'Detailed demographic analysis and population data',
      size: '1.8 MB',
      format: 'PDF'
    },
    {
      icon: 'MapIcon',
      title: 'Infrastructure Map',
      description: 'Visual guide to village facilities and landmarks',
      size: '3.2 MB',
      format: 'PDF'
    }
  ];

  if (!isHydrated) {
    return (
      <div className={`bg-card rounded-lg p-6 shadow-subtle border border-border ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-6"></div>
          <div className="space-y-4">
            <div className="h-24 bg-muted rounded"></div>
            <div className="h-24 bg-muted rounded"></div>
            <div className="h-24 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card rounded-lg p-6 shadow-subtle border border-border ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-headline font-semibold text-foreground">Download Resources</h3>
        <p className="text-muted-foreground font-body mt-2">
          Access detailed information packets and reports about our village
        </p>
      </div>

      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors duration-300"
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={doc.icon as any} size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-body font-semibold text-foreground mb-1">{doc.title}</h4>
                <p className="text-sm text-muted-foreground font-body mb-2">{doc.description}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Icon name="DocumentIcon" size={14} />
                    {doc.format}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="ArrowDownTrayIcon" size={14} />
                    {doc.size}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleDownload(doc.title)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-300 font-body font-medium flex items-center gap-2 flex-shrink-0"
            >
              <Icon name="ArrowDownTrayIcon" size={18} />
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadSection;