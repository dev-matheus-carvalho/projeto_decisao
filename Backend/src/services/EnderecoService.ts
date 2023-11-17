import { EnderecoModel } from '../models/EnderecoModel';
import { v4 } from 'uuid';

export async function verificarEnderecoPorCliente(
  cep: string,
  idCliente: string,
) {
  return await EnderecoModel.findOne({ where: { cep, idCliente } });
}

export async function verificaSeExisteEnderecoPorCliente(idCliente: string) {
  return await EnderecoModel.findAll({ where: { idCliente } });
}

export async function listarEnderecosDeUmCliente(idCliente: string) {
  return await EnderecoModel.findOne({
    where: { idCliente, is_principal: true },
  });
}

export async function buscarEndereco(idEndereco: string) {
  return await EnderecoModel.findOne({ where: { idEndereco } });
}

export async function createEndereco(
  cep: string,
  logradouro: string,
  numero: string,
  complemento: string,
  bairro: string,
  cidade: string,
  estado: string,
  is_principal: string,
  idCliente: string,
) {
  return await EnderecoModel.create({
    idEndereco: v4(),
    cep,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    is_principal,
    idCliente,
  });
}

export async function updateEndereco(
  idEndereco: string,
  cep: string,
  logradouro: string,
  numero: string,
  complemento: string,
  bairro: string,
  cidade: string,
  estado: string,
  is_principal: string,
  idCliente: string,
) {
  return await EnderecoModel.update(
    {
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      is_principal,
      idCliente,
    },
    { where: { idEndereco, idCliente } },
  );
}

export async function updateDeEnderecoPrincipal(
  cep: string,
  idCliente: string,
) {
  return await EnderecoModel.update(
    { is_principal: false },
    { where: { idCliente, cep } },
  );
}

export async function updateMarcarPrincipal(cep: string, idCliente: string) {
  return await EnderecoModel.update(
    { is_principal: true },
    { where: { idCliente, cep } },
  );
}

/* idEndereco: '702e234d-329c-4c92-88fc-091ebea4b4da',
  idCliente: 'a2e866a5-0296-4d19-88a6-3de3ef6eaa4c', */
