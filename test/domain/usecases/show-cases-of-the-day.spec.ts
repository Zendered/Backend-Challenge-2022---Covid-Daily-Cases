import { ICovidVariantsDTO, IUseCase } from '@/domain/contracts/gateways';
import { ICasesOfTheDay } from '@/domain/contracts/gateways/cases-of-the-day';
import { ShowCasesOfTheDay } from '@/domain/usecases/show-cases-of-the-day';
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
    location: 'Angola',
    date: new Date('2020-10-12'),
    variant: 'Lambda',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  },
  {
    location: 'Angola',
    date: new Date('2020-10-12'),
    variant: 'Omicron',
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
  const useCase: IUseCase = new ShowCasesOfTheDay(repo);

  test('should return all cases in 20-10-10', async () => {
    const result:ICasesOfTheDay[] = await useCase.perform('2020-10-10');
    expect(result[0].location).toEqual(covidCases[6].location);
    expect(result[0].variant[0].name).toEqual(covidCases[6].variant);
    expect(result[0].variant[0].value).toEqual(covidCases[6].num_sequences);
  });

  test('should return all cases 20-10-17', async () => {
    const result:ICasesOfTheDay[] = await useCase.perform('2020-10-17');
    expect(result[0].location).toEqual(covidCases[5].location);
    expect(result[0].variant[0].name).toEqual(covidCases[5].variant);
    expect(result[0].variant[0].value).toEqual(covidCases[5].num_sequences);
  });

  test('should return all cases 20-10-12', async () => {
    const result:ICasesOfTheDay[] = await useCase.perform('2020-10-12');
    expect(result[0].location).toEqual(covidCases[0].location);
    expect(result[0].variant[0].name).toEqual(covidCases[0].variant);
    expect(result[0].variant[0].value).toEqual(covidCases[0].num_sequences);
  });
});
