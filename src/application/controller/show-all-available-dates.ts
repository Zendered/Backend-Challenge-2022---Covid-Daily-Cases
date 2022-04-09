import { AllAvailableDate } from '@/domain/usecases/show-all-available-dates';
import { ok } from '../helpers';

export class AllAvailableDateController {
  constructor(private readonly useCase: AllAvailableDate) {}

  async handle() {
    const response = await this.useCase.perform();
    return ok(response);
  }
}
