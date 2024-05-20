import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateRessourceHumaineComponent } from './consultantcreate-ressource-humaine.component';

describe('ConsultantcreateRessourceHumaineComponent', () => {
  let component: ConsultantcreateRessourceHumaineComponent;
  let fixture: ComponentFixture<ConsultantcreateRessourceHumaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateRessourceHumaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateRessourceHumaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
