import { ICovidVariantsDTO } from '../contracts/gateways/covid-variants-dto';
import { IUseCase } from '../contracts/gateways/use-case';
import { ICovidVariantsRepository } from '../contracts/repository';

export class ShowCasesByDay implements IUseCase {
  constructor(private readonly repo: ICovidVariantsRepository) {}

  async perform(day: number): Promise<ICovidVariantsDTO[]> {
    const value = await this.repo.showAllDailyCases(day);
    return value;
  }
}
