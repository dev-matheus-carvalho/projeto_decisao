import { Router } from 'express';
import { criarUsuario, listarUsuarios } from '../controllers/UsuarioController';

const router = Router();

router.get('/', listarUsuarios);
router.post('/', criarUsuario);

export { router };
