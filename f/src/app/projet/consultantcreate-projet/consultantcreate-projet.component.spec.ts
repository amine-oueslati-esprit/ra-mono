import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateProjetComponent } from './consultantcreate-projet.component';

describe('ConsultantcreateProjetComponent', () => {
  let component: ConsultantcreateProjetComponent;
  let fixture: ComponentFixture<ConsultantcreateProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
