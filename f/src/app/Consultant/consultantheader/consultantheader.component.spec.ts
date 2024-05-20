import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantheaderComponent } from './consultantheader.component';

describe('ConsultantheaderComponent', () => {
  let component: ConsultantheaderComponent;
  let fixture: ComponentFixture<ConsultantheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
