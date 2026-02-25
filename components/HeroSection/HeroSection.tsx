'use client';

import styles from './HeroSection.module.scss';

import { useHeroSection } from './useHeroSection';

import { Logo, Controls, HeroContent, HeroSlider, StatementImage } from '../index';

import { SlideType } from '@/types/';

type Props = { slides: SlideType[] };

export default function HeroSection({ slides }: Props) {
  const { loopedSlides, currentSlideIndex, setCurrentSlideIndex, onNextSlide, onPrevSlide } =
    useHeroSection({ slides });

  return (
    <section className={styles.container}>
      <Logo />
      <StatementImage />
      <HeroContent
        title={loopedSlides[currentSlideIndex].caption}
        text={loopedSlides[currentSlideIndex].description}
      />
      <HeroSlider
        slides={loopedSlides}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
      <Controls onNext={onNextSlide} onPrev={onPrevSlide} />
    </section>
  );
}
