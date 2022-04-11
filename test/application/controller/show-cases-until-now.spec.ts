import { InMemoryRepository } from '@test/domain/contracts/repository/in-memory-repository';
import { IHttpRequest, IHttpResponse } from '@/application/helpers';
import { ICovidVariantsDTO, IUseCase } from '@/domain/contracts/gateways';
import { ShowCasesUntilNow } from '@/domain/usecases/show-cases-until-now';
import { ShowCasesUntilNowController } from '@/application/controller/show-case-until-now';

describe('show all cases by date controller', () => {
  const covidCases: ICovidVariantsDTO[] = [{
    location: 'Angola',
    date: new Date('2020-10-12'),
    variant: 'Iota',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  },
  {
    location: 'Angola',
    date: new Date('2020-10-12'),
    variant: 'Kappa',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  },
  {
    location: 'Angola',
    date: new Date('2020-10-15'),
    variant: 'Lambda',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  }];
  const repo = new InMemoryRepository(covidCases);
  const useCase: IUseCase = new ShowCasesUntilNow(repo);
  const controller = new ShowCasesUntilNowController(useCase);

  test('should return status code 200 when returning cases relationated date 2020-10-12', async () => {
    const request: IHttpRequest = {
      data: '2020-10-12',
    };

    const response: IHttpResponse<ICovidVariantsDTO[]> = await controller.handle(request.data);
    expect(response.statusCode).toBe(200);
    expect(response.data[0].location).toBe(covidCases[0].location);
  });

  test('should return status code 200 when returning cases relationated date 2020-10-15', async () => {
    const request: IHttpRequest = {
      data: '2020-10-15',
    };

    const response: IHttpResponse<ICovidVariantsDTO[]> = await controller.handle(request.data);
    expect(response.statusCode).toBe(200);
    expect(response.data[0].location).toBe(covidCases[2].location);
  });
});
