import styles from './DynamicMedia.module.scss';

import Image from 'next/image';

import { MediaType } from '@/types/';

import { MediaTypeEnum } from '@/enums';

type Props = { media: MediaType; priority?: boolean };

export default function DynamicMedia({ media, priority = false }: Props) {
  if (media.mediaType === MediaTypeEnum.IMAGE) {
    return (
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={media.image.url}
          alt=""
          fill
          priority={priority}
          sizes="75vw"
          loading="eager"
        />
      </div>
    );
  } else if (media.mediaType === MediaTypeEnum.VIDEO) {
    return (
      <div className={styles.container}>
        <video className={styles.video} src={media.video} autoPlay loop muted />
      </div>
    );
  }

  return null;
}
