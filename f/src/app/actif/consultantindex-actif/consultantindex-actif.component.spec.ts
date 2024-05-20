import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantindexActifComponent } from './consultantindex-actif.component';

describe('ConsultantindexActifComponent', () => {
  let component: ConsultantindexActifComponent;
  let fixture: ComponentFixture<ConsultantindexActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantindexActifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantindexActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
