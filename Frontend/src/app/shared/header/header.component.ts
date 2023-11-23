import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  primeiraLetra!: string | undefined;
  ultimaLetra!: string | undefined;
  show: boolean = false;
  posicaoImagem: boolean = true;

  constructor(private loginService: LoginService) {}

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

  mostrarTela() {
    console.log('Mostrar tela')
    this.show = !this.show;
    this.posicaoImagem = !this.posicaoImagem;
  }

  tirarTela() {
    console.log('Tirar tela')
    this.show = false;
    this.posicaoImagem = true;
    this.loginService.ocultarMenu();
  }
}
