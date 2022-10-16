import { HttpModule, HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { mockArticlesData } from './mocks/apiDummyResponse';

const mockCacheManager = {
  get: jest.fn().mockReturnValue(null),
  set: jest.fn().mockReturnValue(null),
};

describe('ArticlesController', () => {
  let moduleDef: TestingModule;
  let service: ArticlesService;
  let controller: ArticlesController;

  beforeAll(async () => {
    moduleDef = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [ArticlesController],
      providers: [
        ArticlesService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    service = moduleDef.get<ArticlesService>(ArticlesService);
    controller = moduleDef.get<ArticlesController>(ArticlesController);

    jest
      .spyOn(service, 'findAll')
      .mockResolvedValueOnce(Promise.resolve(mockArticlesData));
  });

  it('should be defined', () => {
    expect(moduleDef).toBeDefined();
  });

  it('should return an array of 10 elements', async () => {
    const result = await controller.findAll();
    expect(result).toHaveLength(10);
  });

  it('Should just return title, image, and url by element', async () => {
    const result = await controller.findAll();
    expect(result[0]).toEqual(
      expect.objectContaining({
        title: expect.any(String),
        url: expect.any(String),
        image: expect.any(String),
      })
    );
  });
});
