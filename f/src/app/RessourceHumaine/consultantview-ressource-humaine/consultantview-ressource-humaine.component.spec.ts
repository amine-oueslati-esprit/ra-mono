import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewRessourceHumaineComponent } from './consultantview-ressource-humaine.component';

describe('ConsultantviewRessourceHumaineComponent', () => {
  let component: ConsultantviewRessourceHumaineComponent;
  let fixture: ComponentFixture<ConsultantviewRessourceHumaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewRessourceHumaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewRessourceHumaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
