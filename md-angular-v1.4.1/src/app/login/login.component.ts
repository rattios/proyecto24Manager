import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public people:any;
  user= ''
  password='';
  public token:any;

  constructor(private http: HttpClient,private router: Router) {

  }

  ngOnInit() {
  }


  Ingresar(){

  	//localStorage.setItem('manappger', this.token);

  	this.people='esperando...';
   
    var datos= {
    	user: this.user,
    	password: this.password
    }

     this.http.post('http://manappger.internow.com.mx/api/public/login/web', datos)
       .toPromise()
       .then(
         data => { // Success
           console.log(data);
           this.token=data;
           localStorage.setItem('manappger_token', this.token.token);
           //console.log(res.token);
           this.people='exito...';
           this.router.navigate(['/Panel-principal']);
         },
         msg => { // Error
         	console.log(msg.error);
         	this.people=msg.error;

         }
       );
  }

}
