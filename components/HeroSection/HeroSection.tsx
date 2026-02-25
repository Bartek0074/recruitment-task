'use client';

import styles from './HeroSection.module.scss';

import { useHeroSection } from './useHeroSection';

import { HeroSlider } from '../index';

import { SlideType } from '@/types/';

type Props = { slides: SlideType[] };

export default function HeroSection({ slides }: Props) {
  const { loopedSlides, currentSlideIndex, setCurrentSlideIndex, onNextSlide, onPrevSlide } =
    useHeroSection({ slides });

  return (
    <section className={styles.container}>
      <HeroSlider
        slides={loopedSlides}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
      <div
        style={{
          position: 'absolute',
          right: 100,
          bottom: 100,
        }}
      >
        <button onClick={onPrevSlide}>Previous Slide</button>
        <button onClick={onNextSlide}>Next Slide</button>
      </div>
    </section>
  );
}
