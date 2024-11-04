import app from "../src/app.js";
import connectdb from "./db.js";


connectdb();

const puerto = 5000;
app.listen(puerto);

console.log("Servidor levantado en el puerto: "+puerto);