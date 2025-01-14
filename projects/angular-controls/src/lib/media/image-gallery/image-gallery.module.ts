import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery.component';
import { SharedServiceModule } from '../../../services/shared-service.module';



@NgModule({
  declarations: [ImageGalleryComponent],
  imports: [
    CommonModule,
    SharedServiceModule
  ],
  exports: [ImageGalleryComponent]
})
export class ImageGalleryModule { }
