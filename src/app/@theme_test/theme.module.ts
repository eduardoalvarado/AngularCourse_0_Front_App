import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    NbActionsModule,
    NbCardModule,
    NbLayoutModule,
    NbMenuModule,
    NbRouteTabsetModule,
    NbSearchModule,
    NbSidebarModule,
    NbTabsetModule,
    NbThemeModule,
    NbUserModule,
    NbCheckboxModule,
    NbPopoverModule,
    NbContextMenuModule,
  } from '@nebular/theme';

  import {
      SampleLayoutComponent
  } from './layouts/sample.layout'

  const COMPONENTS = [
    SampleLayoutComponent
  ];

  const NB_MODULES = [
    NbCardModule,
    NbLayoutModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbCheckboxModule,
    NbPopoverModule,
    NbContextMenuModule
  ];
  
  @NgModule({
      imports: [ ...NB_MODULES ],
      exports: [ ...COMPONENTS, ...NB_MODULES ],
      declarations: [ ...COMPONENTS ]
  })

  export class ThemeModule {

  }