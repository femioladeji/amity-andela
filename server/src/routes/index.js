import express from 'express';
import { user, room } from '../controllers';
import Auth from '../middlewares/auth';

const router = express.Router();

router.post('/login', user.login);

router.post('/room', Auth.isRequestValid, room.addRoom);

export default router;