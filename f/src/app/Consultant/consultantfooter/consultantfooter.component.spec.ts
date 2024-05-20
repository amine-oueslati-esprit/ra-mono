import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantfooterComponent } from './consultantfooter.component';

describe('ConsultantfooterComponent', () => {
  let component: ConsultantfooterComponent;
  let fixture: ComponentFixture<ConsultantfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
