import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateConsultantComponent } from './consultantcreate-consultant.component';

describe('ConsultantcreateConsultantComponent', () => {
  let component: ConsultantcreateConsultantComponent;
  let fixture: ComponentFixture<ConsultantcreateConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateConsultantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
