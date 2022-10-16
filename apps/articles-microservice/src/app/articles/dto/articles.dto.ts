import { Article } from '../entities/article.entity';

export class ArticleDto {
  title: string;
  image: string;
  url: string;

  static fromEntries(entries: Article[]): ArticleDto[] {
    return entries.map(({ imageUrl, title, url }) => ({
      title,
      url,
      image: imageUrl,
    }));
  }
}
