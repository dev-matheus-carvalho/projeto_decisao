import { Router } from 'express';
import {
  atualizarUsuario,
  criarUsuario,
  deletarUsuario,
  listarUsuarios,
  pegarUsuarioPorID,
} from '../controllers/UsuarioController';
import {
  UpdateUsuarioMiddleware,
  UsuarioFormMiddleware,
} from '../middlewares/UsuarioMiddleware';
import { SessaoToken } from '../middlewares/AuthMiddleware';

const router = Router();

router.get('/', SessaoToken, listarUsuarios);
router.get('/:id', SessaoToken, pegarUsuarioPorID);
router.post('/', UsuarioFormMiddleware, criarUsuario);
router.put('/:id', SessaoToken, UpdateUsuarioMiddleware, atualizarUsuario);
router.delete('/:id', SessaoToken, deletarUsuario);

export { router };
