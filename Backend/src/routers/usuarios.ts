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

const router = Router();

router.get('/', listarUsuarios);
router.get('/:id', pegarUsuarioPorID);
router.post('/', UsuarioFormMiddleware, criarUsuario);
router.put('/:id', UpdateUsuarioMiddleware, atualizarUsuario);
router.delete('/:id', deletarUsuario);

export { router };
