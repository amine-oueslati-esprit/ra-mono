import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditProjetComponent } from './consultantedit-projet.component';

describe('ConsultanteditProjetComponent', () => {
  let component: ConsultanteditProjetComponent;
  let fixture: ComponentFixture<ConsultanteditProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
