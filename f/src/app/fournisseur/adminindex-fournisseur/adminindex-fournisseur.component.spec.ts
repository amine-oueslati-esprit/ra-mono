import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexFournisseurComponent } from './adminindex-fournisseur.component';

describe('AdminindexFournisseurComponent', () => {
  let component: AdminindexFournisseurComponent;
  let fixture: ComponentFixture<AdminindexFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
