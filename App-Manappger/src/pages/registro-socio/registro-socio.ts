import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Socio } from './socio.interface';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-registro-socio',
  templateUrl: 'registro-socio.html'
})
export class RegistroSocioPage {

	public registerSocioForm: FormGroup;
	public categories: any[];
	public subservices: any[];
	public selectedCategory: any[];
	public hora: any;
	public idCategory: string;
	public subcategories: any[] = [];
	public category: any;
	public model: any;
	shouldHide: any = 1;
	createSuccess = false;
	loading: Loading;
	formErrors = {
		'nombre': '',
		'telefono': '',
		'correo': '',
		'ubicacion': ''
	};
	validationMessages = {
		'nombre': {
		  'required': 'El nombre es requerido.',
		  'minlength': 'El nombre debe contener un mínimo de 2 caracteres.'
		},
		'telefono': {
		  'required': 'El teléfono es requerido.',
		  'maxlength': 'El teléfono no debe contener más de 10 dígitos.'
		},
		'correo': {
		  'required': 'El correo es requerido.',
		  'email': 'El formato del correo no es correcto.',
		},
		'ubicacion': {
		  'required': 'La ubicación es requerida.'
		}
	};

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private builder: FormBuilder, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
		this.initForm();
	}

	initForm() {
		this.registerSocioForm = this.builder.group({
            nombre: ['', [Validators.required, Validators.minLength(2)]],
    		telefono: ['', [Validators.maxLength(10)]],
      		correo: ['', [Validators.required, Validators.email]],
    		ubicacion: ['', Validators.required],
            servicios: this.builder.array([
                this.initServicios(),
            ]),
            horario: this.builder.array([
                this.initHorarios(),
            ])
        });
		this.initializeCategory();
		this.initializeHora();

		this.registerSocioForm.valueChanges.subscribe(data => this.onValueChanged(data));
    	this.onValueChanged();
	}

	initServicios() {
        return this.builder.group({
            servicio: ['',Validators.required],
            subcategoria_id: ['', Validators.required],
            horario: this.builder.array([])
        });
    }

    initHorarios(){
    	return this.builder.group({
            dia: ['', Validators.required],
            horaInicio: ['', Validators.required],
            horaFin: ['', Validators.required]
        });
    }

  	initializeHora(){
	  this.hora = [
	    {id: 1, hora: 0},
	    {id: 2, hora: 1},
	    {id: 3, hora: 2},
	    {id: 4, hora: 3},
	    {id: 5, hora: 4},
	    {id: 6, hora: 5},
	    {id: 7, hora: 6},
	    {id: 8, hora: 7},
	    {id: 9, hora: 8},
	    {id: 10, hora: 9},
	    {id: 11, hora: 10},
	    {id: 12, hora: 11},
	    {id: 13, hora: 12},
	    {id: 14, hora: 13},
	    {id: 15, hora: 14},
	    {id: 16, hora: 15},
	    {id: 17, hora: 16},
	    {id: 18, hora: 17},
	    {id: 19, hora: 18},
	    {id: 20, hora: 19},
	    {id: 21, hora: 20},
	    {id: 22, hora: 21},
	    {id: 23, hora: 22},
	    {id: 24, hora: 23}
	  ];
	}

  	initializeCategory(){
	  	this.http.get('http://manappger.internow.com.mx/api/public/categorias/subcategorias')
		.toPromise()
		.then(
			data => {
				this.category = data;
				this.categories = this.category.categorias;
				var subs = [];
				for (var i = 0; i < this.categories.length; ++i) {
					for (var j = 0; j < this.categories[i].subcategorias.length; ++j) {
						subs.push(this.categories[i].subcategorias[j]);
					}
				}
				this.selectedCategory = subs;
			},
			msg => {
				
		});
	}

	filterItems(searchTerm,i){
		const control = <FormArray>this.registerSocioForm.controls['servicios'];
        var index = control.value.length;

		if (index == this.subcategories.length) {
			this.subcategories[i] = this.selectedCategory.filter(servl => servl.categoria_id== searchTerm);  
		} else {
			this.subcategories.push(this.selectedCategory.filter(servl => servl.categoria_id== searchTerm)); 
		}
    }

	setServices(category, ii) {
		var nombre = category.value.servicio;
		
		for (var i = 0; i < this.categories.length; ++i) {
			if (nombre == this.categories[i].nombre) {
				this.idCategory = this.categories[i].id;
				this.filterItems(this.idCategory,ii);
			}
		}
	}

	addServicio() {
		const control = <FormArray>this.registerSocioForm.controls['servicios'];
		var index = control.value.length - 1;
		if (control.value[index].servicio == '' || control.value[index].subcategoria_id == '') {
			this.showPopup("Error", 'Por favor completa el servicio anterior.');
		} else {
			control.push(this.initServicios());
		}
    }

    removeServicio(i: number) {
        const control = <FormArray>this.registerSocioForm.controls['servicios'];
        var index = control.value.length - 1;
        control.removeAt(index);
	    this.subcategories.splice(-1, 1);
    }

    addHorario(){
    	const control2 = <FormArray>this.registerSocioForm.controls['horario'];
		var index = control2.value.length - 1;
		if (control2.value[index].dia == '' || control2.value[index].horaInicio == '' || control2.value[index].horaFin == '') {
        	this.showPopup("Error", 'Por favor completa el horario anterior.');
    	} else {
    		control2.push(this.initHorarios());
    	}
    }

    removeHorario(i: number) {
        const control = <FormArray>this.registerSocioForm.controls['horario'];
        var index = control.value.length - 1;
        control.removeAt(index);
    }

    register_socio(model: Socio) {
    	if (this.registerSocioForm.valid) {
    		this.showLoading();
	    	this.model = model;
	        var serv = this.model.value;

	        for (var i = 0; i < serv.servicios.length; ++i) {
	        	serv.servicios[i].horario = serv.horario;
	        }
	        serv.servicios = JSON.stringify(serv.servicios);

	        this.http.post('http://manappger.internow.com.mx/api/public/socios',serv)
			.toPromise()
			.then(
				data => {
					this.loading.dismiss();
					this.createSuccess = true;
	            	this.showPopup("Completado", "Asociado registrado con éxito.");
				},
				msg => {
					this.loading.dismiss();
					this.showPopup("Error", msg.error);
				});
	    } else {
	      this.validateAllFormFields(this.registerSocioForm);
	    }
    }

    onValueChanged(data?: any) {
		if (!this.registerSocioForm) { return; }
		const form = this.registerSocioForm;

		for (const field in this.formErrors) { 
		  const control = form.get(field);
		  this.formErrors[field] = '';
		  if (control && control.dirty && !control.valid) {
		    const messages = this.validationMessages[field];
		    for (const key in control.errors) {
		      this.formErrors[field] += messages[key] + ' ';
		    }
		  } 
		}
	}

	validateAllFormFields(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach(field => {
		  console.log(field);
		  const control = formGroup.get(field);
		  if (control instanceof FormControl) {
		    control.markAsDirty({ onlySelf:true });
		    this.onValueChanged();
		  } else if (control instanceof FormGroup) {
		    this.validateAllFormFields(control);
		  }
		});
	}

    showPopup(title, text) {
	    let alert = this.alertCtrl.create({
	      title: title,
	      subTitle: text,
	      buttons: [
	        {
	          text: 'OK',
	          handler: data => {
	            if (this.createSuccess) {
	              this.navCtrl.popToRoot();
	            }
	          }
	        }
	      ]
	    });
	    alert.present();
	}

	showLoading() {
	    this.loading = this.loadingCtrl.create({
	      content: 'Registrando Asociado...'
	    });
	    this.loading.present();
	}
}
