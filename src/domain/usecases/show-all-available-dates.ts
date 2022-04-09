import { CompareDate } from '@/external/date-fns/is-same-day';
import { ICovidVariantsDTO, IUseCase } from '../contracts/gateways';
import { IAllAvailableDate } from '../contracts/gateways/all-available-dates';
import { ICovidVariantsRepository } from '../contracts/repository';

export class AllAvailableDate implements IUseCase {
  constructor(private readonly repo: ICovidVariantsRepository) {}

  async perform() {
    const value = await this.repo.allAvailableDate();
    const result = value.reduce((acc:IAllAvailableDate[], dates: ICovidVariantsDTO):IAllAvailableDate[] => {
      const findDate = new CompareDate().isSameDate(acc[acc.length - 1].dates, dates.date);
      if (!findDate) {
        acc.push({ dates: dates.date });
        return acc;
      }

      return [...acc];
    }, [{ dates: value[0].date }]);
    return result;
  }
}
