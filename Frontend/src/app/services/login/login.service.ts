import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from 'src/app/interfaces/LoginInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mostrarMenu: EventEmitter<boolean> = new EventEmitter();
  baseUrl: string = 'http://localhost:3000/login';

  constructor(private http: HttpClient) { }

  fazerLogin(email: string, senha: string): Promise<LoginInterface> {
    return new Promise((resolve, reject) => {
      this.http.post<LoginInterface>(this.baseUrl, { email, senha })
      .subscribe({
        next: (value: any) => {
          resolve(value);
          this.mostrarMenu.emit(true);
        },
        error: error => reject(error),
      });
    });
  }

}
