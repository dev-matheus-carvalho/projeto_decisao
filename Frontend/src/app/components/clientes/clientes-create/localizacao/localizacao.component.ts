import { Component } from '@angular/core';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.scss']
})
export class LocalizacaoComponent {
  meuArray = [
    {endereco: 'Rua L1, Qd53, Lt24, Casa Prata, Centro Goiânia - GO CEP: 74950-100', isPrincipal: true},
    {endereco: 'Rua L2, Qd53, Lt24, Casa Prata, Centro Goiânia - GO CEP: 74950-100', isPrincipal: false},
    {endereco: 'Rua L3, Qd53, Lt24, Casa Prata, Centro Goiânia - GO CEP: 74950-100', isPrincipal: false},
    // {endereco: 'Rua L4, Qd53, Lt24, Casa Prata, Centro Goiânia - GO CEP: 74950-100', isPrincipal: false},
    // {endereco: 'Rua L5, Qd53, Lt24, Casa Prata, Centro Goiânia - GO CEP: 74950-100', isPrincipal: false},
    // {endereco: 'Rua L6, Qd53, Lt24, Casa Prata, Centro Goiânia - GO CEP: 74950-100', isPrincipal: false},
  ];
}
