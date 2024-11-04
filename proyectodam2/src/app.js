import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/Auth.routes.js"
import cors from 'cors';

const app = express();
app.use(cors("http://localhost:5000"))
app.use(express.json())
app.use(morgan("dev"));
app.use(authRoutes);




export default app;