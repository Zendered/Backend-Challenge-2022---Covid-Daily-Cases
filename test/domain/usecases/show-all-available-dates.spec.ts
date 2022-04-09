import { ICovidVariantsDTO, IUseCase } from '@/domain/contracts/gateways';
import { ICasesOfTheDay } from '@/domain/contracts/gateways/cases-of-the-day';
import { AllAvailableDate } from '@/domain/usecases/show-all-available-dates';
import { InMemoryRepository } from '@test/domain/contracts/repository/in-memory-repository';

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
    variant: 'Alpha',
    num_sequences: 1,
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
    date: new Date('2020-10-10'),
    variant: 'Kappa',
    num_sequences: 7,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  },
  {
    location: 'Brazil',
    date: new Date('2020-10-10'),
    variant: 'Lambda',
    num_sequences: 9,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  }];
  const repo = new InMemoryRepository(covidCases);
  const useCase = new AllAvailableDate(repo);

  test('should return all available dates', async () => {
    const result = await useCase.perform();

    expect(result[0].dates).toBe(covidCases[0].date);
    expect(result[1].dates).toBe(covidCases[2].date);
    expect(result[2].dates).toBe(covidCases[3].date);
  });
});
