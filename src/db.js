import mongoose from "mongoose";

export const connectDB = async () => {

    try {
        await mongoose.connect("mongodb://localhost/mrendb");
    }   catch (error) {
        console.log(error);
    }

};