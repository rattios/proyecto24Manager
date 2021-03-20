import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { CalificacionPage } from '../pages/calificacion/calificacion';
import { StorageProvider } from '../providers/storage/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  rating: string = '0';

  pages: Array<{title: string, icon:string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: StorageProvider, public events: Events) {
    var item = this.storage.get('userManappger');
    if (item !== null && item !== "") {
      this.rootPage = HomePage;
    } else {
      this.rootPage = LoginPage;
    }
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Solicita Servicio', icon:'home', component: HomePage },
      { title: 'Califica Servicio', icon:'mail', component: CalificacionPage },
      {title: 'Cerrar Sesión', icon:'exit', component: null}
    ];

    events.subscribe('user:created', (user, time) => {
      this.rating = user;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent(); 
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component == CalificacionPage) {
      this.nav.push(page.component);
    }
    if(page.component == HomePage) {
      this.nav.setRoot(page.component);
    } 
    if (page.component == null) {
      this.storage.set('userManappger','');
      this.storage.set('tokenManappger','');
      this.storage.set('nameManappger','');
      this.storage.setObject('category', '');
      this.nav.setRoot(LoginPage);
    }
  }
}
