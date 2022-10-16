import { Controller, Get, Query } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleDto } from './dto/articles.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async findAll(@Query('page') page = 1) {
    const pageSlice = (page > 1 ? page * 10 : 1) - 1;
    const res = await this.articlesService.findAll();

    return ArticleDto.fromEntries(res.slice(pageSlice, pageSlice + 10));
  }
}
