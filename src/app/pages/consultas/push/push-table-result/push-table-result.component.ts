import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

//import { PushTraceService } from '../../../../@core/data/push-trace.service';

import { ButtonDetailComponent } from '../../components/button-detail/button-detail.component'
import { PushTrace } from 'src/app/@core/model/push-trace.model';
//import { RequestDTO } from 'src/app/@core/model/request.model';
import { ResponseDTO } from 'src/app/@core/model/response.model';

@Component({
  selector: 'push-table-result',
  templateUrl: './push-table-result.component.html',
  styleUrls: ['./push-table-result.component.scss']
})

export class PushTableResultComponent implements OnInit {

  listCant:number[] = [10, 20, 30];
  itemCant:number = 10;
  private _pageNumber = 0;
  @Input() listTraceData: ResponseDTO;
  @Input() searchDate:Date;
  //private _listTraceData: ResponseDTO;
  //@Input() pageNumber: number;

  @Output() emitPageSize = new EventEmitter();
  @Output() emitPage = new EventEmitter();

  @Input() 
  set pageNumber(pageNumber: number){
    this._pageNumber = pageNumber - 1;
  }

  /*ngOnChanges(changes: SimpleChanges) {
    const listTraceData: SimpleChange = changes.listTraceData;
    //console.log('prev value: ', listTraceData.previousValue);
    //console.log('got name: ', listTraceData.currentValue);
    this._listTraceData = listTraceData.currentValue;
    //console.log('pageNumber: ', this.pageNumber);
    //this.pageNumber = 0;
    
  }*/
  
  ngOnInit() {
    console.log('on init');
    console.log(this.listTraceData);
    this.emitPageSize.emit(this.itemCant);
  }


  //requestBody: RequestDTO = new RequestDTO();
  //responseBody: ResponseDTO = new ResponseDTO();

  

  //data = new Array<PushTrace>();

  constructor() {
    //this.requestBody = {applicationId: "", startDate: "", endDate: "", startTime: "", endTime: "", currentPage:"1", registersInPage: "3"}
  }

  onSelectedPageSize(cant:number){
    this.itemCant = cant;
    this.emitPageSize.emit(this.itemCant);
  }


  onSetPage(pageInfo){
    this._pageNumber = pageInfo.offset;
    this.emitPage.emit(this._pageNumber + 1);
  }

  /*setPage(pageInfo){
    this.onGetTrace(pageInfo.offset + 1);
  }

  onGetTrace(pageNumber: number){
    this.requestBody.currentPage = pageNumber.toString();
    this.responseBody = this.service.getConsultaLog(this.requestBody);
    this.data = this.responseBody.traceList;
  }*/

  onShowDetail(idTrace:string){
    alert(idTrace);
  }

}

