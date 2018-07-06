import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ConsultasComponent } from './consultas.component'
import { LogsComponent } from './logs/logs.component'
import { PushComponent } from './push/push.component'

const routes: Routes = [{
    path: '',
    component: ConsultasComponent,
    children: [
        {
            path: 'logs',
            component: LogsComponent
        },
        {
            path: 'push',
            component: PushComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ConsultasRoutingModule {  }

export const routedComponents = [
    ConsultasComponent,
    LogsComponent,
    PushComponent
];