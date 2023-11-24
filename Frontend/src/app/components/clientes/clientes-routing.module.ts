import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { ClientesReadComponent } from './clientes-read/clientes-read.component';

const clienteRoutes: Routes = [
  { path: '', component: ClientesComponent, children: [
    { path: 'listar', component: ClientesReadComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
