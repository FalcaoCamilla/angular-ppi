import { DeputadoService } from './../model/deputado.service';
import { Component, OnInit } from '@angular/core';
import { Deputado } from '../model/deputado';
import { Partido } from '../model/partido';
import { Lider } from '../model/lider';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { DepPartido } from '../model/depPartido';

@Component({
  selector: 'app-exibe-deputados',
  templateUrl: './exibe-deputados.component.html',
  styleUrls: ['./exibe-deputados.component.css']
})
export class ExibeDeputadosComponent implements OnInit {

  deputados: Deputado[];
  partido: Partido[];
  lideres: Lider[];
  depPartido: DepPartido[]
  cod: any;
  value: string;
  msgErro: string = "Desculpe, não consegui identificar. Informe uma sigla válida."

  public consultaForm: FormGroup = this.fb.group({
    sigla: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],

  })

  constructor(private ds: DeputadoService, private fb: FormBuilder) {
    this.deputados = [];
    this.partido = [];
    this.lideres = [];
    this.depPartido = [];
    this.cod='';
    this.value='';
   }

  ngOnInit(): void {

  }

  select(value: string, id: string): any{
    this.lideres=[];
    this.depPartido=[];
    if(value == 'lideres'){
      return this.obterLider(id)
    } else {
      if(value == 'deputados'){
        return this.obterDepPartido(id)
      }
    }
  }

  obterDeputados(){
    this.ds.obterDeputados().subscribe(res => {
      this.deputados = res.dados;
    });
  }

  obterPartido(sigla: string){
    this.lideres=[];
    this.depPartido=[];
    this.ds.obterPartido(sigla).subscribe(res => {
      this.partido = res.dados
      this.cod = res.dados[0]['id']
      //console.log(this.cod)
      return this.cod
    })
  }

  obterLider(id: string){
    id = this.cod
    //console.log(id)
    this.ds.obterLiderPartido(id).subscribe(res => {
      this.lideres = res.dados
    })
  }

  obterDepPartido(sigla: string){
    this.ds.obterDepPartido(sigla).subscribe(res =>{
      this.depPartido = res.dados
    })
  }

}
