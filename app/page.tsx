import data from '@/app/sampleData.json'; // Use this sample data for the task.
import { SlideType } from '@/types';
import { HeroSection } from '@/components';

const slides = data.heroSlider as SlideType[]; // Static data for task. Normally, this would be fetched from an API - ISR or SSR.

export const metadata = {
  title: slides[0].caption,
  description: slides[0].description,
};

export default function Home() {
  return (
    <main>
      <HeroSection slides={slides} />
    </main>
  );
}
