import data from '@/app/sampleData.json'; // Use this sample data for the task.
import { SlideType } from '@/types';
import { HeroSection } from '@/components';

export default function Home() {
  const slides = data.heroSlider as SlideType[];

  return (
    <main>
      <HeroSection slides={slides} />
    </main>
  );
}
