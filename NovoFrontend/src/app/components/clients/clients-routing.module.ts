import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsReadComponent } from './clients-read/clients-read.component';
import { ClientsComponent } from './clients.component';

const clients: Routes = [
  { path: '', component: ClientsReadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(clients)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
