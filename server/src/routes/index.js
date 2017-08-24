import express from 'express';
import { user, room } from '../controllers';
import Auth from '../middlewares/auth';

const router = express.Router();

router.post('/login', user.login);

router.route('/room')
    .post(Auth.isRequestValid, room.addRoom)
    .get(Auth.isRequestValid, room.getAllRooms);

router.post('/room/add', Auth.isRequestValid, room.addOccupant);
export default router;
