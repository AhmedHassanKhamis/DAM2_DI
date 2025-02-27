import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/cafeteria.routes.js';



const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(router);



export default app;