import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexApplicationComponent } from './consultantindex-application.component';

describe('ConsultantindexApplicationComponent', () => {
  let component: ConsultantindexApplicationComponent;
  let fixture: ComponentFixture<ConsultantindexApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
