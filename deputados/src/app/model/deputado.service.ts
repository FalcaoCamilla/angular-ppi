import { RespostaAPI } from './resposta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {

  constructor(private http: HttpClient) { }

  obterTodos(): Observable<any> {
    let url = 'https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome';
    return this.http.get(url);
  }

  obterPartido(id: string): Observable<RespostaAPI>{ //Observable<any>
    let url = `https://dadosabertos.camara.leg.br/api/v2/partidos/${id}`
    return this.http.get<RespostaAPI>(url);
  }
}
