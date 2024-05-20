import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewEquipementComponent } from './consultantview-equipement.component';

describe('ConsultantviewEquipementComponent', () => {
  let component: ConsultantviewEquipementComponent;
  let fixture: ComponentFixture<ConsultantviewEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewEquipementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
