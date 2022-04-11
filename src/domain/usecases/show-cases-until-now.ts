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
      const findCountry = acc.find(tracked => tracked.location === covidCase.location);
      const total = parseInt(covidCase.num_sequences_total as any, 10);

      if (findCountry) {
        const findVariant = findCountry.variant.find(variant => variant.name === covidCase.variant);
        const totalOfCases = parseInt(findVariant?.value as any, 10);

        if (findVariant && findCountry.location === acc[acc.length - 1].location && findCountry.variant[findCountry.variant.length - 1].name === acc[acc.length - 1].variant[findCountry.variant.length - 1].name) {
          findVariant.value = totalOfCases + total;
          return acc;
        }

        if (findVariant) {
          findVariant.value = totalOfCases + 1;
          return acc;
        }

        findCountry.variant.push({ name: covidCase.variant, value: total });
        return acc;
      }

      return [...acc,
        {
          location: covidCase.location,
          variant: [
            { name: covidCase.variant, value: total },
          ],
        }];
    }, []);
    return result;
  }
}
