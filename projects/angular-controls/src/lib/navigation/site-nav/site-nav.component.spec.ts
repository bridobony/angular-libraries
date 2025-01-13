import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteNavComponent } from './site-nav.component';
import { SiteNavModule } from './site-nav.module';
import { AngularControlsModule } from '../../angular-controls.module';

describe('SiteNavComponent', () => {
  let component: SiteNavComponent;
  let fixture: ComponentFixture<SiteNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularControlsModule]
    });
    fixture = TestBed.createComponent(SiteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
