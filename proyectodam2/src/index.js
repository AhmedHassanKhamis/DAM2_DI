import app from "./app.js";
import connectdb from "./db.js";

const puerto = 5000;
app.listen(puerto);
console.log("se esta escuchando el puerto " + puerto);

connectdb();
