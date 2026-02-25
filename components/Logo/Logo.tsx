import styles from './Logo.module.scss';

import Image from 'next/image';

import Link from 'next/link';

import LogoImage from '../../app/_assets/images/nav_logo-desktop.svg';

export default function Logo() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.link}>
        <Image src={LogoImage} className={styles.img} alt="Logo" />
      </Link>
    </div>
  );
}
