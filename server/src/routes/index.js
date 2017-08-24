import express from 'express';
import { user } from '../controllers';

const router = express.Router();

router.post('/login', user.login);

export default router;