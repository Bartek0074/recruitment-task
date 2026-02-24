'use client';

import { useState, useMemo } from 'react';

import styles from './HeroSection.module.scss';

import { HeroSlider } from '../index';

import { SlideType } from '@/types/';

type Props = { slides: SlideType[] };

export default function HeroSection({ slides }: Props) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  const loopedSlides = useMemo(() => {
    if (slides.length === 1) {
      return [slides[0], slides[0], slides[0], slides[0]];
    } else if (slides.length > 1) {
      return [slides[slides.length - 1], ...slides, slides[0], slides[1]];
    } else {
      return [];
    }
  }, [slides]);

  const onNextSlide = () => {
    const isOneBeforeLastSlide = currentSlideIndex === loopedSlides.length - 2;
    if (isOneBeforeLastSlide) return;

    const newIndex = currentSlideIndex + 1 >= loopedSlides.length ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(newIndex);
  };

  const onPrevSlide = () => {
    const isFirstSlide = currentSlideIndex === 0;
    if (isFirstSlide) return;
    const newIndex = currentSlideIndex - 1 >= 0 ? currentSlideIndex - 1 : loopedSlides.length - 1;
    setCurrentSlideIndex(newIndex);
  };

  return (
    <div className={styles.container}>
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
    </div>
  );
}
