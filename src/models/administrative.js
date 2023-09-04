import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const administrativeSchema = new Schema({
    name: String,
    lastName: String,
    currentDay: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    contact: [{
        telephone: Number,
        mail: String
    }],
    id: Number,
    nameInstitution: String,
    address: String
});

const Administrative = model('Administrative', administrativeSchema);
export default Administrative;