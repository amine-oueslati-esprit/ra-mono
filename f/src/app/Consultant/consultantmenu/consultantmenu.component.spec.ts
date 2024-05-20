import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantmenuComponent } from './consultantmenu.component';

describe('ConsultantmenuComponent', () => {
  let component: ConsultantmenuComponent;
  let fixture: ComponentFixture<ConsultantmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
