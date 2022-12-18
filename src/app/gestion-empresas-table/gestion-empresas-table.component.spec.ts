import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmpresasTableComponent } from './gestion-empresas-table.component';

describe('GestionEmpresasTableComponent', () => {
  let component: GestionEmpresasTableComponent;
  let fixture: ComponentFixture<GestionEmpresasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEmpresasTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEmpresasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
