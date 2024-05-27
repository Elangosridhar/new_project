import express from 'express';
import { getusers, saveusers } from '../Controller/usercontroller.js';
const usersRouter = express.Router();

usersRouter.get('/getusers',getusers)
usersRouter.post('/saveusers',saveusers)


export default usersRouter