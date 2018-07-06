import { Component } from '@angular/core';

import { LogRequest, LogResponse, ResponseTime } from '../../../shared/models/models';
import { SmartTableService } from '../../../@core/data/log-trace.service';

import * as moment from 'moment';
import { LoaderService } from '../../../@core/data/loader.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { isUndefined } from 'util';

import 'style-loader!angular2-toaster/toaster.css';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent {

  msgError = '';
  requestQuery: LogRequest = new LogRequest();
  listTraceResp: LogResponse = new LogResponse();
  searchDate: Date;
  responseTime: ResponseTime = new ResponseTime();
  valueCant = '10';

  config: ToasterConfig;

  public dateTimeRange: Date[] = [moment().startOf('day').toDate(), moment().endOf('day').toDate()];

  constructor(public _serviceTrace: SmartTableService, private loaderService: LoaderService, private toasterService: ToasterService) {
  }
   /**===DROPDOWN===*/
  typeErrors: string[] = ['True', 'False', 'Todos'];
  itemTypeError = 'Todos';

  SelectedTypeError( itemSelected: string ) {
    this.itemTypeError = itemSelected;
  }

  getEmitCant(val) {
    this.valueCant = val;
  }

  getEmitPage(page) {
    // this.currentPage = page;
    this.SendDataSearch(page);
  }

  buildDataSearch(): LogRequest {

    const fechaIni = moment(this.dateTimeRange[0]).format('YYYY-MM-DD HH:mm:ss');
    const fechaFin = moment(this.dateTimeRange[1]).format('YYYY-MM-DD HH:mm:ss');

    this.requestQuery.startDate = fechaIni.split(' ')[0];
    this.requestQuery.startTime = fechaIni.split(' ')[1];
    this.requestQuery.endDate = fechaFin.split(' ')[0];
    this.requestQuery.endTime = fechaFin.split(' ')[1];

    this.requestQuery.registersInPage = this.valueCant;
    ( this.itemTypeError === 'Todos' ) ? this.requestQuery.hasBeenSent = undefined : this.requestQuery.hasBeenSent = this.itemTypeError;

    return this.requestQuery;
  }

  /**LLAMADA SERVICIO BUTTON BUSCAR */
  SendDataSearch(page: string) {

    this.loaderService.display(true);

    this.requestQuery.currentPage = page;
    this.requestQuery = this.buildDataSearch();
    this.responseTime.requestTimeStamp = new Date().getTime();

    this._serviceTrace.getConsultaLog(this.requestQuery).subscribe( list => {
      if ( !isUndefined(list.data) ) {
        this.listTraceResp = list;
        this.loaderService.display(false);
        this.searchDate = new Date();
        this.responseTime.responseTimeStamp = new Date().getTime();
        this.responseTime.timeTaken = this.responseTime.getTimeTaken();
      } else {
        this.loaderService.display(false);
        this.showToast('error', 'Error!', list.error);
      }
    },
    error => {
      this.loaderService.display(false);
      this.showToast('error', 'Error!', error);
    });
  }

  showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: 'toast-top-full-width',
      timeout: 5000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: false,
      animation: 'fade',
      limit: 5,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: 5000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };

    this.toasterService.popAsync(toast);

  }

}
