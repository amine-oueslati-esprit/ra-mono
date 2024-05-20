import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateMenaceComponent } from './consultantcreate-menace.component';

describe('ConsultantcreateMenaceComponent', () => {
  let component: ConsultantcreateMenaceComponent;
  let fixture: ComponentFixture<ConsultantcreateMenaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateMenaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateMenaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
