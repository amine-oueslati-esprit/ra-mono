import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexAdminComponent } from './adminindex-admin.component';

describe('AdminindexAdminComponent', () => {
  let component: AdminindexAdminComponent;
  let fixture: ComponentFixture<AdminindexAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
