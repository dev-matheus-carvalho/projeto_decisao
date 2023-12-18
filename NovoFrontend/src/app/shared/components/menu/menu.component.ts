import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isHomeOn: boolean = true;
  public isClientOn: boolean = false

  ngOnInit(): void {
    const page = localStorage.getItem('page');
    console.log(page);

    if (page === 'home') {
      this.home()
    } else {
      this.client();
    };
  }

  public home(): void {
    this.isHomeOn = true;
    this.isClientOn = false;
    localStorage.setItem('page', 'home');
  }

  public client(): void {
    this.isHomeOn = false;
    this.isClientOn = true;
    localStorage.setItem('page', 'clients');
  }
}
