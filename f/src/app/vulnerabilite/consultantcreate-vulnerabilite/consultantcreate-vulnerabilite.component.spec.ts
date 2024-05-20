import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantcreateVulnerabiliteComponent } from './consultantcreate-vulnerabilite.component';

describe('ConsultantcreateVulnerabiliteComponent', () => {
  let component: ConsultantcreateVulnerabiliteComponent;
  let fixture: ComponentFixture<ConsultantcreateVulnerabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantcreateVulnerabiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantcreateVulnerabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
