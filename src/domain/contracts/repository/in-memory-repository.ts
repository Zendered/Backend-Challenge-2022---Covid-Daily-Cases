import { ICovidVariantsDTO } from '@/domain/contracts/gateways/covid-variants-dto';
import { ICovidVariantsRepository } from '@/domain/contracts/repository';
import { isSameDay, isBefore } from 'date-fns';

export class InMemoryRepository implements ICovidVariantsRepository {
  constructor(private readonly repo: ICovidVariantsDTO[] = []) {}

  async showCasesOfTheDay(date: Date): Promise<ICovidVariantsDTO[]> {
    const allCases = await this.repo.filter(covidCase => isSameDay(covidCase.date, date));
    return allCases;
  }

  async ShowCasesUntilNow(date: Date): Promise<ICovidVariantsDTO[]> {
    const covidCase = await this.showCasesOfTheDay(date);
    const validDates = await this.repo.filter(covidDate => isBefore(covidDate.date, date));
    const result = [...covidCase, ...validDates];
    return result;
  }

  async allAvailableDate(): Promise<ICovidVariantsDTO[]> {
    const allCases = await this.repo;
    return [...allCases];
  }
}
