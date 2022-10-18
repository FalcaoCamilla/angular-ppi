import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExibeDeputadosComponent } from './exibe-deputados/exibe-deputados.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscaDeputadoComponent } from './busca-deputado/busca-deputado.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ExibeDeputadosComponent,
    BuscaDeputadoComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
