import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewProcessusComponent } from './consultantview-processus.component';

describe('ConsultantviewProcessusComponent', () => {
  let component: ConsultantviewProcessusComponent;
  let fixture: ComponentFixture<ConsultantviewProcessusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewProcessusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewProcessusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
