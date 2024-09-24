import mongoose from 'mongoose';


const connectdb = async () => {
    try {
        await mongoose.connect("mongodb://localhost/dam2db"); //para crear el conector
        console.log("conexion a la basdede datos correcta");
    
    } catch (error) {
        console.log(error);
    }
    
}





export default connectdb;
