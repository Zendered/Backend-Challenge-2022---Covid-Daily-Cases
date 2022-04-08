import { ICovidVariantsDTO } from '../gateways/covid-variants-dto';

export interface ICovidVariantsRepository {
    showByDates(date: Date): Promise<ICovidVariantsDTO[]>
    showCasesOfTheDay(date: Date): Promise<ICovidVariantsDTO[]>
}
