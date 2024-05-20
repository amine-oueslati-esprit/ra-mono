import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateScenarioComponent } from './admincreate-scenario.component';

describe('AdmincreateScenarioComponent', () => {
  let component: AdmincreateScenarioComponent;
  let fixture: ComponentFixture<AdmincreateScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateScenarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
