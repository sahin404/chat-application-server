import express from 'express';
import { getMessage, getUsersForSideBar, sendMessage } from '../controllers/message.controller';

const messageRouter = express.Router();

messageRouter.get('/users', getUsersForSideBar);
messageRouter.get('/get/:id', getMessage);
messageRouter.post('/send/:id', sendMessage);


export default messageRouter;