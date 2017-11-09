import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { LoginComponent } from './login/login.component';
import { SociosComponent } from './socios/socios.component';
import { HistorialComponent } from './historial/historial.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EncursoComponent } from './encurso/encurso.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes =[
    { path: '',          redirectTo: '/login', pathMatch: 'full' },
    { path: 'Panel-principal',      component: DashboardComponent, pathMatch: 'full'},
    { path: 'Usuarios',   component: UserProfileComponent, pathMatch: 'full' },
    { path: 'Socios',     component: SociosComponent },
    { path: 'Servicios',     component: ServiciosComponent },
    { path: 'Historial-servicios',     component: HistorialComponent },
    { path: 'En-curso',     component: EncursoComponent },
    { path: 'Calificaciones',     component: CalificacionesComponent },
    { path: 'Slider',     component: SliderComponent },
    { path: 'login',        component: LoginComponent },
    { path: '**', redirectTo: '/login' }
      
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
