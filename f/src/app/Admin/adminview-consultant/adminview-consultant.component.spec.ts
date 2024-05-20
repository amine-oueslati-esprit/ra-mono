import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewConsultantComponent } from './adminview-consultant.component';

describe('AdminviewConsultantComponent', () => {
  let component: AdminviewConsultantComponent;
  let fixture: ComponentFixture<AdminviewConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewConsultantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
