import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/ClienteInterface';
import { ClienteService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.scss']
})
export class ClientesReadComponent implements OnInit{

  temClientes: boolean = false;

  cliente: Array<Cliente> = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.listarClientes();
  }

  async listarClientes() {
    try {
      const clientes = await this.clienteService.getClientes();

      if(clientes.clientes.length === 0) {
        this.temClientes = false;
        console.log('Não tem clientes')
      } else {
        this.temClientes = true;
        for(let i of clientes.clientes) {
          this.cliente.push(i);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
