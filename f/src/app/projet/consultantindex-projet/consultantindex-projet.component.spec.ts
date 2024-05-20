import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexProjetComponent } from './consultantindex-projet.component';

describe('ConsultantindexProjetComponent', () => {
  let component: ConsultantindexProjetComponent;
  let fixture: ComponentFixture<ConsultantindexProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
