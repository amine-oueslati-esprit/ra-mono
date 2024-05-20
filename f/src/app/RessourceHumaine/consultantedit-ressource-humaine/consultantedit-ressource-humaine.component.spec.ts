import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditRessourceHumaineComponent } from './consultantedit-ressource-humaine.component';

describe('ConsultanteditRessourceHumaineComponent', () => {
  let component: ConsultanteditRessourceHumaineComponent;
  let fixture: ComponentFixture<ConsultanteditRessourceHumaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditRessourceHumaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditRessourceHumaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
