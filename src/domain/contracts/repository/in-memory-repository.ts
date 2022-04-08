import { ICovidVariantsDTO } from '@/domain/contracts/gateways/covid-variants-dto';
import { ICovidVariantsRepository } from '@/domain/contracts/repository';
import { isSameDay } from 'date-fns';

export class InMemoryRepository implements ICovidVariantsRepository {
  constructor(private readonly repo: ICovidVariantsDTO[] = []) {}

  async showCasesOfTheDay(date: Date): Promise<ICovidVariantsDTO[]> {
    const allCases = await this.repo.filter(covidCase => isSameDay(covidCase.date, date));
    return allCases;
  }

  async showByDates(date: Date): Promise<ICovidVariantsDTO[]> {
    const validDates = await this.repo.filter(covidDate => isSameDay(covidDate.date, date));
    return validDates;
  }
}
