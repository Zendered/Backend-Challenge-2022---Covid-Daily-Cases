import { ICovidVariantsDTO } from '@/domain/contracts/gateways';
import { InMemoryRepository } from '@/domain/contracts/repository/in-memory-repository';
import { ShowCasesUntilNow } from '@/domain/usecases/show-cases-until-now';
import { ShowCasesByDateController } from '@/application/controller/show-case-by-date';

export const MakeShowCasesUntilNowController = (): ShowCasesByDateController => {
  const covidVariants: ICovidVariantsDTO[] = [{
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

  const inMemoryRepository = new InMemoryRepository(covidVariants);
  const usecase = new ShowCasesUntilNow(inMemoryRepository);
  const controller = new ShowCasesByDateController(usecase);
  return controller;
};
