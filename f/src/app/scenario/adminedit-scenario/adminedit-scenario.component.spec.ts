import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditScenarioComponent } from './adminedit-scenario.component';

describe('AdmineditScenarioComponent', () => {
  let component: AdmineditScenarioComponent;
  let fixture: ComponentFixture<AdmineditScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditScenarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
