import { Routes } from '@angular/router';
import { AppsWebComponent } from './components/apps-web/apps-web.component';
import { CamaraComponent } from './components/camara/camara.component';
import { CamarasComponent } from './components/camaras/camaras.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { InternetComponent } from './components/internet/internet.component';
import { CarouselComponent } from './components/carousel/carousel.component';


export const ROUTES: Routes = [
    { path: '', component: CarouselComponent },
    { path: 'apps-web', component: AppsWebComponent },
    { path: 'carousel', component: CarouselComponent },
    { path: 'camara', component: CamaraComponent },
    { path: 'camaras', component: CamarasComponent },
    { path: 'informacion', component: InformacionComponent },
    { path: 'internet', component: InternetComponent },
    { path: '', pathMatch: 'full', redirectTo: 'carousel' },
    { path: '**', pathMatch: 'full', redirectTo: 'carousel' }
];
