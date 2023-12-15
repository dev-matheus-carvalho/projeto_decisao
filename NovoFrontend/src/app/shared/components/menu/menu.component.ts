import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public isHomeOn: boolean = true;
  public isClientOn: boolean = false

  public home(): void {
    this.isHomeOn = true;
    this.isClientOn = false;
  }

  public client(): void {
    this.isHomeOn = false;
    this.isClientOn = true;
  }
}
