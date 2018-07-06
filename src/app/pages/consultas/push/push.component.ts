import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

import {Observable} from 'rxjs/Rx';
import { PushTrace } from 'src/app/@core/model/push-trace.model';
import { RequestDTO } from 'src/app/@core/model/request.model';
import { ResponseDTO } from 'src/app/@core/model/response.model';

import { NgxSpinnerService } from 'ngx-spinner';

import { PushTraceService } from '../../../@core/data/push-trace.service';

@Component({
  selector: 'push-logs',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss']
})
export class PushComponent implements OnInit {

  pushForm: FormGroup;
  idTransaction: FormControl;

  valSearch:boolean = false;
  searchDate:Date;

  requestBody: RequestDTO = new RequestDTO();
  responseBody: ResponseDTO = new ResponseDTO();

  listApps:{id:string, value:string}[] = [{id:"", value:"Todos"},{id:"BBVA_MOBILE", value:"Banca movil"},{id:"BBVA_GLOMO", value:"Glomo"},{id:"BBVA_WALLET", value:"Wallet"}];
  itemApp:{id:string, value:string} = this.listApps[0];

  listTypeRequest:{id:string, value:string}[] = [{id:"", value:"Todos"},{id:"Enroll", value:"Enroll"},{id:"UnEnroll", value:"UnEnroll"},{id:"Notification", value:"Notification"}];
  itemTypeRequest:{id:string, value:string} = this.listTypeRequest[0];

  listTypeState:{id:string, value:string}[] = [{id:"", value:"Todos"},{id:"ok", value:"OK"},{id:"error", value:"error"},{id:"error total", value:"error total"}];
  itemTypeState:{id:string, value:string} = this.listTypeState[0];


  options = {format: 'YYYY/MM/DD HH:mm:ss', buttons: {showClear: true}, icons: {clear:'fa fa-trash'}};
  //date = null;
  // Min moment: April 12 2018, 10:30
  public min = new Date(2018, 6, 21, 0, 0);

  // Max moment: April 25 2018, 20:30
  public max = moment().endOf('day').toDate();

  public dateTimeRange: Date[] = [moment().startOf('day').toDate(), moment().endOf('day').toDate()];
  //data = new Array<PushTrace>();

  constructor(private service: PushTraceService, private spinner: NgxSpinnerService) {
    //this.requestBody = {applicationId: "", clientId: "", requestType:"", errorState: "",startDate: "", endDate: "", startTime: "", endTime: "", currentPage:"1", registersInPage: "4"}
  }

  /*getEmitPageSize(val) {
    this.requestBody.registersInPage = val;
    this.onGetTrace();
  }

  getEmitPage(page) {
    this.requestBody.currentPage = page;
    this.onGetTrace();
  }*/

  /*setPage(pageInfo){
    this.requestBody.currentPage = pageInfo.offset + 1;
    //this.onGetTrace(pageInfo.offset + 1);
    this.SendDataSearch();
  }*/

  onGetTrace(){
    if (!this.valSearch) return;
    //this.requestBody.currentPage = pageNumber.toString();
    const fechaIni = moment(this.dateTimeRange[0]).format('YYYY-MM-DD HH:mm:ss');
    const fechaFin = moment(this.dateTimeRange[1]).format('YYYY-MM-DD HH:mm:ss');
    //console.log("fechaIni",fechaIni);
    //console.log("fechaFin",fechaFin);
    this.requestBody.startDate = fechaIni.split(" ")[0];
    this.requestBody.startTime = fechaIni.split(" ")[1];
    this.requestBody.endDate = fechaFin.split(" ")[0];
    this.requestBody.endTime = fechaFin.split(" ")[1];
    this.spinner.show();
    this.service.getConsultaLog(this.requestBody).subscribe(data => {
        this.responseBody = data;
        this.responseBody.data = JSON.parse(JSON.stringify(data.data).replace(/\"_id\":/g, "\"id\":"));
        console.log("onGetTrace",this.responseBody);
        this.spinner.hide();
        return true;
        },
      error => {
        console.error("Error obteniendo data!");
        this.spinner.hide();
        return Observable.throw(error.error);
      });
    //this.data = this.responseBody.traceList;
  }

  ngOnInit() {
    //this.date = moment('2015-11-20T22:10Z');
    this.dateTimeRange[0] = moment().startOf('day').toDate();
    this.dateTimeRange[1] = moment().endOf('day').toDate();
    this.idTransaction = new FormControl(this.requestBody.id, [Validators.minLength(8)]);

    this.pushForm = new FormGroup({
      idTransaction: this.idTransaction/*,
      'client': new FormControl(this.requestBody.clientId, [Validators.minLength(8)]),
      'dateIni': new FormControl(this.dateTimeRange[1], [Validators.required, Validators.minLength(8)]),
      'dateFin': new FormControl(this.dateTimeRange[1], [Validators.required, Validators.minLength(8)])*/
    });

  }

  /*showDetailsLogs(val){
    alert(val);
  }*/

  ondDataSearch() {
    this.valSearch = true;
    this.requestBody.currentPage = 1;
    this.searchDate = new Date();
    this.onGetTrace();
  }

  onSelectedApp(item: any){
    this.itemApp = item;
    this.requestBody.applicationId = item.id;
    console.log("onSelectedApp",this.requestBody);
  }

  onSelectedTypeRequest(item: any){
    this.itemTypeRequest = item;
    this.requestBody.requestType = item.id;
    console.log("onSelectedTypeRequest",this.requestBody);
  }

  onSelectedTypeState(item: any){
    this.itemTypeState = item;
    this.requestBody.errorState = item.id;
    console.log("onSelectedTypeState",this.requestBody);
  }

  onEmitPageSize(val) {
    this.requestBody.registersInPage = val;
    this.requestBody.currentPage = 1;
    this.onGetTrace();
  }

  onEmitPage(page) {
    this.requestBody.currentPage = page;
    this.onGetTrace();
  }
}