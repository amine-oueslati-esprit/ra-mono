import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditAdminComponent } from './adminedit-admin.component';

describe('AdmineditAdminComponent', () => {
  let component: AdmineditAdminComponent;
  let fixture: ComponentFixture<AdmineditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
