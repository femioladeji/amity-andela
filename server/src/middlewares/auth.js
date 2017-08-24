import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { respond } from '../controllers/utils';

dotenv.config();

const Auth = {
    isRequestValid(req, res, next) {
        if(!req.headers.authorization) {
            return respond(res, 401, 'Please log in');
        }
        jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
            if(err) {
                return respond(res, 401, 'Invalid or expired token');
            }
            next();
        })
    }
}

export default Auth;