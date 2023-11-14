import { Router } from 'express';
// import { v4 } from 'uuid';

// import { ClienteModel } from '../models/ClienteModel';
// import {
//   criarCliente,
//   listarClientes,
//   pesquisarClientePorId,
// } from '../controllers/ClienteController';

const router = Router();

router.get('/', (req, res) => {
  res.send('oi');
});

// router.get('/', listarClientes);
// router.get('/:id', pesquisarClientePorId);

// router.post('/', criarCliente);

// router.get('/criar', async (request, response) => {
//   const {
//     name,
//     identificacao,
//     nome_fantasia,
//     nome_mae,
//     inscricao_municipal,
//     inscricao_estadual,
//     situacao,
//   } = request.body;

//   const cliente = await ClienteModel.create({
//     idCliente: v4(),
//     name: name,
//     identificacao: identificacao,
//     nome_fantasia: nome_fantasia,
//     nome_mae: nome_mae,
//     inscricao_municipal: inscricao_municipal,
//     inscricao_estadual: inscricao_estadual,
//     data_cadastro: new Date(),
//     situacao: situacao,
//     endereco: [
//       {
//         idEndereco: 1,
//         cep: '1',
//         logradouro: 'logradouro 1',
//         numero: '1',
//         complemento: 'complemento 1',
//         bairro: 'bairro 1',
//         cidade: 'Cidade 1',
//         estado: 'Estado 1',
//         is_principal: true,
//       },
//       {
//         idEndereco: 2,
//         cep: '2',
//         logradouro: 'logradouro 2',
//         numero: '2',
//         complemento: 'complemento 2',
//         bairro: 'bairro 2',
//         cidade: 'Cidade 2',
//         estado: 'Estado 2',
//         is_principal: false,
//       },
//     ],
//     telefone: [
//       { idTelefone: '1', numero: '1', is_principal: true },
//       { idTelefone: '2', numero: '2', is_principal: false },
//     ],
//     email: [
//       { idEmail: '1', email: 'teste1@teste.com', is_principal: true },
//       { idEmail: '2', email: 'teste2@teste.com', is_principal: false },
//     ],
//     idUsuario: 'd2cd47fb-90c1-4059-81a8-db3701ffa4a8',
//   });

//   response.send(cliente);
// });

export { router };
