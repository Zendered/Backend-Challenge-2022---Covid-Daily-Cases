import { InMemoryRepository } from '@test/domain/contracts/repository/in-memory-repository';
import { ShowCasesOfTheDayController } from '@/application/controller/show-case-of-the-day';
import { IHttpRequest, IHttpResponse } from '@/application/helpers';
import { ICovidVariantsDTO, IUseCase } from '@/domain/contracts/gateways';
import { ShowCasesOfTheDay } from '@/domain/usecases/show-cases-of-the-day';
import { ICasesOfTheDay } from '@/domain/contracts/gateways/cases-of-the-day';

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
    location: 'France',
    date: new Date('2020-10-17'),
    variant: 'Alpha',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  },
  {
    location: 'France',
    date: new Date('2020-10-17'),
    variant: 'Omicron',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  },
  {
    location: 'Brazil',
    date: new Date('2021-10-10'),
    variant: 'Kappa',
    num_sequences: 7,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  },
  {
    location: 'Brazil',
    date: new Date('2021-10-10'),
    variant: 'Lambda',
    num_sequences: 9,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  }];
  const repo = new InMemoryRepository(covidCases);
  const useCase: IUseCase = new ShowCasesOfTheDay(repo);
  const controller = new ShowCasesOfTheDayController(useCase);

  test('should return status code 200 when returning date 2020-10-12', async () => {
    const request: IHttpRequest = {
      data: '2020-10-12',
    };

    const response: IHttpResponse<ICasesOfTheDay[]> = await controller.handle(request.data);
    expect(response.statusCode).toBe(200);
    expect(response.data[0].location).toBe(covidCases[0].location);
    expect(response.data[0].variant[0].name).toBe(covidCases[0].variant);
    expect(response.data[0].variant[0].value).toBe(covidCases[0].num_sequences);
  });

  test('should return status code 200 when returning date 2021-10-10', async () => {
    const request: IHttpRequest = {
      data: '2021-10-10',
    };

    const response: IHttpResponse<ICasesOfTheDay[]> = await controller.handle(request.data);
    expect(response.statusCode).toBe(200);
    expect(response.data[0].location).toBe(covidCases[5].location);
    expect(response.data[0].variant[1].name).toBe(covidCases[5].variant);
    expect(response.data[0].variant[1].value).toBe(covidCases[5].num_sequences);
  });
});
