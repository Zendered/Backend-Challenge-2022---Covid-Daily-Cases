import { ICovidVariantsDTO } from '../gateways/covid-variants-dto';

export interface ICovidVariantsRepository {
    ShowCasesUntilNow(date: Date): Promise<ICovidVariantsDTO[]>
    showCasesOfTheDay(date: Date): Promise<ICovidVariantsDTO[]>
}
