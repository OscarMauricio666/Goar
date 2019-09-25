import { Component, OnInit } from '@angular/core';
import { InformacionService, Iinformacion } from '../../services/informacion.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  informacion: Iinformacion[];

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private InformacionService: InformacionService) { }

  ngOnInit() {
    this.informacion = this.InformacionService.getInformacion();
  }

}
