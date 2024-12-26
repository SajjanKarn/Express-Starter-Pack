import { Request, Response } from 'express';

export const sampleController = (req: Request, res: Response): void => {
  res.status(200).json({ status: 'ok', message: 'Service is running' });
};
