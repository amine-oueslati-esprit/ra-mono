import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewGroupeAComponent } from './adminview-groupe-a.component';

describe('AdminviewGroupeAComponent', () => {
  let component: AdminviewGroupeAComponent;
  let fixture: ComponentFixture<AdminviewGroupeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewGroupeAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewGroupeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
