import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantinscriptionComponent } from './consultantinscription.component';

describe('ConsultantinscriptionComponent', () => {
  let component: ConsultantinscriptionComponent;
  let fixture: ComponentFixture<ConsultantinscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantinscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantinscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
