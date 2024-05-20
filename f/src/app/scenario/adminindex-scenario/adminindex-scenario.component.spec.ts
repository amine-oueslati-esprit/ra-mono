import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexScenarioComponent } from './adminindex-scenario.component';

describe('AdminindexScenarioComponent', () => {
  let component: AdminindexScenarioComponent;
  let fixture: ComponentFixture<AdminindexScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexScenarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
