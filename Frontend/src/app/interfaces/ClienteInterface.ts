export interface Cliente {
  idCliente: string,
  nome: string,
  identificacao: string,
  nome_fantasia: string,
  nome_mae: string,
  inscricao_municipal: string,
  inscricao_estadual: string,
  data_criacao: Date,
  autor: string,
  situacao: string,
  idUsuario: string,
  createdAt: Date,
  updatedAt: Date,
}

export interface GetClientesInterface {
  usuario: string,
  clientes: Array<Cliente>
}

