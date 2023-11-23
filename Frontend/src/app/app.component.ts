import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login/login.service';
import { HeaderService } from './services/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  show: boolean = true;
  showMsgSair: boolean = false;

  constructor(
    private loginService: LoginService,
    private headerService: HeaderService
    ) {}

  ngOnInit(): void {
    this.loginService.mostrarMenu.subscribe(mostrar => {
      this.show = mostrar;
    });

    this.headerService.mostrarMsgSair.subscribe(mostrar => {
      this.showMsgSair = mostrar;
    })
  }

  fecharJanela() {
    this.show = false;
    this.showMsgSair = false;
  }

  fecharJanelaPrincipal() {
    this.showMsgSair = false;
  }

}
