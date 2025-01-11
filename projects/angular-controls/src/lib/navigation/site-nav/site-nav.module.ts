import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteNavComponent } from './site-nav.component';
import { SharedServiceModule } from '../../../services/shared-service.module';



@NgModule({
  declarations: [
    SiteNavComponent
  ],
  imports: [
    CommonModule,
    SharedServiceModule
  ],
  exports: [
    SiteNavComponent
  ]
})
export class SiteNavModule { }
