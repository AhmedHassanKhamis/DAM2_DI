import mongoose from "mongoose";


const  conexiondb = async () =>{
    try {
        await mongoose.connect("mongodb://localhost/Tasks2DAM");
        console.log("#################### BBDD OK ####################");
        
    } catch (error) {
        
    }
}


export default conexiondb;