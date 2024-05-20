import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateMenaceComponent } from './admincreate-menace.component';

describe('AdmincreateMenaceComponent', () => {
  let component: AdmincreateMenaceComponent;
  let fixture: ComponentFixture<AdmincreateMenaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateMenaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateMenaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
