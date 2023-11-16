import { Router } from 'express';
import {
  buscarRepresentantePorID,
  criarRepresentante,
  deletarRepresentante,
  deletarRepresentanteDoCliente,
  listarRepresentantes,
} from '../controllers/RepresentanteController';

const router = Router();

router.get('/', listarRepresentantes);
router.get('/:id', buscarRepresentantePorID);
router.post('/', criarRepresentante);
router.post('/:idRepresentante', deletarRepresentanteDoCliente);
router.delete('/:idRepresentante', deletarRepresentante);

export { router };
