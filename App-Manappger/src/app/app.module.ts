import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, Geocoder } from '@ionic-native/google-maps';
import { NativeGeocoder } from '@ionic-native/native-geocoder';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegistroUsuarioPage } from '../pages/registro-usuario/registro-usuario';
import { RegistroSocioPage } from '../pages/registro-socio/registro-socio';
import { CalificacionPage } from '../pages/calificacion/calificacion';
import { ContrasenaPage } from '../pages/contrasena/contrasena';
import { EmailPasswordPage } from '../pages/email-password/email-password';
import { CodepasswordPage } from '../pages/codepassword/codepassword';
import { ListDetailsPage } from '../pages/list-details/list-details';
import { PedidoPage } from '../pages/pedido/pedido';
import { EncaminoPage } from '../pages/encamino/encamino';
import { CalificacionDetailPage } from '../pages/calificacion-detail/calificacion-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { StorageProvider } from '../providers/storage/storage';
import { CartProvider } from '../providers/cart/cart';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
    RegistroUsuarioPage,
    RegistroSocioPage,
    CalificacionPage,
    ContrasenaPage,
    EmailPasswordPage,
    CodepasswordPage,
    ListDetailsPage, 
    PedidoPage,
    EncaminoPage,
    CalificacionDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      backButtonText: ''
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
    RegistroUsuarioPage,
    RegistroSocioPage,
    CalificacionPage,
    ContrasenaPage,
    EmailPasswordPage,
    CodepasswordPage,
    ListDetailsPage,
    PedidoPage,
    EncaminoPage,
    CalificacionDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServiceProvider,
    StorageProvider,
    CartProvider,
    GoogleMaps,
    Geocoder,
    Geolocation,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
