import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/Auth.routes.js"


const app = express();
app.use(express.json())
app.use(morgan("dev"));
app.use(authRoutes);




export default app;