import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { UsuarioModel } from '../models/UsuarioModel';
import { v4 } from 'uuid';

export async function getAllUsuarios(): Promise<UsuarioModel[]> {
  return await UsuarioModel.findAll();
}

export async function createUsuario(
  nome: string,
  email: string,
  senha: string,
): Promise<UsuarioInterface | false | unknown> {
  const usuarioExiste = await UsuarioModel.findOne({ where: { email } });

  if (usuarioExiste === null) {
    // crie o usuario
    return await UsuarioModel.create({
      idUsuario: v4(),
      nome: nome,
      email: email,
      senha: senha,
    });
  } else {
    return false;
  }
}

export async function updateUsuarios(
  nome: string,
  email: string,
  senha: string,
) {
  // const updateUsuario = await UsuarioModel.update()
  return;
}
