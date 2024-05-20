import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewEquipementComponent } from './adminview-equipement.component';

describe('AdminviewEquipementComponent', () => {
  let component: AdminviewEquipementComponent;
  let fixture: ComponentFixture<AdminviewEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewEquipementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
