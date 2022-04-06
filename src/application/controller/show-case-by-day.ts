import { IUseCase } from '@/domain/contracts/gateways/use-case';
import { IHttpRequest, IHttpResponse, ok } from '../helpers';

export class ShowCasesByDayController {
  constructor(private readonly useCase: IUseCase) {}

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    const response = await this.useCase.perform(req);
    return ok(response);
  }
}
