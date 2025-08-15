import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApartamentosService {
  private endereco = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  listarApartamentos(): Observable<any> {
    return this.http.get(`${this.endereco}/listar-apartamentos`);
  }
}
