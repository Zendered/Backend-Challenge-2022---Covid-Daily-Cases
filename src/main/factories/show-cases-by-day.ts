import { ShowCasesByDayController } from '@/application/controller/show-case-by-day';
import { ICovidVariantsDTO } from '@/domain/contracts/gateways';
import { ShowCasesByDay } from '@/domain/usecases/show-cases-by-day';
import { InMemoryRepository } from '@/domain/contracts/repository/in-memory-repository';

export const MakeShowCasesByDayController = (): ShowCasesByDayController => {
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
  const usecase = new ShowCasesByDay(inMemoryRepository);
  const controller = new ShowCasesByDayController(usecase);
  return controller;
};
