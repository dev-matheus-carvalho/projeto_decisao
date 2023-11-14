import { Router } from 'express';
import { Login } from '../controllers/LoginController';

const router = Router();

router.post('/', Login);

export { router };
