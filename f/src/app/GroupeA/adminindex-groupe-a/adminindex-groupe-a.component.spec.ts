import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexGroupeAComponent } from './adminindex-groupe-a.component';

describe('AdminindexGroupeAComponent', () => {
  let component: AdminindexGroupeAComponent;
  let fixture: ComponentFixture<AdminindexGroupeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexGroupeAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexGroupeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
