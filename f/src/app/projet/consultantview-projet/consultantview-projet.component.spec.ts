import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewProjetComponent } from './consultantview-projet.component';

describe('ConsultantviewProjetComponent', () => {
  let component: ConsultantviewProjetComponent;
  let fixture: ComponentFixture<ConsultantviewProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
