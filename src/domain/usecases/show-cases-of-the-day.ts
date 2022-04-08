import { ICasesOfTheDay } from '../contracts/gateways/cases-of-the-day';
import { ICovidVariantsDTO } from '../contracts/gateways/covid-variants-dto';
import { IUseCase } from '../contracts/gateways/use-case';
import { ICovidVariantsRepository } from '../contracts/repository';

export class ShowCasesOfTheDay implements IUseCase {
  constructor(private readonly repo: ICovidVariantsRepository) {}

  async perform(date: string) {
    const caseDate = new Date(date);
    const value = await this.repo.showCasesOfTheDay(caseDate);
    const result:ICasesOfTheDay[] = value.reduce<ICasesOfTheDay[]>((acc, covidCase):ICasesOfTheDay[] => {
      const findCountry = acc.find(tracked => tracked.location === covidCase.location);

      if (findCountry) {
        const findVariant = findCountry.variant.find(variant => variant.name === covidCase.variant);

        if (findVariant) {
          findVariant.value += 1;
          return acc;
        }

        findCountry.variant.push({ name: covidCase.variant, value: covidCase.num_sequences });
        return acc;
      }

      return [...acc,
        {
          location: covidCase.location,
          variant: [
            { name: covidCase.variant, value: covidCase.num_sequences },
          ],
        }];
    }, []);
    return result;
  }
}
