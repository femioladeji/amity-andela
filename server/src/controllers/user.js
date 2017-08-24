import { userModel } from '../schema';
import bcrypt from 'bcrypt';
import { respond } from './utils';
const saltRounds = 10;

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
                    return respond(res, 200, 'User logged in');
                } else {
                    return respond(res, 401, 'Invalid credentials');
                }
            });
        });
    }
}

export default UserController;