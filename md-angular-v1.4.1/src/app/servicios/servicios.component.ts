import { Component, OnInit,HostListener } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {Router} from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
    ESCAPE_KEYCODE = 27;
    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        //console.log(event);
        if (event.keyCode === this.ESCAPE_KEYCODE) {
            console.log(event.keyCode);
            this.loading=false;
        }
      }
    public data: any;
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "ID";
    public sortOrder = "asc";
    public pedidos:any;
    public ID="";
    public IDmodal="";
    public categoria="";
    public subcategoria="";
    public servicio="";
    public direccion="";
    public created_at="";
    public descripcion="";
    public referencia="";
    public nombre="";
    public telefono="";
    public serviciosFiltradosModal:any;
    public serviciosModal:any;
    public socios:any;
    public productList:any;
    public productUser:any;
    public pedidosUsuario:any;
    public idPedido:any;
    public loading=false;

    public userF="";
    public nombreF="";
    public telefonoF="";
    public direccionF="";
    public referenciaF="";
    public descripcionF="";
    public latF="";
    public lngF="";
    public mostrarDatos=false;

    zoom: number = 14;

    constructor(private http: HttpClient,private router: Router) {
    }


    ngOnInit(): void {
        this.loading=true;
        this.http.get("http://apimanappger.internow.com.mx/api/public/pedidos/informacion0?token="+localStorage.getItem('manappger_token'))
            .subscribe((data)=> {
               console.log(data);
             this.socios=data;
             this.data=this.socios.pedidos;
             console.log(this.socios);

             this.productUser = this.data;
             
             console.log(this.productList);

             
             var users=[];
             var fechas=[];
             var anio='';
             var mes='';
             var dia='';
             var hora='';
             var min='';
             var fecha:any;
             var fechaCompara:any;

             for (var i = 0; i < this.data.length; i++) {
               fecha=new Date(this.data[i].created_at);
               anio=fecha.getFullYear();
               mes=fecha.getMonth();
               dia=fecha.getDay();
               hora=fecha.getHours();
               min=fecha.getMinutes();
               fechaCompara=anio+'-'+mes+'-'+dia+' '+hora+':'+min;
               this.data[i].fecha=fechaCompara;
               users.push({
                 'id':this.data[i].id,
                 'nombre':this.data[i].usuario.nombre,
                 'created_at':this.data[i].created_at,
                 'fecha':fechaCompara,
                 'visible':true,
                 'pedidos':[]
               });
               fechas.push({
                 'fecha':fechaCompara
               })
             }
             console.log(this.data);
             console.log(JSON.stringify(fechas));

            var hash = {};
            users = users.filter(function(current) {
              var exists = !hash[current.nombre] || false;
              hash[current.nombre] = true;
              return exists;
            });

            var hash = {};
            fechas = fechas.filter(function(current) {
              var exists = !hash[current.fecha] || false;
              hash[current.fecha] = true;
              return exists;
            });
            console.log(JSON.stringify(users));
            console.log(JSON.stringify(fechas));

            var pedidosFechas=[];
            for (var i = 0; i < fechas.length; i++) {
              pedidosFechas.push({
                'fecha': fechas[i].fecha,
                'nombre':'',
                'id':'',
                'visible':true,
                'created_at': '',
                'pedidos':[]
                  });
              for (var j = 0; j < this.data.length; j++) {
                for (var k = 0; k < users.length; k++) {

                  if ((fechas[i].fecha==this.data[j].fecha)&&(users[k].nombre==this.data[j].usuario.nombre)) {
                    pedidosFechas[i].nombre=this.data[j].usuario.nombre;
                    pedidosFechas[i].id=this.data[j].id;
                    pedidosFechas[i].created_at=this.data[j].created_at;
                    pedidosFechas[i].pedidos.push(
                      this.data[j]
                      );
                  }
                }
              }
            }
            console.log(pedidosFechas);
            for (var i = 0; i < users.length; i++) {
              for (var j = 0; j < this.data.length; j++) {
                if (this.data[j].usuario.nombre==users[i].nombre) {
                  users[i].pedidos.push(this.data[j]);
                }
              }
            }
             //setTimeout(function(){
              console.log(users);

              this.productList=pedidosFechas;
              this.filteredItems = this.productList;
              for (var i = 0; i < this.filteredItems.length; ++i) {
                this.productList[i].tam=this.productList[i].pedidos.length;
              }
              this.init();


            //},250);
            this.loading=false;
            
            },msg => { // Error
             console.log(msg.error.error);
             this.loading=false;
             if (msg.status==401) {
               this.router.navigate(['/login']);
             }
             this.showNotification('top','center','No hay pedidos en este momento',3);
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
    visible(id,val){
      console.log(val);
        for (var i = 0; i < this.productList.length; ++i) {
          if (this.productList[i].id==id) {
            if (val==false) {
              this.productList[i].visible=true;
            }else if (val==true) {
              this.productList[i].visible=false;
            }
          }
        }
    }
    public getUsuario(pedidos){
      this.mostrarDatos=true;
      console.log(pedidos);
        this.pedidosUsuario=pedidos;
        for (var i = 0; i < pedidos.length; ++i) {
          this.pedidosUsuario[i].lat=parseFloat(this.pedidosUsuario[i].lat);
          this.pedidosUsuario[i].lng=parseFloat(this.pedidosUsuario[i].lng);
        }
        var count=pedidos.length;
        console.log(count);
        this.idPedido=this.pedidosUsuario[count-1].id;
        this.userF=this.pedidosUsuario[0].usuario.user;
        this.nombreF=this.pedidosUsuario[0].usuario.nombre;
        this.telefonoF=this.pedidosUsuario[0].usuario.telefono;
        this.direccionF=this.pedidosUsuario[0].direccion;
        this.referenciaF=this.pedidosUsuario[0].referencia;
        this.descripcionF=this.pedidosUsuario[0].descripcion;
        this.latF=this.pedidosUsuario[0].lat;
        this.lngF=this.pedidosUsuario[0].lng;
        
    }

    public volver(pedidos){
      this.mostrarDatos=false;  
    }

    public asignarUsuario(usuario,i){
        this.IDmodal=usuario.id;
        this.serviciosFiltradosModal = [];
        this.serviciosModal = [];
        console.log(usuario.subcategoria_id);
        this.http.get("http://apimanappger.internow.com.mx/api/public/servicios/socio/subcategoria/"+usuario.subcategoria_id+"?token="+localStorage.getItem('manappger_token'))
            .subscribe((data)=> {
                    console.log(data)
                    this.serviciosModal = data;
                    this.serviciosFiltradosModal = data;
                    this.serviciosModal = this.serviciosModal.servicios;
                    for (var i = 0; i < this.serviciosModal.length; ++i) {
                      this.serviciosModal[i].i=i;
                    }
                    this.serviciosFiltradosModal = this.serviciosFiltradosModal.serviciosFiltrados;
                    console.log(this.serviciosModal);
                    console.log(this.serviciosFiltradosModal);
            });

    }
    public asignarSocio(servicio){
        console.log(servicio);
        var datos={
            servicio_id:servicio.id,
            estado:1
        }

        this.http.put("http://apimanappger.internow.com.mx/api/public/pedidos/"+this.IDmodal+"?token="+localStorage.getItem('manappger_token'), datos)
            .subscribe((data)=> {
                    this.showNotification('top','center','Se ha asignado el pedido con éxito',2);
                    console.log(data);
                    this.pedidosUsuario.splice(servicio.i, 1);
                    this.resetTable();
                     
            },
           msg => { // Error
             this.showNotification('top','center','Ha ocurrido un error intente más tarde',4);
             console.log(msg);

           }
         );
    }



    public resetTable(){
      this.http.get("http://apimanappger.internow.com.mx/api/public/pedidos/informacion0?token="+localStorage.getItem('manappger_token'))
            .subscribe((data)=> {
               console.log(data);
             this.socios=data;
             this.data=this.socios.pedidos;
             console.log(this.socios);


             
             //this.productList = this.data;
             this.productUser = this.data;
             
             console.log(this.productList);

             
             var users=[];
             for (var i = 0; i < this.data.length; i++) {
               users.push({
                 'id':this.data[i].id,
                 'nombre':this.data[i].usuario.nombre,
                 'created_at':this.data[i].created_at,
                 'visible':true,
                 'pedidos':[]
               });
             }

            var hash = {};
            users = users.filter(function(current) {
              var exists = !hash[current.nombre] || false;
              hash[current.nombre] = true;
              return exists;
            });

            console.log(JSON.stringify(users));
            // for (var i = 0; i < users.length; i++) {
            //   this.productUser.push({

            //   });
            // }
            for (var i = 0; i < users.length; i++) {
              for (var j = 0; j < this.data.length; j++) {
                if (this.data[j].usuario.nombre==users[i].nombre) {
                  users[i].pedidos.push(this.data[j]);
                }
              }
            }
             //setTimeout(function(){
              console.log(users);
              this.productList=users;
              this.filteredItems = this.productList;
              for (var i = 0; i < this.filteredItems.length; ++i) {
                this.productList[i].tam=this.productList[i].pedidos.length;
              }
              this.init();
            //},250);
            
            });
    }
    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    public remove(item) {
        let index = this.data.indexOf(item);
        if(index>-1) {
            this.data.splice(index, 1);
        }
    }

    filteredItems : any;
   pages : number = 4;
   pageSize : number = 5;
   pageNumber : number = 0;
   currentIndex : number = 1;
   items: any;
   pagesIndex : Array<number>;
   pageStart : number = 1;
   inputName : string = '';

   init(){
         this.currentIndex = 1;
         this.pageStart = 1;
         this.pages = 4;

         this.pageNumber = parseInt(""+ (this.filteredItems.length / this.pageSize));
         if(this.filteredItems.length % this.pageSize != 0){
            this.pageNumber ++;
         }
    
         if(this.pageNumber  < this.pages){
               this.pages =  this.pageNumber;
         }
       
         this.refreshItems();
         console.log("this.pageNumber :  "+this.pageNumber);
   }

   FilterByName(){
      this.filteredItems = [];
      if(this.inputName != ""){
            for (var i = 0; i < this.productList.length; ++i) {
              if (this.productList[i].nombre.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }else if (this.productList[i].created_at.indexOf(this.inputName)>=0) {
                 this.filteredItems.push(this.productList[i]);
              }
            }

            // this.productList.forEach(element => {
            //     if(element.nombre.toUpperCase().indexOf(this.inputName.toUpperCase())>=0){
            //       this.filteredItems.push(element);
            //    }
            // });
      }else{
         this.filteredItems = this.productList;
      }
      console.log(this.filteredItems);
      this.init();
   }
   fillArray(): any{
      var obj = new Array();
      for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
                  obj.push(index);
      }
      return obj;
   }
 refreshItems(){
               this.items = this.filteredItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
               this.pagesIndex =  this.fillArray();
   }
   prevPage(){
      if(this.currentIndex>1){
         this.currentIndex --;
      } 
      if(this.currentIndex < this.pageStart){
         this.pageStart = this.currentIndex;
      }
      this.refreshItems();
   }
   nextPage(){
      if(this.currentIndex < this.pageNumber){
            this.currentIndex ++;
      }
      if(this.currentIndex >= (this.pageStart + this.pages)){
         this.pageStart = this.currentIndex - this.pages + 1;
      }
 
      this.refreshItems();
   }
    setPage(index : number){
         this.currentIndex = index;
         this.refreshItems();
    }

}
