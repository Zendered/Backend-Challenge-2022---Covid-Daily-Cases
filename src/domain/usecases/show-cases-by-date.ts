import { ICovidVariantsDTO } from '../contracts/gateways/covid-variants-dto';
import { IUseCase } from '../contracts/gateways/use-case';
import { ICovidVariantsRepository } from '../contracts/repository';

export class ShowCasesByDate implements IUseCase {
  constructor(private readonly repo: ICovidVariantsRepository) {}

  async perform(date: string): Promise<ICovidVariantsDTO[]> {
    const caseDate = new Date(date);
    const value = await this.repo.showByDates(caseDate);
    return value;
  }
}
