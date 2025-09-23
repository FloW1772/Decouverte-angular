// ...existing code...
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-toggle.html',
  styleUrls: ['./image-toggle.css']
})
export class ImageToggleComponent {
  showImage = false;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
// ...existing code...