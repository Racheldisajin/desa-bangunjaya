import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  date: string;
  category: string;
}

const achievements: Achievement[] = [
{
  id: 1,
  title: "Best Rural Development Award 2025",
  description: "Recognized for outstanding infrastructure development and community welfare programs",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19d6a54c5-1764680144812.png",
  alt: "Golden trophy award on wooden podium with certificate and ribbon",
  date: "November 2025",
  category: "Recognition"
},
{
  id: 2,
  title: "100% Digital Literacy Achievement",
  description: "Successfully trained all residents in basic digital skills and online services",
  image: "https://images.unsplash.com/photo-1565688103955-d38e06888776",
  alt: "Group of diverse people using laptops and tablets in modern training room",
  date: "October 2025",
  category: "Education"
},
{
  id: 3,
  title: "Green Village Certification",
  description: "Achieved carbon-neutral status through renewable energy and conservation efforts",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16488d357-1764876891892.png",
  alt: "Solar panels installed on village rooftops with green trees and blue sky",
  date: "September 2025",
  category: "Environment"
}];


export default function CommunityAchievements() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Community Achievements
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating our collective success and milestones that make our village proud
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement) =>
          <div
            key={achievement.id}
            className="bg-card rounded-xl overflow-hidden shadow-subtle hover:shadow-lg transition-all duration-300 border border-border group">

              <div className="relative h-48 md:h-56 overflow-hidden">
                <AppImage
                src={achievement.image}
                alt={achievement.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-cta font-semibold">
                  {achievement.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                  <Icon name="CalendarIcon" size={16} />
                  <span className="font-body text-sm">{achievement.date}</span>
                </div>
                <h3 className="font-headline text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {achievement.title}
                </h3>
                <p className="font-body text-sm md:text-base text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 md:mt-12 bg-success/10 border border-success/20 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="bg-success w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center">
                <Icon name="TrophyIcon" size={28} className="text-success-foreground" />
              </div>
              <div>
                <h3 className="font-headline text-xl md:text-2xl font-semibold text-foreground mb-1">
                  Share Your Success Story
                </h3>
                <p className="font-body text-sm md:text-base text-muted-foreground">
                  Have an achievement to celebrate? Let us know!
                </p>
              </div>
            </div>
            <button className="bg-success hover:bg-success/90 text-success-foreground px-6 py-3 rounded-lg font-cta font-semibold transition-all duration-300 shadow-subtle">
              Submit Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}