import Libro from '../models/Libro.model.js'


export const crearLibro = async (req, res) => {
    try {
        const { titulo, autor, editorial } = req.body;
        const existeLibro = await Libro.findOne({ titulo: titulo });
        if (existeLibro) {
            res.send("El titulo introducido ya ha sido agregado anteriormente");
        } else {
            const libroNuevo = await Libro.create({
                titulo: titulo,
                autor: autor,
                editorial: editorial
            })
            const libroGuardado = await libroNuevo.save();
            res.send(libroGuardado)
        }
    } catch (error) {
        res.send(error);
    }
}

export const buscarLibro = async (req, res) => {
    try {
        const { titulo } = req.body;
        const existeLibro = await Libro.findOne({ titulo: titulo });
        if (existeLibro) {
            const libro = await Libro.findOne({ titulo: titulo })
            res.send(libro);
        } else {
            res.send("El titulo introducido no existe!")
        }
    } catch (error) {
        console.log(error);
    }
}


export const borrarLibro = async (req, res) => {
    try {
        const { titulo } = req.body;
        const existeLibro = await Libro.findOne({ titulo: titulo });
        if (existeLibro) {
            await Libro.findOneAndDelete({ titulo: titulo })
            res.send("libro borrado correctamente");
        } else {
            res.send("El titulo introducido no existe");
        }
    } catch (error) {
        console.log(error);
    }
}



export const actualizarLibro = async (req, res) => {
    try {
        const { antiguotitulo, nuevotitulo, autor, editorial } = req.body;
        const libroAntiguo = await Libro.findOne({ titulo: antiguotitulo });
        if (libroAntiguo) {
            libroAntiguo.titulo = nuevotitulo;
            libroAntiguo.autor = autor;
            libroAntiguo.editorial = editorial;
        } else {
            res.send("El titulo introducido no existe!");
        }
        const libroNuevo = await libroAntiguo.save();

        res.send(libroNuevo);
    } catch (error) {
        console.log(error);
    }
}