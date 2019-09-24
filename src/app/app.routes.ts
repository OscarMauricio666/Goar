import { Routes } from '@angular/router';
import { AppsWebComponent } from './components/apps-web/apps-web.component';
import { CamaraComponent } from './components/camara/camara.component';
import { CamarasComponent } from './components/camaras/camaras.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { InternetComponent } from './components/internet/internet.component';


export const ROUTES: Routes = [
    { path: 'apps-web', component: AppsWebComponent },
    { path: 'camara', component: CamaraComponent },
    { path: 'camaras', component: CamarasComponent },
    { path: 'informacion', component: InformacionComponent },
    { path: 'internet', component: InternetComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];
