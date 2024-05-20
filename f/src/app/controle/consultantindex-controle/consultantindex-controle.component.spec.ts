import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexControleComponent } from './consultantindex-controle.component';

describe('ConsultantindexControleComponent', () => {
  let component: ConsultantindexControleComponent;
  let fixture: ComponentFixture<ConsultantindexControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexControleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
