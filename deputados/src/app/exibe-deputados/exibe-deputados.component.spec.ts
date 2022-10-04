import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeDeputadosComponent } from './exibe-deputados.component';

describe('ExibeDeputadosComponent', () => {
  let component: ExibeDeputadosComponent;
  let fixture: ComponentFixture<ExibeDeputadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibeDeputadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeDeputadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
