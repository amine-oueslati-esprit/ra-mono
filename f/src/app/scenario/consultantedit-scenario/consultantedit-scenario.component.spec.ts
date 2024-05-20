import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditScenarioComponent } from './consultantedit-scenario.component';

describe('ConsultanteditScenarioComponent', () => {
  let component: ConsultanteditScenarioComponent;
  let fixture: ComponentFixture<ConsultanteditScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditScenarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
