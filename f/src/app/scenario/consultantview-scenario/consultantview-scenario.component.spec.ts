import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewScenarioComponent } from './consultantview-scenario.component';

describe('ConsultantviewScenarioComponent', () => {
  let component: ConsultantviewScenarioComponent;
  let fixture: ComponentFixture<ConsultantviewScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewScenarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
