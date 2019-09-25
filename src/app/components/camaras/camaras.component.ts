import { Component, OnInit } from '@angular/core';
import { CamarasService, Icamara } from '../../services/camaras.service';

@Component({
  selector: 'app-camaras',
  templateUrl: './camaras.component.html',
  styleUrls: ['./camaras.component.css']
})
export class CamarasComponent implements OnInit {
  camaras: Icamara[] = [];

  // tslint:disable-next-line:no-shadowed-variable
  constructor( private CamarasService: CamarasService ) { }

  ngOnInit() {
    this.camaras = this.CamarasService.getCamaras();
  }

}
