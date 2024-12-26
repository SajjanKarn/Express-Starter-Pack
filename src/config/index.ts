import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  env: string;
  logLevel: string;
}

const config: Config = {
  port: parseInt(process.env.PORT || '3000', 10),
  env: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'info',
};

export default config;
