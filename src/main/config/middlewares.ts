import { Express, json } from 'express';
import cors from 'cors';

export const setupMiddleWares = (app: Express): void => {
  app.use(json());
  app.use(cors());
  app.use((req, res, next) => {
    res.type('json');
    next();
  });
};
