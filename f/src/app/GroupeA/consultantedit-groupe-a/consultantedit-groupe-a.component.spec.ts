import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditGroupeAComponent } from './consultantedit-groupe-a.component';

describe('ConsultanteditGroupeAComponent', () => {
  let component: ConsultanteditGroupeAComponent;
  let fixture: ComponentFixture<ConsultanteditGroupeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditGroupeAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditGroupeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
