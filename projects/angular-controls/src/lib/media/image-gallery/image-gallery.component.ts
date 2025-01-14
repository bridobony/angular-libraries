import { Component, Input } from '@angular/core';
import { ImageGalleryItem } from './image-gallery-item.model';
import { JsonService } from '../../../services/json.service';

@Component({
  selector: 'lib-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  standalone: false
})
export class ImageGalleryComponent {
  @Input() jsonUrl!: string;
  images: ImageGalleryItem[] = [];
  rotatedDegrees: number[] = [];
  enlargedIndex: number | null = null;
  tiltDegrees: number[] = [20, -10, 15, -5, 15, -20];
  constructor(private jsonService: JsonService) { }
  ngOnInit() {
    this.jsonService.getModel<ImageGalleryItem[]>(this.jsonUrl).subscribe(data => {
      this.images = data;
      this.assignTiltDegrees();
    });
  }
  enlargeImage(index: number) {
    this.enlargedIndex = (this.enlargedIndex === index) ? null : index;
  }

  isEnlarged(index: number): boolean {
    return this.enlargedIndex === index;
  }
  assignTiltDegrees() {
    this.rotatedDegrees = this.images.map((_, i) => this.tiltDegrees[i % this.tiltDegrees.length]);
  }
}
