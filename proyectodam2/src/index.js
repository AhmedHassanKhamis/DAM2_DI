import app from "./app.js";
import connectdb from "./db.js";

connectdb();


const puerto = 5000;
app.listen(puerto);
console.log("se esta escuchando el puerto " + puerto);

