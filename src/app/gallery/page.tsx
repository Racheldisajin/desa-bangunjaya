import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Icon from '@/components/ui/AppIcon';
import GalleryInteractive from './components/GalleryInteractive';

export const metadata: Metadata = {
  title: 'Gallery - Village Connect',
  description: 'Explore our village through stunning photography showcasing community events, natural beauty, infrastructure, and cultural heritage. Submit your own photos to celebrate our community.'
};

interface Photo {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  date: string;
  photographer: string;
  description: string;
}

const mockPhotos: Photo[] = [
{
  id: 1,
  title: 'Annual Harvest Festival',
  category: 'Community Events',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3cadb61-1766420020724.png",
  alt: 'Vibrant outdoor harvest festival with colorful decorations, community members celebrating around traditional food stalls under sunny blue sky',
  date: 'October 15, 2024',
  photographer: 'Sarah Mitchell',
  description: 'Our annual harvest festival brought together over 500 community members to celebrate the season\'s bounty with traditional music, dance, and local cuisine.'
},
{
  id: 2,
  title: 'New Community Center',
  category: 'Village Infrastructure',
  image: "https://images.unsplash.com/photo-1623078422907-c4e7721634f0",
  alt: 'Modern two-story community center building with large glass windows, brick facade, and landscaped entrance with green lawn and flower beds',
  date: 'September 28, 2024',
  photographer: 'Michael Chen',
  description: 'The newly constructed community center features a multipurpose hall, library, computer lab, and meeting rooms serving all age groups.'
},
{
  id: 3,
  title: 'Surga Tersembunyi Dibalik Desa Bangunjaya',
  category: 'Natural Beauty',
  image: "http://localhost:4028/assets/images/kebun.png",
  alt: 'Golden sunrise illuminating misty valley with rolling green hills, winding dirt road, and scattered trees creating dramatic morning landscape',
  date: 'Desember 25, 2025',
  photographer: 'Anniswatul Fauziyah',
  description: 'Tenang yang kutemukan di sela bising pikiran ku.'
},
{
  id: 4,
  title: 'Traditional Dance Performance',
  category: 'Cultural Heritage',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_153c21edc-1764753287649.png",
  alt: 'Group of dancers in colorful traditional costumes performing folk dance on outdoor stage with audience watching in background',
  date: 'August 20, 2024',
  photographer: 'David Thompson',
  description: 'Local youth performing traditional folk dances passed down through generations, keeping our cultural heritage alive.'
},
{
  id: 5,
  title: 'Village Market Day',
  category: 'Community Events',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1227712f7-1764915815373.png",
  alt: 'Bustling outdoor farmers market with vendors selling fresh produce, handmade crafts, and local goods under white canopy tents',
  date: 'October 8, 2024',
  photographer: 'Lisa Anderson',
  description: 'Weekly farmers market featuring local produce, handmade crafts, and artisanal goods from village entrepreneurs.'
},
{
  id: 6,
  title: 'Renovated Village Square',
  category: 'Village Infrastructure',
  image: "https://images.unsplash.com/photo-1664023783366-3f5299d66e3b",
  alt: 'Renovated village square with brick paving, wooden benches, decorative lamp posts, central fountain, and surrounding flower gardens',
  date: 'July 12, 2024',
  photographer: 'Robert Williams',
  description: 'The historic village square underwent complete renovation, now serving as a gathering place for community events and daily activities.'
},
{
  id: 7,
  title: 'Sunrise at Bangunjaya',
  category: 'Natural Beauty',
  image: "http://localhost:4028/assets/images/sunrise.jpeg",
  alt: 'Winding forest trail covered with orange and yellow autumn leaves, tall trees creating natural canopy, dappled sunlight filtering through',
  date: 'Desember 19, 2025',
  photographer: 'Alya Tsabitha',
  description: 'Sejuk pagi menyapa hari yang bersemangat'
},
{
  id: 8,
  title: 'Heritage Museum Opening',
  category: 'Cultural Heritage',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c8fae3f0-1766773099827.png",
  alt: 'Interior of heritage museum displaying historical artifacts, vintage photographs, traditional tools, and cultural exhibits in well-lit gallery space',
  date: 'June 5, 2024',
  photographer: 'Thomas Brown',
  description: 'Grand opening of our village heritage museum, preserving and showcasing 200 years of local history and traditions.'
},
{
  id: 9,
  title: 'Spring Flower Festival',
  category: 'Community Events',
  image: "https://images.unsplash.com/photo-1725612160512-ff7350e420be",
  alt: 'Outdoor spring festival with blooming flower displays, families walking through garden paths, children playing near colorful tulip beds',
  date: 'April 15, 2024',
  photographer: 'Amanda Garcia',
  description: 'Annual spring flower festival celebrating the season with garden displays, workshops, and family-friendly activities.'
},
{
  id: 10,
  title: 'New School Building',
  category: 'Village Infrastructure',
  image: "https://images.unsplash.com/photo-1640767752430-63293b1905b2",
  alt: 'Modern single-story school building with red brick exterior, large windows, covered entrance, and playground equipment visible on side',
  date: 'August 1, 2024',
  photographer: 'Christopher Davis',
  description: 'State-of-the-art school building equipped with modern classrooms, science labs, and technology centers for quality education.'
},
{
  id: 11,
  title: 'Curug Cioray',
  category: 'Natural Beauty',
  image: "http://localhost:4028/assets/images/curug.jpeg",
  alt: 'Expansive meadow filled with colorful wildflowers including purple, yellow, and white blooms, blue sky with white clouds overhead',
  date: 'Desember 25, 2025',
  photographer: 'Alya Tsabitha',
  description: 'Sebuah destinasi alam yang dipunyai oleh Desa Bangunjaya'
},
{
  id: 12,
  title: 'Traditional Craft Workshop',
  category: 'Cultural Heritage',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_191276fdf-1766858632283.png",
  alt: 'Indoor workshop with artisans demonstrating traditional pottery, weaving, and woodworking crafts to group of interested visitors',
  date: 'September 10, 2024',
  photographer: 'Daniel Wilson',
  description: 'Master craftspeople teaching traditional skills to younger generations, ensuring cultural techniques are preserved.'
},
{
  id: 13,
  title: 'Winter Wonderland',
  category: 'Natural Beauty',
  image: "https://images.unsplash.com/photo-1674534906619-4fb435a28c20",
  alt: 'Snow-covered village landscape with frosted trees, white-blanketed rooftops, and pristine winter scenery under clear blue sky',
  date: 'December 18, 2024',
  photographer: 'Olivia Taylor',
  description: 'First snowfall of the season transforms the village into a picturesque winter wonderland.'
},
{
  id: 14,
  title: 'Community Garden Project',
  category: 'Community Events',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12436bff6-1766735295537.png",
  alt: 'Community members of various ages working together in raised garden beds, planting vegetables and flowers in organized plots',
  date: 'May 5, 2024',
  photographer: 'Matthew Johnson',
  description: 'Residents collaborating in the community garden, growing fresh produce and fostering neighborhood connections.'
},
{
  id: 15,
  title: 'Upgraded Water Treatment Facility',
  category: 'Village Infrastructure',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12757b9db-1765091839754.png",
  alt: 'Modern water treatment facility with large cylindrical tanks, metal piping systems, and control building with monitoring equipment',
  date: 'March 22, 2024',
  photographer: 'Rachel White',
  description: 'New water treatment facility ensuring clean, safe drinking water for all village residents with advanced filtration technology.'
}];


export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Icon name="PhotoIcon" size={20} className="text-primary" />
              <span className="font-cta font-semibold text-primary text-sm">
                Village Gallery
              </span>
            </div>
            
            <h1 className="font-headline font-semibold text-4xl lg:text-5xl text-foreground mb-6">
              Capturing Our Community Story
            </h1>
            
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore stunning photography showcasing our village's vibrant community life, natural beauty, cultural heritage, and modern infrastructure. Every image tells a story of our shared journey.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="CameraIcon" size={20} />
                <span className="font-body">High-Resolution Images</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="MagnifyingGlassIcon" size={20} />
                <span className="font-body">Interactive Viewer</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="ArrowDownTrayIcon" size={20} />
                <span className="font-body">Download Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <GalleryInteractive photos={mockPhotos} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline font-semibold text-3xl text-foreground mb-4">
              Share Your Village Moments
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Have a beautiful photo of our village? Contribute to our community gallery and help showcase the beauty and spirit of our home. All submissions are reviewed before publication.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-300 font-cta font-semibold">

                <Icon name="CloudArrowUpIcon" size={20} />
                <span>Upload Your Photo</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors duration-300 font-cta font-semibold">

                <Icon name="InformationCircleIcon" size={20} />
                <span>Submission Guidelines</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Village Connect. All rights reserved. Preserving our community heritage through photography.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="/contact-information"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">

                Contact Us
              </a>
              <a
                href="#"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">

                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">

                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>);

}