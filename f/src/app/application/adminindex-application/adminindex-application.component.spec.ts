import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexApplicationComponent } from './adminindex-application.component';

describe('AdminindexApplicationComponent', () => {
  let component: AdminindexApplicationComponent;
  let fixture: ComponentFixture<AdminindexApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
