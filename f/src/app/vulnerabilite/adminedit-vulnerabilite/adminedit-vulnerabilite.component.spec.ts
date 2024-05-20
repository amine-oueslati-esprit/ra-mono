import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditVulnerabiliteComponent } from './adminedit-vulnerabilite.component';

describe('AdmineditVulnerabiliteComponent', () => {
  let component: AdmineditVulnerabiliteComponent;
  let fixture: ComponentFixture<AdmineditVulnerabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditVulnerabiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditVulnerabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
