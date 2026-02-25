import { useMemo, useState } from 'react';

import { SlideType } from '@/types';

type UseHeroSectionProps = {
  slides: SlideType[];
};

export const useHeroSection = ({ slides }: UseHeroSectionProps) => {
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

    setCurrentSlideIndex((prev) => {
      if (prev === loopedSlides.length - 2) return prev;
      return prev + 1;
    });
  };

  const onPrevSlide = () => {
    const isFirstSlide = currentSlideIndex === 0;
    if (isFirstSlide) return;

    const newIndex = currentSlideIndex - 1 >= 0 ? currentSlideIndex - 1 : loopedSlides.length - 1;
    setCurrentSlideIndex(newIndex);
  };

  return {
    loopedSlides,
    currentSlideIndex,
    setCurrentSlideIndex,
    onNextSlide,
    onPrevSlide,
  };
};
