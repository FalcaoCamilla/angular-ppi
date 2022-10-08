import { RespostaAPI } from './generic';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {

  constructor(private http: HttpClient) { }

  obterDeputados(): Observable<any> {
    let url = 'https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome';
    return this.http.get(url);
  }

  obterPartido(sigla: string): Observable<RespostaAPI>{ //Observable<any>
    let url = `https://dadosabertos.camara.leg.br/api/v2/partidos?sigla=${sigla}&ordem=ASC&ordenarPor=sigla`;
    return this.http.get<RespostaAPI>(url);
  }

  obterLiderPartido(id: string): Observable<any>{
    let url = `https://dadosabertos.camara.leg.br/api/v2/partidos/${id}/lideres`;
    return this.http.get(url);
  }

  obterDepPartido(sigla: string): Observable<any>{
    let url = `https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=${sigla}&ordem=ASC`
    return this.http.get(url)
  }
}
