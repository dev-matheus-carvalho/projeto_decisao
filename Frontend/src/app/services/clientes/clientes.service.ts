import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetClientesInterface } from 'src/app/interfaces/ClienteInterface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl: string = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Promise<GetClientesInterface> {
    return new Promise((resolve, reject) => {

      const token = localStorage.getItem('token');

      this.http.get<GetClientesInterface>(this.baseUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).subscribe({
        next: value => resolve(value),
        error: error => reject(error)
      });
    });
  }

}
