import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteNavModule } from './navigation/site-nav/site-nav.module'
import { CardNavPanelModule } from '../public-api';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SiteNavModule,
    CardNavPanelModule
  ],
  exports: [
    SiteNavModule,
    CardNavPanelModule
  ]
})
export class AngularControlsModule { }
