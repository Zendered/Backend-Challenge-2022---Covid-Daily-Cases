import { ICovidVariantsDTO, IUseCase } from '@/domain/contracts/gateways';
import { ShowCasesUntilNow } from '@/domain/usecases/show-cases-until-now';
import { InMemoryRepository } from '@test/domain/contracts/repository/in-memory-repository';

describe('show cases by date use case', () => {
  const covidCases: ICovidVariantsDTO[] = [{
    location: 'Angola',
    date: new Date('2020-10-02'),
    variant: 'Iota',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 20,
  },
  {
    location: 'Angola',
    date: new Date('2020-10-07'),
    variant: 'Iota',
    num_sequences: 1,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  },
  {
    location: 'Angola',
    date: new Date('2020-10-16'),
    variant: 'Iota',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 20,
  },
  {
    location: 'Argentina',
    date: new Date('2020-10-07'),
    variant: 'Omicron',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 59,
  },
  {
    location: 'Argentina',
    date: new Date('2020-10-11'),
    variant: 'Omicron',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 10,
  },
  {
    location: 'France',
    date: new Date('2020-10-17'),
    variant: 'Omicron',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 7,
  },
  {
    location: 'Brazil',
    date: new Date('2020-10-14'),
    variant: 'Kappa',
    num_sequences: 7,
    perc_sequences: 0.0,
    num_sequences_total: 30,
  },
  {
    location: 'Brazil',
    date: new Date('2020-10-12'),
    variant: 'Kappa',
    num_sequences: 9,
    perc_sequences: 0.0,
    num_sequences_total: 39,
  },
  ];
  const repo = new InMemoryRepository(covidCases);
  const useCase: IUseCase = new ShowCasesUntilNow(repo);

  test('should return all cases until 20-10-17', async () => {
    const result: ICovidVariantsDTO[] = await useCase.perform('2020-10-17');
    expect(result[0].location).toEqual(covidCases[5].location);
    expect(result[1].location).toEqual(covidCases[0].location);
    // expect(result[2].location).toEqual(covidCases[6].location);
  });
});
