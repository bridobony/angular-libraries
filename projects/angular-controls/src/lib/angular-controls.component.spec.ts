import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularControlsComponent } from './angular-controls.component';

describe('AngularControlsComponent', () => {
  let component: AngularControlsComponent;
  let fixture: ComponentFixture<AngularControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularControlsComponent]
    });
    fixture = TestBed.createComponent(AngularControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
