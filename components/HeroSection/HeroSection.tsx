'use client';

import styles from './HeroSection.module.scss';

import { useHeroSection } from './useHeroSection';

import { motion } from 'motion/react';

import {
  Logo,
  Controls,
  HeroContent,
  HeroContentSecondary,
  HeroSlider,
  StatementImage,
} from '../index';

import { SlideType } from '@/types/';

const ANIMATION_DURATION = 900;

type Props = { slides: SlideType[] };

export default function HeroSection({ slides }: Props) {
  const { loopedSlides, currentSlideIndex, setCurrentSlideIndex, onNextSlide, onPrevSlide } =
    useHeroSection({ slides });

  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 8,
        mass: 1.2,
        duration: ANIMATION_DURATION / 1000,
      }}
    >
      <Logo />
      <StatementImage />
      <HeroContent
        title={loopedSlides[currentSlideIndex].caption}
        text={loopedSlides[currentSlideIndex].description}
      />
      <HeroContentSecondary
        title={loopedSlides[(currentSlideIndex + 1) % loopedSlides.length].caption}
      />
      <HeroSlider
        slides={loopedSlides}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
      <Controls onNext={onNextSlide} onPrev={onPrevSlide} />
    </motion.section>
  );
}
