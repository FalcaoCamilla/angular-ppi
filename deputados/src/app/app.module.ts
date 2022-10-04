import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExibeDeputadosComponent } from './exibe-deputados/exibe-deputados.component';

@NgModule({
  declarations: [
    AppComponent,
    ExibeDeputadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
