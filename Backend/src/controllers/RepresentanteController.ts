import { Response } from 'express';
import { RequestExtends } from '../interfaces/RequestInterface';
import {
  createRepresentante,
  verificaCadastroClienteDuplicado,
  verificaRepresentanteDuplicado,
} from '../services/RepresentanteService';

export async function criarRepresentante(
  request: RequestExtends,
  response: Response,
) {
  const { nome, identificacao, idCliente } = request.body;

  const resultado = await verificaCadastroClienteDuplicado(
    identificacao,
    idCliente,
  );

  if (resultado === true) {
    return response
      .status(400)
      .json('Representante não pode ser duplicado por cliente');
  }

  const representanteExist =
    await verificaRepresentanteDuplicado(identificacao);

  if (representanteExist === true) {
    return response.status(400).json('Representante já existe no sistema');
  }

  await createRepresentante(nome, identificacao, idCliente);

  return response.status(200).json('Representante cadastrado com sucesso');
}
