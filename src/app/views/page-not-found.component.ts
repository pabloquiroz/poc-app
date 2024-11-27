import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  imports: [],
  template: `
    <div class="container-not-found">
      <p>
        page-not-found!
      </p>
    </div>
  `,
  styles: `
    .container-not-found {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; 
      text-align: center;
    }
  `
})
export class PageNotFoundComponent {

}
