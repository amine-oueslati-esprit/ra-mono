import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateActifComponent } from './consultantcreate-actif.component';

describe('ConsultantcreateActifComponent', () => {
  let component: ConsultantcreateActifComponent;
  let fixture: ComponentFixture<ConsultantcreateActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateActifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
