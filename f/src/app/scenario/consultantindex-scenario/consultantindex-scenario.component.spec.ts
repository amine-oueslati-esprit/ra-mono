import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexScenarioComponent } from './consultantindex-scenario.component';

describe('ConsultantindexScenarioComponent', () => {
  let component: ConsultantindexScenarioComponent;
  let fixture: ComponentFixture<ConsultantindexScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexScenarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
