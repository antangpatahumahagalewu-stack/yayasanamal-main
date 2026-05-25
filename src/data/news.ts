import { TFunction } from 'i18next';
import images from '../assets/images';

interface BodyImage {
  index: number;
  src: string;
  alt: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: { src: string; alt: string };
  date: string;
  author: string;
  category: string;
  content: string;
  bodyImages?: BodyImage[];
}

export const getNews = (t: TFunction): NewsArticle[] => [
  {
    id: 3,
    title: t('news.article3Title'),
    excerpt: t('news.article3Excerpt'),
    image: images.artikel3Img1,
    date: t('news.article3Date'),
    author: t('news.article3Author'),
    category: 'Kolaborasi',
    content: t('news.article3Content'),
    bodyImages: [
      {
        index: 16,
        src: images.artikel3Img2.src,
        alt: images.artikel3Img2.alt
      }
    ]
  },
  {
    id: 8,
    title: t('news.article8Title'),
    excerpt: t('news.article8Excerpt'),
    image: images.pksPenandatangan1,
    date: t('news.article8Date'),
    author: t('news.article8Author'),
    category: 'Kemitraan',
    content: t('news.article8Content'),
    bodyImages: [
      {
        index: 7,
        src: images.pksPenandatangan2.src,
        alt: images.pksPenandatangan2.alt
      }
    ]
  }
];
