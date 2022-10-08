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


@NgModule({
  declarations: [
    AppComponent,
    ExibeDeputadosComponent
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
