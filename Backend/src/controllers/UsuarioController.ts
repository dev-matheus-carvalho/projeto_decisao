import { Request, Response } from 'express';
import {
  UsuarioExiste,
  createUsuario,
  deleteUsuario,
  getAllUsuarios,
  getUserByID,
  updateUsuarios,
  verificaSenha,
} from '../services/UsuariosService';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { CustomError } from '../error/CustomError';
import { Encriptar } from '../security/UsuarioSecurity';

export async function listarUsuarios(_, response: Response) {
  try {
    const listaUsuarios = await getAllUsuarios();

    if (listaUsuarios.length === 0) {
      return response.status(401).json('Não há usuários no sistema');
    } else {
      return response.status(200).json(listaUsuarios);
    }
  } catch (error) {
    CustomError(response, 'Erro Interno: Falha ao listar usuários!', 500);
  }
}

export async function pegarUsuarioPorID(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const usuario = await getUserByID(id);

    if (usuario === false)
      return response.status(400).json('Usuário não encontrado');

    return response.status(200).json(usuario);
  } catch (error) {
    CustomError(
      response,
      'Erro Interno: Verifque a identificação do usuário',
      500,
    );
  }
}

export async function criarUsuario(
  request: Request,
  response: Response,
): Promise<UsuarioInterface | unknown> {
  try {
    const { nome, email, senha } = request.body;
    const resultado = await createUsuario(nome, email, senha);

    if (resultado !== false) {
      return response.status(200).json('Usuário criado com sucesso!');
    } else {
      return response
        .status(409)
        .json('Este usuário já está cadastrado no sistema!');
    }
  } catch (error) {
    CustomError(response, 'Erro Interno: Falha na criação do usuário!', 500);
  }
}

export async function atualizarUsuario(request: Request, response: Response) {
  try {
    const { nome, email, senha, novaSenha } = request.body;
    const { id } = request.params;

    // true (existe) ou false (não existe)
    const usuarioExiste = await UsuarioExiste(id);
    if (usuarioExiste === false)
      return response.status(400).json('Usuário não encontrado');

    // true (senha igual) ou false (senha diferente)
    const senhaOk = await verificaSenha(id, senha);
    if (senhaOk === false)
      return response
        .status(400)
        .json('Senha incompatível. Verifique sua senha atual');

    const newSenha = await Encriptar(novaSenha);

    await updateUsuarios(id, nome, email, newSenha);

    return response.status(200).json('Usuário atualizado com sucesso');
  } catch (error) {
    CustomError(response, 'Erro Interno: Falha ao atualizar usuário', 500);
  }
}

export async function deletarUsuario(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const usuarioDeletado = await deleteUsuario(id);

    if (usuarioDeletado === 1) {
      return response.status(200).json('Usuário deletado com sucesso');
    } else {
      return response.status(400).json('Usuário não encontrado no sistema');
    }
  } catch (error) {
    CustomError(response, 'Erro Interno: Falha ao deletar usuário', 500);
  }
}
