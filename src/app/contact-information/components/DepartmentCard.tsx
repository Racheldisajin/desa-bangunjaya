import Icon from '@/components/ui/AppIcon';

interface DepartmentCardProps {
  department: string;
  head: string;
  phone: string;
  email: string;
  hours: string;
}

export default function DepartmentCard({ department, head, phone, email, hours }: DepartmentCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-subtle hover:shadow-md transition-all duration-300 border border-border">
      <h3 className="font-headline font-semibold text-xl text-primary mb-4">{department}</h3>
      
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <Icon name="UserIcon" size={20} className="text-secondary mt-1 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-muted-foreground">Department Head</p>
            <p className="font-body font-medium text-foreground">{head}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Icon name="PhoneIcon" size={20} className="text-secondary mt-1 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-muted-foreground">Phone</p>
            <a href={`tel:${phone}`} className="font-body font-medium text-primary hover:text-secondary transition-colors">
              {phone}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Icon name="EnvelopeIcon" size={20} className="text-secondary mt-1 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-muted-foreground">Email</p>
            <a href={`mailto:${email}`} className="font-body font-medium text-primary hover:text-secondary transition-colors break-all">
              {email}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Icon name="ClockIcon" size={20} className="text-secondary mt-1 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-muted-foreground">Office Hours</p>
            <p className="font-body font-medium text-foreground">{hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}