import styles from './HeroContentSecondary.module.scss';

import { motion, AnimatePresence } from 'framer-motion';

import { PlusIcon } from '@/icons';

const TRANSITION_DURATION = 900;

type HeroContentSecondaryProps = {
  title: string;
};

export default function HeroContentSecondary({ title }: HeroContentSecondaryProps) {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.container}
        key={`${title}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { duration: TRANSITION_DURATION / 1000 } }}
        exit={{ opacity: 0, y: 40, transition: { duration: TRANSITION_DURATION / 1000 } }}
      >
        <PlusIcon className={styles.icon} />
        <h2 className={styles.title}>{title}</h2>
      </motion.div>
    </AnimatePresence>
  );
}
