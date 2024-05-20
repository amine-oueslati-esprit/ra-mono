import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewRessourceHumaineComponent } from './adminview-ressource-humaine.component';

describe('AdminviewRessourceHumaineComponent', () => {
  let component: AdminviewRessourceHumaineComponent;
  let fixture: ComponentFixture<AdminviewRessourceHumaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewRessourceHumaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewRessourceHumaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
