import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule,MatCardModule } from '@angular/material';
import {NG2DataTableModule} from "angular2-datatable-pagination";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BsModalModule } from 'ng2-bs3-modal';
import { AgmCoreModule } from '@agm/core';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { RatingModule } from 'ngx-bootstrap/rating';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { LoginComponent } from './login/login.component';
import { SociosComponent } from './socios/socios.component';
import { HistorialComponent } from './historial/historial.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { DataFilterPipe } from "./data-filter.pipe";
import { EncursoComponent } from './encurso/encurso.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    SociosComponent,
    HistorialComponent,
    ServiciosComponent,
    DataFilterPipe,
    EncursoComponent,
    CalificacionesComponent,
    SliderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    NG2DataTableModule,
    Ng2SearchPipeModule,
    BsModalModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYRs2BEem6ZYKDj9MjUmDeeoQqwxr-tJ8'
    }),
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.5)', 
        backdropBorderRadius: '8px',
        primaryColour: '#ffffff', 
        secondaryColour: '#ffffff', 
        tertiaryColour: '#ffffff'
    }),
    RatingModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  exports: [

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
