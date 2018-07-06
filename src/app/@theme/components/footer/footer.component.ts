import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by"></span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-logo-github"></a>
      <a href="#" target="_blank" class="ion ion-logo-facebook"></a>
      <a href="#" target="_blank" class="ion ion-logo-twitter"></a>
      <a href="#" target="_blank" class="ion ion-logo-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
