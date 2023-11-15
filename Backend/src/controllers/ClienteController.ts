import { Response } from 'express';
import { RequestExtends } from '../interfaces/RequestInterface';
import {
  createCliente,
  findClienteByID,
  getAllClientes,
  identificarCPF,
  mesmoAutor,
  mesmoCliente,
  updateCliente,
} from '../services/ClienteService';
import { usuarioLogado } from '../services/UsuariosService';
import { CustomError } from '../error/CustomError';

export async function listarClientes(
  request: RequestExtends,
  response: Response,
) {
  try {
    const email = request.user;
    const usuario = await usuarioLogado(email);

    const listaClientes = await getAllClientes();

    if (listaClientes.length === 0) {
      return response
        .status(401)
        .json('Não existem clientes cadastrados no sistemas');
    }

    const data = {
      usuario: usuario.nome,
      clientes: listaClientes,
    };

    return response.status(200).json(data);
  } catch (error) {
    CustomError(response, 'Erro Interno: Erro ao listar os clientes', 500);
  }
}

export async function buscarClientePorID(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;
    const email = request.user;
    const usuario = await usuarioLogado(email);

    const clienteExist = await findClienteByID(id);

    if (clienteExist === false)
      return response.status(400).json('Cliente não existe no sistema');
    const data = {
      usuario: usuario.nome,
      cliente: clienteExist,
    };
    return response.status(200).json(data);
  } catch (error) {
    CustomError(response, 'Erro Interno: Erro ao procurar cliente', 500);
  }
}

export async function criarCliente(
  request: RequestExtends,
  response: Response,
) {
  try {
    const {
      nome,
      identificacao,
      nome_fantasia,
      nome_mae,
      inscricao_municipal,
      inscricao_estadual,
      idUsuario,
    } = request.body;

    const email = request.user;
    const usuario = await usuarioLogado(email);

    const verificaAutor = await mesmoAutor(identificacao, usuario.idUsuario);

    if (verificaAutor === false)
      return response
        .status(400)
        .json('Mesmo autor não pode cadastrar o mesmo cliente');

    const verificaCliente = await mesmoCliente(identificacao);

    if (verificaCliente === false)
      return response.status(400).json('Cliente já está cadastrado no sistema');

    await createCliente(
      nome,
      identificacao,
      nome_fantasia,
      nome_mae,
      inscricao_municipal,
      inscricao_estadual,
      usuario.idUsuario,
      idUsuario,
    );

    const isCpf = identificarCPF(identificacao);

    const data = {
      usuario: usuario.nome,
      isCpf,
      msg: 'Usuário, cadastrado com sucesso',
    };

    response.status(200).json(data);
  } catch (error) {
    CustomError(
      response,
      'Erro Interno: Erro ao acessar a área de cadastro',
      500,
    );
  }
}

export async function atualizarCliente(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;
    const {
      nome,
      nome_fantasia,
      nome_mae,
      inscricao_municipal,
      inscricao_estadual,
      situacao,
      idUsuario,
    } = request.body;
    const email = request.user;
    const usuario = await usuarioLogado(email);

    const clienteExist = await findClienteByID(id);

    if (clienteExist === false)
      return response.status(400).json('Cliente não existe no sistema');

    await updateCliente(
      id,
      nome,
      nome_fantasia,
      nome_mae,
      inscricao_municipal,
      inscricao_estadual,
      situacao,
      idUsuario,
    );

    const data = {
      usuario: usuario.nome,
      msg: 'Cliente atualizado com sucesso',
    };
    return response.status(200).json(data);
  } catch (error) {
    CustomError(response, 'Erro Interno: Erro ao atualizar cliente', 500);
  }
}
