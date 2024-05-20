import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditApplicationComponent } from './consultantedit-application.component';

describe('ConsultanteditApplicationComponent', () => {
  let component: ConsultanteditApplicationComponent;
  let fixture: ComponentFixture<ConsultanteditApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
