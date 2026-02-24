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

export type SlideType = {
  caption: string;
  description: string;
  mainMedia: ImageMedia | VideoMedia;
};
