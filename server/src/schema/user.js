import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String
});

userSchema.statics.isUserValid = function (userInfo, cb) {
    this.findOne({ username: userInfo.username}, cb);
}

const userModel = mongoose.model('user', userSchema);

export default userModel;
