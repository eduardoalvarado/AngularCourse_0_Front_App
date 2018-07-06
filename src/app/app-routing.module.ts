import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const APP_ROUTES: Routes = [
    { path: 'pages', loadChildren: '../app/pages/pages.module#PagesModule' },
    { path: '', redirectTo: 'pages', pathMatch: 'full'},
    { path: '**', redirectTo:'pages'}
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
