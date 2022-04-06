import { ICovidVariantsDTO } from '../gateways/covid-variants-dto';

export interface ICovidVariantsRepository {
    showDates(date: Date): Promise<ICovidVariantsDTO[]>
    showAllDailyCases(day: number): Promise<ICovidVariantsDTO[]>
}
