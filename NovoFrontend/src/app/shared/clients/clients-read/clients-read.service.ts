import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ClientsReadInterface } from '../../interfaces/clients/clients-read/clientsReadInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientsReadService implements OnInit {

  private baseUrl: string = 'http://localhost:3000/clientes';
  private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhldXNAZ21haWwuY29tIiwiaWF0IjoxNzAyOTE4MzYxLCJleHAiOjE3MDI5NzIzNjF9.8_NlC6Ectd_3NUOBz5oVZKPEU3UwLZJPssmVPfsAEhM';

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
