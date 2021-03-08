import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { AutomatizacionesComponent } from './components/automatizaciones/automatizaciones.component';
import { ROUTES } from './app.routes';
import { DocumentacionComponent } from './components/automatizaciones/Menu1/documentacion/documentacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { AprobacionMantisComponent } from './components/automatizaciones/Menu1/aprobacionMantis/aprobacionMantis.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    AutomatizacionesComponent,
    DocumentacionComponent,
    LoadingComponent,
    AprobacionMantisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash : true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
