import { ICovidVariantsDTO, IUseCase } from '@/domain/contracts/gateways';
import { ShowCasesUntilNow } from '@/domain/usecases/show-cases-until-now';
import { InMemoryRepository } from '@test/domain/contracts/repository/in-memory-repository';

describe('show cases by date use case', () => {
  const covidCases: ICovidVariantsDTO[] = [{
    location: 'Angola',
    date: new Date('2020-10-12'),
    variant: 'Iota',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 1,
  },
  {
    location: 'Angola',
    date: new Date('2020-10-12'),
    variant: 'Iota',
    num_sequences: 1,
    perc_sequences: 0.0,
    num_sequences_total: 1,
  },
  {
    location: 'Angola',
    date: new Date('2020-10-12'),
    variant: 'Iota',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 1,
  },
  {
    location: 'Angola',
    date: new Date('2020-10-12'),
    variant: 'Omicron',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 1,
  },
  {
    location: 'Angola',
    date: new Date('2020-10-12'),
    variant: 'Omicron',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 1,
  },
  {
    location: 'France',
    date: new Date('2020-10-17'),
    variant: 'Omicron',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 1,
  },
  {
    location: 'Brazil',
    date: new Date('2020-10-10'),
    variant: 'Kappa',
    num_sequences: 7,
    perc_sequences: 0.0,
    num_sequences_total: 1,
  },
  {
    location: 'Brazil',
    date: new Date('2020-10-10'),
    variant: 'Kappa',
    num_sequences: 9,
    perc_sequences: 0.0,
    num_sequences_total: 1,
  }];

  test('should return all cases until 20-10-17', async () => {
    const repo = new InMemoryRepository(covidCases);
    const useCase: IUseCase = new ShowCasesUntilNow(repo);
    const result: ICovidVariantsDTO[] = await useCase.perform('2020-10-17');
    expect(result[0].location).toEqual(covidCases[5].location);
    expect(result[1].location).toEqual(covidCases[0].location);
    expect(result[2].location).toEqual(covidCases[6].location);
  });

  // test('should return all cases in 20-10-15', async () => {
  //   const repo = new InMemoryRepository(covidCases);
  //   const useCase: IUseCase = new ShowCasesByDate(repo);
  //   const result: ICovidVariantsDTO[] = await useCase.perform('2020-10-15');
  //   expect(result[0].date).toEqual(covidCases[2].date);
  // });
});
