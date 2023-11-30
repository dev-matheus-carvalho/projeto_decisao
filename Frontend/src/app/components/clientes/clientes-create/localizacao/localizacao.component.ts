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

  sentidoSeta: string = 'down';
  seta: boolean = false;

  showEnderecos: boolean = false;
  showInputCadastroTelefone: boolean = true;

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
}
