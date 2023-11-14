import { Router } from 'express';
import {
  atualizarUsuario,
  criarUsuario,
  deletarUsuario,
  listarUsuarios,
} from '../controllers/UsuarioController';
import {
  UpdateUsuarioMiddleware,
  UsuarioFormMiddleware,
} from '../middlewares/UsuarioMiddleware';

const router = Router();

router.get('/', listarUsuarios);
router.post('/', UsuarioFormMiddleware, criarUsuario);
router.put('/:id', UpdateUsuarioMiddleware, atualizarUsuario);
router.delete('/:id', deletarUsuario);

export { router };
