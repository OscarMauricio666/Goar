import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
