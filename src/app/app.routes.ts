import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AutomatizacionesComponent } from './components/automatizaciones/automatizaciones.component';
import { DocumentacionComponent } from './components/automatizaciones/Menu1/documentacion/documentacion.component';


export const ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'automatizaciones', component: AutomatizacionesComponent },
    { path: 'documentacion', component: DocumentacionComponent },
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];