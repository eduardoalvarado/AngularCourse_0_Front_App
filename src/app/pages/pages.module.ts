import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NbSidebarService, NbSidebarModule, NbLayoutModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';


const PAGES_COMPONENTS = [
    PagesComponent,
];

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
    ],
    declarations: [
        ...PAGES_COMPONENTS
    ],
    providers: [
        NbSidebarService,
    ]
})

export class PagesModule {}
