import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-exibe-deputados></app-exibe-deputados>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'deputados';
}
