import { Component, OnInit,HostListener } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import {Router} from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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
    public sortBy = "nombre";
    public sortOrder = "asc";
    public usuarios:any;
    public editUsuario='';
    public editCorreo='';
    public editNombre='';
    public editSexo='';
    public socios:any;
    public productList:any;
    public aEliminar={
      id: 0,
      nombre:''
    };
    public loading=false;
    constructor(private http: HttpClient,private router: Router) {
    }


    ngOnInit(): void {
      this.loading=true;
      this.http.get('http://apimanappger.internow.com.mx/api/public/usuarios?token='+localStorage.getItem('manappger_token'))
         .toPromise()
         .then(
           data => { // Success
             console.log(data);
             this.socios=data;
             this.data=this.socios.usuarios;
             console.log(this.socios);
             
             this.productList = this.data;
             this.filteredItems = this.productList;
             console.log(this.productList);

             this.init();
             this.loading=false;

           },
           msg => { // Error
             console.log(msg.error.error);
             this.loading=false;
             if (msg.status==401) {
               this.router.navigate(['/login']);
             }
             this.showNotification('top','center'+JSON.stringify(msg.error),4);
           });
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

    public getUsuario(usuario){
        this.editCorreo = usuario.correo;
        this.editNombre = usuario.nombre;
        this.editUsuario = usuario.user;
        this.editSexo = usuario.sexo;
    }
    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }
    preRemove(item,i){
      console.log(item);
      console.log(i);
      this.aEliminar=item;
    }

    public remove() {
      var item=this.aEliminar;
      this.loading=true;
        this.http.delete('http://apimanappger.internow.com.mx/api/public/usuarios/'+item.id+'?token='+localStorage.getItem('manappger_token'))
         .toPromise()
         .then(
           data => { // Success
               console.log(data);
              
                
                    this.http.get('http://apimanappger.internow.com.mx/api/public/usuarios?token='+localStorage.getItem('manappger_token'))
                     .toPromise()
                     .then(
                       data => { // Success
                         console.log(data);
                         this.socios=data;
                         this.data=this.socios.usuarios;
                         console.log(this.socios);
                         
                         this.productList = this.data;
                         this.filteredItems = this.productList;
                         console.log(this.productList);

                         this.init();
                         this.loading=false;

                       },
                       msg => { // Error
                         console.log(msg.error.error);
                         this.loading=false;
                         if (msg.status==401) {
                           this.router.navigate(['/login']);
                         }
                         this.showNotification('top','center'+JSON.stringify(msg.error),4);
                       });
                
                //this.loading=false;
           },
           msg => { // Error
             console.log(msg);
             this.loading=false;
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
