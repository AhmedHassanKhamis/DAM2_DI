import mongoose from "mongoose";


const connectdb = async () => {
    try {
        await mongoose.connect("mongodb://localhost/Biblioteca2DAM");
        console.log("se ha realizado la conexion a la base de datos correctamente");
    } catch (error) {
        console.log(error)
    }
}


export default connectdb;