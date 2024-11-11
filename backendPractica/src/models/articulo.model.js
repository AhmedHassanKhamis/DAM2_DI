import mongoose from 'mongoose'


const articuloSchema = new mongoose.Schema({
        Nombre:{
            type: String,
            trim: true,
        },
        disponibilidad:{
            type: Boolean,
            trim: true,
        },
        precio:{
            type: Float64Array,
            trim: true,
        }



},{
    timestamps:true
})

export default mongoose.model('articulo',articuloSchema);


// const articuloSchema = new mongoose.Schema({
//     Nombre:{
//         type: String,
//         trim: true,
//     },
//     disponibilidad:{
//         type: Boolean,
//         trim: true,
//     },
//     precio:{
//         type: Float64Array,
//         trim: true,
//     }



// },{
// timestamps:true
// })


