import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBrasilService {

  private apiUrl = 'https://brasilapi.com.br/api'; 
  
  constructor(private http: HttpClient) {}
  // método para buscar o CEP
  getCepInfo(cep: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/cep/v1/${cep}`);
  }

  // método para buscar o CNPJ
  getCnpjInfo(cnpj: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/cnpj/v1/${cnpj}`);
  }
}
