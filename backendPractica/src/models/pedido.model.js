import mongoose from 'mongoose'


const pedidoSchema = new mongoose.Schema({
        nombreAlumno:{
            type: String,
            trim: true,
        },
        nombreArticulo:{
            type: String,
            trim: true,
        },
        numeroArticulos:{
            type: Number,
            trim: true,
        },
        horaRecogida:{
            type: String,
            trim:true

        }

},{
    timestamps:true
})

export default mongoose.model('Pedido',pedidoSchema);