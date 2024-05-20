import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewFournisseurComponent } from './consultantview-fournisseur.component';

describe('ConsultantviewFournisseurComponent', () => {
  let component: ConsultantviewFournisseurComponent;
  let fixture: ComponentFixture<ConsultantviewFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
