import { Response } from 'express';
import { RequestExtends } from '../interfaces/RequestInterface';
import { CustomError } from '../error/CustomError';
import {
  buscarEndereco,
  createEndereco,
  listarEnderecosDeUmCliente,
  updateDeEnderecoPrincipal,
  updateEndereco,
  updateMarcarPrincipal,
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

export async function atualizarEndereco(
  request: RequestExtends,
  response: Response,
) {
  try {
    const { id } = request.params;
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

    const qtd_enderecos = await verificaSeExisteEnderecoPorCliente(idCliente);

    if (qtd_enderecos.length === 0 || qtd_enderecos.length === 1) {
      await updateEndereco(
        id,
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
      return response.status(200).json('Endereço atualizado com sucesso');
    }

    // 1º Passo: Procure o endereço passado
    const endereco = await buscarEndereco(id);

    // 2º Passo: Se o endereço não existir, retorne uma mensagem avisando isso
    if (endereco === null)
      return response.status(400).json('Endereço não encontrado');

    // 3º Passo: Verifica se o endereço é o principal
    const endereco_principal = await listarEnderecosDeUmCliente(idCliente);
    const enderecoPassadoIsPrincipal = endereco_principal.idEndereco === id;

    // O endereço passado não é o principal
    if (enderecoPassadoIsPrincipal === false) {
      if (is_principal === 'false') {
        await updateEndereco(
          id,
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
        return response
          .status(200)
          .json('Passo 7: Endereço atualizado com sucesso');
      } else {
        await desmarcaEnderecoPrincipal(idCliente);
        await updateEndereco(
          id,
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
        return response
          .status(200)
          .json('Passo 6: Endereço atualizado com sucesso');
      }
    }

    // 4º Passo: Nesse caso, o endereço é o principal
    if (is_principal === 'true') {
      await updateEndereco(
        id,
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
      return response
        .status(200)
        .json('Passo 4: Endereço atualizado com sucesso');
    } else {
      // Verifica o endereço mais antigo sem ser ele mesmo
      const endereco_antigo_excluindo_endereco_atual = await EnderecoMaisAntigo(
        idCliente,
        id,
      );

      await updateDeEnderecoPrincipal(cep, idCliente);

      await marcarComoPrincipal(
        idCliente,
        endereco_antigo_excluindo_endereco_atual,
      );

      await updateEndereco(
        id,
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

      return response.json(`Passo 5: Endereço atualizado com sucesso`);
    }
  } catch (error) {
    console.log(error);
    CustomError(response, 'Erro Interno: Erro ao atualizar endereço', 500);
  }
}

async function EnderecoMaisAntigo(idCliente: string, idEndereco: string) {
  try {
    const pegaEndereco: any =
      await verificaSeExisteEnderecoPorCliente(idCliente);
    const meuArray = [];

    for (const i of pegaEndereco) {
      if (i.idEndereco !== idEndereco)
        // Verifica todos os endereços, excluindo apenas o endereço passado
        meuArray.push(i.cep);
    }

    meuArray.sort();

    const tamanho = meuArray.length;

    return meuArray[tamanho - 1];
  } catch (error) {
    return 'Operação não realizada';
  }
}

async function desmarcaEnderecoPrincipal(idCliente: string) {
  const endereco_principal = await listarEnderecosDeUmCliente(idCliente);
  await updateDeEnderecoPrincipal(endereco_principal.cep, idCliente);
  return true;
}

async function marcarComoPrincipal(idCliente: string, cep: string) {
  return await updateMarcarPrincipal(cep, idCliente);
}
