import { v4 } from 'uuid';
import { ClienteModel } from '../models/ClienteModel';

export function identificarCPF(identificacao: string) {
  const isCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return isCPF.test(identificacao);
}

export async function createCliente(
  nome: string,
  identificacao: string,
  nome_fantasia: string,
  nome_mae: string,
  inscricao_municipal: string,
  inscricao_estadual: string,
  autor: string,
  idUsuario: string,
) {
  /* Identifica o se existe a identificação. Se não existir o mesmo
  cpf ou cnpj ele retorna nulo, aí pode cadastrar*/
  // const clienteExiste = await ClienteModel.findOne({
  //   where: { identificacao },
  // });

  /* Ele retorna o cliente se existir o mesmo autor.
  Exemplo: autor: 123 se existir ele retorna o cliente */
  // const mesmoAutor = await ClienteModel.findOne({
  //   where: { autor },
  // });

  /* Se eu mudo o cpf/cnpj ou o id do autor, ele retorna nulo.
  Dessa forma, se retorna nulo eu posso cadastrar um novo cliente */
  const mesmoAutor = await ClienteModel.findOne({
    where: { autor, identificacao },
  });

  return mesmoAutor;

  // if (mesmoAutor === null) {
  //   return 'Pode cadastrar';
  // } else {
  //   return 'Não pode cadastrar';
  // }
}

// return await ClienteModel.create({
//   idCliente: v4(),
//   nome: nome,
//   identificacao: identificacao,
//   nome_fantasia: nome_fantasia,
//   nome_mae: nome_mae,
//   inscricao_municipal: inscricao_municipal,
//   inscricao_estadual: inscricao_estadual,
//   data_criacao: new Date(),
//   autor: autor,
//   idUsuario: idUsuario,
// });
