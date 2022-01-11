import * as faker from 'faker';
import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { SearchController } from '@application/controllers/search.controller';
import { YoutubeService } from '@domain/services/youtube.service';
import { searchResult } from './search-response-mock';

describe('User Controller', () => {
  let controller: SearchController;
  let service: YoutubeService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [
        {
          provide: YoutubeService,
          useValue: {
            search: jest.fn(() => searchResult),
          },
        },
      ],
    }).compile();

    controller = module.get<SearchController>(SearchController);
    service = module.get<YoutubeService>(YoutubeService);
  });

  it('should search', async () => {
    const q = faker.name.title();
    const data = await controller.getYoutubeSearch(q);
    expect(data).toBeDefined();
    // check response default length
    expect(data['items'].length).toBe(5);
  });
});
