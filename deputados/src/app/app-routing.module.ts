import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaDeputadoComponent } from './busca-deputado/busca-deputado.component';
import { ExibeDeputadosComponent } from './exibe-deputados/exibe-deputados.component';

const routes: Routes = [
  {path: 'exibetodos', component: ExibeDeputadosComponent},
  {path:  'buscar', component: BuscaDeputadoComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
