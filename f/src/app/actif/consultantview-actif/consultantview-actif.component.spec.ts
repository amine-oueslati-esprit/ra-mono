import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewActifComponent } from './consultantview-actif.component';

describe('ConsultantviewActifComponent', () => {
  let component: ConsultantviewActifComponent;
  let fixture: ComponentFixture<ConsultantviewActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewActifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
