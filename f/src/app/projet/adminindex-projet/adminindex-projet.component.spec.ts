import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexProjetComponent } from './adminindex-projet.component';

describe('AdminindexProjetComponent', () => {
  let component: AdminindexProjetComponent;
  let fixture: ComponentFixture<AdminindexProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
