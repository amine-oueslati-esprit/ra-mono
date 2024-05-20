import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexVulnerabiliteComponent } from './adminindex-vulnerabilite.component';

describe('AdminindexVulnerabiliteComponent', () => {
  let component: AdminindexVulnerabiliteComponent;
  let fixture: ComponentFixture<AdminindexVulnerabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexVulnerabiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexVulnerabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
