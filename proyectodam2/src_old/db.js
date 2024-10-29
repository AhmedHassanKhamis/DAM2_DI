import mongoose from 'mongoose';


const connectdb = async () => {
    try {
        await mongoose.connect("mongodb://localhost/dam2db"); //para crear el conector con usuario y contra -->  mongodb://user:password@localhost/dam2db
        console.log("########## conexion a la basde de datos correcta (OK) ##########");
    
    } catch (error) {
        console.log(error);
    }
    
}





export default connectdb;
