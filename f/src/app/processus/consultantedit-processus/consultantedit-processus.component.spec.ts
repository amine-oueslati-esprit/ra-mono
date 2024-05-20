import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditProcessusComponent } from './consultantedit-processus.component';

describe('ConsultanteditProcessusComponent', () => {
  let component: ConsultanteditProcessusComponent;
  let fixture: ComponentFixture<ConsultanteditProcessusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditProcessusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditProcessusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
