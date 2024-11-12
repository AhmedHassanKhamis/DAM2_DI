import Articulo from "../models/articulo.model.js";
import Pedido from "../models/pedido.model.js"
import Historial from "../models/historial.model.js";





export const checkArticulo = async (req,res) => {
    
    const { nombre } = req.body;

    try {
        // const busqueda = await Articulo.findOne({nombre: nombre})
        if (await Articulo.findOne({nombre: nombre})) {
            // console.log("existe")
            res.send("existe")
        }else{
            console.log("No existe")
            res.send("No existe")
        }
    } catch (error) {
        console.log(error)
    }
}




export const historialAlumno = async (req,res) => {


    // const { nombreAlumno } = req.body;

    try {
        // const historialAlumno = await Historial.find({ nombreAlumno: nombreAlumno});
        const historialAlumno = await Historial.find({});
        res.send(historialAlumno)
        
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}


export const crearPedido = async (req,res) => {


    
    const { nombreAlumno, nombreArticulo, cantidad, hora } = req.body;

    try {
        const pedido = new Pedido({
            nombreAlumno: nombreAlumno,
            nombreArticulo: nombreArticulo,
            numeroArticulos: cantidad,
            horaRecogida: hora
        })
        await pedido.save();
        res.send(pedido)
    } catch (error) {
        console.log(error)
        res.send(error)
    }

}