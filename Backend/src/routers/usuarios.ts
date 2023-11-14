import { Router } from 'express';

const router = Router();

router.get('/', async (resquest, response) => {
  response.send('');
});

export { router };
