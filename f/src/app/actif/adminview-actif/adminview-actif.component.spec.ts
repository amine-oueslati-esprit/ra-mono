import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewActifComponent } from './adminview-actif.component';

describe('AdminviewActifComponent', () => {
  let component: AdminviewActifComponent;
  let fixture: ComponentFixture<AdminviewActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewActifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
