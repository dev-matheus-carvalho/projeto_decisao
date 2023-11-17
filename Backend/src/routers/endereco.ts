import { Router } from 'express';
import {
  atualizarEndereco,
  criarEndereco,
} from '../controllers/EnderecoController';
import { EnderecoMiddleware } from '../middlewares/EnderecoMiddleware';

const router = Router();

router.post('/', EnderecoMiddleware, criarEndereco);
router.put('/:id', EnderecoMiddleware, atualizarEndereco);

export { router };
