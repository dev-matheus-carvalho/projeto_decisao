import { Router } from 'express';
import { ClienteModel } from '../models/ClienteModel';
import { v4 } from 'uuid';

const router = Router();

router.get('/', (resquest, response) => {
  response.send('Sou um cliente');
});

router.post('/', async (request, response) => {
  const {
    name,
    identificacao,
    nome_fantasia,
    nome_mae,
    inscricao_municipal,
    inscricao_estadual,
    situacao,
  } = request.body;

  const cliente = await ClienteModel.create({
    idCliente: v4(),
    name: name,
    identificacao: identificacao,
    nome_fantasia: nome_fantasia,
    nome_mae: nome_mae,
    inscricao_municipal: inscricao_municipal,
    inscricao_estadual: inscricao_estadual,
    data_cadastro: new Date(),
    situacao: situacao,
    idUsuario: 'a75cbda7-89b7-4264-a206-1dbb6d4c8e18',
  });

  response.send(cliente);
});

export { router };
