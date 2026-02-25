import { useEffect, useState } from 'react';

import { SlideType } from '@/types';

type UseHeroSliderProps = {
  slides: SlideType[];
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number) => void;
  animationDuration: number;
};

export const useHeroSlider = ({
  slides,
  currentSlideIndex,
  setCurrentSlideIndex,
  animationDuration,
}: UseHeroSliderProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const resetIndex = (index: number) => {
    if (index === 0) return slides.length - 3;
    if (index === slides.length - 2) return 1;
    return index;
  };

  useEffect(() => {
    if (!slides.length) return;

    const isClonedSlide = currentSlideIndex === 0 || currentSlideIndex === slides.length - 2;

    if (!isClonedSlide) {
      setShouldAnimate(true);
      return;
    }

    const timeout = setTimeout(() => {
      setShouldAnimate(false);
      setCurrentSlideIndex(resetIndex(currentSlideIndex));
    }, animationDuration);

    return () => clearTimeout(timeout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlideIndex, slides]);

  return { shouldAnimate };
};
