import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditProjetComponent } from './adminedit-projet.component';

describe('AdmineditProjetComponent', () => {
  let component: AdmineditProjetComponent;
  let fixture: ComponentFixture<AdmineditProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
