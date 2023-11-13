import { v4 } from 'uuid';
import { ClienteBodyInterface } from '../interfaces/ClienteInterface';
import { ClienteModel } from '../models/ClienteModel';

export async function getAllClientes(): Promise<Array<ClienteModel>> {
  return await ClienteModel.findAll();
}

export async function getClienteById(id: string): Promise<ClienteModel> {
  return await ClienteModel.findOne({ where: { idCliente: id } });
}

export async function createCliente(
  cliente: ClienteBodyInterface,
): Promise<boolean> {
  const usuarioExiste = await ClienteModel.findOne({
    where: { identificacao: cliente.identificacao },
  });

  // Se não existe retorna null e cadastra o cliente
  // Se ele existe, ele retorna o usuário

  if (usuarioExiste === null) {
    await ClienteModel.create({
      idCliente: v4(),
      name: cliente.name,
      identificacao: cliente.identificacao,
      nome_fantasia: cliente.nome_fantasia,
      nome_mae: cliente.nome_mae,
      inscricao_municipal: cliente.inscricao_municipal,
      inscricao_estadual: cliente.inscricao_estadual,
      data_cadastro: new Date(),
      situacao: cliente.situacao,
      idUsuario: cliente.idUsuario,
    });

    return false;
  } else {
    return true;
  }
}

export async function updateCliente() {
  return;
}
