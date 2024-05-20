import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexEquipementComponent } from './adminindex-equipement.component';

describe('AdminindexEquipementComponent', () => {
  let component: AdminindexEquipementComponent;
  let fixture: ComponentFixture<AdminindexEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexEquipementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
