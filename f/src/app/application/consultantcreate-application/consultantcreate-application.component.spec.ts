import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateApplicationComponent } from './consultantcreate-application.component';

describe('ConsultantcreateApplicationComponent', () => {
  let component: ConsultantcreateApplicationComponent;
  let fixture: ComponentFixture<ConsultantcreateApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
