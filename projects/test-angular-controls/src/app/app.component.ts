import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularControlsModule } from '../../../angular-controls/src/public-api';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AngularControlsModule],
  
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular-controls';
}
