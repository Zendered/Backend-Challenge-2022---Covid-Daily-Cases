import { AllAvailableDateController } from '@/application/controller/show-all-available-dates';
import { ICovidVariantsDTO } from '@/domain/contracts/gateways';
import { InMemoryRepository } from '@/domain/contracts/repository/in-memory-repository';
import { AllAvailableDate } from '@/domain/usecases/show-all-available-dates';

describe('return all available dates controller', () => {
  const covidCases: ICovidVariantsDTO[] = [{
    location: 'Angola',
    date: new Date('2020-10-12'),
    variant: 'Iota',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  },
  {
    location: 'Angola',
    date: new Date('2020-10-12'),
    variant: 'Alpha',
    num_sequences: 1,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  },
  {
    location: 'France',
    date: new Date('2020-10-17'),
    variant: 'Omicron',
    num_sequences: 0,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  },
  {
    location: 'Brazil',
    date: new Date('2020-10-10'),
    variant: 'Kappa',
    num_sequences: 7,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  },
  {
    location: 'Brazil',
    date: new Date('2020-10-10'),
    variant: 'Lambda',
    num_sequences: 9,
    perc_sequences: 0.0,
    num_sequences_total: 29,
  }];
  const repo = new InMemoryRepository(covidCases);
  const useCase = new AllAvailableDate(repo);
  const controller = new AllAvailableDateController(useCase);

  test('should return status code 200 and all available dates', async () => {
    const result = await controller.handle();
    expect(result.statusCode).toBe(200);
    expect(result.data[0].dates).toBe(covidCases[0].date);
    expect(result.data[1].dates).toBe(covidCases[2].date);
    expect(result.data[2].dates).toBe(covidCases[3].date);
  });
});
