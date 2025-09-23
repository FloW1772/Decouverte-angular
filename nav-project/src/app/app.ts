import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,  // mark as standalone component
  imports: [HeaderComponent]  // import HeaderComponent so its selector <app-header> is recognized
})
export class AppComponent {
  title = 'nav-project';
}

export const App = AppComponent;