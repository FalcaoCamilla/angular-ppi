import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaDeputadoComponent } from './busca-deputado.component';

describe('BuscaDeputadoComponent', () => {
  let component: BuscaDeputadoComponent;
  let fixture: ComponentFixture<BuscaDeputadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaDeputadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaDeputadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
