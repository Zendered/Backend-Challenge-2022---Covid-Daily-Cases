import { ICovidVariantsDTO, IUseCase } from '@/domain/contracts/gateways';
import { ShowCasesByDay } from '@/domain/usecases/show-cases-by-day';
import { InMemoryRepository } from '../contracts/repository/in-memory-repository';

describe('show cases by day use case', () => {
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

  test('should return all cases in 20-10-12', async () => {
    const repo = new InMemoryRepository(covidCases);
    const useCase: IUseCase = new ShowCasesByDay(repo);

    const result: ICovidVariantsDTO[] = await useCase.perform(12);
    expect(result[0].date).toEqual(covidCases[0].date);
  });

  test('should return all cases 20-10-15', async () => {
    const repo = new InMemoryRepository(covidCases);
    const useCase: IUseCase = new ShowCasesByDay(repo);

    const result: ICovidVariantsDTO[] = await useCase.perform(15);
    expect(result[0].date).toEqual(covidCases[2].date);
  });
});
