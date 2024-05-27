import express from 'express';
import { register } from '../Controller/auth/registerController.js';
const authRouter = express.Router();
authRouter.post('/apiregister',register) 

export default authRouter;