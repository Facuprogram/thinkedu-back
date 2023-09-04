import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        minLenght: 10,
        maxLenght: 20
    },
    password: {
        type: String,
        required: true,
        minLenght: 12,
        maxLenght: 30,
        lowerCase: true,
        upperCase: true
    }
});

const User = model('User', userSchema);
export default User;