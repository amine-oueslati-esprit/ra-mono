import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexRessourceHumaineComponent } from './consultantindex-ressource-humaine.component';

describe('ConsultantindexRessourceHumaineComponent', () => {
  let component: ConsultantindexRessourceHumaineComponent;
  let fixture: ComponentFixture<ConsultantindexRessourceHumaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexRessourceHumaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexRessourceHumaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
