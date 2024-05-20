import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantviewVulnerabiliteComponent } from './consultantview-vulnerabilite.component';

describe('ConsultantviewVulnerabiliteComponent', () => {
  let component: ConsultantviewVulnerabiliteComponent;
  let fixture: ComponentFixture<ConsultantviewVulnerabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantviewVulnerabiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantviewVulnerabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
