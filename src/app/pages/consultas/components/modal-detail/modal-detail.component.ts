import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SmartTableService } from '../../../../@core/data/log-trace.service';
import { LogRequest } from '../../../../shared/models/models';
import { LoaderService } from '../../../../@core/data/loader.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss']
})
export class ModalDetailComponent implements OnInit {

  modalHeader: string;
  modalDataLog: LogRequest;
  detailTrace: any;
  errorMsg = '';

  constructor(private activeModal: NgbActiveModal, private _serviceTrace: SmartTableService, private loader: LoaderService) {
    this.loader.display(true);
  }

  ngOnInit() {
    this._serviceTrace.getDetalleTrace(this.modalDataLog).subscribe(resp => {
      if ( !isUndefined(resp.data) ) {
        this.detailTrace = resp.data;
        this.loader.display(false);
      } else {
        this.loader.display(false);
        this.errorMsg = resp.error;
      }
    });
  }

  closeModal() {
    this.activeModal.close();
  }

}
