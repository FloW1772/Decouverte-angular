// ...existing code...
import { Component, signal } from '@angular/core';
import { ImageToggleComponent } from './image-toggle/image-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImageToggleComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('toggle-image');
}
// ...existing code...