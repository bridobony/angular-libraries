import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteNavModule } from '../../../angular-controls/src/lib/navigation/site-nav/site-nav.module';
import { AngularControlsModule } from '../../../angular-controls/src/public-api';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteNavModule, AngularControlsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular-controls';
}
