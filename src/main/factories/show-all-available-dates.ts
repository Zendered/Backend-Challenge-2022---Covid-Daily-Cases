import { AllAvailableDateController } from '@/application/controller/show-all-available-dates';
import { AllAvailableDate } from '@/domain/usecases/show-all-available-dates';
import { MongoDbRepository } from '@/infra/repository/mongodb';

export const MakeShowAllAvailableDatesController = (): AllAvailableDateController => {
  const inMemoryRepository = new MongoDbRepository();
  const usecase = new AllAvailableDate(inMemoryRepository);
  const controller = new AllAvailableDateController(usecase);
  return controller;
};
