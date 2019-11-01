import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternetService {

  constructor() { }

  getInternet(): Iinternet[] {
    return[
      {
        Nombre: 'Plan uno',
        img: 'assets/images/internet/internet.jpg',
        Descripcion: ' este plan consta de 4 megas de descarga.',
        Costo: '$50.000'
      },
      {
        Nombre: 'Plan dos',
        img: 'assets/images/internet/internet.jpg',
        Descripcion: ' este plan consta de 5 megas de descarga.',
        Costo: '$60.000'
      },
      {
        Nombre: 'Plan tres',
        img: 'assets/images/internet/internet.jpg',
        Descripcion: ' este plan consta de 6 megas de descarga.',
        Costo: '$80.000'
      }
    ];
  }
}
export interface Iinternet {
  Nombre: string;
  img: string;
  Descripcion: string;
  Costo: string;
}
