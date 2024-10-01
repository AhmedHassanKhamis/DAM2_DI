import mongoose from "mongoose";

const taskModel = new mongoose.Schema({
    
    date: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim:true
    }


})

export default mongoose.model('taskModel', taskModel);