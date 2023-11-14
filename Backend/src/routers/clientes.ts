import { Router } from 'express';
import { criarCliente } from '../controllers/ClienteController';

const router = Router();

router.get('/', (req, res) => {
  res.send('Sou o cliente');
});

router.post('/', (req, res) => {
  const { identificacao } = req.body;
  res.send(identificacao);
});

router.post('/teste', criarCliente);

export { router };
