import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-registro-usuario',
  templateUrl: 'registro-usuario.html',
})
export class RegistroUsuarioPage {
  createSuccess = false;
  loading: Loading;
  public registerUserForm: FormGroup;
  formErrors = {
    'nombre': '',
    'telefono': '',
    'correo': '',
    'user': '',
    'password': '',
    'rpassword': ''
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
    'user': {
      'required': 'El usuario es requerido.',
      'minlength': 'El usuario debe contener un mínimo de 3 caracteres.'
    },
    'password': {
      'required': 'La contraseña es requerida.',
      'minlength': 'La contraseña debe contener un mínimo de 8 caracteres.'
    },
    'rpassword': {
      'required': 'El confirmar contraseña es requerido.',
      'minlength': 'La contraseña debe contener un mínimo de 8 caracteres.'
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private builder: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.registerUserForm = this.builder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.maxLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      sexo: ['Hombre'],
      user: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rpassword: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.registerUserForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  public register() {
    if (this.registerUserForm.valid) {
      if (this.registerUserForm.value.password !== this.registerUserForm.value.rpassword) {
        this.showPopup("Error", "Contraseñas no coinciden.")
      } else {
        this.showLoading();
        this.auth.register(this.registerUserForm.value).subscribe(
          success => {
            if (success) {
              this.loading.dismiss();
              this.createSuccess = true;
              this.showPopup("Completado", "Usuario registrado con éxito.");
            } else {
              this.showPopup("Error", "Ha ocurrido un error al crear la cuenta.");
            }
          },
            error => {
              this.loading.dismiss();
              this.showPopup("Error", error.error);
            }
        );
      }
    } else {
      this.validateAllFormFields(this.registerUserForm);
    }
  }

  onValueChanged(data?: any) {
    if (!this.registerUserForm) { return; }
    const form = this.registerUserForm;

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
        content: 'Registrando Usuario...'
      });
      this.loading.present();
  }
}
