import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewControleComponent } from './consultantview-controle.component';

describe('ConsultantviewControleComponent', () => {
  let component: ConsultantviewControleComponent;
  let fixture: ComponentFixture<ConsultantviewControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewControleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
