import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewMenaceComponent } from './consultantview-menace.component';

describe('ConsultantviewMenaceComponent', () => {
  let component: ConsultantviewMenaceComponent;
  let fixture: ComponentFixture<ConsultantviewMenaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewMenaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewMenaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
