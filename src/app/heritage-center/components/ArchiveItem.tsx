import Icon from '@/components/ui/AppIcon';

interface ArchiveItemProps {
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  alt: string;
  fileType: string;
  onView: () => void;
}

export default function ArchiveItem({ title, category, year, thumbnail, alt, fileType, onView }: ArchiveItemProps) {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 px-2 py-1 bg-background/90 rounded text-xs font-cta font-semibold text-foreground">
          {fileType}
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-headline font-semibold text-lg text-foreground line-clamp-2">{title}</h4>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Icon name="FolderIcon" size={16} />
            {category}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="CalendarIcon" size={16} />
            {year}
          </span>
        </div>
        <button
          onClick={onView}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-300 font-cta font-semibold"
        >
          <Icon name="EyeIcon" size={18} />
          View Document
        </button>
      </div>
    </div>
  );
}