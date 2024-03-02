import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemebuttonComponent } from './themebutton.component';

describe('ThemebuttonComponent', () => {
  let component: ThemebuttonComponent;
  let fixture: ComponentFixture<ThemebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemebuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
