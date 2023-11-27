import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { ClientesReadComponent } from './clientes-read/clientes-read.component';
import { ClientesCreateComponent } from './clientes-create/clientes-create.component';
import { FormularioComponent } from './clientes-create/formulario/formulario.component';

const clienteRoutes: Routes = [
  { path: '', component: ClientesComponent, children: [
    { path: 'listar', component: ClientesReadComponent },
  ] },
  { path: 'criar', component: ClientesCreateComponent, children: [
    { path: 'formulario', component: FormularioComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }