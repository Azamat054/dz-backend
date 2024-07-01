import mongoose from "mongoose";
import { Schema } from "mongoose";

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
});



export default mongoose.model('User', User);