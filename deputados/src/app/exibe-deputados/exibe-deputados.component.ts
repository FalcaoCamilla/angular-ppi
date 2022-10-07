import { DeputadoService } from './../model/deputado.service';
import { Component, OnInit } from '@angular/core';
import { Deputado } from '../model/deputado';
import { Partido } from '../model/partido';
import { Lider } from '../model/lider';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-exibe-deputados',
  templateUrl: './exibe-deputados.component.html',
  styleUrls: ['./exibe-deputados.component.css']
})
export class ExibeDeputadosComponent implements OnInit {

  deputados: Deputado[];
  partido: Partido[];
  lideres: Lider[];

  public consultaForm: FormGroup = this.fb.group({
    lider: ['', [Validators.required]],
    sigla: ['', [Validators.required, Validators.maxLength(5)]]
  })

  constructor(private ds: DeputadoService, private fb: FormBuilder) {
    this.deputados = [];
    this.partido = [];
    this.lideres = [];
   }

  ngOnInit(): void {
    this.ds.obterTodos().subscribe(res => {
      this.deputados = res.dados;
    });
  }

  obterPartido(sigla: string){
    this.ds.obterPartido(sigla).subscribe(res => {
      this.partido = res.dados
    })
  }

  obterLider(id: string){
    this.ds.obterLiderPartido(id).subscribe(res => {
      this.lideres = res.dados
    })
  }

}
