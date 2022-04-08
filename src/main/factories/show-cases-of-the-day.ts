import { ShowCasesOfTheDayController } from '@/application/controller/show-case-of-the-day';
import { ICovidVariantsDTO } from '@/domain/contracts/gateways';
import { ShowCasesOfTheDay } from '@/domain/usecases/show-cases-of-the-day';
import { InMemoryRepository } from '@/domain/contracts/repository/in-memory-repository';

export const MakeShowCasesOfTheDayController = (): ShowCasesOfTheDayController => {
  const covidVariants: ICovidVariantsDTO[] = [{
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

  const inMemoryRepository = new InMemoryRepository(covidVariants);
  const usecase = new ShowCasesOfTheDay(inMemoryRepository);
  const controller = new ShowCasesOfTheDayController(usecase);
  return controller;
};
