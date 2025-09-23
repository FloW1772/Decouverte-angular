import { Component, signal } from '@angular/core';
import { HelloWorld } from './components/hello-world/hello-world';

@Component({
  selector: 'app-root',
  imports: [HelloWorld],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NewDemo1');
}
