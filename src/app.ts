import express from 'express';
import morgan from 'morgan';
import logMiddleware from './middlewares/logger.middleware';
import { errorHandler } from './core';
import router from './router';

const app = express();

app.use(logMiddleware);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('api/v1/', router);

app.use(errorHandler);

export default app;
