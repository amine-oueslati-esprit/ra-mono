import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexGroupeAComponent } from './consultantindex-groupe-a.component';

describe('ConsultantindexGroupeAComponent', () => {
  let component: ConsultantindexGroupeAComponent;
  let fixture: ComponentFixture<ConsultantindexGroupeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexGroupeAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexGroupeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
