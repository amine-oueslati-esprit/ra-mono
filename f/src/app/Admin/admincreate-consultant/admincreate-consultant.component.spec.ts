import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateConsultantComponent } from './admincreate-consultant.component';

describe('AdmincreateConsultantComponent', () => {
  let component: AdmincreateConsultantComponent;
  let fixture: ComponentFixture<AdmincreateConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateConsultantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
