import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinscriptionComponent } from './userinscription.component';

describe('UserinscriptionComponent', () => {
  let component: UserinscriptionComponent;
  let fixture: ComponentFixture<UserinscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserinscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserinscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
