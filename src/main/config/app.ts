import express from 'express';
import { setupMiddleWares } from './middlewares';
import { setupRoutes } from './routes';

export const app = express();

setupMiddleWares(app);
setupRoutes(app);
