import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditControleComponent } from './consultantedit-controle.component';

describe('ConsultanteditControleComponent', () => {
  let component: ConsultanteditControleComponent;
  let fixture: ComponentFixture<ConsultanteditControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditControleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
