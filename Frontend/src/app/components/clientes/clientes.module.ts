import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientesReadComponent } from './clientes-read/clientes-read.component';
import { ClientesCreateComponent } from './clientes-create/clientes-create.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesReadComponent,
    ClientesCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
