import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../@core/data/loader.service';

@Component({
  selector: 'app-loader',
  template: `
  <div class="content-wrapper" [style.display] = "isShow()" >
    <div class="wrapper">
      <div class="block mover"></div>
      <div class="block jumper"></div>
      <div class="block jumper"></div>
      <div class="block jumper"></div>
      <div class="block jumper"></div>
      <div class="msg">Cargando datos...</div>
    </div>
  </div>
  `,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  private show: boolean;

  constructor(private loaderService: LoaderService) { }

  ngOnInit () {
    this.loaderService.status.subscribe(val => {
      this.show = val;
    });
  }

  isShow() {
    if ( this.show ) {
      return 'block';
    } else {
      return 'none';
    }
  }

}
