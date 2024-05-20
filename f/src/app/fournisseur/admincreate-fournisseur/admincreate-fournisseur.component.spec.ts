import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateFournisseurComponent } from './admincreate-fournisseur.component';

describe('AdmincreateFournisseurComponent', () => {
  let component: AdmincreateFournisseurComponent;
  let fixture: ComponentFixture<AdmincreateFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
