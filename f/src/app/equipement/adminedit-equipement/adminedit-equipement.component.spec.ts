import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditEquipementComponent } from './adminedit-equipement.component';

describe('AdmineditEquipementComponent', () => {
  let component: AdmineditEquipementComponent;
  let fixture: ComponentFixture<AdmineditEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditEquipementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
