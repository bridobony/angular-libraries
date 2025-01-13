import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteNavModule } from './navigation/site-nav/site-nav.module'
import { CardNavPanelModule } from '../public-api';
import { SharedServiceModule } from '../services/shared-service.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SiteNavModule,
    CardNavPanelModule,
    SharedServiceModule
  ],
  exports: [
    SiteNavModule,
    CardNavPanelModule
  ]
})
export class AngularControlsModule { }
