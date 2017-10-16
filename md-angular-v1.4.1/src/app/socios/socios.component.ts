import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

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

    constructor(private http: HttpClient) {
    }


    ngOnInit(): void {
    	this.http.get('http://rattios.com/24managerAPI/public/socios/servicios')
           .subscribe((data)=> {
                setTimeout(()=> {
               this.socios=data;
               this.data=this.socios.socios;
               console.log(this.data);
                }, 2000);
            });
    }

    public getSocio(socio){

        this.editServicio = socio.servicios;
        this.editCosto = socio.costo;
        this.editCorreo = socio.correo;
        this.editNombre = socio.nombre;
        this.editTelefono = socio.telefono;
        this.editUbicacion = socio.ubicacion;

    }
    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.nombre.length;
    }

    public remove(item) {
        let index = this.data.indexOf(item);
        if(index>-1) {
            this.data.splice(index, 1);
        }
    }

}
