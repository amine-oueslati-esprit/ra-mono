import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewGroupeAComponent } from './consultantview-groupe-a.component';

describe('ConsultantviewGroupeAComponent', () => {
  let component: ConsultantviewGroupeAComponent;
  let fixture: ComponentFixture<ConsultantviewGroupeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewGroupeAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewGroupeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
