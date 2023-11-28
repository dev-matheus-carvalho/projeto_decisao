import { Component } from '@angular/core';
import { CreateCliente } from 'src/app/interfaces/ClienteInterface';
import { ClienteService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  showCpfOuCnpj: boolean = true;
  showNome: boolean = true;
  showDataCriacao: boolean = false;
  showNomeIdentificacao: boolean = false;
  showInscricaoMunicipal: boolean = false;
  showInscricaoEstadual: boolean = false;
  showMsgValidacao: boolean = false;
  showMsgValidacaoNome: boolean = false;

  msgInputIdentificacao: string = '';
  msgAviso: string = '';
  msgAvisoNome: string = '';
  msgAvisoNomeFantasia: string = ''

  nome: string = '';
  identificacao: string = '';
  nome_fantasia: string = '';
  nome_mae: string = '';
  inscricao_municipal: string = '';
  inscricao_estadual: string = '';
  situacao: string = 'Ativo';

  idUsuario: string = localStorage.getItem('idUsuario') || '';
  idCliente: string = '';

  habilitarBotao: boolean = false;
  desabilatar: string = 'false';

  cliente: CreateCliente = {
    nome: '',
    identificacao: '',
    idUsuario: '',
  }

  constructor(private clientesService: ClienteService) {}

  async criarCliente() {
    try {

      this.cliente = {
        nome: this.nome,
        identificacao: this.identificacao,
        nome_fantasia: this.nome_fantasia,
        nome_mae: this.nome_mae,
        inscricao_municipal: this.inscricao_municipal,
        inscricao_estadual: this.inscricao_estadual,
        situacao: this.situacao,
        idUsuario: this.idUsuario,
      }

      const validacaoIdentificacao = this.validarIdentificacao(this.identificacao);
      const validacaoNome = this.validarNome(this.nome);

      const resultado = validacaoIdentificacao && validacaoNome;
      console.log(resultado)

      if(resultado === true) {
        this.desabilatar = 'true';
        // const novoCliente = await this.clientesService.createCliente(this.cliente);
        // this.idCliente = novoCliente.idCliente;

        const cpf = false;

        if(cpf === false) {
          this.showNomeIdentificacao = true;
          this.msgInputIdentificacao = 'Nome fantasia';
        } else {
          this.showNomeIdentificacao = true;
          this.msgInputIdentificacao = 'Nome da mãe';
        }
      }


    } catch (error) {
      console.log(error)
    }
  }

  cancelar() {
    console.log(this.idCliente);
  }

  validarIdentificacao(identificacao: string) {
    if(identificacao.length === 14) {
      this.showMsgValidacao = false;
      this.msgAviso = '';

      return true;
    }

    if(identificacao.length === 18) {
      this.showMsgValidacao = false;
      this.msgAviso = '';

      return true;
    }
    this.showMsgValidacao = true;
    this.msgAviso = 'Digite um CNPJ/CPF válido';

    setTimeout(() => {
      this.showMsgValidacao = false;
      this.msgAviso = 'Digite um CNPJ/CPF válido';
    }, 5000);

    return false;
  }

  validarNome(nome: string) {
    if(nome === '') {
      this.showMsgValidacaoNome = true
      this.msgAvisoNome = 'Insira um nome para seu cliente';

      setTimeout(() => {
        this.showMsgValidacaoNome = false;
        this.msgAvisoNome = '';
      }, 5000);

      return false;
    }

    return true;
  }

  validarNomeFantasia(nome_fantasia: string) {
    if(nome_fantasia === '') {
      this.showMsgValidacaoNome = true
      this.msgAvisoNome = 'Insira um nome para seu cliente';

      setTimeout(() => {
        this.showMsgValidacaoNome = false;
        this.msgAvisoNome = '';
      }, 5000);

      return false;
    }

    return true;
  }

}
