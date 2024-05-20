import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewMenaceComponent } from './adminview-menace.component';

describe('AdminviewMenaceComponent', () => {
  let component: AdminviewMenaceComponent;
  let fixture: ComponentFixture<AdminviewMenaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewMenaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewMenaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
