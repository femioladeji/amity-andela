import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { userModel } from '../schema';
import { respond } from './utils';
const saltRounds = 10;
dotenv.config();

class UserController {
    /**
     * login function that checks the default
     * user in the mongodb and if password is
     * correct, it allows user to login
     * @param {object} req request object
     * @param {object} res response
     */
    static login(req, res) {
        if(!req.body.username || !req.body.password) {
            return respond(res, 400, 'Username and password are required');
        }
        userModel.isUserValid(req.body, (err, user) => {
            if(err) {
                return respond(res, 401, 'Invalid credentials');
            }
            bcrypt.compare(req.body.password, user.password, (err, valid) => {
                if(valid) {
                    const token = jwt.sign(user._id, process.env.SECRET, { expiresIn: '1d'});
                    return respond(res, 200, token);
                } else {
                    return respond(res, 401, 'Invalid credentials');
                }
            });
        });
    }
}

export default UserController;