import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import * as faker from 'faker';

import { SearchController } from '@application/controllers/search.controller';
jest.setTimeout(30000);

describe('AppController (e2e)', () => {
  let app: any;
  const expected = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  function generateData() {
    const user = {
      name: faker.name.findName(),
      lastname: faker.name.lastName(),
      age: faker.random.number(),
    };
    return user;
  }

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [SearchController]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => { console.log('Done'); });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/search')
      .expect(200)
      .expect('Hello World!');
  });
});
