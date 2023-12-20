import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ClientsReadInterface } from '../../interfaces/clients/clients-read/clientsReadInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientsReadService implements OnInit {

  private baseUrl: string = 'http://localhost:3000/clientes';
  private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhldXNAZ21haWwuY29tIiwiaWF0IjoxNzAyOTg4NDE3LCJleHAiOjE3MDMwNDI0MTd9.EtWwiwQxqt3atKygH1YHqhLMPu7OQbMyGOrjTWbTey4';

  ngOnInit(): void {

  }

  constructor(private http: HttpClient) { }

  getClientes(): Promise<ClientsReadInterface> {
    return new Promise((resolve, reject) => {

      // const token = localStorage.getItem('token');

      this.http.get<ClientsReadInterface>(this.baseUrl, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).subscribe({
        next: value => resolve(value),
        error: error => reject(error)
      });
    });
  }
}
