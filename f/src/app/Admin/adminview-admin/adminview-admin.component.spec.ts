import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewAdminComponent } from './adminview-admin.component';

describe('AdminviewAdminComponent', () => {
  let component: AdminviewAdminComponent;
  let fixture: ComponentFixture<AdminviewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
