import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateProcessusComponent } from './admincreate-processus.component';

describe('AdmincreateProcessusComponent', () => {
  let component: AdmincreateProcessusComponent;
  let fixture: ComponentFixture<AdmincreateProcessusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateProcessusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateProcessusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
