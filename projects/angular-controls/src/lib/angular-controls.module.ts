import { NgModule } from '@angular/core';
import { AngularControlsComponent } from './angular-controls.component';
import { CommonModule } from '@angular/common';
import { SiteNavModule } from './navigation/site-nav/site-nav.module'



@NgModule({
  declarations: [
    AngularControlsComponent
  ],
  imports: [
    CommonModule,
    SiteNavModule
  ],
  exports: [
    SiteNavModule,
    AngularControlsComponent
  ],
  bootstrap: [
    AngularControlsComponent
  ]
})
export class AngularControlsModule { }
