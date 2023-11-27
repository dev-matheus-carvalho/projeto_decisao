import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.scss']
})
export class ClientesCreateComponent {

  upDown: boolean = false;

  ativo: string = 'Ativo';
  inativo: string = 'Inativo';
  negativo: string = 'Negativo';

  status: string = 'Ativo';

  cor: string = 'ativo'

  seta() {
    this.upDown = !this.upDown;
  }


  statusAtivo() {
    this.status = this.ativo;
    this.upDown = false;
    this.cor = 'ativo';
    console.log(this.status)
  }
  statusInativo() {
    this.status = this.inativo;
    this.upDown = false;
    this.cor = 'inativo';
    console.log(this.status)
  }
  statusNegativo() {
    this.status = this.negativo;
    this.upDown = false;
    this.cor = 'negativo';
    console.log(this.status)
  }

}
