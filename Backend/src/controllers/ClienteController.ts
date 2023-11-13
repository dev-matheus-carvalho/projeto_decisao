import { Request, Response } from 'express';
import {
  createCliente,
  getAllClientes,
  getClienteById,
} from '../services/ClienteService';
import { CustomError } from '../error/CustomError';
import {
  ClienteBodyInterface,
  ClienteInterface,
} from '../interfaces/ClienteInterface';
import { ClienteEnum } from '../enum/ClienteEnum';

export async function listarClientes(
  _,
  response: Response,
): Promise<Array<ClienteInterface> | unknown> {
  try {
    const cliente = await getAllClientes();
    if (cliente.length !== 0) {
      return response.status(200).json(cliente);
    } else {
      return response.status(400).json('Nenhum cliente cadastrado');
    }
  } catch (error) {
    CustomError(response, 'Erro interno', 500);
  }
}

export async function pesquisarClientePorId(
  request: Request,
  response: Response,
): Promise<ClienteInterface | unknown> {
  try {
    const { id } = request.params;
    const cliente = await getClienteById(String(id));

    if (cliente !== null) {
      return response.status(200).json(cliente);
    } else {
      return response.status(400).json('Cliente não encontrado');
    }
  } catch (error) {
    CustomError(response, 'Erro interno', 500);
  }
}

export async function criarCliente(request: Request, response: Response) {
  try {
    const {
      name,
      identificacao,
      nome_fantasia,
      nome_mae,
      inscricao_municipal,
      inscricao_estadual,
      situacao,
      idUsuario,
    } = request.body;

    const cliente: ClienteBodyInterface = {
      name: String(name),
      identificacao: String(identificacao),
      nome_fantasia: String(nome_fantasia),
      nome_mae: String(nome_mae),
      inscricao_municipal: String(inscricao_municipal),
      inscricao_estadual: String(inscricao_estadual),
      situacao: ClienteEnum[String(situacao)],
      idUsuario: String(idUsuario),
    };

    const novoCliente = await createCliente(cliente);

    if (novoCliente === false) {
      return response.status(200).json('Cliente cadastrado com sucesso');
    } else {
      CustomError(response, 'Cliente já cadastrado', 409);
    }
  } catch (error) {
    CustomError(response, 'Erro interno', 500);
  }
}

export async function atualizarCliente() {
  return;
}
