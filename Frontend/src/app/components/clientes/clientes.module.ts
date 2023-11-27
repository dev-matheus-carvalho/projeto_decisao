import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientesReadComponent } from './clientes-read/clientes-read.component';
import { ClientesCreateComponent } from './clientes-create/clientes-create.component';
import { LocalizacaoComponent } from './clientes-create/localizacao/localizacao.component';
import { RepresentantesComponent } from './clientes-create/representantes/representantes.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesReadComponent,
    ClientesCreateComponent,
    LocalizacaoComponent,
    RepresentantesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
