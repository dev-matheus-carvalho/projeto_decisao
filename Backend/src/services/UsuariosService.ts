import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { UsuarioModel } from '../models/UsuarioModel';
import { v4 } from 'uuid';

export async function getAllUsuarios(): Promise<UsuarioModel[]> {
  const listaDeUsuarios = await UsuarioModel.findAll();
  const data = [];

  for (const dado of listaDeUsuarios) {
    data.push({
      idUsuario: dado.idUsuario,
      nome: dado.nome,
      email: dado.email,
    });
  }
  return data;
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
  id: string,
  nome: string,
  email: string,
  senha: string,
) {
  const updateUsuario = await UsuarioModel.update(
    {
      nome: nome,
      email: email,
      senha: senha,
    },
    { where: { idUsuario: id }, returning: ['*'] },
  );
  return updateUsuario;
}

export async function deleteUsuario(id: string) {
  return await UsuarioModel.destroy({ where: { idUsuario: id } });
}
