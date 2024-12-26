import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import errorHandler from './middlewares/errorHandler';
import { appLogger } from './middlewares/logger';
import sampleRoutes from './routes/sample';

const app: Application = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(compression());
app.use(appLogger);

// Routes
app.use('/api', sampleRoutes);

// error handler
app.use(errorHandler);

export default app;
