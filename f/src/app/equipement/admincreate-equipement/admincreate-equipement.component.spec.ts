import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateEquipementComponent } from './admincreate-equipement.component';

describe('AdmincreateEquipementComponent', () => {
  let component: AdmincreateEquipementComponent;
  let fixture: ComponentFixture<AdmincreateEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateEquipementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
