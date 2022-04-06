import { Request, Response, Router } from 'express';
import { adaptRoute } from '../adapters/express-route-adapter';
import { MakeShowCasesByDayController } from '../factories/show-cases-by-day';

export default (router: Router): void => {
  router.get('/cases/:date/count', adaptRoute(MakeShowCasesByDayController()));
  router.get('/', (req: Request, res: Response) => {
    res.send('Backend Challenge 2021 🏅 - Covid Daily Cases');
  });
};
