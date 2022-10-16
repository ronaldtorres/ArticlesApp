import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { lastValueFrom, map } from 'rxjs';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  private CACHE_KEY = 'articles_list';
  private CACHE_TIME = 5; // minutes

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly axios: HttpService
  ) {}

  fetchArticles() {
    return this.axios
      .get('https://api.spaceflightnewsapi.net/v3/articles?_limit=100')
      .pipe(map((res: AxiosResponse<Article[]>) => res.data));
  }

  async findAll(): Promise<Article[]> {
    try {
      const fromCache = await this.cacheManager.get<Article[]>(this.CACHE_KEY);

      if (fromCache) {
        return Promise.resolve(fromCache);
      }

      const request = this.fetchArticles();
      const data = await lastValueFrom(request);

      this.cacheManager.set(this.CACHE_KEY, data, {
        ttl: this.CACHE_TIME * 60,
      });

      return Promise.resolve(data);
    } catch (error) {
      throw new Error(error);
    }
  }
}
