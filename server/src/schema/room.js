import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    floor: {
        type: Number,
        required: true
    },
    totalNumberOfOccupants: {
        type: Number,
        required: true
    },
    occupants: [String]
});

const roomModel = mongoose.model('room', roomSchema);

export default roomModel;
