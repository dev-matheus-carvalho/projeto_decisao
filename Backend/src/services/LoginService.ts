import { Descriptografar } from '../security/UsuarioSecurity';
import { UsuarioModel } from '../models/UsuarioModel';

export async function loginUsuario(email: string, senha: string) {
  const usuarioExiste = await UsuarioModel.findOne({ where: { email } });
  if (!usuarioExiste) return true;

  const senhaEncriptada = usuarioExiste.senha;
  const verificaSenha = await Descriptografar(senha, senhaEncriptada);
  if (verificaSenha === false) return false;

  const dados = {
    usuario: {
      idUsuario: usuarioExiste.idUsuario,
      nome: usuarioExiste.nome,
      email: usuarioExiste.email,
    },
  };
  return dados;
}
