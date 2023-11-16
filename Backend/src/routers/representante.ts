import { Router } from 'express';
import {
  buscarRepresentantePorID,
  criarRepresentante,
  deletarRepresentante,
  deletarRepresentanteDoCliente,
  listarRepresentantes,
} from '../controllers/RepresentanteController';
import { createRepresentanteMiddleware } from '../middlewares/RepresentanteMiddleware';

const router = Router();

router.get('/', listarRepresentantes);
router.get('/:id', buscarRepresentantePorID);
router.post('/', createRepresentanteMiddleware, criarRepresentante);
router.post('/:idRepresentante', deletarRepresentanteDoCliente);
router.delete('/:idRepresentante', deletarRepresentante);

export { router };
