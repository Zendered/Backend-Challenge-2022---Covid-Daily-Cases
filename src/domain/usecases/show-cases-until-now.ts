import { ICasesOfTheDay } from '../contracts/gateways/cases-of-the-day';
import { IUseCase } from '../contracts/gateways/use-case';
import { ICovidVariantsRepository } from '../contracts/repository';

export class ShowCasesUntilNow implements IUseCase {
  constructor(private readonly repo: ICovidVariantsRepository) {}

  async perform(date: string): Promise<ICasesOfTheDay[]> {
    const caseDate = new Date(date);
    const value = await this.repo.ShowCasesUntilNow(caseDate);
    const result:ICasesOfTheDay[] = value.reduce<ICasesOfTheDay[]>((acc, covidCase):ICasesOfTheDay[] => {
      // eslint-disable-next-line no-debugger
      debugger;
      const findCountry = acc.find(tracked => tracked.location === covidCase.location);

      if (findCountry) {
        const findVariant = findCountry.variant.find(variant => variant.name === covidCase.variant);
        const findValue = findCountry.variant.find(totalCases => totalCases.value === covidCase.num_sequences_total);

        if (findVariant) {
          findVariant.value += 1;
          return acc;
        }

        if (findValue && findCountry.location === acc[0].location && findCountry.variant[0].name === acc[0].variant[0].name) {
          findValue.value += acc[0].variant[0].value;
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
