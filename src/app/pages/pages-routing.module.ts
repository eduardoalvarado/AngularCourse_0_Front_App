import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        {
            path: 'consultas',
            loadChildren: './consultas/consultas.module#ConsultasModule'
        },
        { 
            path: '', 
            redirectTo: 'pages', 
            pathMatch: 'full'
        },
        { 
            path: '**', 
            redirectTo:'pages'
        }
    ]
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {

}