import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditApplicationComponent } from './adminedit-application.component';

describe('AdmineditApplicationComponent', () => {
  let component: AdmineditApplicationComponent;
  let fixture: ComponentFixture<AdmineditApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
