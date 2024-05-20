import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditConsultantComponent } from './adminedit-consultant.component';

describe('AdmineditConsultantComponent', () => {
  let component: AdmineditConsultantComponent;
  let fixture: ComponentFixture<AdmineditConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditConsultantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
