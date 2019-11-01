import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }
  getSlides(): Islide[] {
    return [
    {
      img: 'assets/images/carousel/CamarasSeguridad.jpg',
      Descripcion: 'Goar services es una compañia que trabaja tecnologias, entre Software y Hardware'

    },
    {
      img: 'assets/images/carousel/Internet.jpg',
      Descripcion: 'Facilitar a los Colombianos soluciones tecnologicas de todo tipo.'


    },
    {
      img: 'assets/images/carousel/apps_web.png',
      Descripcion: 'Obtener la satisfacion y agradecimieto de todos nuestros clientes, aportar a la sociedad Colombiana en su desarrollo.'

    }
  ];
}
}
export interface Islide {
  img: string;
  Descripcion: string;
}

