interface FoundingStoryProps {
  title: string;
  content: string;
  image: string;
  alt: string;
  documentImage?: string;
  documentAlt?: string;
}

export default function FoundingStory({ title, content, image, alt, documentImage, documentAlt }: FoundingStoryProps) {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="font-headline font-semibold text-2xl text-foreground">{title}</h3>
        <p className="font-body text-muted-foreground leading-relaxed">{content}</p>
        {documentImage && documentAlt && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="font-body text-sm text-muted-foreground mb-3">Original Document:</p>
            <div className="relative w-full h-48 rounded-md overflow-hidden border border-border">
              <img
                src={documentImage}
                alt={documentAlt}
                className="w-full h-full object-contain bg-muted"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}