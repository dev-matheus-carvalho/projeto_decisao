import { Router } from 'express';
import {
  atualizarCliente,
  buscarClientePorID,
  criarCliente,
  listarClientes,
} from '../controllers/ClienteController';
import { SessaoToken } from '../middlewares/AuthMiddleware';
import {
  ClienteMiddleware,
  ClienteUpdateMiddleware,
} from '../middlewares/ClienteMiddleware';

const router = Router();

router.get('/', SessaoToken, listarClientes);
router.get('/:id', SessaoToken, buscarClientePorID);

router.post('/', SessaoToken, ClienteMiddleware, criarCliente);
router.put('/:id', SessaoToken, ClienteUpdateMiddleware, atualizarCliente);

export { router };
