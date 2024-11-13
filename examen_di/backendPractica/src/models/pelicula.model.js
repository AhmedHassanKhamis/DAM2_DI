import mongoose from 'mongoose'


const peliculaSchema = new mongoose.Schema({
        titulo:{
            type: String,
            trim: true,
            required: true
        },
        director:{
            type: String,
            trim: true,
            required: true

        },
        duracion:{
            type: String,
            trim: true,
            required: true

        },
        disponibilidad:{
            type: String,
            trim:true,
            required: true


        }

},{
    timestamps:true
})

export default mongoose.model('Pelicula',peliculaSchema);