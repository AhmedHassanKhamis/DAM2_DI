import Pelicula from "../models/pelicula.model.js";



export const listarPeliculas = async (req,res) => {
    try {
        const listaPeliculas = await Pelicula.find({});
        res.send(listaPeliculas)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}


export const crearPelicula = async (req,res) => {


    
    const { tituloPelicula, directorPelicula, duracionPelicula, disponibilidadPelicula } = req.body;

    try {
        const pelicula = new Pelicula({
            titulo: tituloPelicula,
            director: directorPelicula,
            duracion: duracionPelicula,
            disponibilidad: disponibilidadPelicula
        })
        await pelicula.save();
        res.send(pelicula)
    } catch (error) {
        console.log(error)
        res.send(error)
    }

}


