import { Component, Input } from '@angular/core';
import { ImageGalleryItem } from './image-gallery-item.model';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  @Input() jsonUrl!: string;
  images: ImageGalleryItem[] = [];

  ngOnInit() {
    this.jsonService.getJsonItems().subscribe(data => {
      this.navbarItems = data;
    });
  }

  isLightboxOpen = false;
  currentImageIndex = 0;

  get currentImage() {
    return this.images[this.currentImageIndex];
  }

  openLightbox(index: number) {
    this.currentImageIndex = index;
    this.isLightboxOpen = true;
  }

  closeLightbox() {
    this.isLightboxOpen = false;
  }

  showPrevImage() {
    this.currentImageIndex = (this.currentImageIndex > 0) ? this.currentImageIndex - 1 : this.images.length - 1;
  }

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex < this.images.length - 1) ? this.currentImageIndex + 1 : 0;
  }
}
