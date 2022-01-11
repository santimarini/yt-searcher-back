import * as faker from 'faker';
import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { YoutubeService } from '@domain/services/youtube.service';
import { searchResult } from '@application/__test__/search-response-mock';
import { HttpModule, HttpService, INestApplication } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, of } from 'rxjs';

describe('Youtube Service', () => {
  let youtubeService: YoutubeService;
  let httpService: HttpService;
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test
      .createTestingModule({
        imports: [HttpModule],
        providers: [
          {
            provide: YoutubeService,
            useValue: {
              search: jest.fn(() => searchResult)
            }
          },
          {
            provide: HttpService,
            useFactory: () => ({
              get: jest.fn(() => searchResult)
            })
          }
        ],
      })
      .compile();
    app = module.createNestApplication();

    youtubeService = module.get<YoutubeService>(YoutubeService);
    httpService = module.get<HttpService>(HttpService);
    await app.init();


  });

  it('should GET search youtube api', async (done) => {

    // httpService.get = jest.fn().mockReturnValue(searchResult)

    const data2 = await youtubeService.search('hola');
    expect(data2).toBeDefined();
    // expect(data._id).toBeDefined();
  });
});
