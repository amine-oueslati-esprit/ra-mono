import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditMenaceComponent } from './consultantedit-menace.component';

describe('ConsultanteditMenaceComponent', () => {
  let component: ConsultanteditMenaceComponent;
  let fixture: ComponentFixture<ConsultanteditMenaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditMenaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditMenaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
