import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNavPanelComponent } from './card-nav-panel.component';

describe('CardNavPanelComponent', () => {
  let component: CardNavPanelComponent;
  let fixture: ComponentFixture<CardNavPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNavPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNavPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
