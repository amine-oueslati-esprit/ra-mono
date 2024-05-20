import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteditVulnerabiliteComponent } from './consultantedit-vulnerabilite.component';

describe('ConsultanteditVulnerabiliteComponent', () => {
  let component: ConsultanteditVulnerabiliteComponent;
  let fixture: ComponentFixture<ConsultanteditVulnerabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultanteditVulnerabiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultanteditVulnerabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
