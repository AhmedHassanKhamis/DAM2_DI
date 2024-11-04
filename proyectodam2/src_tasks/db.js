import mongoose from "mongoose";


const connectdb = async () => {
    try {
        await mongoose.connect("mongodb://localhost/dam2db");
        console.log("se ha conectado a la base de datos correctamente");

    } catch (error) {
        console.log(error);
    }
    
}


export default connectdb;