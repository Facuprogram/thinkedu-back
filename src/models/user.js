import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: String,
    lastName: String,
    currentDay: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    contact: [{
        telephone: Number,
        mail: String
    }],
    id: Number,
    addres: String,
    userName: {
        type: String,
        required: true,
        minLenght: 11,
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