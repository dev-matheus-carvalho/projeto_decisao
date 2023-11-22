import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  show: boolean = true;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.mostrarMenu.subscribe(mostrar => {
      this.show = mostrar;
    });
  }
}
