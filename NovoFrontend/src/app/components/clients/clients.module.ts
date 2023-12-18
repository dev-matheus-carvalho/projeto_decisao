import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsReadComponent } from './clients-read/clients-read.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './clients.component';


@NgModule({
  declarations: [
    ClientsReadComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
