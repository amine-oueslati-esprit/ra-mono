import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateVulnerabiliteComponent } from './admincreate-vulnerabilite.component';

describe('AdmincreateVulnerabiliteComponent', () => {
  let component: AdmincreateVulnerabiliteComponent;
  let fixture: ComponentFixture<AdmincreateVulnerabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateVulnerabiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateVulnerabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
