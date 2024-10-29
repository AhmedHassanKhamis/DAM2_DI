import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true,
        required: true
    },
    task:{
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        trim: true,
        required: true
    }




},{timestamps:true})


export default mongoose.model("Task",taskSchema)