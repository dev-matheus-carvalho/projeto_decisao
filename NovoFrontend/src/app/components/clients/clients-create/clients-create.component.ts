import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-create',
  templateUrl: './clients-create.component.html',
  styleUrls: ['./clients-create.component.scss']
})
export class ClientsCreateComponent implements OnInit {

  constructor(private router: Router) { }

  showStatus: boolean = true;
  cor: string = 'ativo';
  status: string = 'Ativo';
  upDown: boolean = false;
  ativo: string = 'Ativo';
  inativo: string = 'Inativo';
  negativo: string = 'Negativo';

  ngOnInit(): void {
    this.router.navigate(['create/formulario']);
  }

  seta() {
    this.upDown = !this.upDown;
  }

  statusAtivo() {
    this.status = this.ativo;
    this.upDown = false;
    this.cor = 'ativo';
  }
  statusInativo() {
    this.status = this.inativo;
    this.upDown = false;
    this.cor = 'inativo';
  }
  statusNegativo() {
    this.status = this.negativo;
    this.upDown = false;
    this.cor = 'negativo';
  }
}
