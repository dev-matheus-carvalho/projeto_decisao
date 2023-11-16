import { Response } from 'express';
import { RequestExtends } from '../interfaces/RequestInterface';
import {
  createRepresentante,
  deleteRepresentante,
  deleteRepresentanteDoCliente,
  getAllRepresentante,
  getRepresentanteByID,
  representanteExiste,
  verificaCadastroClienteDuplicado,
  verificaRepresentanteDuplicado,
} from '../services/RepresentanteService';
import { CustomError } from '../error/CustomError';

export async function listarRepresentantes(_, response: Response) {
  try {
    const listaRepresentantes = await getAllRepresentante();

    if (listaRepresentantes.length === 0) {
      return response
        .status(400)
        .json('Não existem representantes cadastrados no sistema');
    } else {
      return response.status(200).json(listaRepresentantes);
    }
  } catch (error) {
    CustomError(response, 'Erro Interno: Erro ao listar Representantes', 500);
  }
}

export async function buscarRepresentantePorID(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;

    const representante = await getRepresentanteByID(id);
    if (representante === null) {
      return response.status(400).json('Representante não existe no sistema');
    } else {
      return response.status(200).json(representante);
    }
  } catch (error) {
    CustomError(response, 'Erro Interno: Erro ao buscar representante', 500);
  }
}

export async function criarRepresentante(
  request: RequestExtends,
  response: Response,
) {
  try {
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
  } catch (error) {
    CustomError(response, 'Erro Interno: Erro ao cadastrar representante', 500);
  }
}

export async function deletarRepresentanteDoCliente(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { idRepresentante } = request.params;
    const { idCliente } = request.body;
    const deletarRepresentDoCliente = await deleteRepresentanteDoCliente(
      idRepresentante,
      idCliente,
    );

    if (deletarRepresentDoCliente[0] === 0) {
      return response
        .status(400)
        .json('Representante não tem vínculo com esse cliente');
    } else {
      return response
        .status(200)
        .json('Representante desvinculado do cliente com sucesso');
    }
  } catch (error) {
    CustomError(
      response,
      'Erro Interno: Erro ao excluir Representante do Cliente',
      500,
    );
  }
}

export async function deletarRepresentante(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { idRepresentante } = request.params;
    const existeRepresentante = await representanteExiste(idRepresentante);

    if (existeRepresentante === false) {
      return response
        .status(400)
        .json('Não existe esse representante no sistema');
    } else {
      await deleteRepresentante(idRepresentante);
      return response.status(200).json('Representante excluído com sucesso');
    }
  } catch (error) {
    CustomError(response, 'Erro Interno: Erro ao excluir Representante', 500);
  }
}
