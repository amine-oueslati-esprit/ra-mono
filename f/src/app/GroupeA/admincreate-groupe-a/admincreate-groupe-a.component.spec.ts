import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateGroupeAComponent } from './admincreate-groupe-a.component';

describe('AdmincreateGroupeAComponent', () => {
  let component: AdmincreateGroupeAComponent;
  let fixture: ComponentFixture<AdmincreateGroupeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateGroupeAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateGroupeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
