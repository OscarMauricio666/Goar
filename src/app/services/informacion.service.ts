import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor() { }
  getInformacion(): Iinformacion[] {
    return [
    {
      Titulo: 'Quienes somos',
      Descripcion: 'Goar services es una compañia que trabaja tecnologias, entre Software y Hardware'

    },
    {
      Titulo: 'Misión',
      Descripcion: 'Facilitar a los Colombianos soluciones tecnologicas de todo tipo.'


    },
    {
      Titulo: 'Visión',
      Descripcion: 'Obtener la satisfacion y agradecimieto de todos nuestros clientes, aportar a la sociedad Colombiana en su desarrollo.'

    },
    {
      Titulo: 'Información',
      Descripcion: 'Email:Telefono: redes Sociales:'
    }
  ];
}
}
export interface Iinformacion {
  Titulo: string;
  Descripcion: string;
}
