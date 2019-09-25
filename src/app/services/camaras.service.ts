import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CamarasService {

  constructor() { }

  getCamaras(): Icamara[] {
    return [
    {
      Nombre: 'Camara uno',
      Descripcion: 'camara de seguridad',
      Precio: '$50.000',
      Img: 'dfsfsfsfd'
    },
    {
      Nombre: 'Camara dos',
      Descripcion: 'camara de vigilancia',
      Precio: '$ 80.000',
      Img: 'dfsfsfsfd'

    },
    {
      Nombre: 'Camara tres',
      Descripcion: 'Camara PTZ',
      Precio: '$ 1´000.000',
      Img: 'dfsfsfsfd'
    }
  ];
}


}
export interface Icamara {
  Nombre: string;
  Descripcion: string;
  Precio: string;
  Img: string;
}
