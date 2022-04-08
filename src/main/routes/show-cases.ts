import { Request, Response, Router } from 'express';
import { adaptRoute } from '../adapters/express-route-adapter';
import { MakeShowCasesUntilNowController } from '../factories/show-cases-until-now';
import { MakeShowCasesOfTheDayController } from '../factories/show-cases-of-the-day';

export default (router: Router): void => {
  router.get('/cases/:date/count', adaptRoute(MakeShowCasesOfTheDayController()));
  router.get('/cases/:date/cumulative', adaptRoute(MakeShowCasesUntilNowController()));
  router.get('/', (req: Request, res: Response) => {
    res.send('Backend Challenge 2021 🏅 - Covid Daily Cases');
  });
};
