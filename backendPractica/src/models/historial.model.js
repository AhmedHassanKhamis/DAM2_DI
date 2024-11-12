import mongoose from "mongoose"

const historialSchema = new mongoose.Schema({
    nombreAlumno:{
        type: String,
        trim: true,
    },
    pedidosRealizados:{
        type: Number,
        trim: true,
    }

},{
timestamps:true
})

export default mongoose.model('Historial',historialSchema)