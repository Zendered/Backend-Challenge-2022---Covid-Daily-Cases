import { ShowCasesUntilNow } from '@/domain/usecases/show-cases-until-now';
import { ShowCasesByDateController } from '@/application/controller/show-case-by-date';
import { MongoDbRepository } from '@/infra/repository/mongodb';

export const MakeShowCasesUntilNowController = (): ShowCasesByDateController => {
  const inMemoryRepository = new MongoDbRepository();
  const usecase = new ShowCasesUntilNow(inMemoryRepository);
  const controller = new ShowCasesByDateController(usecase);
  return controller;
};
