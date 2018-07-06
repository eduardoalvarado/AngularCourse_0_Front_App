import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { 
    NbMenuItem,
    NbSidebarService
} from '@nebular/theme';


@Component({
    selector: 'app-sample-layout',
    styleUrls: ['./sample.layout.scss'],
    template: `
    <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>Page Content</nb-layout-column>
    </nb-layout>
  `    
})

export class SampleLayoutComponent {

  constructor(protected sidebarService: NbSidebarService) {
      
  }
}
