import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditFournisseurComponent } from './adminedit-fournisseur.component';

describe('AdmineditFournisseurComponent', () => {
  let component: AdmineditFournisseurComponent;
  let fixture: ComponentFixture<AdmineditFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
