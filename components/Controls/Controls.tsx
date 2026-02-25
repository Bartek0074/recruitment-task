import styles from './Controls.module.scss';

import { ArrowLeftIcon, ArrowRightIcon } from '../../icons';

type ControlsProps = {
  onPrev: () => void;
  onNext: () => void;
};

export default function Controls({ onPrev, onNext }: ControlsProps) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onPrev}>
        <ArrowLeftIcon className={styles.icon} aria-label="Previous slide" />
      </button>
      <button className={styles.button} onClick={onNext} aria-label="Next slide">
        <ArrowRightIcon className={styles.icon} />
      </button>
    </div>
  );
}
