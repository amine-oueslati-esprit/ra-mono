import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditActifComponent } from './adminedit-actif.component';

describe('AdmineditActifComponent', () => {
  let component: AdmineditActifComponent;
  let fixture: ComponentFixture<AdmineditActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditActifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
