import styles from './HeroContent.module.scss';

import { motion, AnimatePresence } from 'framer-motion';

import { PlusIcon } from '@/icons';

const TRANSITION_DURATION = 900;

type HeroContentProps = {
  title: string;
  text: string;
};

export default function HeroContent({ title, text }: HeroContentProps) {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.container}
        key={`${title}-${text}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { duration: TRANSITION_DURATION / 1000 } }}
        exit={{ opacity: 0, y: 40, transition: { duration: TRANSITION_DURATION / 1000 } }}
      >
        <div className={styles.top}>
          <PlusIcon className={styles.icon} />
          <h1 className={styles.title}>{title}</h1>
        </div>
        <p className={styles.text}>{text}</p>
      </motion.div>
    </AnimatePresence>
  );
}
