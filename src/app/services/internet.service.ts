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
        Descripcion: ' este plan consta de 4 megas de descarga.',
        Costo: '$50.000'
      },
      {
        Nombre: 'Plan dos',
        Descripcion: ' este plan consta de 5 megas de descarga.',
        Costo: '$60.000'
      },
      {
        Nombre: 'Plan tres',
        Descripcion: ' este plan consta de 6 megas de descarga.',
        Costo: '$80.000'
      }
    ];
  }
}
export interface Iinternet {
  Nombre: string;
  Descripcion: string;
  Costo: string;
}
