(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _todo_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo/header/header.component */ "./src/app/todo/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _todo_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo/home/home.component */ "./src/app/todo/home/home.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _todo_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todo/list/list.component */ "./src/app/todo/list/list.component.ts");
/* harmony import */ var _todo_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./todo/profile/profile.component */ "./src/app/todo/profile/profile.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full'
    },
    {
        path: 'todo',
        component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_14__["TodoComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: _todo_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
            },
            {
                path: 'list',
                component: _todo_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
            },
            {
                path: 'profile',
                component: _todo_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
            }
        ]
    },
    {
        path: 'auth',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_15__["AuthComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            },
            {
                path: 'register',
                component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
            }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _todo_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _todo_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _todo_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                _todo_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_14__["TodoComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_15__["AuthComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes),
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!localStorage.getItem('token')) {
            // this.router.navigate(['home']);
            this.router.navigate(['auth']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n    background:url('http://www.wallpaperup.com/uploads/wallpapers/2012/10/21/20181/cad2441dd3252cf53f12154412286ba0.jpg');\r\n    padding:200px;\r\n    margin-top: 0%;\r\n    \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n    \n    \n<div id=\"loginbox\"  class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"show == true\">\n        {{mesg}}\n      </div>\n    <div class=\"panel panel-info\">\n  \n      <div class=\"panel-heading\">\n        <div class=\"panel-title\">\n          <h2>Sign In</h2>\n        </div>\n  \n      </div>\n  \n      <div style=\"padding-top:30px\" class=\"panel-body\">\n  \n        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n  \n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginBtn(loginForm)\" id=\"loginform\" class=\"form-horizontal\" role=\"form\">\n  \n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-user\"></i>\n            </span>\n            <input formControlName=\"email\" type=\"text\" class=\"form-control\" value=\"\" placeholder=\"email\">\n            <span *ngIf=\"this.loginForm.controls['email'].invalid\"> wrong email </span>\n          </div>\n  \n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-lock\"></i>\n            </span>\n            <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"password\">\n          </div>\n  \n  \n  \n  \n          <div style=\"margin-top:10px\" class=\"form-group\">\n            <!-- Button -->\n  \n            <div class=\"col-sm-12 controls\">\n              <button [disabled]=\"loginForm.invalid\" type=\"submit\" class=\"btn btn-success\">Login </button>\n             \n              <a routerLink=\"/auth/register\" >Sign up</a>\n            </div>\n          </div>\n  \n  \n  \n        </form>\n  \n  \n  \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.show = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginBtn = function (form) {
        var _this = this;
        this.mesg = '';
        console.log(form.valid);
        console.log(form);
        this.authService.login(form.value).subscribe(function (res) {
            // localStorage.setItem('token', res.json().userToken);
            console.log(res.json());
            _this.router.navigate(['todo']);
        }, function (err) {
            console.log(err);
            if (err.status == 403) {
                _this.show = true;
                _this.mesg = "Utilisateur introuvale , veuillez vérifier votre email";
                console.log(_this.mesg);
            }
            if (err.status == 402) {
                _this.show = true;
                _this.mesg = "Votre Mot de Passe est incorrect";
                console.log(_this.mesg);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n  <div class=\"panel panel-info\">\n\n    <div class=\"panel-heading\">\n      <div class=\"panel-title\">\n        <h2>Sign up</h2>\n      </div>\n\n    </div>\n\n    <div style=\"padding-top:30px\" class=\"panel-body\">\n\n      <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n\n   \n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerBtn(registerForm)\"  class=\"form-horizontal\" role=\"form\">\n\n        <div style=\"margin-bottom: 25px\" class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"glyphicon glyphicon-user\"></i>\n          </span>\n          <input formControlName=\"name\" type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Name\">\n         \n        </div>\n\n\n        <div style=\"margin-bottom: 25px\" class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"glyphicon glyphicon-user\"></i>\n          </span>\n          <input formControlName=\"lastname\" type=\"text\" class=\"form-control\" value=\"\" placeholder=\"Last Name\">\n         \n        </div>\n\n\n\n\n        <div style=\"margin-bottom: 25px\" class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"glyphicon glyphicon-user\"></i>\n          </span>\n          <input formControlName=\"email\" type=\"text\" class=\"form-control\" value=\"\" placeholder=\"email\">\n          <span *ngIf=\"this.registerForm.controls['email'].invalid\"> wrong email </span>\n        </div>\n\n        <div style=\"margin-bottom: 25px\" class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"glyphicon glyphicon-lock\"></i>\n          </span>\n          <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"password\">\n        </div>\n\n\n\n\n        <div style=\"margin-top:10px\" class=\"form-group\">\n          <!-- Button -->\n\n          <div class=\"col-sm-12 controls\">\n            <button [disabled]=\"registerForm.invalid\" type=\"submit\" class=\"btn btn-success\">Register </button>\n\n\n          </div>\n        </div>\n\n\n\n      </form>\n\n\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerBtn = function (form) {
        var _this = this;
        console.log(form.valid);
        console.log(form);
        // call to yr service 
        this.authService.register(form.value).subscribe(function (res) {
            console.log(res.json());
            // localStorage.setItem('token', res.json().token);
            _this.router.navigate(['todo']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"py-5 bg-dark\">\n  <div class=\"container\">\n    <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2018</p>\n  </div>\n  <!-- /.container -->\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (user) {
        return this.http.post('http://localhost:3000/auth/login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            // if (res.sta
            // return this.mesg = "Utilisateur introuvale , veillez vérifier votre email" ;
            // if (res.json().message == 'password invalid')
            // return this.mesg = "Votre mot de passe est incorecte" ;
            localStorage.setItem('id', res.json().user._id);
            localStorage.setItem('token', res.json().userToken);
            return res;
        }));
    };
    AuthService.prototype.register = function (user) {
        // return this.http.post('http://localhost:3000/auth/register', user);
        return this.http.post('http://localhost:3000/auth/register', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            localStorage.setItem('token', res.json().userToken);
            localStorage.setItem('id', res.json().user._id);
            return res;
        }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/todo.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/todo.service.ts ***!
  \*************************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.addTodo = function (user, id) {
        return this.http.post('http://localhost:3000/todo/insert/' + id, user);
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUserById = function (id) {
        return this.http.get('http://localhost:3000/user/user/' + id);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get('http://localhost:3000/user/all');
    };
    UserService.prototype.update = function (id, user) {
        return this.http.post('http://localhost:3000/user/update/' + id, user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/todo/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/todo/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/todo/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">Home</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n       \n        \n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/todo/list\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">List</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/todo/profile\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">My profile</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"logout()\">Logout</a>\n          </li>\n\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/todo/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/todo/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.logout = function () {
        localStorage.setItem('token', '');
        localStorage.setItem('id', '');
        this.router.navigate(['auth']);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/todo/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/todo/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/todo/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/todo/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/todo/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>welcome {{fullName}}</h1>\n"

/***/ }),

/***/ "./src/app/todo/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.fullName = '';
    }
    HomeComponent.prototype.getName = function () {
        var _this = this;
        var id = localStorage.getItem('id');
        this.userService.getUserById(id).subscribe(function (res) {
            console.log(res.json());
            _this.fullName = res.json().name + ' ' + res.json().lastname;
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getName();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/todo/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/todo/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/todo/list/list.component.css":
/*!**********************************************!*\
  !*** ./src/app/todo/list/list.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/list/list.component.html":
/*!***********************************************!*\
  !*** ./src/app/todo/list/list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Last Name</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let user of users;\">\n    <tr>\n      <th scope=\"row\">{{user.name}}</th>\n      <td>{{user.lastname}} {{user._id}}</td>\n      <td>{{user.email}}</td>\n      <td>\n        <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"openModal(user._id)\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n          info\n        </button>\n      </td>\n\n    </tr>\n\n  </tbody>\n</table>\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Todo List</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table\">\n          \n          <tbody *ngFor=\"let todo of todos;\">\n            <tr>\n              <th scope=\"row\">{{todo.description}}</th>\n              <td> {{ todo.date | date}}</td>\n              <td>{{todo.done}}</td>\n            \n            </tr>\n        \n          </tbody>\n        </table>\n\t\t\n\t\t\n\t\t\n\t\n\t\t<div  *ngIf=\"show == true\">\n        <form [formGroup]=\"todoForm\" (ngSubmit)=\"todoAddBtn(todoForm)\"  class=\"form-horizontal\" role=\"form\">\n\n        <div style=\"margin-bottom: 25px\" class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"glyphicon glyphicon-user\"></i>\n          </span>\n         \n          <textarea class=\"form-control\" formControlName=\"description\" placeholder=\"Description\" rows=\"2\"></textarea>\n        </div>\n\n\n        <div style=\"margin-bottom: 25px\" class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"glyphicon glyphicon-user\"></i>\n          </span>\n          <input formControlName=\"date\" type=\"date\" class=\"form-control\" >\n         \n        </div>\n\n\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" formControlName=\"done\">\n          <label class=\"form-check-label\" for=\"defaultCheck1\">\n            Done\n          </label>\n        </div>\n\n\n\n\n        <div style=\"margin-top:10px\" class=\"form-group\">\n        \n\n          <div class=\"col-sm-12 controls\">\n            <button [disabled]=\"todoForm.invalid\" type=\"submit\" class=\"btn btn-success\">Save </button>\n\n\n          </div>\n        </div>\n\n\n\n      </form>\n\n    </div>  \n  \n\n\n</div>\n<div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)='close()'>Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)='displayform()'>Add</button>\n      </div>\n\n\n    \n  </div>\n  </div>\n    </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/todo/list/list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/list/list.component.ts ***!
  \*********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/todo.service */ "./src/app/shared/services/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(userService, todoService) {
        // this.registerForm = new FormGroup({
        //   name: new FormControl('', Validators.required),
        //   lastName: new FormControl('', Validators.required),
        //   email: new FormControl('', Validators.email),
        //   password: new FormControl('', Validators.required)
        // })
        this.userService = userService;
        this.todoService = todoService;
        this.users = [];
        this.todos = [];
        this.id_user = '';
        this.show = false;
        this.todoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            done: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ListComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (res) {
            console.log(res.json());
            _this.users = res.json();
        });
    };
    ListComponent.prototype.todoAddBtn = function (form) {
        this.todoService.addTodo(form.value, this.id_user).subscribe(function (res) {
            console.log(res.json());
        });
    };
    ListComponent.prototype.displayform = function () {
        this.show = true;
    };
    ListComponent.prototype.close = function () {
        this.show = false;
        this.id_user = '';
    };
    ListComponent.prototype.openModal = function (id) {
        var _this = this;
        this.id_user = id;
        this.userService.getUserById(id).subscribe(function (res) {
            console.log(res.json().todos);
            _this.todos = res.json().todos;
        });
    };
    ListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/todo/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/todo/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _shared_services_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/todo/profile/profile.component.css":
/*!****************************************************!*\
  !*** ./src/app/todo/profile/profile.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/todo/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\n\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">My Profile</h5>\n    <p class=\"card-text\">{{myname}}</p>\n    <p class=\"card-text\">{{mylastName}}</p>\n    <p class=\"card-text\">{{myemail}}</p>\n\n    <a routerLink=\"/todo/list\" class=\"btn btn-primary\">back to list</a> \n    <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n      Update\n    </button>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" >\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update My Profile</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <form class=\"form-horizontal\" [formGroup]=\"updateProfileForm\" (ngSubmit)=\"updateMyProfileBtn(updateProfileForm)\" role=\"form\">\n          \n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-user\"></i>\n            </span>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n\n          </div>\n\n\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-user\"></i>\n            </span>\n            <input type=\"text\" class=\"form-control\" formControlName=\"lastname\">\n\n          </div>\n\n\n\n\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-user\"></i>\n            </span>\n            <input type=\"text\" formControlName=\"email\" class=\"form-control\">\n            <span *ngIf=\"this.updateProfileForm.controls['email'].invalid\"> wrong email </span>\n          </div>\n\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-lock\"></i>\n            </span>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\">\n          </div>\n\n          \n          <div class=\"modal-footer\">\n            <button type=\"reset\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"submit\" [disabled]=\"updateProfileForm.invalid\" class=\"btn btn-primary\" (click)= \"closeModal()\">save changes</button>\n          </div>\n        </form>\n\n\n\n\n\n      </div>\n\n\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todo/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/todo/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService) {
        this.userService = userService;
        this.myname = '';
        this.mylastName = '';
        this.myemail = '';
        this.mypassword = '';
        this.updateProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ProfileComponent.prototype.updateMyProfileBtn = function (form) {
        var _this = this;
        console.log('sqdqsd');
        var id = localStorage.getItem('id');
        this.userService.update(id, form.value).subscribe(function (res) {
            console.log(res.json());
            _this.getMyProfile();
        });
    };
    ProfileComponent.prototype.getMyProfile = function () {
        var _this = this;
        var id = localStorage.getItem('id');
        this.userService.getUserById(id).subscribe(function (res) {
            console.log(res.json());
            _this.myname = res.json().name;
            _this.mylastName = res.json().lastname;
            _this.myemail = res.json().email;
            _this.mypassword = res.json().password;
            // this.updateProfileForm.setValue(res.json());
            _this.updateProfileForm.controls['name'].setValue(res.json().name);
            _this.updateProfileForm.controls['lastname'].setValue(res.json().lastname);
            _this.updateProfileForm.controls['email'].setValue(res.json().email);
            _this.updateProfileForm.controls['password'].setValue(res.json().password);
        });
    };
    // closeModal() {
    //   this.modalUpdate.nativeElement.hide();
    // }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getMyProfile();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('exampleModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileComponent.prototype, "modalUpdate", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/todo/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/todo/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n\n  <router-outlet></router-outlet>\n\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dell\Desktop\todoFullApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map