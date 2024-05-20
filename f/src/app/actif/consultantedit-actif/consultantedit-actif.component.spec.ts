import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditActifComponent } from './consultantedit-actif.component';

describe('ConsultanteditActifComponent', () => {
  let component: ConsultanteditActifComponent;
  let fixture: ComponentFixture<ConsultanteditActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditActifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
