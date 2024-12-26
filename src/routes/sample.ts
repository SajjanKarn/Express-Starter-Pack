import { Router } from 'express';
import { sampleController } from '../controllers/sampleController';

const router = Router();

router.get('/health', sampleController);

export default router;
