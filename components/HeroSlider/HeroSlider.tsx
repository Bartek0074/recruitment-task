'use client';

import { useEffect, useState } from 'react';

import styles from './HeroSlider.module.scss';

import { motion } from 'motion/react';

import { SlideType } from '@/types/';

const TRANSLATE_ANIMATION_DURATION = 600;
const RESIZE_ANIMATION_DURATION = 900;

type Props = {
  slides: SlideType[];
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number) => void;
};

export default function HeroSlider({ slides, currentSlideIndex, setCurrentSlideIndex }: Props) {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const resetIndex = (index: number) => {
    if (index === 0) return slides.length - 3;
    if (index === slides.length - 2) return 1;
    return index;
  };

  useEffect(() => {
    if (!slides.length) return;

    if (currentSlideIndex === 0 || currentSlideIndex === slides.length - 2) {
      const timeout = setTimeout(
        () => {
          setShouldAnimate(false);
          setCurrentSlideIndex(resetIndex(currentSlideIndex));
        },
        Math.max(RESIZE_ANIMATION_DURATION, TRANSLATE_ANIMATION_DURATION)
      );
      return () => clearTimeout(timeout);
    }

    setShouldAnimate(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlideIndex, slides]);

  if (!slides.length) return null;

  return (
    <motion.div
      className={styles.container}
      initial={{
        x: `-${currentSlideIndex * 25}%`,
      }}
      animate={{
        x: `-${currentSlideIndex * 25}%`,
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 16,
        mass: 1,
        duration: shouldAnimate ? TRANSLATE_ANIMATION_DURATION / 1000 : 0,
      }}
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlideIndex;
        return (
          <motion.div
            key={index}
            initial={{
              flexBasis: isActive ? '75%' : '25%',
              maxHeight: isActive ? '100%' : 'auto',
            }}
            animate={{
              flexBasis: isActive ? '75%' : '25%',
              maxHeight: isActive ? '100%' : 'auto',
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 16,
              mass: 1,
              duration: shouldAnimate ? RESIZE_ANIMATION_DURATION / 1000 : 0,
            }}
            className={styles.element}
          >
            <div className={styles.content}>
              <h2>{slide.caption}</h2>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
