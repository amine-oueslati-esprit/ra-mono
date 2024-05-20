import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateAdminComponent } from './admincreate-admin.component';

describe('AdmincreateAdminComponent', () => {
  let component: AdmincreateAdminComponent;
  let fixture: ComponentFixture<AdmincreateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
