import { InMemoryRepository } from '@test/domain/contracts/repository/in-memory-repository';
import { ShowCasesByDayController } from '@/application/controller/show-case-by-day';
import { IHttpRequest, IHttpResponse } from '@/application/helpers';
import { ICovidVariantsDTO, IUseCase } from '@/domain/contracts/gateways';
import { ShowCasesByDay } from '@/domain/usecases/show-cases-by-day';

describe('show all cases controller', () => {
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
  const useCase: IUseCase = new ShowCasesByDay(repo);
  const controller = new ShowCasesByDayController(useCase);

  test('should return status code 200 when returning date 2020-10-12', async () => {
    const request: IHttpRequest = {
      data: 12,
    };

    const response: IHttpResponse<ICovidVariantsDTO[]> = await controller.handle(request.data);
    expect(response.statusCode).toBe(200);
    expect(response.data[0].date.getDate()).toBe(11);
  });

  test('should return status code 200 when returning date 2020-10-15', async () => {
    const request: IHttpRequest = {
      data: 15,
    };

    const response: IHttpResponse<ICovidVariantsDTO[]> = await controller.handle(request.data);
    expect(response.statusCode).toBe(200);
    expect(response.data[0].date.getDate()).toBe(14);
  });
});
