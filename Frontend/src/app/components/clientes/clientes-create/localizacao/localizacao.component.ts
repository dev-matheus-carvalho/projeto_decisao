import { Component } from '@angular/core';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.scss']
})
export class LocalizacaoComponent {
  meuArray = [
    {endereco: 'Rua L1, Qd53, Lt24, Casa Prata, Centro Goiânia - GO CEP: 74950-100', isPrincipal: false},
    {endereco: 'Rua L2, Qd53, Lt24, Casa Prata, Centro Goiânia - GO CEP: 74950-100', isPrincipal: true},
    {endereco: 'Rua L3, Qd53, Lt24, Casa Prata, Centro Goiânia - GO CEP: 74950-100', isPrincipal: false},
    // {endereco: 'Rua L4, Qd53, Lt24, Casa Prata, Centro Goiânia - GO CEP: 74950-100', isPrincipal: false},
    // {endereco: 'Rua L5, Qd53, Lt24, Casa Prata, Centro Goiânia - GO CEP: 74950-100', isPrincipal: false},
    // {endereco: 'Rua L6, Qd53, Lt24, Casa Prata, Centro Goiânia - GO CEP: 74950-100', isPrincipal: false},
  ];

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

  teste: boolean = false;

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

  funcaoTeste() {
    this.teste = !this.teste;
  }
}
