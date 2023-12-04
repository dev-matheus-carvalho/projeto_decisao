import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetEndereco } from 'src/app/interfaces/EnderecoInterface';

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {

  baseUrl: string = 'http://localhost:3000/endereco';

  constructor(private http: HttpClient) { }

  getEnderecos(): Promise<Array<GetEndereco>> {
    return new Promise((resolve, reject) => {
      const idCliente = localStorage.getItem('idCliente');

      this.http.get<Array<GetEndereco>>(`${this.baseUrl}/${idCliente}`)
      .subscribe({
        next: value => resolve(value),
        error: error => reject(error),
      });
    });
  }
}
