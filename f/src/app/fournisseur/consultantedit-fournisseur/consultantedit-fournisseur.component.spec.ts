import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditFournisseurComponent } from './consultantedit-fournisseur.component';

describe('ConsultanteditFournisseurComponent', () => {
  let component: ConsultanteditFournisseurComponent;
  let fixture: ComponentFixture<ConsultanteditFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
