import { Request, Response } from 'express';
import { CustomError } from '../error/CustomError';
import { loginUsuario } from '../services/LoginService';

export async function Login(request: Request, response: Response) {
  try {
    const { email, senha } = request.body;

    const usuario = await loginUsuario(email, senha);

    if (usuario === true) {
      response.status(404).json('Acesso negado. Verifique seu email');
      return;
    }

    if (usuario === false) {
      response.status(404).json('Acesso negado. Verifique sua senha');
      return;
    }
    return response.status(200).json(usuario);
  } catch (error) {
    CustomError(response, 'Erro Interno: Falha na requisição', 500);
  }
}
