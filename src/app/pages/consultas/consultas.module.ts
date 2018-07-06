import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ConsultasRoutingModule, routedComponents } from './consultas-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableResultComponent } from './logs/table-result/table-result.component';

import { PushTableResultComponent } from './push/push-table-result/push-table-result.component';

import { ButtonDetailComponent } from './components/button-detail/button-detail.component';
import { ModalDetailComponent } from './components/modal-detail/modal-detail.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { OWL_DATE_TIME_LOCALE, OwlDateTimeIntl } from 'ng-pick-datetime';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SmartTableService } from '../../@core/data/log-trace.service';
import { PushTraceService } from 'src/app/@core/data/push-trace.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PushRangeDateDirective } from 'src/app/shared/directive/push-rangedate.directive';

import { LoaderComponent } from '../../shared/utils/loader/loader.component';

import { ToasterService, ToasterModule } from 'angular2-toaster';

export class SpanishIntl {
    /** A label for the up second button (used by screen readers).  */
    upSecondLabel = 'ajouter une seconde';

    /** A label for the down second button (used by screen readers).  */
    downSecondLabel = 'moins une seconde';

    /** A label for the up minute button (used by screen readers).  */
    upMinuteLabel = 'ajouter une minute';

    /** A label for the down minute button (used by screen readers).  */
    downMinuteLabel = 'moins une minute';

    /** A label for the up hour button (used by screen readers).  */
    upHourLabel = 'ajouter une heure';

    /** A label for the down hour button (used by screen readers).  */
    downHourLabel = 'moins une heure';

    /** A label for the previous month button (used by screen readers). */
    prevMonthLabel = 'le mois précédent';

    /** A label for the next month button (used by screen readers). */
    nextMonthLabel = 'le mois prochain';

    /** A label for the previous year button (used by screen readers). */
    prevYearLabel = 'année précédente';

    /** A label for the next year button (used by screen readers). */
    nextYearLabel = 'l\'année prochaine';

    /** A label for the previous multi-year button (used by screen readers). */
    prevMultiYearLabel = 'Previous 21 years';

    /** A label for the next multi-year button (used by screen readers). */
    nextMultiYearLabel = 'Next 21 years';

    /** A label for the 'switch to month view' button (used by screen readers). */
    switchToMonthViewLabel = 'Change to month view';

    /** A label for the 'switch to year view' button (used by screen readers). */
    switchToMultiYearViewLabel = 'Elija un mes y un año';

    /** A label for the cancel button */
    cancelBtnLabel = 'Anular';

    /** A label for the set button */
    setBtnLabel = 'Confirmar';

    /** A label for the range 'from' in picker info */
    rangeFromLabel = 'Desde';

    /** A label for the range 'to' in picker info */
    rangeToLabel = 'Hasta';

    /** A label for the hour12 button (AM) */
    hour12AMLabel = 'AM';

    /** A label for the hour12 button (PM) */
    hour12PMLabel = 'PM';
}

@NgModule({
    imports: [
        ThemeModule,
        Ng2SmartTableModule,
        ConsultasRoutingModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        NgxDatatableModule,
        NgxSpinnerModule,
        NgbModule,
        ToasterModule,
    ],
    declarations: [
        routedComponents,
        TableResultComponent,
        ButtonDetailComponent,
        ModalDetailComponent,
        PushTableResultComponent,
        PushRangeDateDirective,
        LoaderComponent
    ],
    entryComponents: [
        ButtonDetailComponent,
        ModalDetailComponent
    ],
    providers: [
        {provide: OWL_DATE_TIME_LOCALE, useValue: 'es'},
        {provide: OwlDateTimeIntl, useClass: SpanishIntl},
        SmartTableService,
        PushTraceService,
        ToasterService
    ]
})

export class ConsultasModule {}
