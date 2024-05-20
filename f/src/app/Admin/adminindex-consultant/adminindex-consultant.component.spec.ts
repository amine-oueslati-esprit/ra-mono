import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexConsultantComponent } from './adminindex-consultant.component';

describe('AdminindexConsultantComponent', () => {
  let component: AdminindexConsultantComponent;
  let fixture: ComponentFixture<AdminindexConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexConsultantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
