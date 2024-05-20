import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateFournisseurComponent } from './consultantcreate-fournisseur.component';

describe('ConsultantcreateFournisseurComponent', () => {
  let component: ConsultantcreateFournisseurComponent;
  let fixture: ComponentFixture<ConsultantcreateFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
