import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteNavModule } from './navigation/site-nav/site-nav.module'
import { ImageGalleryModule } from './media/image-gallery/image-gallery.module';
import { SharedServiceModule } from '../services/shared-service.module';
import { CardNavPanelModule } from './navigation/card-nav-panel/card-nav-panel.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SiteNavModule,
    ImageGalleryModule
  ],
  exports: [
    SiteNavModule,
    ImageGalleryModule,
    CardNavPanelModule
  ]
})
export class AngularControlsModule { }
