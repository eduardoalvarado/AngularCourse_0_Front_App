import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LogResponse, ResponseTime } from '../../../../shared/models/logResponse.model';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.scss']
})

export class TableResultComponent implements OnInit {

  // dataLogs:any;
  @Input() listTraceData = new LogResponse();
  @Input() searchDate;
  @Input() responseTime: ResponseTime;
  @Output() emitCant = new EventEmitter();
  @Output() emitPage = new EventEmitter();

  listCant: string[] = ['10', '20', '30'];
  itemCant = '10';
  page = 1;

  constructor() {
    console.log(this.listTraceData);
  }

  ngOnInit() {}

  SelectedCant(cant: string) {
    this.itemCant = cant;
    this.emitCant.emit(this.itemCant);
  }


  sendPage(val) {
    this.emitPage.emit(val);
  }
}

