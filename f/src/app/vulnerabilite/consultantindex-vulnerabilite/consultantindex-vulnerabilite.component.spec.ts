import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexVulnerabiliteComponent } from './consultantindex-vulnerabilite.component';

describe('ConsultantindexVulnerabiliteComponent', () => {
  let component: ConsultantindexVulnerabiliteComponent;
  let fixture: ComponentFixture<ConsultantindexVulnerabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexVulnerabiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexVulnerabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
