import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexConsultantComponent } from './consultantindex-consultant.component';

describe('ConsultantindexConsultantComponent', () => {
  let component: ConsultantindexConsultantComponent;
  let fixture: ComponentFixture<ConsultantindexConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexConsultantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
