import { NgModule } from '@angular/core';
import { AngularControlsComponent } from './angular-controls.component';
import { CommonModule } from '@angular/common';
import { SiteNavModule } from './navigation/site-nav/site-nav.module'
import { ImageGalleryModule } from './media/image-gallery/image-gallery.module';



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
    AngularControlsComponent,
    ImageGalleryModule
  ]
})
export class AngularControlsModule { }
