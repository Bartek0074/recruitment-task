import styles from './StatementImage.module.scss';

import Image from 'next/image';

import HeadlineImage from '../../app/_assets/images/logo-bar_headline.svg';

export default function StatementImage() {
  return (
    <div className={styles.container}>
      <Image src={HeadlineImage} className={styles.img} alt="Statement Image" priority />
    </div>
  );
}
