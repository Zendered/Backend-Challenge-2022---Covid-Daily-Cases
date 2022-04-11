import 'dotenv/config';
import { MongoHelper } from '@/infra/repository/mongodb/helper';
import { MongoDbRepository } from '@/infra/repository/mongodb';
import { ShowCasesUntilNow } from '@/domain/usecases/show-cases-until-now';
import { ShowCasesUntilNowController } from '@/application/controller/show-case-until-now';
import { IHttpRequest, IHttpResponse } from '@/application/helpers';
import { ICasesOfTheDay } from '@/domain/contracts/gateways/cases-of-the-day';

describe('mongodb covid cases repository', () => {
  jest.setTimeout(45000);
  beforeAll(async () => {
    await MongoHelper.connect(`${process.env.PROD_MONGO_URL}`);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  test('should return cases of the day', async () => {
    const repo = new MongoDbRepository();
    const result = await repo.showCasesOfTheDay(new Date('2020-10-12'));

    expect(result).toBeTruthy();
  });

  test('should return cases until now', async () => {
    const repo = new MongoDbRepository();
    const useCase = new ShowCasesUntilNow(repo);
    const controller = new ShowCasesUntilNowController(useCase);
    const request: IHttpRequest = {
      data: '2020-09-28',
    };
    const result: IHttpResponse<ICasesOfTheDay[]> = await controller.handle(request.data);

    expect(result).toBeTruthy();
  });

  test('should return all available dates', async () => {
    const repo = await new MongoDbRepository();
    const result = await repo.allAvailableDate();

    expect(result).toBeTruthy();
  });
});
