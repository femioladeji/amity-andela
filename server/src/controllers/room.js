import { roomModel } from '../schema';
import { respond } from './utils';

class RoomController {
    static addRoom(req, res) {
        const { name, floor, totalNumberOfOccupants } = req.body;
        if(!name || !floor || !totalNumberOfOccupants) {
            return respond(res, 400, 'Some compulsory fields are empty');
        }
        const newRoom = new roomModel(req.body);
        newRoom.save((err, room) => {
            if(err) {
                console.log(err);
                return respond(res, 500, 'An error occurred');
            }
            return respond(res, 201, 'Room created successfully');
        });
    }

    static getAllRooms(req, res) {
        roomModel.find({}, (err, rooms) => {
            return respond(res, 200, rooms);
        });
    }
}

export default RoomController;