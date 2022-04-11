import { ShowCasesUntilNow } from '@/domain/usecases/show-cases-until-now';
import { ShowCasesUntilNowController } from '@/application/controller/show-case-until-now';
import { MongoDbRepository } from '@/infra/repository/mongodb';

export const MakeShowCasesUntilNowController = (): ShowCasesUntilNowController => {
  const inMemoryRepository = new MongoDbRepository();
  const usecase = new ShowCasesUntilNow(inMemoryRepository);
  const controller = new ShowCasesUntilNowController(usecase);
  return controller;
};
