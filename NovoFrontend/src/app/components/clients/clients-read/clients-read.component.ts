import { Component, OnInit } from '@angular/core';
import { ClientsReadService } from 'src/app/shared/clients/clients-read/clients-read.service';
import { ClientsReadInterface } from 'src/app/shared/interfaces/clients/clients-read/clientsReadInterface';
import { Clientes } from 'src/app/shared/interfaces/clientsInterface';

@Component({
  selector: 'app-clients-read',
  templateUrl: './clients-read.component.html',
  styleUrls: ['./clients-read.component.scss']
})
export class ClientsReadComponent implements OnInit {

  listaClientesVazia: boolean = false;

  listaClientes: ClientsReadInterface = {
    usuario: '',
    clientes: []
  }

  ngOnInit(): void {
    this.listarClientes();
  }

  constructor(private clientsReadService: ClientsReadService) { }

  public async listarClientes() {
    const usuarios = await this.clientsReadService.getClientes();

    if (usuarios.clientes.length === 0) {
      this.listaClientesVazia = true;
    }

    this.listaClientesVazia = false;
    this.listaClientes.usuario = usuarios.usuario;
    this.listaClientes.clientes = usuarios.clientes;

    this.listaClientes.clientes.forEach((data) => {
      const dataConvertida = new Date(data.createdAt);
      const dataFormatada = this.formatDate(dataConvertida)

      data.createdAt = dataFormatada;
    });

  }

  private formatDate(date: Date) {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  cadastrar() {
    localStorage.setItem('page', 'create/formulario');
  }
}

