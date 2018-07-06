import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalDetailComponent } from '../modal-detail/modal-detail.component';
import { LogDetailRequest } from '../../../../shared/models/models';

@Component({
  selector: 'app-button-detail',
  templateUrl: 'button-detail.component.html',
  styleUrls: ['button-detail.component.scss']
})
export class ButtonDetailComponent implements ViewCell {

  constructor(private ngModalService: NgbModal) {}

  @Input() value: any;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  showDetailsLogs() {
    // this.save.emit(this.rowData);
    const viewModal = this.ngModalService.open(ModalDetailComponent, { size: 'lg', container: 'nb-layout' });
    viewModal.componentInstance.modalHeader = 'Detalles Trace Log';

    const id = new LogDetailRequest(this.rowData);

    viewModal.componentInstance.modalDataLog = id;
  }

}
