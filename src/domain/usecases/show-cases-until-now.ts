import { ICovidVariantsDTO } from '../contracts/gateways';
import { ICasesOfTheDay } from '../contracts/gateways/cases-of-the-day';
import { IUseCase } from '../contracts/gateways/use-case';
import { ICovidVariantsRepository } from '../contracts/repository';

export class ShowCasesUntilNow implements IUseCase {
  constructor(private readonly repo: ICovidVariantsRepository) {}

  async perform(date: string): Promise<ICasesOfTheDay[]> {
    const caseDate = new Date(date);
    const value = await this.repo.ShowCasesUntilNow(caseDate);
    const result:ICasesOfTheDay[] = value.reduce<ICasesOfTheDay[]>((acc, covidCase:ICovidVariantsDTO):ICasesOfTheDay[] => {
      // descobre se a pais do "acc" findCountry é igual a do covidCase
      const findCountry = acc.find(tracked => tracked.location === covidCase.location);

      if (findCountry) {
        // descobre se a variante do findCountry é igual a do covidCase
        const findVariant = findCountry.variant.find(variant => variant.name === covidCase.variant);

        if (findVariant && findCountry.location === acc[acc.length - 1].location && findCountry.variant[findCountry.variant.length - 1].name === acc[acc.length - 1].variant[findCountry.variant.length - 1].name) {
          findVariant.value += covidCase.num_sequences_total;
          return acc;
        }

        if (findVariant) {
          findVariant.value += 1;
          return acc;
        }

        findCountry.variant.push({ name: covidCase.variant, value: covidCase.num_sequences_total });
        return acc;
      }

      return [...acc,
        {
          location: covidCase.location,
          variant: [
            { name: covidCase.variant, value: covidCase.num_sequences_total },
          ],
        }];
    }, []);
    return result;
  }
}
