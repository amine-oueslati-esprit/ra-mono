import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditMenaceComponent } from './adminedit-menace.component';

describe('AdmineditMenaceComponent', () => {
  let component: AdmineditMenaceComponent;
  let fixture: ComponentFixture<AdmineditMenaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditMenaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditMenaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
