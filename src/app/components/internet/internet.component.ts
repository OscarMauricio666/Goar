import { Component, OnInit } from '@angular/core';
import { InternetService, Iinternet } from '../../services/internet.service';

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.css']
})
export class InternetComponent implements OnInit {

  internets: Iinternet[] = [];


  // tslint:disable-next-line:no-shadowed-variable
  constructor( private InternetService: InternetService ) { }

  ngOnInit() {
    this.internets = this.InternetService.getInternet();
  }
}
