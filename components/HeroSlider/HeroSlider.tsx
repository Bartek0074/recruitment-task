'use client';

import { useRef } from 'react';

import styles from './HeroSlider.module.scss';

import { useHeroSlider } from './useHeroSlider';

import { DynamicMedia } from '../index';

import { motion } from 'motion/react';

import useMeasure from 'use-measure';

import { SlideType } from '@/types/';

const TRANSLATE_ANIMATION_DURATION = 600;
const RESIZE_ANIMATION_DURATION = 900;
const PADDING = 10;

type Props = {
  slides: SlideType[];
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number) => void;
};

export default function HeroSlider({ slides, currentSlideIndex, setCurrentSlideIndex }: Props) {
  const containerRef = useRef(null);

  const { width, height } = useMeasure(containerRef);

  const { shouldAnimate } = useHeroSlider({
    slides,
    currentSlideIndex,
    setCurrentSlideIndex,
    animationDuration: Math.max(RESIZE_ANIMATION_DURATION, TRANSLATE_ANIMATION_DURATION),
  });

  if (!slides.length) return null;

  return (
    <motion.div
      ref={containerRef}
      className={styles.container}
      initial={false}
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
      {height &&
        width &&
        slides.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          const flexBasis = isActive ? '75%' : '25%';
          const maxHeight = isActive ? height : width / 4 - PADDING;
          return (
            <motion.div
              key={index}
              initial={false}
              animate={{
                flexBasis,
                maxHeight,
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
              <DynamicMedia media={slide.mainMedia} priority={index === 1 || index === 2} />
            </motion.div>
          );
        })}
    </motion.div>
  );
}
