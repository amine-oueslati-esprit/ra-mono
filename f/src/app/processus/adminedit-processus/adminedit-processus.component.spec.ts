import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditProcessusComponent } from './adminedit-processus.component';

describe('AdmineditProcessusComponent', () => {
  let component: AdmineditProcessusComponent;
  let fixture: ComponentFixture<AdmineditProcessusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditProcessusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditProcessusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
