import { Router } from 'express';
import {
  atualizarCliente,
  criarCliente,
} from '../controllers/ClienteController';
import { SessaoToken } from '../middlewares/AuthMiddleware';
import {
  ClienteMiddleware,
  ClienteUpdateMiddleware,
} from '../middlewares/ClienteMiddleware';

const router = Router();

router.get('/', (req, res) => {
  res.send('Sou o cliente');
});

router.post('/', SessaoToken, ClienteMiddleware, criarCliente);
router.put('/:id', SessaoToken, ClienteUpdateMiddleware, atualizarCliente);

export { router };
