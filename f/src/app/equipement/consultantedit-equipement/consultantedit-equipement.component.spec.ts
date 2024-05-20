import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditEquipementComponent } from './consultantedit-equipement.component';

describe('ConsultanteditEquipementComponent', () => {
  let component: ConsultanteditEquipementComponent;
  let fixture: ComponentFixture<ConsultanteditEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditEquipementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
