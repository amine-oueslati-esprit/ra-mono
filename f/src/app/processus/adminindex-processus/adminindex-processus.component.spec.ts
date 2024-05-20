import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexProcessusComponent } from './adminindex-processus.component';

describe('AdminindexProcessusComponent', () => {
  let component: AdminindexProcessusComponent;
  let fixture: ComponentFixture<AdminindexProcessusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexProcessusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexProcessusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
