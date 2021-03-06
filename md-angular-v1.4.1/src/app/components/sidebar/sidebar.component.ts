import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/Panel-principal', title: 'Panel Principal',  icon: 'dashboard', class: '' },
    { path: '/Servicios', title: 'Pedidos',  icon:'format_paint', class: '' },
    { path: '/En-curso', title: 'En curso',  icon:'directions_car', class: '' },
    { path: '/Historial-servicios', title: 'Historial',  icon:'content_paste', class: '' },
    { path: '/Calificaciones', title: 'Calificaciones',  icon:'grade', class: '' },
    //{ path: '/Slider', title: 'Slider',  icon:'view_carousel', class: '' },
    { path: '/Usuarios', title: 'Usuarios',  icon:'supervisor_account', class: '' },
    { path: '/Socios', title: 'Socios',  icon:'person', class: '' },
    { path: '/login', title: 'Cerrar Sesión',  icon:'input', class: '' },
    
     // { path: '../table-list', title: 'Typography',  icon:'library_books', class: '' },
     // { path: '../typography', title: 'Typography',  icon:'library_books', class: '' },
     // { path: '../icons', title: 'Icons',  icon:'bubble_chart', class: '' },
     // { path: '../maps', title: 'Maps',  icon:'location_on', class: '' },
     // { path: '../notifications', title: 'Notifications',  icon:'notifications', class: '' },
     // { path: '../upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
//
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  slider() {
    this.router.navigate(['/Slider']);
  };
  datos() {
    this.router.navigate(['/Datos']);
  };
}
