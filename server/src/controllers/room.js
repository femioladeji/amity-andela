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

    static addOccupant(req, res) {
        if(!req.body.room || !req.body.name) {
            return respond(res, 400, 'Both fields are compulsory');            
        }
        roomModel.findById(req.body.room, (err, room) => {
            if(err) {
                return respond(res, 404, 'Room not found');
            }
            room.occupants.push({ name: req.body.name });
            room.save((err, updatedRoom) => {
                if(err) {
                    return respond(res, 500, 'Error occurred');                
                }
                return respond(res, 201, `New occupant added to ${room.name}`);                
            });
        });
    }
}

export default RoomController;