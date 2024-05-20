import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexMenaceComponent } from './consultantindex-menace.component';

describe('ConsultantindexMenaceComponent', () => {
  let component: ConsultantindexMenaceComponent;
  let fixture: ComponentFixture<ConsultantindexMenaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexMenaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexMenaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
