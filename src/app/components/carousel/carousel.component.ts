import { Component, OnInit } from '@angular/core';
import { CarouselService, Islide } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
slides: Islide[] = [];

  // tslint:disable-next-line: no-shadowed-variable
  constructor( private CarouselService: CarouselService) { }

  ngOnInit() {
    this.slides = this.CarouselService.getSlides();
  }

}
