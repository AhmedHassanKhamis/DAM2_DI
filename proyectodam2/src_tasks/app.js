import express from 'express'
import morgan from 'morgan';
import router from './routes/tasks.routes.js';
import cors from 'cors';

const app = express();
app.use(cors("http://localhost:5173"))
app.use(express.json())
app.use(morgan('dev'));
app.use(router)
export default app;
