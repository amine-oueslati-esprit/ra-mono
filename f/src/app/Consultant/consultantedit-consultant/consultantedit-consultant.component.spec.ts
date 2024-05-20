import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditConsultantComponent } from './consultantedit-consultant.component';

describe('ConsultanteditConsultantComponent', () => {
  let component: ConsultanteditConsultantComponent;
  let fixture: ComponentFixture<ConsultanteditConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditConsultantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
