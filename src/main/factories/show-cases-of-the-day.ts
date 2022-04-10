import { ShowCasesOfTheDayController } from '@/application/controller/show-case-of-the-day';
import { ShowCasesOfTheDay } from '@/domain/usecases/show-cases-of-the-day';
import { MongoDbRepository } from '@/infra/repository/mongodb';

export const MakeShowCasesOfTheDayController = (): ShowCasesOfTheDayController => {
  const inMemoryRepository = new MongoDbRepository();
  const usecase = new ShowCasesOfTheDay(inMemoryRepository);
  const controller = new ShowCasesOfTheDayController(usecase);
  return controller;
};
