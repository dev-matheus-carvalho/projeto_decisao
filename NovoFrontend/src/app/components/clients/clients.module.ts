import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsReadComponent } from './clients-read/clients-read.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientsReadService } from 'src/app/shared/clients/clients-read/clients-read.service';


@NgModule({
  declarations: [
    ClientsReadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ClientsRoutingModule
  ],
  providers: [ClientsReadService]
})
export class ClientsModule { }
