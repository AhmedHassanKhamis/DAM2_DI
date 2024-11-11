import app from "./app.js";
import connectDb from "./db.js";


connectDb();
const puerto = 5050;


app.listen(puerto);
console.log("SERVIDOR BACKEND LEVANTADO EN EL PUERTO "+ puerto);



