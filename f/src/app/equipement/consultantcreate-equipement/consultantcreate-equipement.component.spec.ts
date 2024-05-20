import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateEquipementComponent } from './consultantcreate-equipement.component';

describe('ConsultantcreateEquipementComponent', () => {
  let component: ConsultantcreateEquipementComponent;
  let fixture: ComponentFixture<ConsultantcreateEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateEquipementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
