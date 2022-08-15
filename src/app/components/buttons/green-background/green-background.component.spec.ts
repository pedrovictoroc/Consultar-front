import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenBackgroundComponent } from './green-background.component';

describe('GreenBackgroundComponent', () => {
  let component: GreenBackgroundComponent;
  let fixture: ComponentFixture<GreenBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
