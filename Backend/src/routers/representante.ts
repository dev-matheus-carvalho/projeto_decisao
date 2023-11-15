import { Router } from 'express';

const router = Router();

router.get('/', async (resquest, response) => {
  response.send('Sou a rota representante');
});

export { router };
