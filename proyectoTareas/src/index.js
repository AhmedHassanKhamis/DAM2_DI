import app from "./app.js";
import conexiondb from "./db.js";

try {
    conexiondb();
    //con esto lanzo la app y le paso el puerto de escucha
    const puerto = 8888;
    app.listen(puerto);
    console.log("se esta escuchando el puerto " + puerto);


} catch (error) {
    console.log(error)
}