import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const studentSchema = new Schema({
    nameComplete: String,
    degree: Number,
    numberId: Number,
    quotaDay: Boolean,
    active: Boolean,
    telephone: Number,
    address: String,
    age: Number
});

const Student = model('Student', studentSchema);
export default Student;