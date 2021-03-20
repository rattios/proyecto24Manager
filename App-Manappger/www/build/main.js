webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registro_usuario_registro_usuario__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registro_socio_registro_socio__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__email_password_email_password__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, http, auth, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loginCredentials = {
            user: '',
            password: ''
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.registrar_usuario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__registro_usuario_registro_usuario__["a" /* RegistroUsuarioPage */]);
    };
    LoginPage.prototype.registrar_socio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__registro_socio_registro_socio__["a" /* RegistroSocioPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.loginCredentials).subscribe(function (allowed) {
            if (allowed) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
            }
            else {
                _this.showError("Accesso Denegado");
            }
        }, function (error) {
            _this.showError(error.error);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Iniciando Sesión...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    LoginPage.prototype.olvido_password = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__email_password_email_password__["a" /* EmailPasswordPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/login/login.html"*/'<ion-content padding>\n	<div class="content_img">\n		<img src="assets/img/manappger.png" alt="manappger" width="55%">\n	</div>\n	<form #loginForm="ngForm" class="mt-20">\n		<ion-list>\n		    <ion-item>\n		      <ion-label> <ion-icon ios="ios-person" md="md-person"></ion-icon></ion-label>\n		      <ion-input clearInput type="text" placeholder="USUARIO" name="user" [(ngModel)]="loginCredentials.user"></ion-input>\n		    </ion-item>\n\n		    <ion-item>\n		      <ion-label><ion-icon ios="ios-lock" md="md-lock"></ion-icon></ion-label>\n		      <ion-input clearInput type="password"  placeholder="CONTRASEÑA" name="password" [(ngModel)]="loginCredentials.password"></ion-input>\n		    </ion-item>\n	  	</ion-list>\n\n		<div class="center">\n			<button ion-button class="b1-login" (click)="login()">ENTRAR</button>\n			<button ion-button class="b1-login" (click)="registrar_usuario()">REGÍSTRATE</button>\n			<button ion-button class="b2-login mt-20" (click)="olvido_password()">¿OLVIDASTE CONTRASEÑA?</button>\n			<button ion-button class="b2-login" (click)="registrar_socio()">OFRECE TUS SERVICIOS</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pedido_pedido__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListDetailsPage = (function () {
    function ListDetailsPage(navCtrl, navParams, cartProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartProvider = cartProvider;
        this.alertCtrl = alertCtrl;
        this.subcategory = this.cartProvider.getCartContents();
    }
    ListDetailsPage.prototype.ionViewWillEnter = function () {
        this.itemsInCart = this.cartProvider.getCartCount();
    };
    ListDetailsPage.prototype.pedido = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pedido_pedido__["a" /* PedidoPage */]);
    };
    ListDetailsPage.prototype.delete = function (item) {
        var _this = this;
        this.cartProvider.removeItem(item).subscribe(function (success) {
            if (success) {
                _this.subcategory = _this.cartProvider.getCartContents();
                _this.itemsInCart = _this.cartProvider.getCartCount();
            }
            else {
                _this.showPopup("Error", 'Ha ocurrido un error intenta de nuevo');
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    ListDetailsPage.prototype.delete_car = function () {
        this.presentConfirm();
    };
    ListDetailsPage.prototype.agregar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    ListDetailsPage.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    ListDetailsPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Vaciar Carrito',
            message: '¿Desea vaciar el carrito?',
            buttons: [
                {
                    text: 'CANCELAR',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'SI',
                    handler: function () {
                        _this.cartProvider.deleteCar();
                        _this.itemsInCart = 0;
                        _this.subcategory = [];
                    }
                }
            ]
        });
        alert.present();
    };
    return ListDetailsPage;
}());
ListDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-details',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/list-details/list-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><img src="assets/img/logom.png" class="img-header"></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-badge *ngIf="itemsInCart > 0">{{itemsInCart}}</ion-badge>\n        <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <h3 class="title_order">Pedidos</h3>\n    <button ion-button class="b3-login" *ngIf="itemsInCart > 0" (click)="delete_car()">VACIAR CARRITO</button>\n  </div>\n  <br>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of subcategory">\n      <ion-item>\n        <ion-avatar item-start>\n          <img class="img-subcategory" src="{{item.imagen}}">\n        </ion-avatar>\n        <p class="title-subcategory">{{item.nombre}}</p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="delete(item)"><ion-icon name="trash"></ion-icon> Quitar</button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <div class="center">\n      <button ion-button class="b2-login" *ngIf="itemsInCart > 0" (click)="agregar()"><ion-icon name="add"></ion-icon>&nbsp;AGREGAR SERVICIO</button>\n    </div>\n    <ion-item-divider></ion-item-divider>\n  </ion-list>\n  <div>\n    <br>\n    <button ion-button class="b1-login" *ngIf="itemsInCart > 0" (click)="pedido($event)">SOLICITAR SERVICIO</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/list-details/list-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ListDetailsPage);

//# sourceMappingURL=list-details.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistroUsuarioPage = (function () {
    function RegistroUsuarioPage(navCtrl, navParams, auth, alertCtrl, loadingCtrl, builder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.builder = builder;
        this.createSuccess = false;
        this.formErrors = {
            'nombre': '',
            'telefono': '',
            'correo': '',
            'user': '',
            'password': '',
            'rpassword': ''
        };
        this.validationMessages = {
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
        this.initForm();
    }
    RegistroUsuarioPage.prototype.initForm = function () {
        var _this = this;
        this.registerUserForm = this.builder.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(2)]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10)]],
            correo: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email]],
            sexo: ['Hombre'],
            user: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(8)]],
            rpassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(8)]]
        });
        this.registerUserForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    RegistroUsuarioPage.prototype.register = function () {
        var _this = this;
        if (this.registerUserForm.valid) {
            if (this.registerUserForm.value.password !== this.registerUserForm.value.rpassword) {
                this.showPopup("Error", "Contraseñas no coinciden.");
            }
            else {
                this.showLoading();
                this.auth.register(this.registerUserForm.value).subscribe(function (success) {
                    if (success) {
                        _this.loading.dismiss();
                        _this.createSuccess = true;
                        _this.showPopup("Completado", "Usuario registrado con éxito.");
                    }
                    else {
                        _this.showPopup("Error", "Ha ocurrido un error al crear la cuenta.");
                    }
                }, function (error) {
                    _this.loading.dismiss();
                    _this.showPopup("Error", error.error);
                });
            }
        }
        else {
            this.validateAllFormFields(this.registerUserForm);
        }
    };
    RegistroUsuarioPage.prototype.onValueChanged = function (data) {
        if (!this.registerUserForm) {
            return;
        }
        var form = this.registerUserForm;
        for (var field in this.formErrors) {
            var control = form.get(field);
            this.formErrors[field] = '';
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    RegistroUsuarioPage.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            console.log(field);
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]) {
                control.markAsDirty({ onlySelf: true });
                _this.onValueChanged();
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    RegistroUsuarioPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegistroUsuarioPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Registrando Usuario...'
        });
        this.loading.present();
    };
    return RegistroUsuarioPage;
}());
RegistroUsuarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registro-usuario',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/registro-usuario/registro-usuario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><img src="assets/img/logom.png" class="img-header"></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<form [formGroup]="registerUserForm" (ngSubmit)="register(registerUserForm)">\n		<ion-list>\n			<p class="item_label">NOMBRE*</p>\n		    <ion-item>\n		      <ion-label> <ion-icon ios="ios-person" md="md-person"></ion-icon></ion-label>\n		      <ion-input clearInput type="text" name="nombre" formControlName="nombre"></ion-input>\n		    </ion-item>\n			<div *ngIf="formErrors.nombre" class="alert-danger">\n	          {{ formErrors.nombre }}\n	        </div>\n			<p class="item_label">TELÉFONO DE CONTACTO (Opcional)</p>\n		    <ion-item>\n		      <ion-label><ion-icon ios="ios-call" md="md-call"></ion-icon></ion-label>\n		      <ion-input clearInput type="number" name="telefono" formControlName="telefono"></ion-input>\n		    </ion-item>\n		    <div *ngIf="formErrors.telefono" class="alert-danger">\n	          {{ formErrors.telefono }}\n	        </div>\n		    <p class="item_label">CORREO ELECTRÓNICO*</p>\n		    <ion-item>\n		      <ion-label><ion-icon name="mail" md="md-mail"></ion-icon></ion-label>\n		      <ion-input clearInput type="email" name="correo" formControlName="correo"></ion-input>\n		    </ion-item>\n		    <div *ngIf="formErrors.correo" class="alert-danger">\n	          {{ formErrors.correo }}\n	        </div>\n	        <p class="ml-25 item_label">USUARIO*</p>\n		    <ion-item>\n		      <ion-label><ion-icon name="man"></ion-icon></ion-label>\n		      <ion-input clearInput type="text" name="user" formControlName="user"></ion-input>\n		    </ion-item>\n		    <div *ngIf="formErrors.user" class="alert-danger">\n	          {{ formErrors.user }}\n	        </div>\n		    <p class="ml-25 item_label">CONTRASEÑA*</p>\n		    <ion-item>\n		      <ion-label><ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n		      <ion-input clearInput type="password" name="password" formControlName="password"></ion-input>\n		    </ion-item>\n		    <div *ngIf="formErrors.password" class="alert-danger">\n	          {{ formErrors.password }}\n	        </div>\n		    <p class="ml-25 item_label">CONFIRMAR*</p>\n		    <ion-item>\n		      <ion-label><ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n		      <ion-input clearInput type="password" name="rpassword" formControlName="rpassword"></ion-input>\n		    </ion-item>\n		    <div *ngIf="formErrors.rpassword" class="alert-danger">\n	          {{ formErrors.rpassword }}\n	        </div>\n		    <!--<ion-grid>\n			  <ion-row>\n			    <ion-col col-7>\n			    	<p class="ml-25 item_label">USUARIO*</p>\n				    <ion-item>\n				      <ion-label><ion-icon name="man"></ion-icon></ion-label>\n				      <ion-input clearInput type="text" name="user" formControlName="user"></ion-input>\n				    </ion-item>\n				    <div *ngIf="formErrors.user" class="alert-danger">\n			          {{ formErrors.user }}\n			        </div>\n				    <p class="ml-25 item_label">CONTRASEÑA*</p>\n				    <ion-item>\n				      <ion-label><ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n				      <ion-input clearInput type="password" name="password" formControlName="password"></ion-input>\n				    </ion-item>\n				    <div *ngIf="formErrors.password" class="alert-danger">\n			          {{ formErrors.password }}\n			        </div>\n				    <p class="ml-25 item_label">CONFIRMAR*</p>\n				    <ion-item>\n				      <ion-label><ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n				      <ion-input clearInput type="password" name="rpassword" formControlName="rpassword"></ion-input>\n				    </ion-item>\n				    <div *ngIf="formErrors.rpassword" class="alert-danger">\n			          {{ formErrors.rpassword }}\n			        </div>\n			    </ion-col>\n			    <ion-col col-5>\n			    	<ion-list radio-group name="sexo" formControlName="sexo">\n					  <p class="label-sex">SEXO</p>\n					  <ion-item class="item-sex">\n					    <ion-label>HOMBRE</ion-label>\n					    <ion-radio checked="true" value="Hombre"></ion-radio>\n					  </ion-item>\n\n					  <ion-item class="item-sex">\n					    <ion-label>MUJER</ion-label>\n					    <ion-radio value="Mujer"></ion-radio>\n					  </ion-item>\n					</ion-list>\n					<div class="center">\n						<img src="assets/img/manappger.png" alt="manappger" width="80%">\n					</div>\n				</ion-col>\n			  </ion-row>\n			</ion-grid>-->\n	  	</ion-list>\n	  	<div class="center">\n			<button ion-button class="b1-login" type="submit">REGISTRAR</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/registro-usuario/registro-usuario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], RegistroUsuarioPage);

//# sourceMappingURL=registro-usuario.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroSocioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistroSocioPage = (function () {
    function RegistroSocioPage(navCtrl, navParams, http, builder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.builder = builder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.subcategories = [];
        this.shouldHide = 1;
        this.createSuccess = false;
        this.formErrors = {
            'nombre': '',
            'telefono': '',
            'correo': '',
            'ubicacion': ''
        };
        this.validationMessages = {
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
        this.initForm();
    }
    RegistroSocioPage.prototype.initForm = function () {
        var _this = this;
        this.registerSocioForm = this.builder.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(2)]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(10)]],
            correo: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].email]],
            ubicacion: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            servicios: this.builder.array([
                this.initServicios(),
            ]),
            horario: this.builder.array([
                this.initHorarios(),
            ])
        });
        this.initializeCategory();
        this.initializeHora();
        this.registerSocioForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    RegistroSocioPage.prototype.initServicios = function () {
        return this.builder.group({
            servicio: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            subcategoria_id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            horario: this.builder.array([])
        });
    };
    RegistroSocioPage.prototype.initHorarios = function () {
        return this.builder.group({
            dia: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            horaInicio: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            horaFin: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        });
    };
    RegistroSocioPage.prototype.initializeHora = function () {
        this.hora = [
            { id: 1, hora: 0 },
            { id: 2, hora: 1 },
            { id: 3, hora: 2 },
            { id: 4, hora: 3 },
            { id: 5, hora: 4 },
            { id: 6, hora: 5 },
            { id: 7, hora: 6 },
            { id: 8, hora: 7 },
            { id: 9, hora: 8 },
            { id: 10, hora: 9 },
            { id: 11, hora: 10 },
            { id: 12, hora: 11 },
            { id: 13, hora: 12 },
            { id: 14, hora: 13 },
            { id: 15, hora: 14 },
            { id: 16, hora: 15 },
            { id: 17, hora: 16 },
            { id: 18, hora: 17 },
            { id: 19, hora: 18 },
            { id: 20, hora: 19 },
            { id: 21, hora: 20 },
            { id: 22, hora: 21 },
            { id: 23, hora: 22 },
            { id: 24, hora: 23 }
        ];
    };
    RegistroSocioPage.prototype.initializeCategory = function () {
        var _this = this;
        this.http.get('http://manappger.internow.com.mx/api/public/categorias/subcategorias')
            .toPromise()
            .then(function (data) {
            _this.category = data;
            _this.categories = _this.category.categorias;
            var subs = [];
            for (var i = 0; i < _this.categories.length; ++i) {
                for (var j = 0; j < _this.categories[i].subcategorias.length; ++j) {
                    subs.push(_this.categories[i].subcategorias[j]);
                }
            }
            _this.selectedCategory = subs;
        }, function (msg) {
        });
    };
    RegistroSocioPage.prototype.filterItems = function (searchTerm, i) {
        var control = this.registerSocioForm.controls['servicios'];
        var index = control.value.length;
        if (index == this.subcategories.length) {
            this.subcategories[i] = this.selectedCategory.filter(function (servl) { return servl.categoria_id == searchTerm; });
        }
        else {
            this.subcategories.push(this.selectedCategory.filter(function (servl) { return servl.categoria_id == searchTerm; }));
        }
    };
    RegistroSocioPage.prototype.setServices = function (category, ii) {
        var nombre = category.value.servicio;
        for (var i = 0; i < this.categories.length; ++i) {
            if (nombre == this.categories[i].nombre) {
                this.idCategory = this.categories[i].id;
                this.filterItems(this.idCategory, ii);
            }
        }
    };
    RegistroSocioPage.prototype.addServicio = function () {
        var control = this.registerSocioForm.controls['servicios'];
        var index = control.value.length - 1;
        if (control.value[index].servicio == '' || control.value[index].subcategoria_id == '') {
            this.showPopup("Error", 'Por favor completa el servicio anterior.');
        }
        else {
            control.push(this.initServicios());
        }
    };
    RegistroSocioPage.prototype.removeServicio = function (i) {
        var control = this.registerSocioForm.controls['servicios'];
        var index = control.value.length - 1;
        control.removeAt(index);
        this.subcategories.splice(-1, 1);
    };
    RegistroSocioPage.prototype.addHorario = function () {
        var control2 = this.registerSocioForm.controls['horario'];
        var index = control2.value.length - 1;
        if (control2.value[index].dia == '' || control2.value[index].horaInicio == '' || control2.value[index].horaFin == '') {
            this.showPopup("Error", 'Por favor completa el horario anterior.');
        }
        else {
            control2.push(this.initHorarios());
        }
    };
    RegistroSocioPage.prototype.removeHorario = function (i) {
        var control = this.registerSocioForm.controls['horario'];
        var index = control.value.length - 1;
        control.removeAt(index);
    };
    RegistroSocioPage.prototype.register_socio = function (model) {
        var _this = this;
        if (this.registerSocioForm.valid) {
            this.showLoading();
            this.model = model;
            var serv = this.model.value;
            for (var i = 0; i < serv.servicios.length; ++i) {
                serv.servicios[i].horario = serv.horario;
            }
            serv.servicios = JSON.stringify(serv.servicios);
            this.http.post('http://manappger.internow.com.mx/api/public/socios', serv)
                .toPromise()
                .then(function (data) {
                _this.loading.dismiss();
                _this.createSuccess = true;
                _this.showPopup("Completado", "Asociado registrado con éxito.");
            }, function (msg) {
                _this.loading.dismiss();
                _this.showPopup("Error", msg.error);
            });
        }
        else {
            this.validateAllFormFields(this.registerSocioForm);
        }
    };
    RegistroSocioPage.prototype.onValueChanged = function (data) {
        if (!this.registerSocioForm) {
            return;
        }
        var form = this.registerSocioForm;
        for (var field in this.formErrors) {
            var control = form.get(field);
            this.formErrors[field] = '';
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    RegistroSocioPage.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            console.log(field);
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]) {
                control.markAsDirty({ onlySelf: true });
                _this.onValueChanged();
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    RegistroSocioPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegistroSocioPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Registrando Asociado...'
        });
        this.loading.present();
    };
    return RegistroSocioPage;
}());
RegistroSocioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registro-socio',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/registro-socio/registro-socio.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><img src="assets/img/logom.png" class="img-header"></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<form [formGroup]="registerSocioForm" (ngSubmit)="register_socio(registerSocioForm)">\n		<ion-list>\n			<p class="item_label">NOMBRE COMPLETO*</p>\n		    <ion-item>\n		      <ion-label> <ion-icon ios="ios-person" md="md-person"></ion-icon></ion-label>\n		      <ion-input clearInput type="text" formControlName="nombre"></ion-input>\n		    </ion-item>\n		    <div *ngIf="formErrors.nombre" class="alert-danger">\n	          {{ formErrors.nombre }}\n	        </div>\n		    <p class="item_label">CORREO ELECTRÓNICO*</p>\n		    <ion-item>\n		      <ion-label><ion-icon name="mail" md="md-mail"></ion-icon></ion-label>\n		      <ion-input clearInput type="email" formControlName="correo"></ion-input>\n		    </ion-item>\n		    <div *ngIf="formErrors.correo" class="alert-danger">\n	          {{ formErrors.correo }}\n	        </div>\n		    <p class="item_label">TELÉFONO (Opcional)</p>\n		    <ion-item>\n		      <ion-label><ion-icon ios="ios-call" md="md-call"></ion-icon></ion-label>\n		      <ion-input clearInput type="number" formControlName="telefono"></ion-input>\n		    </ion-item>\n		    <div *ngIf="formErrors.telefono" class="alert-danger">\n	          {{ formErrors.telefono }}\n	        </div>\n		    <p class="item_title">SERVICIOS*</p>\n		    <div formArrayName="servicios">\n		    	<div *ngFor="let serv of registerSocioForm.controls.servicios.controls; let i=index;" [formGroupName]="i">\n			    	<p class="item_label">TIPO DE SERVICIO {{i+1}}*</p>\n			    	<ion-item>\n			    		<ion-label><ion-icon name="man"></ion-icon></ion-label>\n						<ion-select (ionChange)="setServices(serv,i)" formControlName="servicio" interface="popover">\n						  <ion-option [value]="category.nombre" *ngFor = "let category of categories">{{category.nombre}}</ion-option>\n						</ion-select>\n			    	</ion-item>	\n				    <p class="item_label">DETALLE SERVICIO {{i+1}}*</p>\n					<ion-item>\n						<ion-label><ion-icon name="man"></ion-icon></ion-label>\n						<ion-select formControlName="subcategoria_id" interface="popover">\n							<ion-option [value]="subcategory.id" *ngFor = "let subcategory of subcategories[i]">\n								{{subcategory.nombre}}\n							</ion-option>\n						</ion-select>\n					</ion-item>\n				</div>\n				<div class="content-button">\n					<ion-icon (click)="removeServicio(i)" class="button-service" ios="ios-remove-circle" md="md-remove-circle" *ngIf="registerSocioForm.controls.servicios.controls.length > 1"></ion-icon>\n					<ion-icon (click)="addServicio()" class="button-service" ios="ios-add-circle" md="md-add-circle"></ion-icon>\n				</div>\n			</div>\n		    <p class="item_title">HORARIOS Y DÍAS DE SU SERVICIO*</p> \n		   	<div formArrayName="horario">\n		    	<div *ngFor="let horario of registerSocioForm.controls.horario.controls; let i=index" [formGroupName]="i">\n		    		<p class="item_label">HORARIO {{i+1}}*</p>\n			    	<ion-item class="mb-0">\n			    		<ion-label><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n						<ion-select formControlName="dia" interface="popover">\n						  <ion-option value="Domingo">Domingo</ion-option>\n						  <ion-option value="Lunes">Lunes</ion-option>\n						  <ion-option value="Martes">Martes</ion-option>\n						  <ion-option value="Miercoles">Miércoles</ion-option>\n						  <ion-option value="Jueves">Jueves</ion-option>\n						  <ion-option value="Viernes">Viernes</ion-option>\n						  <ion-option value="Sabado">Sábado</ion-option>\n						</ion-select>\n			    	</ion-item>	\n					<ion-grid>\n					  <ion-row>\n					  	<ion-col col-6>\n					  		<p class="ml-25 item_label">HORA INICIO</p>\n							<ion-item class="mb-0">\n					    		<ion-label><ion-icon ios="ios-time" md="md-time"></ion-icon></ion-label>\n								<ion-select formControlName="horaInicio" interface="popover">\n								  <ion-option [value]="horaInicio.hora" *ngFor = "let horaInicio of hora">{{horaInicio.hora}}</ion-option>\n								</ion-select>\n							</ion-item>\n					    </ion-col>\n					    <ion-col col-6>\n					    	<p class="ml-25 item_label">HORA FIN</p>\n					    	<ion-item class="mb-0">\n					    		<ion-label><ion-icon ios="ios-time" md="md-time"></ion-icon></ion-label>\n						    	<ion-select formControlName="horaFin" interface="popover">\n								  <ion-option [value]="horaFin.hora" *ngFor = "let horaFin of hora">{{horaFin.hora}}</ion-option>\n								</ion-select>\n							</ion-item>\n						</ion-col>\n					  </ion-row>\n					</ion-grid>\n				</div>\n				<div class="content-button">\n					<ion-icon (click)="removeHorario()" class="button-service" ios="ios-remove-circle" md="md-remove-circle" *ngIf="registerSocioForm.controls.horario.controls.length > 1"></ion-icon>\n					<ion-icon (click)="addHorario()" class="button-service" ios="ios-add-circle" md="md-add-circle"></ion-icon>\n				</div>\n			</div> \n			<p class="item_label">UBICACIÓN DE SU SERVICIO*</p>\n		    <ion-item>\n		      <ion-label> <ion-icon name="pin"></ion-icon></ion-label>\n		      <ion-input clearInput type="text" formControlName="ubicacion"></ion-input>\n		    </ion-item>\n		    <div *ngIf="formErrors.ubicacion" class="alert-danger">\n	          {{ formErrors.ubicacion }}\n	        </div>\n	  	</ion-list>\n	  	<div class="center">\n			<button ion-button class="b1-login" type="submit">REGISTRAR</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/registro-socio/registro-socio.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], RegistroSocioPage);

//# sourceMappingURL=registro-socio.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__codepassword_codepassword__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmailPasswordPage = (function () {
    function EmailPasswordPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, builder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.builder = builder;
        this.createSuccess = false;
        this.formErrors = {
            'email': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'El correo es requerido.',
                'email': 'El formato del correo no es correcto.',
            }
        };
        this.ForgotPassword = this.builder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email]]
        });
        this.ForgotPassword.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    EmailPasswordPage.prototype.sendPassword = function () {
        var _this = this;
        if (this.ForgotPassword.valid) {
            this.showLoading();
            this.http.get('http://manappger.internow.com.mx/api/public/password/cliente/' + this.ForgotPassword.value.email)
                .toPromise()
                .then(function (data) {
                _this.codigo = data;
                _this.createSuccess = true;
                _this.loading.dismiss();
                _this.showPopup("Éxito", 'Código de verificación enviado con éxito');
            }, function (msg) {
                _this.createSuccess = false;
                var err = JSON.parse(msg.error);
                _this.loading.dismiss();
                _this.showPopup("Error", err.error);
            });
        }
        else {
            this.validateAllFormFields(this.ForgotPassword);
        }
    };
    EmailPasswordPage.prototype.codepage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__codepassword_codepassword__["a" /* CodepasswordPage */], { email: this.ForgotPassword.value.email });
    };
    EmailPasswordPage.prototype.onValueChanged = function (data) {
        if (!this.ForgotPassword) {
            return;
        }
        var form = this.ForgotPassword;
        for (var field in this.formErrors) {
            var control = form.get(field);
            this.formErrors[field] = '';
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    EmailPasswordPage.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]) {
                control.markAsDirty({ onlySelf: true });
                _this.onValueChanged();
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    EmailPasswordPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Enviando código...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    EmailPasswordPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__codepassword_codepassword__["a" /* CodepasswordPage */], { email: _this.ForgotPassword.value.email });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return EmailPasswordPage;
}());
EmailPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-email-password',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/email-password/email-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><img src="assets/img/logom.png" class="img-header"></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="content_img">\n		<img src="assets/img/manappger.png" alt="manappger" width="40%">\n	</div>\n	<div>\n		<p class="info-password">Ingrese su dirección de correo electrónico y se le enviará un código con el que podrá recuperar su contraseña en pocos minutos.</p>\n	</div>\n	<form [formGroup]="ForgotPassword" (ngSubmit)="sendPassword(ForgotPassword)">\n		<ion-list>\n			<p class="item_label">CORREO ELECTRÓNICO*</p>\n		    <ion-item>\n		      <ion-label> <ion-icon name="mail" md="md-mail"></ion-icon></ion-label>\n		      <ion-input clearInput type="email" name="email" formControlName="email"></ion-input>\n		    </ion-item>\n		    <div *ngIf="formErrors.email" class="alert-danger">\n	          {{ formErrors.email }}\n	        </div>\n	  	</ion-list>\n	  	<div class="center">\n			<button ion-button class="b1-login" type="submit">GENERAR CÓDIGO</button>\n		</div>\n	</form>\n	<div class="center">\n		<button ion-button class="b2-login" (click)="codepage()">VERIFICAR CÓDIGO RECIBIDO</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/email-password/email-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], EmailPasswordPage);

//# sourceMappingURL=email-password.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contrasena_contrasena__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CodepasswordPage = (function () {
    function CodepasswordPage(navCtrl, navParams, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.CodePassword = {
            code: ''
        };
        this.correo = navParams.get('email');
    }
    CodepasswordPage.prototype.codePassword = function () {
        var _this = this;
        this.showLoading();
        this.http.get('http://manappger.internow.com.mx/api/public/password/codigo/' + this.CodePassword.code)
            .toPromise()
            .then(function (data) {
            _this.id = data;
            _this.loading.dismiss();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contrasena_contrasena__["a" /* ContrasenaPage */], { id_cliente: _this.id.cliente_id, token: _this.id.token });
        }, function (msg) {
            var err = JSON.parse(msg.error);
            _this.loading.dismiss();
            _this.showPopup("Error", err.error);
        });
    };
    CodepasswordPage.prototype.solicitar = function () {
        this.navCtrl.pop();
    };
    CodepasswordPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Verificando código...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    CodepasswordPage.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    return CodepasswordPage;
}());
CodepasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-codepassword',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/codepassword/codepassword.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><img src="assets/img/logom.png" class="img-header"></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="content_img">\n		<img src="assets/img/manappger.png" alt="manappger" width="40%">\n	</div>\n	<div>\n		<p class="info-password">Ingrese el código de verificación de 6 dígitos que recibió en la bandeja de entrada de su correo electrónico.</p>\n	</div>\n	<form (ngSubmit)="codePassword()" #CodepasswordForm="ngForm">\n		<ion-list>\n			<p class="item_label">CÓDIGO DE VERIFICACIÓN*</p>\n		    <ion-item>\n		      <ion-label> <ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n		      <ion-input clearInput type="text" name="nombre" [(ngModel)]="CodePassword.code" required></ion-input>\n		    </ion-item>\n	  	</ion-list>\n	  	<div class="center">\n			<button ion-button class="b1-login" type="submit" [disabled]="!CodepasswordForm.form.valid">VERIFICAR</button>\n		</div>\n	</form>\n	<div class="center">\n		<button ion-button class="b2-login" (click)="solicitar()">SOLICITAR NUEVO CÓDIGO</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/codepassword/codepassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], CodepasswordPage);

//# sourceMappingURL=codepassword.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContrasenaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContrasenaPage = (function () {
    function ContrasenaPage(navCtrl, navParams, alertCtrl, http, loadingCtrl, builder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.builder = builder;
        this.updateSuccess = false;
        this.formErrors = {
            'password': '',
            'rpassword': '',
            'token': ''
        };
        this.validationMessages = {
            'password': {
                'required': 'La contraseña es requerida.',
                'minlength': 'La contraseña debe contener un mínimo de 8 caracteres.'
            },
            'rpassword': {
                'required': 'El confirmar contraseña es requerido.',
                'minlength': 'La contraseña debe contener un mínimo de 8 caracteres.'
            }
        };
        this.id_cliente = navParams.get('id_cliente');
        this.UpdatePassword = this.builder.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(8)]],
            rpassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(8)]],
            token: [navParams.get('token')]
        });
        this.UpdatePassword.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    ContrasenaPage.prototype.updatePassword = function () {
        var _this = this;
        if (this.UpdatePassword.valid) {
            if (this.UpdatePassword.value.password !== this.UpdatePassword.value.rpassword) {
                this.showPopup("Error", "Contraseñas no coinciden.");
            }
            else {
                this.showLoading();
                this.http.put('http://manappger.internow.com.mx/api/public/usuarios/' + this.id_cliente, this.UpdatePassword.value)
                    .toPromise()
                    .then(function (data) {
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                }, function (msg) {
                    var err = JSON.parse(msg.error);
                    _this.loading.dismiss();
                    _this.showPopup("Error", err.error);
                });
            }
        }
        else {
            this.validateAllFormFields(this.UpdatePassword);
        }
    };
    ContrasenaPage.prototype.onValueChanged = function (data) {
        if (!this.UpdatePassword) {
            return;
        }
        var form = this.UpdatePassword;
        for (var field in this.formErrors) {
            var control = form.get(field);
            this.formErrors[field] = '';
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContrasenaPage.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]) {
                control.markAsDirty({ onlySelf: true });
                _this.onValueChanged();
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ContrasenaPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Actualizando contraseña...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ContrasenaPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.updateSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return ContrasenaPage;
}());
ContrasenaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contrasena',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/contrasena/contrasena.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><img src="assets/img/logom.png" class="img-header"></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="content_img">\n		<img src="assets/img/manappger.png" alt="manappger" width="40%">\n	</div>\n	<div>\n		<p class="info-password">Ingrese su nueva contraseña.</p>\n	</div>\n	<form [formGroup]="UpdatePassword" (ngSubmit)="updatePassword(UpdatePassword)">\n		<ion-list>\n			<p class="item_label">CONTRASEÑA*</p>\n		    <ion-item>\n		      <ion-label> <ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n		      <ion-input clearInput type="password" name="password" formControlName="password"></ion-input>\n		    </ion-item>\n		    <div *ngIf="formErrors.password" class="alert-danger">\n	          {{ formErrors.password }}\n	        </div>\n		    <p class="item_label">CONFIRMAR CONTRASEÑA*</p>\n		    <ion-item>\n		      <ion-label> <ion-icon ios="ios-key" md="md-key"></ion-icon></ion-label>\n		      <ion-input clearInput type="password" name="rpassword" formControlName="rpassword"></ion-input>\n		    </ion-item>\n		    <div *ngIf="formErrors.rpassword" class="alert-danger">\n	          {{ formErrors.rpassword }}\n	        </div>\n	  	</ion-list>\n	  	<div class="center">\n			<button ion-button class="b1-login" type="submit">ACTUALIZAR</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/contrasena/contrasena.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], ContrasenaPage);

//# sourceMappingURL=contrasena.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__encamino_encamino__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cart_cart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PedidoPage = (function () {
    function PedidoPage(navCtrl, geolocation, googleMaps, cartProvider, http, geocoder, storage, platform, alertCtrl, loadingCtrl, auth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.googleMaps = googleMaps;
        this.cartProvider = cartProvider;
        this.http = http;
        this.geocoder = geocoder;
        this.storage = storage;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.clients = "mapcontent";
        this.myPosition = {};
        this.total = 0;
        this.ordens = [];
        this.refresh = false;
        this.Orders = {
            direccion: '',
            telefono: '',
            descripcion: '',
            referencia: '',
            lat: 0,
            lng: 0,
            usuario_id: '',
            solicitud: '',
            token: this.storage.get('tokenManappger')
        };
        this.loginCredentials = {
            user: '',
            password: ''
        };
        this.itemOrder();
    }
    PedidoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.getCurrentPosition();
        });
    };
    PedidoPage.prototype.ionViewDidLeave = function () {
        if (this.map) {
            this.map.remove();
            this.map.setDiv(null);
        }
        this.map = null;
    };
    PedidoPage.prototype.itemOrder = function () {
        this.itemsInCart = this.cartProvider.getCartContents();
        for (var i = 0; i < this.itemsInCart.length; ++i) {
            this.ordens.push({ categoria_id: this.itemsInCart[i].categoria_id, subcategoria_id: this.itemsInCart[i].id });
        }
        this.Orders.solicitud = JSON.stringify(this.ordens);
        this.Orders.usuario_id = this.storage.get('userManappger');
        var totals = this.cartProvider.getCartTotal();
        this.total = totals.toFixed(2);
    };
    PedidoPage.prototype.getCurrentPosition = function () {
        var _this = this;
        this.showLoadingGeo();
        var optionsGPS = { timeout: 13000, enableHighAccuracy: true };
        this.geolocation.getCurrentPosition(optionsGPS)
            .then(function (position) {
            _this.myPosition = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            _this.refresh = false;
            _this.loadMap();
        })
            .catch(function (error) {
            _this.loadingG.dismiss();
            _this.refresh = true;
            _this.showPopup("Error", 'Active el GPS para encontrar su ubicación');
        });
    };
    PedidoPage.prototype.loadMap = function () {
        var _this = this;
        this.mapElement = document.getElementById('map');
        var mapOptions = {
            camera: {
                target: {
                    lat: this.myPosition.latitude,
                    lng: this.myPosition.longitude
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = this.googleMaps.create(this.mapElement, mapOptions);
        setTimeout(function () { this.googleMaps.maps.event.trigger(this.map, 'resize'); }, 600);
        this.map.one(__WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            var htmlback = new __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["a" /* Environment */]();
            htmlback.setBackgroundColor("#1e6594");
            _this.refresh = false;
            _this.loadingG.dismiss();
            _this.map.addMarker({
                title: 'Haz click en el mapa para encontrar tu ubicación',
                icon: 'red',
                animation: 'DROP',
                position: {
                    lat: _this.myPosition.latitude,
                    lng: _this.myPosition.longitude
                },
                draggable: true
            })
                .then(function (marker) {
                _this.doGeocode(marker);
                _this.mark = marker;
                _this.showPopup('Aviso', 'Haz click en el mapa para encontrar tu ubicación');
                marker.on(__WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MARKER_DRAG_END).subscribe(function () {
                    var position = marker.getPosition();
                    _this.myPosition.latitude = position.lat;
                    _this.myPosition.longitude = position.lng;
                    marker.hideInfoWindow();
                    _this.doGeocode(marker);
                });
            });
            _this.map.on(__WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MAP_CLICK).subscribe(function (e) {
                var pos = new __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["e" /* LatLng */](e[0].lat, e[0].lng);
                _this.mark.setPosition(pos);
                _this.myPosition.latitude = e[0].lat;
                _this.myPosition.longitude = e[0].lng;
                _this.mark.hideInfoWindow();
                _this.doGeocode(_this.mark);
            });
        });
    };
    PedidoPage.prototype.doGeocode = function (marker) {
        var _this = this;
        var request = {
            position: new __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["e" /* LatLng */](this.myPosition.latitude, this.myPosition.longitude),
        };
        this.geocoder.geocode(request).then(function (results) {
            _this.address = results[0].extra.lines;
            /*this.address = [
                (results[0].thoroughfare || "") + " " + (results[0].subThoroughfare || ""),
                (results[0].subLocality || ""), results[0].locality +" "+ (results[0].postalCode || "")
            ].join(" ");*/
            marker.setTitle(_this.address);
            marker.showInfoWindow();
        });
    };
    PedidoPage.prototype.order = function () {
        var _this = this;
        this.showLoading();
        if (this.clients === 'mapcontent') {
            this.Orders.lat = this.myPosition.latitude;
            this.Orders.lng = this.myPosition.longitude;
            this.Orders.direccion = this.address;
        }
        this.http.post('http://manappger.internow.com.mx/api/public/pedidos', this.Orders)
            .toPromise()
            .then(function (data) {
            _this.loading.dismiss();
            _this.cartProvider.deleteCar();
            _this.http.get('http://manappger.internow.com.mx/onesignal.php')
                .toPromise()
                .then(function (data) {
            }, function (msg) {
            });
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__encamino_encamino__["a" /* EncaminoPage */]);
        }, function (msg) {
            _this.loading.dismiss();
            if (msg.status == 400 || msg.status == 401) {
                _this.presentPrompt();
            }
            else {
                var err = JSON.parse(msg.error);
                _this.showPopup("Error", err.error);
            }
        });
    };
    PedidoPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Enviando Pedido...'
        });
        this.loading.present();
    };
    PedidoPage.prototype.showLoadingGeo = function () {
        this.loadingG = this.loadingCtrl.create({
            content: 'Buscando Ubicación...'
        });
        this.loadingG.present();
    };
    PedidoPage.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    PedidoPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Validar Sesión',
            inputs: [
                {
                    name: 'usuario',
                    placeholder: 'USUARIO',
                    value: this.storage.get('nameManappger')
                },
                {
                    name: 'password',
                    placeholder: 'CONTRASEÑA',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'CANCELAR',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'ENTRAR',
                    handler: function (data) {
                        _this.loginCredentials.user = data.usuario;
                        _this.loginCredentials.password = data.password;
                        _this.auth.login(_this.loginCredentials).subscribe(function (allowed) {
                            if (allowed) {
                                _this.Orders.token = _this.storage.get('tokenManappger');
                                return false;
                            }
                            else {
                                _this.showPopup("Error", "Error Accesso Denegado");
                                return false;
                            }
                        }, function (error) {
                            _this.showPopup("Error", error.error);
                            return false;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    PedidoPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Haz click en el mapa para encontrar tu ubicación',
            position: 'bottom',
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return PedidoPage;
}());
PedidoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core___["n" /* Component */])({
        selector: 'page-pedido',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/pedido/pedido.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><img src="assets/img/logom.png" class="img-header"></ion-title>\n  </ion-navbar>\n  <ion-navbar>\n    <ion-segment [(ngModel)]="clients">\n      <ion-segment-button value="mapcontent">\n        POR UBICACIÓN\n      </ion-segment-button>\n      <ion-segment-button value="list">\n        POR DIRECCIÓN\n      </ion-segment-button>\n    </ion-segment>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <div [ngClass]="{ \'hide\': clients != \'mapcontent\' }">\n    <div *ngIf="refresh" class="center" (click)="getCurrentPosition()"><ion-icon ios="ios-refresh" md="md-refresh" class="icon-refresh"></ion-icon></div>\n    <div class="content-order"><div #map id="map"></div></div>\n    <div class="center mt-30">\n      <p class="title-total">COSTO TOTAL:</p>\n      <p class="price-total">${{total}} MXN</p>\n    </div>\n    <div class="center">\n      <button ion-button class="b1-login" [disabled]="refresh" (click)="order()">PEDIR</button>\n    </div>\n  </div>   \n  <div [ngClass]="{ \'hide\': clients != \'list\' }" class="bg-color">\n    <br>\n    <form (ngSubmit)="order()" #orderForm="ngForm">\n      <ion-list>\n        <p class="item_label">DIRECCIÓN*</p>\n          <ion-item>\n            <ion-label> <ion-icon ios="ios-locate" md="md-locate"></ion-icon></ion-label>\n            <ion-input clearInput type="text" name="nombre" [(ngModel)]="Orders.direccion" required></ion-input>\n          </ion-item>\n        <p class="item_label">TELÉFONO DE CONTACTO</p>\n          <ion-item>\n            <ion-label><ion-icon ios="ios-call" md="md-call"></ion-icon></ion-label>\n            <ion-input clearInput type="number" name="telefono" [(ngModel)]="Orders.telefono"></ion-input>\n          </ion-item>\n          <p class="item_label">DESCRIPCIÓN DEL LUGAR</p>\n          <ion-item>\n            <ion-label><ion-icon name="pin"></ion-icon></ion-label>\n            <ion-textarea clearInput type="text" name="descripcion" [(ngModel)]="Orders.descripcion"></ion-textarea>\n          </ion-item>\n          <p class="item_label">REFERENCIAS DEL LUGAR</p>\n          <ion-item>\n            <ion-label><ion-icon name="pin"></ion-icon></ion-label>\n            <ion-textarea clearInput type="text" name="referencia" [(ngModel)]="Orders.referencia"></ion-textarea>\n          </ion-item>\n        </ion-list>\n        <br>\n        <div class="center">\n          <p class="title-total">COSTO TOTAL:</p>\n          <p class="price-total">${{total}} MXN</p>\n        </div>\n        <div class="center">\n          <button ion-button class="b1-login" type="submit" [disabled]="!orderForm.form.valid">PEDIR</button>\n        </div>\n    </form>   \n  </div> \n</ion-content>\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/pedido/pedido.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["c" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_6__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_maps__["b" /* Geocoder */], __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
], PedidoPage);

//# sourceMappingURL=pedido.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncaminoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EncaminoPage = (function () {
    function EncaminoPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.contact = '';
        this.initContact();
    }
    EncaminoPage.prototype.initContact = function () {
        var _this = this;
        this.http.get('http://manappger.internow.com.mx/api/public/contacto')
            .toPromise()
            .then(function (data) {
            _this.cont = data;
            _this.contact = _this.cont.contacto;
        }, function (msg) {
        });
    };
    EncaminoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EncaminoPage');
    };
    EncaminoPage.prototype.closeModal = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    return EncaminoPage;
}());
EncaminoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-encamino',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/encamino/encamino.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><img src="assets/img/logom.png" class="img-header"></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div class="content_img">\n	    <img src="assets/img/delivery.gif" alt="manappger" width="100%">\n		<br>\n		<p class="slide-in-both-ways">ESTAMOS EN CAMINO...</p>\n	</div>\n	<div>\n		<ion-list>\n		  <ion-item no-lines class="content_tlf">\n		    <ion-label class="center">\n		     <img src="assets/img/callc.png" alt="manappger" width="50px">\n		    </ion-label>\n		    <div item-content class="content_info">\n		      <p>NÚMERO DE CONTACTO</p>\n		      <h2>{{contact}}</h2>\n		    </div>\n		  </ion-item>\n	  </ion-list>\n	</div>\n	<ion-fab bottom right>\n   		<button ion-fab (click)="closeModal()">OK</button>\n 	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/encamino/encamino.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], EncaminoPage);

//# sourceMappingURL=encamino.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_details_list_details__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = (function () {
    function ListPage(navCtrl, navParams, cartProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartProvider = cartProvider;
        this.alertCtrl = alertCtrl;
        this.quantity = 1;
        this.category = navParams.get('subcategory');
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.presentConfirm(item);
    };
    ListPage.prototype.presentConfirm = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Agregar Servicio',
            message: '¿Desea agregar al carrito?',
            buttons: [
                {
                    text: 'CANCELAR',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'SI',
                    handler: function () {
                        _this.cartProvider.addToCart(item, _this.quantity).subscribe(function (success) {
                            if (success) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_details_list_details__["a" /* ListDetailsPage */]);
                            }
                            else {
                                _this.showPopup("Error", 'Ha ocurrido un error intenta de nuevo');
                            }
                        }, function (error) {
                            _this.showPopup("Aviso", error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListPage.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><img src="{{category.imagen}}" alt="manappger" class="header-img"> <span class="header-title">{{category.nombre}}</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor="let subcategory of category.subcategorias" (click)="itemTapped($event,subcategory)">\n  	<ion-row class="item-subcategory">\n      <ion-col col-2 class="back-img">\n        <img class="img-subcategory" src="{{subcategory.imagen}}">\n      </ion-col>\n      <ion-col col-9 class="content-arrow">\n        <p class="title-subcategory">{{subcategory.nombre}}</p>\n      </ion-col>\n      <ion-col col-1 class="content-arrow">\n         <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" class="icon-subcategory"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calificacion_detail_calificacion_detail__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalificacionPage = (function () {
    function CalificacionPage(navCtrl, http, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.calification = 'order';
        this.initCalifications();
    }
    CalificacionPage.prototype.calificar = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calificacion_detail_calificacion_detail__["a" /* CalificacionDetailPage */], { service: item });
    };
    CalificacionPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loading.present();
    };
    CalificacionPage.prototype.initCalifications = function () {
        var _this = this;
        this.showLoading();
        var id = this.storage.get('userManappger');
        this.http.get('http://manappger.internow.com.mx/api/public/usuarios/' + id + '/pedidos')
            .toPromise()
            .then(function (data) {
            _this.rating = data;
            _this.calications = _this.rating.usuario.pedidos;
            _this.history = _this.rating.usuario.pedidos;
            _this.loading.dismiss();
        }, function (msg) {
            _this.loading.dismiss();
        });
    };
    return CalificacionPage;
}());
CalificacionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core___["n" /* Component */])({
        selector: 'page-calificacion',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/calificacion/calificacion.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><img src="assets/img/logom.png" class="img-header"></ion-title>\n  </ion-navbar>\n  <ion-navbar>\n    <ion-segment [(ngModel)]="calification">\n      <ion-segment-button value="order">\n        POR CALIFICAR\n      </ion-segment-button>\n      <ion-segment-button value="history">\n        CALIFICADOS\n      </ion-segment-button>\n    </ion-segment>\n  </ion-navbar>\n</ion-header>\n<ion-content class="has-header">\n  <div [ngClass]="{ \'hide\': calification != \'order\' }" class="content-order">\n    <br>\n    <div *ngFor="let item of calications">\n      <ion-row class="content-service" *ngIf="item.calificacion == null && item.socio != null && item.estado == \'2\'">\n        <ion-col col-8>\n          <img src="{{item.subcategoria.imagen}}" class="img-services">\n          <p class="title-service">{{item.subcategoria.nombre}}</p>\n          <p class="item-service">Realizado por: {{item.socio.nombre}} el {{item.created_at | date: \'dd/MM/yyyy\'}}</p>\n        </ion-col>\n        <ion-col col-4 class="right">\n          <button ion-button class="b1-login" (click)="calificar(item)">Calificar</button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>   \n  <div [ngClass]="{ \'hide\': calification != \'history\' }" class="bg-color">\n    <br>\n    <div *ngFor="let item of history">\n      <ion-row class="content-service" *ngIf="item.calificacion !== null && item.socio != null && item.estado == \'2\'">\n        <ion-col col-8>\n          <img src="{{item.subcategoria.imagen}}" class="img-services">\n          <p class="title-service">{{item.subcategoria.nombre}}</p>\n          <hr>\n          <p class="item-service2">{{item.calificacion.comentario}}</p>\n          <p class="item-service">Realizado por: {{item.socio.nombre}} el {{item.created_at | date: \'dd/MM/yyyy\'}}</p>\n        </ion-col>\n        <ion-col col-4>\n          <rating [(ngModel)]="item.calificacion.puntaje"\n            name="rate"  \n            readOnly="true"\n            max="5"\n            emptyStarIconName="star-outline"\n            halfStarIconName="star-half"\n            starIconName="star"\n            nullable="false">\n          </rating>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div> \n</ion-content>\n\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/calificacion/calificacion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], CalificacionPage);

//# sourceMappingURL=calificacion.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificacionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CalificacionDetailPage = (function () {
    function CalificacionDetailPage(navCtrl, navParams, http, storage, loadingCtrl, alertCtrl, auth, element) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.element = element;
        this.id = '';
        this.success = false;
        this.Calification = {
            nombre: '',
            tipo: '',
            puntaje: 0,
            comentario: '',
            pedido_id: '',
            servicio_id: '',
            token: this.storage.get('tokenManappger')
        };
        this.loginCredentials = {
            user: '',
            password: ''
        };
        this.order = navParams.get('service');
        this.id = this.order.id;
        this.Calification.nombre = this.order.socio.nombre;
        this.Calification.tipo = this.order.subcategoria.nombre;
        this.Calification.pedido_id = this.order.id;
        this.Calification.servicio_id = this.order.servicio_id;
        this.element = element;
    }
    CalificacionDetailPage.prototype.ngAfterViewInit = function () {
        this.element.nativeElement.querySelector("textarea").style.height = "150px";
    };
    CalificacionDetailPage.prototype.onModelChange = function (ev) {
        this.Calification.puntaje = ev;
    };
    CalificacionDetailPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Enviando Calificación...'
        });
        this.loading.present();
    };
    CalificacionDetailPage.prototype.rating = function () {
        var _this = this;
        this.showLoading();
        this.http.post('http://manappger.internow.com.mx/api/public/calificaciones/' + this.id, this.Calification)
            .toPromise()
            .then(function (data) {
            _this.loading.dismiss();
            _this.http.get('http://manappger.internow.com.mx/onesignalCalificaciones.php')
                .toPromise()
                .then(function (data) {
            }, function (msg) {
            });
            _this.success = true;
            _this.showPopup('Éxito', '¡Gracias por calificarnos!');
        }, function (msg) {
            _this.loading.dismiss();
            _this.success = false;
            if (msg.status == 400 || msg.status == 401) {
                _this.presentPrompt();
            }
            else {
                _this.showPopup("Error", msg.error.error);
            }
        });
    };
    CalificacionDetailPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Validar Sesión',
            inputs: [
                {
                    name: 'usuario',
                    placeholder: 'USUARIO',
                    value: this.storage.get('nameManappger')
                },
                {
                    name: 'password',
                    placeholder: 'CONTRASEÑA',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'CANCELAR',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'ENTRAR',
                    handler: function (data) {
                        _this.loginCredentials.user = data.usuario;
                        _this.loginCredentials.password = data.password;
                        _this.success = false;
                        _this.auth.login(_this.loginCredentials).subscribe(function (allowed) {
                            if (allowed) {
                                _this.Calification.token = _this.storage.get('tokenManappger');
                                return false;
                            }
                            else {
                                _this.showPopup("Error", "Error Accesso Denegado");
                                return false;
                            }
                        }, function (error) {
                            _this.showPopup("Error", error.error);
                            return false;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    CalificacionDetailPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.success) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return CalificacionDetailPage;
}());
CalificacionDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calificacion-detail',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/calificacion-detail/calificacion-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><img src="assets/img/logom.png" class="img-header"></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n	<br>\n    <form (ngSubmit)="rating()" #orderForm="ngForm">\n      <ion-list>\n        <p class="item_label">NOMBRE DE QUIEN LE DIO EL SERVICIO*</p>\n          <ion-item>\n            <ion-label> <ion-icon ios="ios-person" md="md-person"></ion-icon></ion-label>\n            <ion-input clearInput type="text" name="nombre" [(ngModel)]="Calification.nombre" required></ion-input>\n          </ion-item>\n        <p class="item_label">TIPO DE SERVICIO QUE FUE SOLICITADO*</p>\n          <ion-item>\n            <ion-label><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></ion-label>\n            <ion-input clearInput type="text" name="tipo" [(ngModel)]="Calification.tipo" required></ion-input>\n          </ion-item>\n          <p class="item_label">CALIFIQUE SU SERVICIO*</p>\n            <div class="center">\n	            <rating [(ngModel)]="Calification.puntaje"\n	            	name="rate"  \n			        readOnly="false"\n			        max="5"\n			        emptyStarIconName="star-outline"\n			        halfStarIconName="star-half"\n			        starIconName="star"\n			        nullable="false"\n			        (ngModelChange)="onModelChange($event)">\n				</rating>\n			</div>\n          <p class="item_label">COMENTARIOS DEL SERVICIO*</p>\n          <ion-item style="border-radius: 25px !important;">\n            <ion-label><ion-icon ios="ios-create" md="md-create"></ion-icon></ion-label>\n            <ion-textarea clearInput type="text" name="referencia" [(ngModel)]="Calification.comentario" required></ion-textarea>\n          </ion-item>\n        </ion-list>\n        <div class="center">\n          <button ion-button class="b1-login" type="submit" [disabled]="!orderForm.form.valid">ENVIAR</button>\n        </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/calificacion-detail/calificacion-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], CalificacionDetailPage);

//# sourceMappingURL=calificacion-detail.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_registro_usuario_registro_usuario__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_registro_socio_registro_socio__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_calificacion_calificacion__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contrasena_contrasena__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_email_password_email_password__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_codepassword_codepassword__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_list_details_list_details__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pedido_pedido__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_encamino_encamino__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_calificacion_detail_calificacion_detail__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_storage_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_cart_cart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic2_rating__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_registro_usuario_registro_usuario__["a" /* RegistroUsuarioPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_registro_socio_registro_socio__["a" /* RegistroSocioPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_calificacion_calificacion__["a" /* CalificacionPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_contrasena_contrasena__["a" /* ContrasenaPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_email_password_email_password__["a" /* EmailPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_codepassword_codepassword__["a" /* CodepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_list_details_list_details__["a" /* ListDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_pedido_pedido__["a" /* PedidoPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_encamino_encamino__["a" /* EncaminoPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_calificacion_detail_calificacion_detail__["a" /* CalificacionDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_27_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                tabsPlacement: 'top',
                backButtonText: ''
            }, {
                links: []
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_registro_usuario_registro_usuario__["a" /* RegistroUsuarioPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_registro_socio_registro_socio__["a" /* RegistroSocioPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_calificacion_calificacion__["a" /* CalificacionPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_contrasena_contrasena__["a" /* ContrasenaPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_email_password_email_password__["a" /* EmailPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_codepassword_codepassword__["a" /* CodepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_list_details_list_details__["a" /* ListDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_pedido_pedido__["a" /* PedidoPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_encamino_encamino__["a" /* EncaminoPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_calificacion_detail_calificacion_detail__["a" /* CalificacionDetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_cart_cart__["a" /* CartProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["c" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["b" /* Geocoder */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = (function () {
    function StorageProvider(http) {
        this.http = http;
        this.storage = localStorage;
    }
    StorageProvider.prototype.get = function (key) {
        return this.storage.getItem(key);
    };
    StorageProvider.prototype.set = function (key, value) {
        this.storage.setItem(key, value);
    };
    StorageProvider.prototype.getObject = function (key) {
        var value = this.get(key);
        var returnValue;
        if (value) {
            returnValue = JSON.parse(value);
        }
        else {
            returnValue = null;
        }
        return returnValue;
    };
    StorageProvider.prototype.setObject = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    StorageProvider.prototype.remove = function (key) {
        this.storage.removeItem(key);
    };
    return StorageProvider;
}());
StorageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], StorageProvider);

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_calificacion_calificacion__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.rating = '0';
        var item = this.storage.get('userManappger');
        if (item !== null && item !== "") {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        }
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Solicita Servicio', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Califica Servicio', icon: 'mail', component: __WEBPACK_IMPORTED_MODULE_6__pages_calificacion_calificacion__["a" /* CalificacionPage */] },
            { title: 'Cerrar Sesión', icon: 'exit', component: null }
        ];
        events.subscribe('user:created', function (user, time) {
            _this.rating = user;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component == __WEBPACK_IMPORTED_MODULE_6__pages_calificacion_calificacion__["a" /* CalificacionPage */]) {
            this.nav.push(page.component);
        }
        if (page.component == __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]) {
            this.nav.setRoot(page.component);
        }
        if (page.component == null) {
            this.storage.set('userManappger', '');
            this.storage.set('tokenManappger', '');
            this.storage.set('nameManappger', '');
            this.storage.setObject('category', '');
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar class="header-menu" style="background-color: rgba(82, 103, 117, 0.7) !important">\n        <div class="center">\n          <img src="assets/img/manappger.png" alt="manappger" width="150px">\n        </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content style="margin-top:0px; background-color:rgba(82, 103, 117, 0.7) !important;">\n    <ion-list>\n      <button class="item-menu" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-badge class="badge-calificacion" *ngIf="p.title === \'Califica Servicio\' && rating > 0">{{rating}}</ion-badge>\n        <ion-icon name="{{p.icon}}" style="margin-right:10px;"></ion-icon> {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__["a" /* StorageProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _f || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var User = (function () {
    function User(name, user) {
        this.name = name;
        this.user = user;
    }
    return User;
}());

var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.user === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.http.post('http://manappger.internow.com.mx/api/public/login/app', credentials)
                    .toPromise()
                    .then(function (data) {
                    console.log(data);
                    _this.usuario = data;
                    _this.storage.set('tokenManappger', _this.usuario.token);
                    _this.storage.set('userManappger', _this.usuario.user.id);
                    _this.storage.set('nameManappger', _this.usuario.user.user);
                    _this.currentUser = new User(_this.usuario.user.nombre, _this.usuario.user.user);
                    observer.next(true);
                    observer.complete();
                }, function (msg) {
                    observer.error(JSON.parse(msg.error));
                    observer.complete();
                });
            });
        }
    };
    AuthServiceProvider.prototype.register = function (credentials) {
        var _this = this;
        if (credentials.name === null || credentials.phone === null || credentials.email === null || credentials.username === null || credentials.password === null || credentials.rpassword === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.http.post('http://manappger.internow.com.mx/api/public/clientes', credentials)
                    .toPromise()
                    .then(function (data) {
                    observer.next(data);
                    observer.complete();
                }, function (msg) {
                    observer.error(JSON.parse(msg.error));
                    observer.complete();
                });
            });
        }
    };
    AuthServiceProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__storage_storage__["a" /* StorageProvider */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_details_list_details__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_list__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, navParams, http, cartProvider, loadingCtrl, storage, menuCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.cartProvider = cartProvider;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.haveData = false;
        var item = this.storage.getObject('category');
        if (item) {
            this.categories = item;
        }
        else {
            this.initCategories();
        }
        this.initSlide();
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.itemsInCart = this.cartProvider.getCartCount();
        this.getCalifications();
    };
    HomePage.prototype.getCalifications = function () {
        var _this = this;
        var id = this.storage.get('userManappger');
        this.http.get('http://manappger.internow.com.mx/api/public/usuarios/' + id + '/pedidos/SinCalificar')
            .toPromise()
            .then(function (data) {
            _this.rating = data;
            _this.califications = _this.rating.sinCalificar;
            _this.events.publish('user:created', _this.califications, Date.now());
        }, function (msg) {
        });
    };
    HomePage.prototype.initCategories = function () {
        var _this = this;
        this.showLoading();
        this.http.get('http://manappger.internow.com.mx/api/public/categorias/subcategorias')
            .toPromise()
            .then(function (data) {
            _this.category = data;
            _this.categories = _this.category.categorias;
            _this.storage.setObject('category', _this.categories);
            _this.loading.dismiss();
        }, function (msg) {
            _this.loading.dismiss();
        });
    };
    HomePage.prototype.initSlide = function () {
        var _this = this;
        this.http.get('http://manappger.internow.com.mx/api/public/slider')
            .toPromise()
            .then(function (data) {
            _this.slide = data;
            _this.slides = _this.slide.slider;
            if (_this.slides.length >= 1) {
                _this.haveData = true;
            }
        }, function (msg) {
            _this.haveData = false;
        });
    };
    HomePage.prototype.goToSubcategory = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__list_list__["a" /* ListPage */], { subcategory: category });
    };
    HomePage.prototype.goToCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__list_details_list_details__["a" /* ListDetailsPage */]);
    };
    HomePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando Servicios...'
        });
        this.loading.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><img src="assets/img/logom.png" class="img-header"></ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="goToCart()">\n        <ion-badge *ngIf="itemsInCart > 0">{{itemsInCart}}</ion-badge>\n        <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="has-header">\n  <ion-slides pager="true" autoplay="4000" loop="true" *ngIf="haveData">\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.img" class="img-slide">\n    </ion-slide>\n  </ion-slides>\n  <div class="center">\n    <h3 class="title-home">¿QUÉ SERVICIO BUSCAS?</h3>\n  </div>  \n  <ion-row wrap>\n    <ion-col col-6 col-sm-4 *ngFor="let category of categories" (click)="goToSubcategory(category)">\n      <img class="img-category" src="{{category.imagen}}">\n      <p class="title-category">{{category.nombre}}</p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/fatimapaolaboetabreu/proyectosIonic/KIEN-MANAPPGER/Manappger1/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartProvider = (function () {
    function CartProvider(storage) {
        this.storage = storage;
        this.cartObj = {};
        var item = this.storage.getObject('cartManappger');
        if (item) {
            this.cartObj.cart = item.cart;
            this.cartObj.total = item.total;
            this.cartObj.cantidad = item.cantidad;
        }
        else {
            this.cartObj.cart = [];
            this.cartObj.total = 0;
            this.cartObj.cantidad = 0;
        }
    }
    CartProvider.prototype.addToCart = function (product, quantity) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            console.log(_this.cartObj);
            if (_this.cartObj.cart.some(function (x) { return x.id === product.id; })) {
                observer.error('Este servicio ya esta incluido en el pedido');
                observer.complete();
            }
            else {
                _this.cartObj.cart.push({ "id": product.id, "categoria_id": product.categoria_id, "imagen": product.imagen, "nombre": product.nombre, "costo": product.costo, "cantidad": quantity });
                _this.cartObj.cantidad += 1;
                _this.cartObj.total += parseFloat(product.costo);
                _this.storage.setObject('cartManappger', _this.cartObj);
                observer.next(_this.cartObj);
                observer.complete();
            }
        });
    };
    CartProvider.prototype.getCartContents = function () {
        return this.cartObj.cart;
    };
    CartProvider.prototype.getCartCount = function () {
        return this.cartObj.cantidad;
    };
    CartProvider.prototype.getCartTotal = function () {
        return this.cartObj.total;
    };
    CartProvider.prototype.removeItem = function (product) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            var index = _this.cartObj.cart.findIndex(function (item) { return item.id === product.id; });
            if (index !== -1) {
                _this.cartObj.cart.splice(index, 1);
                _this.cartObj.cantidad -= 1;
                _this.cartObj.total -= parseFloat(product.costo);
                if (_this.cartObj.cantidad === 0) {
                    _this.storage.remove('cartManappger');
                }
                else {
                    _this.storage.setObject('cartManappger', _this.cartObj);
                }
                observer.next(_this.cartObj);
                observer.complete();
            }
            else {
                observer.error('Este servicio no esta incluido en el pedido');
                observer.complete();
            }
        });
    };
    CartProvider.prototype.deleteCar = function () {
        this.cartObj.cart = [];
        this.cartObj.total = 0;
        this.cartObj.cantidad = 0;
        this.storage.setObject('cartManappger', this.cartObj);
    };
    return CartProvider;
}());
CartProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_storage__["a" /* StorageProvider */]])
], CartProvider);

//# sourceMappingURL=cart.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map