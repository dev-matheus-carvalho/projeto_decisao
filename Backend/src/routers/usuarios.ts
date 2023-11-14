import { Router } from 'express';
import {
  Exemplo,
  atualizarUsuario,
  criarUsuario,
  deletarUsuario,
  listarUsuarios,
} from '../controllers/UsuarioController';
import { UsuarioFormMiddleware } from '../middlewares/UsuarioMiddleware';

const router = Router();

router.get('/', listarUsuarios);
router.post('/', UsuarioFormMiddleware, criarUsuario);
router.put('/:id', atualizarUsuario);
router.delete('/:id', deletarUsuario);

router.put('/exemple/:id', Exemplo);

export { router };
