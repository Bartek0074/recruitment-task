import { MediaTypeEnum } from '@/enums';

type ImageMedia = {
  mediaType: MediaTypeEnum.IMAGE;
  image: {
    url: string;
  };
};

type VideoMedia = {
  mediaType: MediaTypeEnum.VIDEO;
  video: string;
};

export type MediaType = ImageMedia | VideoMedia;
