'use client';
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface HistoricalTimelineProps {
  className?: string;
}

const HistoricalTimeline = ({ className = '' }: HistoricalTimelineProps) => {
  const timelineEvents: TimelineEvent[] = [
    {
      year: '1847',
      title: 'Village Foundation',
      description: 'The village was established by a group of farming families seeking fertile land for agriculture.'
    },
    {
      year: '1923',
      title: 'First School Established',
      description: 'The community came together to build the first primary school, marking a milestone in education.'
    },
    {
      year: '1965',
      title: 'Electrification',
      description: 'Electricity reached the village, transforming daily life and enabling modern amenities.'
    },
    {
      year: '1989',
      title: 'Road Connectivity',
      description: 'Paved roads connected the village to the district headquarters, improving trade and travel.'
    },
    {
      year: '2005',
      title: 'Digital Revolution',
      description: 'Internet and mobile connectivity arrived, bringing the village into the digital age.'
    },
    {
      year: '2020',
      title: 'Smart Village Initiative',
      description: 'Launch of digital governance platform and e-services for transparent administration.'
    }
  ];

  return (
    <div className={`bg-card rounded-lg p-6 shadow-subtle border border-border ${className}`}>
      <div className="mb-8">
        <h3 className="text-2xl font-headline font-semibold text-foreground">Historical Timeline</h3>
        <p className="text-muted-foreground font-body mt-2">
          Journey through the key milestones that shaped our village
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-start gap-6">
              <div className="hidden md:flex w-16 h-16 bg-primary rounded-full items-center justify-center flex-shrink-0 relative z-10 shadow-md">
                <span className="text-white font-headline font-semibold text-sm">{event.year}</span>
              </div>

              <div className="flex-1 bg-background rounded-lg p-6 border border-border hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-2 md:hidden">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-body font-semibold">
                    {event.year}
                  </span>
                </div>
                <h4 className="text-lg font-headline font-semibold text-foreground mb-2">{event.title}</h4>
                <p className="text-muted-foreground font-body text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoricalTimeline;