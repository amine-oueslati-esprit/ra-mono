import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewApplicationComponent } from './adminview-application.component';

describe('AdminviewApplicationComponent', () => {
  let component: AdminviewApplicationComponent;
  let fixture: ComponentFixture<AdminviewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
