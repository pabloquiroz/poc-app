import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/nav/navigation.component';
import { PostComponent } from './views/posts.component';
import { LocalStorageService } from './services/local-storage.service';
@Component({
  selector: 'app-root',
  imports: [
    NavigationComponent,
    RouterModule
  ],
  template: `
    <app-navigation
    [name]="title"
    ></app-navigation>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      margin: 0 auto;
      padding: 16px;
    }
  `],
})
export class AppComponent  {
  title = 'Instagram Scraper API'; 
}
