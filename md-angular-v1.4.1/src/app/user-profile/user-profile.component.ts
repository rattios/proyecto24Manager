import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

declare const $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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

    constructor(private http: HttpClient) {
    }


    ngOnInit(): void {
      this.http.get('http://rattios.com/24managerAPI/public/usuarios')
         .toPromise()
         .then(
           data => { // Success
             console.log(data);
             this.data = data;
             this.usuarios=data;
             this.data=this.usuarios.usuarios;
             console.log(this.usuarios);

           },
           msg => { // Error
             console.log(msg.error.error);

           }
         );
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

    public remove(item) {
        let index = this.data.indexOf(item);
        if(index>-1) {
            this.data.splice(index, 1);
        }
    }

}
