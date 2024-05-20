import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewScenarioComponent } from './adminview-scenario.component';

describe('AdminviewScenarioComponent', () => {
  let component: AdminviewScenarioComponent;
  let fixture: ComponentFixture<AdminviewScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewScenarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
