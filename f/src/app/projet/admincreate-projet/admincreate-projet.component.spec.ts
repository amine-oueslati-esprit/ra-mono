import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateProjetComponent } from './admincreate-projet.component';

describe('AdmincreateProjetComponent', () => {
  let component: AdmincreateProjetComponent;
  let fixture: ComponentFixture<AdmincreateProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
