import Icon from '@/components/ui/AppIcon';

interface Meeting {
  title: string;
  date: string;
  time: string;
  location: string;
  agenda: string;
}

interface MeetingScheduleCardProps {
  meeting: Meeting;
}

export default function MeetingScheduleCard({ meeting }: MeetingScheduleCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-subtle hover:shadow-md transition-all duration-300 border-l-4 border-primary">
      <h3 className="font-headline font-semibold text-lg text-primary mb-4">{meeting.title}</h3>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <Icon name="CalendarIcon" size={18} className="text-secondary flex-shrink-0" />
          <p className="font-body text-sm text-foreground">{meeting.date}</p>
        </div>

        <div className="flex items-center space-x-3">
          <Icon name="ClockIcon" size={18} className="text-secondary flex-shrink-0" />
          <p className="font-body text-sm text-foreground">{meeting.time}</p>
        </div>

        <div className="flex items-center space-x-3">
          <Icon name="MapPinIcon" size={18} className="text-secondary flex-shrink-0" />
          <p className="font-body text-sm text-foreground">{meeting.location}</p>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="font-body text-sm text-muted-foreground mb-2">Agenda:</p>
          <p className="font-body text-sm text-foreground">{meeting.agenda}</p>
        </div>
      </div>
    </div>
  );
}