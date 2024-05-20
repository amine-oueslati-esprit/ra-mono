import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewProcessusComponent } from './adminview-processus.component';

describe('AdminviewProcessusComponent', () => {
  let component: AdminviewProcessusComponent;
  let fixture: ComponentFixture<AdminviewProcessusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewProcessusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewProcessusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
