import expressWinston from 'express-winston';
import logger from '../utils/logger';

const appLogger = expressWinston.logger({
  winstonInstance: logger,
  meta: true,
});

export { appLogger };
