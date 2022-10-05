import { DeputadoService } from './../model/deputado.service';
import { Component, OnInit } from '@angular/core';
import { Deputado } from '../model/deputado';

@Component({
  selector: 'app-exibe-deputados',
  templateUrl: './exibe-deputados.component.html',
  styleUrls: ['./exibe-deputados.component.css']
})
export class ExibeDeputadosComponent implements OnInit {

  deputados: Deputado[];

  constructor(private ds: DeputadoService) {
    this.deputados = [];
   }

  ngOnInit(): void {
    this.ds.obterTodos().subscribe(res => {
      this.deputados = res.dados
    });
  }

  obterPartido(id: string){
    this.ds.obterPartido(id).subscribe(res => {
      console.log(res.dados)
    })
  }

}
