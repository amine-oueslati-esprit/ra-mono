import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexMenaceComponent } from './adminindex-menace.component';

describe('AdminindexMenaceComponent', () => {
  let component: AdminindexMenaceComponent;
  let fixture: ComponentFixture<AdminindexMenaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexMenaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexMenaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
