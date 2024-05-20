import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewVulnerabiliteComponent } from './adminview-vulnerabilite.component';

describe('AdminviewVulnerabiliteComponent', () => {
  let component: AdminviewVulnerabiliteComponent;
  let fixture: ComponentFixture<AdminviewVulnerabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewVulnerabiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewVulnerabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
