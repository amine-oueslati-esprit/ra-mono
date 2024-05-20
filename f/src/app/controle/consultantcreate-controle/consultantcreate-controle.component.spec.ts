import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateControleComponent } from './consultantcreate-controle.component';

describe('ConsultantcreateControleComponent', () => {
  let component: ConsultantcreateControleComponent;
  let fixture: ComponentFixture<ConsultantcreateControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateControleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
