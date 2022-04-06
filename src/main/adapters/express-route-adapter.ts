import { ShowCasesByDayController } from '@/application/controller/show-case-by-day';
import { IHttpRequest } from '@/application/helpers';
import { Request, Response } from 'express';

export const adaptRoute = (controller: ShowCasesByDayController) => async (req: Request, res: Response) => {
  const httpRequest: IHttpRequest = {
    data: req.params.date,
  };
  const httpResponse = await controller.handle(httpRequest.data);
  res.status(httpResponse.statusCode).json(httpResponse.data);
};
