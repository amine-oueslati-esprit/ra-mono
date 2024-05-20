import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateApplicationComponent } from './admincreate-application.component';

describe('AdmincreateApplicationComponent', () => {
  let component: AdmincreateApplicationComponent;
  let fixture: ComponentFixture<AdmincreateApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
