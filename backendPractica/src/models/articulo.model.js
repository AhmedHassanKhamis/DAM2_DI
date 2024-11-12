import mongoose from 'mongoose'


const articuloSchema = new mongoose.Schema({
        nombre:{
            type: String,
            trim: true,
        },
        disponibilidad:{
            type: Boolean,
            trim: true,
        },
        precio:{
            type: Number,
            trim: true,
        }



},{
    timestamps:true
})

export default mongoose.model('Articulo',articuloSchema);