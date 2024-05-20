import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexProcessusComponent } from './consultantindex-processus.component';

describe('ConsultantindexProcessusComponent', () => {
  let component: ConsultantindexProcessusComponent;
  let fixture: ComponentFixture<ConsultantindexProcessusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexProcessusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexProcessusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
