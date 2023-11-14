import { Response } from 'express';
import { RequestExtends } from '../interfaces/RequestInterface';
import { createCliente } from '../services/ClienteService';

export async function criarCliente(
  request: RequestExtends,
  response: Response,
) {
  const {
    nome,
    identificacao,
    nome_fantasia,
    nome_mae,
    inscricao_municipal,
    inscricao_estadual,
    autor,
    idUsuario,
  } = request.body;

  // const isCpf = identificarCPF(identificacao);

  const cliente = await createCliente(
    nome,
    identificacao,
    nome_fantasia,
    nome_mae,
    inscricao_municipal,
    inscricao_estadual,
    autor,
    idUsuario,
  );

  response.send(cliente);

  // if (cliente === 'Mesmo autor') {
  //   return response
  //     .status(400)
  //     .json(
  //       'Proibido a criação de um mesmo cliente duas vezes pelo mesmo autor',
  //     );
  // }

  // if (cliente === false) {
  //   return response.status(400).json('Cliente já cadastrado no sistema');
  // } else {
  //   response.status(200).json(cliente);
  // }
}
