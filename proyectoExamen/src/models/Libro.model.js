import mongoose from "mongoose";



const libroSchema = new mongoose.Schema({
    "titulo": {
        type: String,
        trim: true,
        required: true
    },
    "autor":{
        type: String,
        trim: true,
        required: true
    },
    "editorial":{
        type: String,
        trim: true,
        required: true
    }


},{timestamps:true})

export default mongoose.model("Libro",libroSchema);