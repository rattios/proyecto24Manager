import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
declare const $: any;
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  public contacto:any;
  public loading=false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.loading=true;
  	this.http.get('http://apimanappger.internow.com.mx/api/public/contacto')
           .subscribe((data)=> {
           	   console.log(data);
           	   this.contacto=data;
           	   this.contacto=this.contacto.contacto;
           	   this.loading=false;
            },msg => { // Error
             console.log(msg.error.error);
             this.loading=false;
             this.showNotification('top','center','Ha ocurrido un error' + JSON.stringify(msg.error),4);
        });
  }

  updateContacto(contacto){
  	console.log(contacto);
  	var send = {
  		contacto: contacto
  	};
  	this.loading=true;
  	this.http.put('http://apimanappger.internow.com.mx/api/public/datos/1',send)
         .toPromise()
         .then(
           data => { // Success
             console.log(data);
             this.showNotification('top','center','Actualizado con exito',2);
             this.loading=false;
           },
           msg => { // Error
             console.log(msg);
             this.showNotification('top','center','Ha ocurrido un error' + JSON.stringify(msg.error),4);
             this.loading=false;
        });
  }
  showNotification(from, align, mensaje,colors){
          const type = ['','info','success','warning','danger'];

          const color = colors;
          
          $.notify({
              icon: "notifications",
              message: mensaje

          },{
              type: type[color],
              timer: 4000,
              placement: {
                  from: from,
                  align: align
              }
          });
    }

}
