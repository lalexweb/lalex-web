import HomeAboutSection from '@/components/pages/home/HomeAboutSection';
import HomeMainSection from '@/components/pages/home/HomeMainSection';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <HomeMainSection />
      <HomeAboutSection />
    </div>
  );
}
