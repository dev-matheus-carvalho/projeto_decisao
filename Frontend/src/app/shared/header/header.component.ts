import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  primeiraLetra!: string | undefined;
  ultimaLetra!: string | undefined;

  ngOnInit(): void {
      const nome = localStorage.getItem('nome');
      const arrayNome = nome?.split(' ');

      if(arrayNome !== undefined) {
        const tamanhoArray = arrayNome?.length;
        const ultimaLetra: string = arrayNome[tamanhoArray - 1 ].charAt(0);

        this.primeiraLetra = nome?.charAt(0);
        this.ultimaLetra = ultimaLetra;
        console.log(`As letras são: ${this.primeiraLetra} ${this.ultimaLetra}`)
      }
      console.log(nome?.charAt(0))
  }
}
