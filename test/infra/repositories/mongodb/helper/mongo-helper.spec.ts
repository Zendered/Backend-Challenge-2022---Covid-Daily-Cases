import 'dotenv/config';
import { MongoHelper } from '@/infra/repository/mongodb/helper';
import { MongoDbRepository } from '@/infra/repository/mongodb';

describe('mongodb covid cases repository', () => {
  jest.setTimeout(45000);
  beforeAll(async () => {
    await MongoHelper.connect(`${process.env.PROD_MONGO_URL}`);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  test.only('should return cases of the day', async () => {
    const repo = new MongoDbRepository();
    const result = await repo.showCasesOfTheDay(new Date('2020-10-12'));

    expect(result).toBeTruthy();
  });

  test('should return cases until now', async () => {
    const repo = new MongoDbRepository();
    const result = await repo.ShowCasesUntilNow(new Date('2020-10-17'));

    expect(result).toBeTruthy();
  });

  test('should return all available dates', async () => {
    const repo = new MongoDbRepository();
    const result = await repo.allAvailableDate();

    expect(result).toBeTruthy();
  });
});
