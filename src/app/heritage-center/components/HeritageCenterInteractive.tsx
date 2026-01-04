'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import TimelineEvent from './TimelineEvent';
import FoundingStory from './FoundingStory';
import CulturalTradition from './CulturalTradition';
import ArchiveItem from './ArchiveItem';
import OralHistoryCard from './OralHistoryCard';
import ComparisonSlider from './ComparisonSlider';
import SubmissionForm from './SubmissionForm';

interface TimelineEventData {
  year: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface FoundingStoryData {
  title: string;
  content: string;
  image: string;
  alt: string;
  documentImage?: string;
  documentAlt?: string;
}

interface CulturalTraditionData {
  name: string;
  description: string;
  image: string;
  alt: string;
  season?: string;
}

interface ArchiveItemData {
  id: number;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  alt: string;
  fileType: string;
}

interface OralHistoryData {
  id: number;
  name: string;
  role: string;
  yearRecorded: string;
  duration: string;
  thumbnail: string;
  alt: string;
  excerpt: string;
}

interface ComparisonData {
  location: string;
  historicalImage: string;
  historicalAlt: string;
  modernImage: string;
  modernAlt: string;
  historicalYear: string;
  modernYear: string;
}

export default function HeritageCenterInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState('timeline');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const timelineEvents: TimelineEventData[] = [
  {
    year: "1847",
    title: "Village Founding",
    description: "A group of pioneering families established the settlement along the river valley, drawn by fertile soil and abundant natural resources. The first log cabins were constructed, marking the beginning of our community's rich history.",
    image: "https://images.unsplash.com/photo-1572113672906-c8f627373b9a",
    alt: "Historic log cabin settlement in wooded valley with river in background"
  },
  {
    year: "1872",
    title: "First Church Built",
    description: "The community came together to build the village's first church, which served as both a place of worship and a community gathering center. This white wooden structure with its distinctive steeple became an iconic landmark.",
    image: "https://images.unsplash.com/photo-1728676693505-1fc7f9f4be45",
    alt: "White wooden church with tall steeple surrounded by autumn trees"
  },
  {
    year: "1895",
    title: "Railroad Connection",
    description: "The arrival of the railroad transformed the village economy, connecting local farmers and merchants to broader markets. The historic train depot became the heart of commercial activity and remains a cherished landmark.",
    image: "https://images.unsplash.com/photo-1683485442825-efeb601f72f4",
    alt: "Vintage steam locomotive at historic wooden train station platform"
  },
  {
    year: "1923",
    title: "School Establishment",
    description: "The village opened its first dedicated school building, replacing the one-room schoolhouse. This two-story brick structure educated generations of children and fostered a strong tradition of community education.",
    image: "https://images.unsplash.com/photo-1496121176865-15e2a8e6151c",
    alt: "Red brick two-story school building with large windows and bell tower"
  },
  {
    year: "1956",
    title: "Community Center Opens",
    description: "Residents rallied to build a modern community center that would serve as a hub for social gatherings, celebrations, and civic meetings. This facility strengthened community bonds and continues to host important events.",
    image: "https://images.unsplash.com/photo-1583341935775-24a6db7ba2e6",
    alt: "Spacious community hall with wooden floors and large windows filled with people"
  },
  {
    year: "1989",
    title: "Heritage Preservation Act",
    description: "The village council passed landmark legislation to protect historic buildings and cultural sites, ensuring future generations could appreciate our architectural and cultural heritage. Several structures received historic designation.",
    image: "https://images.unsplash.com/photo-1600180732055-8809748b309a",
    alt: "Historic Victorian-era building with ornate architecture and preservation plaque"
  }];


  const foundingStories: FoundingStoryData[] = [
  {
    title: "The First Settlers",
    content: "In the spring of 1847, three families—the Johnsons, Millers, and Thompsons—arrived in the valley after a grueling journey westward. They were drawn by reports of fertile land and abundant water. The first winter was harsh, but the families supported each other, sharing resources and labor. By the following spring, they had established permanent homesteads and began cultivating the land that would sustain the community for generations.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a095ba33-1766810075950.png",
    alt: "Pioneer family standing in front of log cabin with farming tools",
    documentImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe2e63f8-1766337244656.png",
    documentAlt: "Aged handwritten document with fountain pen showing original settlement records"
  },
  {
    title: "The Great Flood of 1889",
    content: "The spring floods of 1889 tested the resilience of our community. The river swelled beyond its banks, threatening homes and crops. Villagers worked tirelessly for three days and nights, building sandbag barriers and evacuating families to higher ground. Though several structures were damaged, no lives were lost thanks to the community's coordinated response. This event strengthened bonds and led to improved flood management systems.",
    image: "https://images.unsplash.com/photo-1707959953726-cfc1c58d61b3",
    alt: "Historic black and white photo of flooded village street with people in boats",
    documentImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1bfe39a60-1766906644343.png",
    documentAlt: "Vintage newspaper clipping with headline about 1889 flood and rescue efforts"
  },
  {
    title: "The Harvest Festival Tradition",
    content: "The annual Harvest Festival began in 1852 as a simple gathering to celebrate the autumn harvest. Families would bring their best produce, homemade goods, and traditional dishes to share. Over time, it evolved into a multi-day celebration featuring music, dancing, competitions, and community awards. Today, the festival remains our most cherished tradition, drawing visitors from neighboring communities and former residents who return home for the occasion.",
    image: "https://images.unsplash.com/photo-1634757701160-730474eb8ece",
    alt: "Colorful autumn harvest festival with pumpkins, corn stalks, and community gathering"
  }];


  const culturalTraditions: CulturalTraditionData[] = [
  {
    name: "Annual Harvest Festival",
    description: "Every October, the village comes alive with our beloved Harvest Festival. Families showcase their best produce, artisans display handcrafted goods, and traditional music fills the air. The festival includes pie-baking contests, square dancing, and the crowning of the Harvest Queen.",
    image: "https://images.unsplash.com/photo-1668868262465-cee11643e847",
    alt: "Festive outdoor market with autumn decorations, pumpkins, and people browsing craft stalls",
    season: "Fall"
  },
  {
    name: "Spring Planting Ceremony",
    description: "Dating back to our founding, this ceremony marks the beginning of the growing season. Community members gather at dawn to bless the fields and plant the first seeds together, symbolizing unity and hope for a bountiful harvest.",
    image: "https://images.unsplash.com/photo-1622383566005-14888dbbd47e",
    alt: "Hands planting seeds in rich dark soil with morning sunlight",
    season: "Spring"
  },
  {
    name: "Winter Lantern Walk",
    description: "On the longest night of the year, residents carry handmade lanterns through the village streets, singing traditional songs and sharing hot cider. This beautiful tradition symbolizes bringing light to darkness and community warmth during cold winter months.",
    image: "https://images.unsplash.com/photo-1702759450356-9861f34c2eb6",
    alt: "People walking through snowy village street at night carrying glowing paper lanterns",
    season: "Winter"
  },
  {
    name: "Summer Barn Dance",
    description: "Every July, the historic Miller Barn hosts our traditional barn dance. Live fiddle music, square dancing, and community potluck dinner bring together all generations. The event preserves traditional dance forms and strengthens intergenerational bonds.",
    image: "https://images.unsplash.com/photo-1685524989124-a14d282ae625",
    alt: "Couples square dancing in rustic barn decorated with string lights and hay bales",
    season: "Summer"
  },
  {
    name: "Heritage Craft Fair",
    description: "Local artisans demonstrate traditional crafts including quilting, blacksmithing, pottery, and woodworking. Workshops allow visitors to learn these time-honored skills, ensuring they're passed to future generations.",
    image: "https://images.unsplash.com/photo-1709486263505-5d35aeda8680",
    alt: "Artisan demonstrating traditional pottery wheel technique with clay vessel",
    season: "Year-round"
  },
  {
    name: "Memorial Day Parade",
    description: "Our community honors veterans and fallen heroes with a solemn parade through Main Street, followed by ceremonies at the village memorial. This tradition reinforces our values of service, sacrifice, and remembrance.",
    image: "https://images.unsplash.com/photo-1687254523386-d1093a48ccc3",
    alt: "American flags lining street during memorial parade with marching band and veterans",
    season: "Spring"
  }];


  const archiveItems: ArchiveItemData[] = [
  {
    id: 1,
    title: "Village Charter and Founding Documents",
    category: "Legal Documents",
    year: "1847",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_14af51bf6-1764917838599.png",
    alt: "Aged parchment document with handwritten text and official seal",
    fileType: "PDF"
  },
  {
    id: 2,
    title: "Historic Main Street Photographs",
    category: "Photographs",
    year: "1920s",
    thumbnail: "https://images.unsplash.com/photo-1616805615225-e462420335d3",
    alt: "Black and white photo of Main Street with vintage cars and storefronts",
    fileType: "Image"
  },
  {
    id: 3,
    title: "First School Yearbook",
    category: "Educational",
    year: "1924",
    thumbnail: "https://images.unsplash.com/photo-1570286424501-6122c6a93e55",
    alt: "Vintage school yearbook cover with class photo and school emblem",
    fileType: "PDF"
  },
  {
    id: 4,
    title: "Railroad Construction Records",
    category: "Infrastructure",
    year: "1895",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_17e846d62-1766906643958.png",
    alt: "Engineering blueprints and construction photos of railroad depot",
    fileType: "PDF"
  },
  {
    id: 5,
    title: "Community Cookbook Collection",
    category: "Cultural",
    year: "1950s",
    thumbnail: "https://images.unsplash.com/photo-1686721445113-9282d2e2138f",
    alt: "Vintage cookbook with handwritten recipes and food illustrations",
    fileType: "PDF"
  },
  {
    id: 6,
    title: "Village Council Meeting Minutes",
    category: "Government",
    year: "1960-1970",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_182e5c1bc-1766906644917.png",
    alt: "Typed meeting minutes with official letterhead and signatures",
    fileType: "PDF"
  }];


  const oralHistories: OralHistoryData[] = [
  {
    id: 1,
    name: "Margaret Thompson",
    role: "Third Generation Resident",
    yearRecorded: "2018",
    duration: "45 min",
    thumbnail: "https://images.unsplash.com/photo-1651117860079-d59586c1525f",
    alt: "Elderly woman with white hair and warm smile sitting in comfortable chair",
    excerpt: "I remember when Main Street was still dirt roads, and everyone knew everyone's name. My grandmother used to tell stories about the founding families, and how they'd gather at the church for community dinners every Sunday..."
  },
  {
    id: 2,
    name: "Robert Miller",
    role: "Former School Principal",
    yearRecorded: "2019",
    duration: "52 min",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1d76d835f-1764754213764.png",
    alt: "Senior man with glasses in button-up shirt sitting at wooden desk",
    excerpt: "Education has always been the heart of this community. I taught here for 40 years, and I watched generations of families pass through those school doors. The dedication parents showed to their children's education was remarkable..."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Local Historian",
    yearRecorded: "2020",
    duration: "38 min",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1329528a2-1763300170741.png",
    alt: "Middle-aged woman with brown hair in library surrounded by historical books",
    excerpt: "The archives tell fascinating stories about how our ancestors overcame incredible challenges. The flood of 1889, the harsh winters, the economic depressions—through it all, this community stuck together..."
  }];


  const comparisonImages: ComparisonData[] = [
  {
    location: "Main Street",
    historicalImage: "https://images.unsplash.com/photo-1633360287329-446b2aa53eb9",
    historicalAlt: "Black and white photo of Main Street in 1920s with horse carriages and wooden storefronts",
    modernImage: "https://images.unsplash.com/photo-1588357821512-ade1d877c660",
    modernAlt: "Modern Main Street with paved road, cars, and renovated historic storefronts",
    historicalYear: "1925",
    modernYear: "2024"
  },
  {
    location: "Village Square",
    historicalImage: "https://images.unsplash.com/photo-1724247355410-62dadd9225da",
    historicalAlt: "Historic village square with dirt paths and original church building",
    modernImage: "https://images.unsplash.com/photo-1565270684837-0b9854a9f9aa",
    modernAlt: "Modern village square with landscaped gardens and restored church",
    historicalYear: "1890",
    modernYear: "2024"
  }];


  const handleArchiveView = (id: number) => {
    alert(`Opening archive document #${id}. In a production environment, this would open a document viewer.`);
  };

  const filteredArchives = archiveItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(archiveItems.map((item) => item.category)))];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) =>
              <div key={i} className="h-48 bg-muted rounded"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514624016300-c37c479335d8"
            alt="Historic village landscape with old buildings and natural scenery"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Destinasi Desa
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Preserving our past, celebrating our present, and inspiring our future through stories, traditions, and shared memories
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-card border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
            { id: 'timeline', label: 'Timeline', icon: 'ClockIcon' },
            { id: 'founding', label: 'Founding Stories', icon: 'BookOpenIcon' },
            { id: 'traditions', label: 'Traditions', icon: 'SparklesIcon' },
            { id: 'archive', label: 'Digital Archive', icon: 'ArchiveBoxIcon' },
            { id: 'oral', label: 'Oral Histories', icon: 'MicrophoneIcon' },
            { id: 'comparison', label: 'Then & Now', icon: 'PhotoIcon' },
            { id: 'submit', label: 'Share Story', icon: 'PencilSquareIcon' }].
            map((tab) =>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 font-cta font-semibold whitespace-nowrap transition-colors duration-300 border-b-2 ${
              activeTab === tab.id ?
              'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`
              }>

                <Icon name={tab.icon as any} size={20} />
                {tab.label}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        {/* Historical Timeline */}
        {activeTab === 'timeline' &&
        <section className="space-y-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our Journey Through Time
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Explore the key moments that shaped our community from its founding to the present day
              </p>
            </div>

            <div className="space-y-20">
              {timelineEvents.map((event, index) =>
            <TimelineEvent
              key={event.year}
              {...event}
              isLeft={index % 2 === 0} />

            )}
            </div>
          </section>
        }

        {/* Founding Stories */}
        {activeTab === 'founding' &&
        <section className="space-y-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Founding Stories
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Discover the remarkable stories of courage, resilience, and community spirit that built our village
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {foundingStories.map((story, index) =>
            <FoundingStory key={index} {...story} />
            )}
            </div>
          </section>
        }

        {/* Cultural Traditions */}
        {activeTab === 'traditions' &&
        <section className="space-y-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Cultural Traditions
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Celebrate the customs and celebrations that define our community identity and bring us together
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {culturalTraditions.map((tradition, index) =>
            <CulturalTradition key={index} {...tradition} />
            )}
            </div>
          </section>
        }

        {/* Digital Archive */}
        {activeTab === 'archive' &&
        <section className="space-y-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Digital Archive
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Access our collection of historical documents, photographs, and records
              </p>
            </div>

            {/* Search and Filter */}
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Icon name="MagnifyingGlassIcon" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                  type="text"
                  placeholder="Search archives..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body" />

                </div>
                <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-body">

                  {categories.map((cat) =>
                <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </option>
                )}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArchives.map((item) =>
            <ArchiveItem
              key={item.id}
              {...item}
              onView={() => handleArchiveView(item.id)} />

            )}
            </div>

            {filteredArchives.length === 0 &&
          <div className="text-center py-12">
                <Icon name="FolderOpenIcon" size={64} className="mx-auto text-muted-foreground mb-4" />
                <p className="font-body text-lg text-muted-foreground">No archives found matching your search</p>
              </div>
          }
          </section>
        }

        {/* Oral Histories */}
        {activeTab === 'oral' &&
        <section className="space-y-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Oral History Collection
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Listen to firsthand accounts from longtime residents sharing their memories and experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {oralHistories.map((history) =>
            <OralHistoryCard key={history.id} {...history} />
            )}
            </div>
          </section>
        }

        {/* Then & Now Comparison */}
        {activeTab === 'comparison' &&
        <section className="space-y-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Then & Now
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Slide to compare historical and modern views of our village landmarks
              </p>
            </div>

            <div className="space-y-8">
              {comparisonImages.map((comparison, index) =>
            <ComparisonSlider key={index} {...comparison} />
            )}
            </div>
          </section>
        }

        {/* Submission Form */}
        {activeTab === 'submit' &&
        <section className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Share Your Heritage Story
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Your memories and stories are valuable parts of our community heritage. Share them with us!
              </p>
            </div>

            <SubmissionForm />
          </section>
        }
      </div>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline font-bold text-3xl md:text-4xl mb-4">
            Help Us Preserve Our Heritage
          </h2>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Do you have photos, documents, or stories to share? Your contributions help keep our community's history alive for future generations.
          </p>
          <button
            onClick={() => setActiveTab('submit')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors duration-300 font-cta font-bold text-lg shadow-lg">

            <Icon name="PencilSquareIcon" size={24} />
            Contribute Your Story
          </button>
        </div>
      </section>
    </div>);

}