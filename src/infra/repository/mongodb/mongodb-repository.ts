import { ICovidVariantsDTO } from '@/domain/contracts/gateways';
import { ICovidVariantsRepository } from '@/domain/contracts/repository';
import { isBefore, isSameDay } from 'date-fns';
import { MongoHelper } from './helper';

export class MongoDbRepository implements ICovidVariantsRepository {
  async showCasesOfTheDay(date: Date): Promise<ICovidVariantsDTO[]> {
    const covidCasesCollection = MongoHelper.getCollection('cases');
    const result = (await covidCasesCollection).find<ICovidVariantsDTO>({}).toArray();
    const allCases = (await result).filter(covidCase => isSameDay(new Date(covidCase.date), date));
    return allCases;
  }

  async ShowCasesUntilNow(date: Date): Promise<ICovidVariantsDTO[]> {
    const covidCase = await this.showCasesOfTheDay(date);
    const covidCasesCollection = MongoHelper.getCollection('cases');
    const showCasesUntilNow = (await covidCasesCollection).find<ICovidVariantsDTO>({}).toArray();
    const allCases = (await showCasesUntilNow).filter(covidDate => isBefore(new Date(covidDate.date), date));
    const result = [...covidCase, ...allCases];
    return result;
  }

  async allAvailableDate(): Promise<ICovidVariantsDTO[]> {
    const covidCasesCollection = MongoHelper.getCollection('cases');
    const showCasesUntilNow = (await covidCasesCollection).find<ICovidVariantsDTO>({}).toArray();
    return showCasesUntilNow;
  }
}
