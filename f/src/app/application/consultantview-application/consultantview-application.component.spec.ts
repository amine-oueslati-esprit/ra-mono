import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewApplicationComponent } from './consultantview-application.component';

describe('ConsultantviewApplicationComponent', () => {
  let component: ConsultantviewApplicationComponent;
  let fixture: ComponentFixture<ConsultantviewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
