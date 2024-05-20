import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateGroupeAComponent } from './consultantcreate-groupe-a.component';

describe('ConsultantcreateGroupeAComponent', () => {
  let component: ConsultantcreateGroupeAComponent;
  let fixture: ComponentFixture<ConsultantcreateGroupeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateGroupeAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateGroupeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
