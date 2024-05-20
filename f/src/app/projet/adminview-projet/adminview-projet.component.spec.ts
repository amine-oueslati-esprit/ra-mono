import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewProjetComponent } from './adminview-projet.component';

describe('AdminviewProjetComponent', () => {
  let component: AdminviewProjetComponent;
  let fixture: ComponentFixture<AdminviewProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
