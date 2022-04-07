import { ICovidVariantsDTO } from '@/domain/contracts/gateways/covid-variants-dto';
import { ICovidVariantsRepository } from '@/domain/contracts/repository';

export class InMemoryRepository implements ICovidVariantsRepository {
  constructor(private readonly repo: ICovidVariantsDTO[] = []) {}

  async showAllDailyCases(day: number): Promise<ICovidVariantsDTO[]> {
    const allCases = await this.repo.filter(covidCase => covidCase.date.getDate() === day - 1);
    return allCases;
  }

  async showByDates(date: Date): Promise<ICovidVariantsDTO[]> {
    const validDates = await this.repo.filter(covidDate => covidDate.date === date);
    return validDates;
  }
}
