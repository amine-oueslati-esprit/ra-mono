import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexFournisseurComponent } from './consultantindex-fournisseur.component';

describe('ConsultantindexFournisseurComponent', () => {
  let component: ConsultantindexFournisseurComponent;
  let fixture: ComponentFixture<ConsultantindexFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
