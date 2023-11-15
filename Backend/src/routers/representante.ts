import { Router } from 'express';
import { criarRepresentante } from '../controllers/RepresentanteController';

const router = Router();

router.post('/', criarRepresentante);

router.post('/teste', async (request, response) => {
  const { nome, identificacao, idCliente } = request.body;
  response.send(`${nome}, ${identificacao}, ${idCliente}`);
});

export { router };
