import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexEquipementComponent } from './consultantindex-equipement.component';

describe('ConsultantindexEquipementComponent', () => {
  let component: ConsultantindexEquipementComponent;
  let fixture: ComponentFixture<ConsultantindexEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexEquipementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
