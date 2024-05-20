import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateActifComponent } from './admincreate-actif.component';

describe('AdmincreateActifComponent', () => {
  let component: AdmincreateActifComponent;
  let fixture: ComponentFixture<AdmincreateActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateActifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
