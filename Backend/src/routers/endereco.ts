import { Router } from 'express';
import { criarEndereco } from '../controllers/EnderecoController';
import { createEnderecoMiddleware } from '../middlewares/EnderecoMiddleware';

const router = Router();

router.post('/', createEnderecoMiddleware, criarEndereco);

export { router };
