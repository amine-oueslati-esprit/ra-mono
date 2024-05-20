import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditGroupeAComponent } from './adminedit-groupe-a.component';

describe('AdmineditGroupeAComponent', () => {
  let component: AdmineditGroupeAComponent;
  let fixture: ComponentFixture<AdmineditGroupeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditGroupeAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditGroupeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
