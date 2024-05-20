import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateScenarioComponent } from './consultantcreate-scenario.component';

describe('ConsultantcreateScenarioComponent', () => {
  let component: ConsultantcreateScenarioComponent;
  let fixture: ComponentFixture<ConsultantcreateScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateScenarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
