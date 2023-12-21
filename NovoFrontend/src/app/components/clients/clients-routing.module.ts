import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsReadComponent } from './clients-read/clients-read.component';
import { ClientsCreateComponent } from './clients-create/clients-create.component';
import { FormsComponent } from './clients-create/forms/forms.component';
import { LocalizacaoComponent } from './clients-create/localizacao/localizacao.component';

const clients: Routes = [
  { path: '', component: ClientsReadComponent },
  {
    path: 'create', component: ClientsCreateComponent, children: [
      { path: 'formulario', component: FormsComponent },
      { path: 'localizacao', component: LocalizacaoComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(clients)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
