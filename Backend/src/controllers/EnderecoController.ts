import { Response } from 'express';
import { RequestExtends } from '../interfaces/RequestInterface';
import { CustomError } from '../error/CustomError';
import {
  createEndereco,
  listarEnderecosDeUmCliente,
  updateDeEnderecoPrincipal,
  verificaSeExisteEnderecoPorCliente,
  verificarEnderecoPorCliente,
} from '../services/EnderecoService';

export async function criarEndereco(
  request: RequestExtends,
  response: Response,
) {
  try {
    const {
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      is_principal,
      idCliente,
    } = request.body;

    const enderecoPrincipal =
      await verificaSeExisteEnderecoPorCliente(idCliente);

    if (enderecoPrincipal.length === 0) {
      // Esse cliente não possui endereço em lugar nenhum
      await createEndereco(
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        'true',
        idCliente,
      );
      return response.status(200).json('Endereço cadastrado com sucesso');
    } else {
      const mesmoEnderecoPorCliente = await verificarEnderecoPorCliente(
        cep,
        idCliente,
      );

      if (mesmoEnderecoPorCliente === null) {
        if (is_principal === 'true') {
          const enderecoDoCliente = await listarEnderecosDeUmCliente(idCliente);
          await updateDeEnderecoPrincipal(
            enderecoDoCliente.cep,
            enderecoDoCliente.idCliente,
          );

          await createEndereco(
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            is_principal,
            idCliente,
          );
          return response.status(200).json('Endereço cadastrado com sucesso');
        }
        await createEndereco(
          cep,
          logradouro,
          numero,
          complemento,
          bairro,
          cidade,
          estado,
          is_principal,
          idCliente,
        );
        return response.status(200).json('Endereço cadastrado com sucesso');
      } else {
        return response
          .status(400)
          .json('Endereço não pode ser cadastrado novamente no mesmo local');
      }
    }
  } catch (error) {
    CustomError(response, 'Erro Interno: Erro ao cadastrar o Email', 500);
  }
}
