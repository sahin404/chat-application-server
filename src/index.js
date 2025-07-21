import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';

//middlewares
const app  = express();
dotenv.config();
app.use(express.json());


//routes
app.use('/api/auth', authRouter);

//server running
app.listen(process.env.PORT, ()=>{
    console.log('Server Running at port: 3000');
})