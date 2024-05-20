import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewFournisseurComponent } from './adminview-fournisseur.component';

describe('AdminviewFournisseurComponent', () => {
  let component: AdminviewFournisseurComponent;
  let fixture: ComponentFixture<AdminviewFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
