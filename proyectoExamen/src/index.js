import app from "./app.js";
import connectdb from "./db.js";


connectdb();


const puerto = 5173;
app.listen(puerto)
console.log("se esta escuchando en el puerto: "+ puerto);