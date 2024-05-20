import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateRessourceHumaineComponent } from './admincreate-ressource-humaine.component';

describe('AdmincreateRessourceHumaineComponent', () => {
  let component: AdmincreateRessourceHumaineComponent;
  let fixture: ComponentFixture<AdmincreateRessourceHumaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateRessourceHumaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateRessourceHumaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
