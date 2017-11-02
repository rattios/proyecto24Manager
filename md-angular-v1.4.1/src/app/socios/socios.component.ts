import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Http, Headers, RequestOptions} from '@angular/http';

declare var $: any;

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  	public data: any;
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "nombre";
    public sortOrder = "asc";
    public socios:any;
    public editServicio: any;
    public editCosto = "";
    public editCorreo = "";
    public editNombre = "";
    public editTelefono = "";
    public editUbicacion = "";
    public editHorario : any;

    //private data:any;
    public data2:any;
    public productList:any;
    public loading=false;

    constructor(private http: HttpClient,private http2: Http) {
      /*let headers3 = new Headers();
        //headers3.append('Content-Type', 'application/json');
        headers3.append('Authorization' , 'Beader {eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjAsImlzcyI6Imh0dHBzOlwvXC93d3cubGllYnJlZXhwcmVzcy5jb21cL2FwaVwvdG9rZW40XC9MYXJhdmVsXC9wdWJsaWNcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1MDk0MTA2MDUsImV4cCI6MTUyMjQwNjYwNSwibmJmIjoxNTA5NDEwNjA1LCJqdGkiOiJmMWZkN2M1NWVhOTQwZDVmY2FiOTA4NjVhZWUwMGM2MiJ9.KxZvTImULkCQnA0ENYijC-rhexqaHzd3jw-eva7v-Bg}');

       let options = new RequestOptions({headers: headers3});
       this.http2.get("https://www.liebreexpress.com/api/token4/Laravel/public/api/getHour?token",
           options
       ).subscribe();*/
    }


    ngOnInit(): void {
      this.loading=true;
      this.http.get('http://manappger.internow.com.mx/api/public/socios/servicios?token='+localStorage.getItem('manappger_token'))
         .toPromise()
         .then(
           data => { // Success
             console.log(data);
             this.data2 = data;
             this.socios=data;
             this.data=this.socios.socios;
             console.log(this.socios);
             
             this.productList = this.data;
             this.filteredItems = this.productList;
             console.log(this.productList);

             this.init();
             this.loading=false;
           },
           msg => { // Error
             console.log(msg.error.error);

           }
         );
     

      /*const headers2 = new HttpHeaders().set('Authorization' , 'Beader {eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjAsImlzcyI6Imh0dHBzOlwvXC93d3cubGllYnJlZXhwcmVzcy5jb21cL2FwaVwvdG9rZW40XC9MYXJhdmVsXC9wdWJsaWNcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1MDk0MTA2MDUsImV4cCI6MTUyMjQwNjYwNSwibmJmIjoxNTA5NDEwNjA1LCJqdGkiOiJmMWZkN2M1NWVhOTQwZDVmY2FiOTA4NjVhZWUwMGM2MiJ9.KxZvTImULkCQnA0ENYijC-rhexqaHzd3jw-eva7v-Bg}');
    
      this.http.get('https://www.liebreexpress.com/api/token4/Laravel/public/api/getHour',{headers: headers2})
            .toPromise()
             .then(
               data => {
               this.socios=data;
               this.data=this.socios.socios;
            },msg=>{
              console.log(msg);
            });*/

      
    }


    showNotification(from, align, mensaje){
          const type = ['','info','success','warning','danger'];

          const color = 4;
          console.log(color);
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

    public getSocio(socio){


        console.log(socio);
        this.editServicio = socio.servicios;
        this.editCosto = socio.costo;
        this.editCorreo = socio.correo;
        this.editNombre = socio.nombre;
        this.editTelefono = socio.telefono;
        this.editUbicacion = socio.ubicacion;
        this.editHorario = socio.servicios[0].horario;


    }
    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.nombre.length;
    }

    public remove(item) {
        this.http.delete('http://manappger.internow.com.mx/api/public/socios/'+item.id)
         .toPromise()
         .then(
           data => { // Success
               console.log(data);
               let index = this.data.indexOf(item);
                if(index>-1) {
                    this.data.splice(index, 1);
                }
           },
           msg => { // Error
             console.log(msg);
             this.showNotification('top','center','El socio no pudo ser elminado');
           }
         );
        
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
              }else if (this.productList[i].ubicacion.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }else if (this.productList[i].telefono.indexOf(this.inputName)>=0) {
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
