import { Component, OnInit } from '@angular/core';
import { EnderecoCompleto, GetEndereco } from 'src/app/interfaces/EnderecoInterface';
import { EnderecosService } from 'src/app/services/enderecos/enderecos.service';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.scss']
})
export class LocalizacaoComponent implements OnInit {

  meuArray: Array<EnderecoCompleto> = [];

  arrayTelefones = [
    {numero: '(00) 0 0000-0000', isPrincipal: false},
    {numero: '(11) 1 1111-1111', isPrincipal: true},
    {numero: '(22) 2 0000-0000', isPrincipal: false},
  ];

  arrayEmails = [
    {email: 'teste1@decisaosistemas.com.br', isPrincipal: false},
    {email: 'teste2@decisaosistemas.com.br', isPrincipal: true},
    {email: 'teste3@decisaosistemas.com.br', isPrincipal: false},
  ];

  enderecos: EnderecoCompleto = {};

  telaCadastroEndereco: boolean = false;
  filtroTela: string = 'global';

  email: string = '';

  sentidoSeta: string = 'down';
  seta: boolean = false;

  sentidoSetaTelefone: string = 'down-telefone';
  setaTelefone: boolean = false;
  setaTelefoneImg: string = 'down';

  sentidoSetaEmail: string = 'down-email';
  setaEmail: boolean = false;
  setaEmailImg: string = 'down';
  showEmails: boolean = false;
  showInputCadastroEmail: boolean = false;

  showEnderecos: boolean = false;
  showTelefones: boolean = false;
  showInputCadastroTelefone: boolean = false;

  habilitarBotaoSalvarEmail: boolean = false;

  constructor(private enderecosService: EnderecosService) {}

  ngOnInit(): void {
    this.listarEnderecos();
  }

  async listarEnderecos() {
    try {
      const enderecos = await this.enderecosService.getEnderecos();

      for(let i of enderecos) {
        const enderecoCompleto = `${i.logradouro}, ${i.complemento}, ${i.bairro} ${i.cidade} ${i.estado} - CEP: ${i.cep}`;
        const enderecoPrincipal = i.is_principal;

        this.enderecos.endereco = enderecoCompleto;
        this.enderecos.is_principal = enderecoPrincipal;

        this.meuArray.push(this.enderecos);

      }
      console.log(enderecos);
    } catch (error) {
      console.log(error)
    }
  }

  inverterSentidoDaSeta() {
    if (this.seta === false) {
      this.seta = true;
      this.sentidoSeta = 'up';
      this.showEnderecos = true;
    } else {
      this.seta = false;
      this.sentidoSeta = 'down';
      this.showEnderecos = false;
    }
  }

  inverterSentidoSetaTelefone() {
    if (this.setaTelefone === false) {
      this.setaTelefone = true;

      this.setaTelefoneImg = 'up';
      this.sentidoSetaTelefone = 'up-telefone';
      this.showTelefones = true;

    } else {
      this.setaTelefone = false;

      this.setaTelefoneImg = 'down';
      this.sentidoSetaTelefone = 'down-telefone';
      this.showTelefones = false;
    }
  }

  adicionarTelefone() {
    this.showInputCadastroTelefone = !this.showInputCadastroTelefone;
  }

  cancelarCadastroTelefone () {
    this.showInputCadastroTelefone = false;
  }

  inverterSentidoSetaEmail() {
    if (this.setaEmail === false) {
      this.setaEmail = true;

      this.setaEmailImg = 'up';
      this.sentidoSetaEmail = 'up-telefone';
      this.showEmails = true;

    } else {
      this.setaEmail = false;

      this.setaEmailImg = 'down';
      this.sentidoSetaEmail = 'down-telefone';
      this.showEmails = false;
    }
  }

  onKeyUpEmail() {
    if (this.email === '' || this.email === null || this.email === undefined) {
      this.habilitarBotaoSalvarEmail = false;
    } else {
      this.habilitarBotaoSalvarEmail = true;
    }
  }

  adicionarEmail() {
    this.showInputCadastroEmail = !this.showInputCadastroEmail;
  }

  cancelarCadastroEmail () {
    this.showInputCadastroEmail = false;
  }

  abrirCadastroEndereco() {
    this.telaCadastroEndereco = true;
    this.filtroTela = 'global-filtro'
  }

  fecharCadastroEndereco() {
    this.telaCadastroEndereco = false;
    this.filtroTela = 'global';
  }

}
