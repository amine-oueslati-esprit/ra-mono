import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewConsultantComponent } from './consultantview-consultant.component';

describe('ConsultantviewConsultantComponent', () => {
  let component: ConsultantviewConsultantComponent;
  let fixture: ComponentFixture<ConsultantviewConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewConsultantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
