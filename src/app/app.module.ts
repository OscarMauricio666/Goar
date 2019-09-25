import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CamarasComponent } from './components/camaras/camaras.component';
import { CamaraComponent } from './components/camara/camara.component';
import { InternetComponent } from './components/internet/internet.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { AppsWebComponent } from './components/apps-web/apps-web.component';
import { MaterialModule } from './material.module';

// importar rutas
import { ROUTES } from './app.routes';

// ------------------------Servicios
import { CamarasService } from './services/camaras.service';
import { InformacionService } from './services/informacion.service';
import { InternetService } from './services/internet.service';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CamarasComponent,
    CamaraComponent,
    InternetComponent,
    InformacionComponent,
    AppsWebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [
    InformacionService,
    InternetService,
    CamarasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
