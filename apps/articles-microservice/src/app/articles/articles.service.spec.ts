import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { CACHE_MANAGER } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { responseMock } from './mocks/apiDummyResponse';
import { of } from 'rxjs';

const mockCacheManager = {
  get: jest.fn().mockReturnValue(null),
  set: jest.fn().mockReturnValue(null),
};

describe('ArticlesService', () => {
  let service: ArticlesService;
  let http: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        ArticlesService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
    http = module.get(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should call the external api', async () => {
    jest
      .spyOn(http, 'get')
      .mockImplementation(() => of<AxiosResponse>(responseMock));

    await service.findAll();

    expect(http.get).toBeCalledWith(
      'https://api.spaceflightnewsapi.net/v3/articles?_limit=100'
    );
  });
});
