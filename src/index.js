import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import { dbConnect } from './libs/db.js';
import messageRouter from './routes/message.route.js';
import cors from 'cors';
import {app,server} from './libs/socket.js';

//middlewares
dotenv.config();
// app.use(express.json());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

//routes
app.use('/api/auth', authRouter);
app.use('/api/messages', messageRouter);

//server running
server.listen(process.env.PORT, ()=>{
    console.log('Server Running at port: 3000');
    dbConnect();
})