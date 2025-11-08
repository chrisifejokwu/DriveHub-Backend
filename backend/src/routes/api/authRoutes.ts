import { Request, Response } from 'express'; 
import express from 'express';
const router = express.Router();
import loginUser from '../../controllers/authController';

router.post('/login', loginUser.loginUser);

export default router;
