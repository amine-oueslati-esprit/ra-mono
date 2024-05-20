import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateProcessusComponent } from './consultantcreate-processus.component';

describe('ConsultantcreateProcessusComponent', () => {
  let component: ConsultantcreateProcessusComponent;
  let fixture: ComponentFixture<ConsultantcreateProcessusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateProcessusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateProcessusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
