import { Router } from 'express';
import { UsuarioModel } from '../models/UsuarioModel';
import { v4 } from 'uuid';

const router = Router();

router.get('/', (resquest, response) => {
  response.send('Sou um usuario');
});

router.post('/', async (request, response) => {
  const { name, email, senha } = request.body;

  const usuario = await UsuarioModel.create({
    idUsuario: v4(),
    name: name,
    email: email,
    senha: senha,
  });

  response.send(usuario);
});

export { router };
