webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master_page_master_page_component__ = __webpack_require__("../../../../../src/app/master-page/master-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__usergroup_list_usergroup_list_component__ = __webpack_require__("../../../../../src/app/usergroup-list/usergroup-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__usergroup_usergroup_component__ = __webpack_require__("../../../../../src/app/usergroup/usergroup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_main_page_main_component__ = __webpack_require__("../../../../../src/app/page-main/page-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__company_list_company_list_component__ = __webpack_require__("../../../../../src/app/company-list/company-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__workstation_list_workstation_list_component__ = __webpack_require__("../../../../../src/app/workstation-list/workstation-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__workstation_workstation_component__ = __webpack_require__("../../../../../src/app/workstation/workstation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__outlet_list_outlet_list_component__ = __webpack_require__("../../../../../src/app/outlet-list/outlet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__outlet_outlet_component__ = __webpack_require__("../../../../../src/app/outlet/outlet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shift_group_shift_group_component__ = __webpack_require__("../../../../../src/app/shift-group/shift-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__discount_list_discount_list_component__ = __webpack_require__("../../../../../src/app/discount-list/discount-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__discount_discount_component__ = __webpack_require__("../../../../../src/app/discount/discount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shift_list_shift_list_component__ = __webpack_require__("../../../../../src/app/shift-list/shift-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__master_page_master_page_component__["a" /* MasterPageComponent */],
        children: [{
                path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
            }]
    },
    {
        path: 'Pmain',
        component: __WEBPACK_IMPORTED_MODULE_10__page_main_page_main_component__["a" /* PageMainComponent */],
        children: [{
                path: 'product-list', component: __WEBPACK_IMPORTED_MODULE_4__product_list_product_list_component__["a" /* ProductListComponent */]
            }, {
                path: 'product', component: __WEBPACK_IMPORTED_MODULE_5__product_product_component__["a" /* ProductComponent */]
            }, {
                path: 'user-list', component: __WEBPACK_IMPORTED_MODULE_6__user_list_user_list_component__["a" /* UserListComponent */]
            }, {
                path: 'user', component: __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */]
            }, {
                path: 'usergroup-list', component: __WEBPACK_IMPORTED_MODULE_8__usergroup_list_usergroup_list_component__["a" /* UsergroupListComponent */]
            }, {
                path: 'usergroup', component: __WEBPACK_IMPORTED_MODULE_9__usergroup_usergroup_component__["a" /* UsergroupComponent */]
            }, {
                path: 'company-list', component: __WEBPACK_IMPORTED_MODULE_11__company_list_company_list_component__["a" /* CompanyListComponent */]
            }, {
                path: 'company', component: __WEBPACK_IMPORTED_MODULE_12__company_company_component__["a" /* CompanyComponent */]
            }, {
                path: 'workstation-list', component: __WEBPACK_IMPORTED_MODULE_13__workstation_list_workstation_list_component__["a" /* WorkstationListComponent */]
            }, {
                path: 'workstation', component: __WEBPACK_IMPORTED_MODULE_14__workstation_workstation_component__["a" /* WorkstationComponent */]
            }, {
                path: 'outlet-list', component: __WEBPACK_IMPORTED_MODULE_15__outlet_list_outlet_list_component__["a" /* OutletListComponent */]
            }, {
                path: 'outlet', component: __WEBPACK_IMPORTED_MODULE_16__outlet_outlet_component__["a" /* OutletComponent */]
            }, {
                path: 'shift-group', component: __WEBPACK_IMPORTED_MODULE_17__shift_group_shift_group_component__["a" /* ShiftGroupComponent */]
            }, {
                path: 'discount-list', component: __WEBPACK_IMPORTED_MODULE_18__discount_list_discount_list_component__["a" /* DiscountListComponent */]
            }, {
                path: 'discount', component: __WEBPACK_IMPORTED_MODULE_19__discount_discount_component__["a" /* DiscountComponent */]
            }, {
                path: 'shift-list', component: __WEBPACK_IMPORTED_MODULE_20__shift_list_shift_list_component__["a" /* ShiftListComponent */]
            }]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://blog.angular.io//\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__master_page_master_page_component__ = __webpack_require__("../../../../../src/app/master-page/master-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__master_pmain_master_pmain_component__ = __webpack_require__("../../../../../src/app/master-pmain/master-pmain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__usergroup_list_usergroup_list_component__ = __webpack_require__("../../../../../src/app/usergroup-list/usergroup-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__usergroup_usergroup_component__ = __webpack_require__("../../../../../src/app/usergroup/usergroup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__page_main_page_main_component__ = __webpack_require__("../../../../../src/app/page-main/page-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__company_list_company_list_component__ = __webpack_require__("../../../../../src/app/company-list/company-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__workstation_list_workstation_list_component__ = __webpack_require__("../../../../../src/app/workstation-list/workstation-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__workstation_workstation_component__ = __webpack_require__("../../../../../src/app/workstation/workstation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__outlet_list_outlet_list_component__ = __webpack_require__("../../../../../src/app/outlet-list/outlet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__outlet_outlet_component__ = __webpack_require__("../../../../../src/app/outlet/outlet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shift_group_shift_group_component__ = __webpack_require__("../../../../../src/app/shift-group/shift-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__discount_list_discount_list_component__ = __webpack_require__("../../../../../src/app/discount-list/discount-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__discount_discount_component__ = __webpack_require__("../../../../../src/app/discount/discount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shift_shift_component__ = __webpack_require__("../../../../../src/app/shift/shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shift_list_shift_list_component__ = __webpack_require__("../../../../../src/app/shift-list/shift-list.component.ts");
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__master_page_master_page_component__["a" /* MasterPageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__master_pmain_master_pmain_component__["a" /* MasterPmainComponent */],
            __WEBPACK_IMPORTED_MODULE_13__product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_15__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_17__usergroup_list_usergroup_list_component__["a" /* UsergroupListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__usergroup_usergroup_component__["a" /* UsergroupComponent */],
            __WEBPACK_IMPORTED_MODULE_19__page_main_page_main_component__["a" /* PageMainComponent */],
            __WEBPACK_IMPORTED_MODULE_20__company_list_company_list_component__["a" /* CompanyListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__company_company_component__["a" /* CompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_22__workstation_list_workstation_list_component__["a" /* WorkstationListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__workstation_workstation_component__["a" /* WorkstationComponent */],
            __WEBPACK_IMPORTED_MODULE_24__outlet_list_outlet_list_component__["a" /* OutletListComponent */],
            __WEBPACK_IMPORTED_MODULE_25__outlet_outlet_component__["a" /* OutletComponent */],
            __WEBPACK_IMPORTED_MODULE_26__shift_group_shift_group_component__["a" /* ShiftGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_27__discount_list_discount_list_component__["a" /* DiscountListComponent */],
            __WEBPACK_IMPORTED_MODULE_28__discount_discount_component__["a" /* DiscountComponent */],
            __WEBPACK_IMPORTED_MODULE_29__shift_shift_component__["a" /* ShiftComponent */],
            __WEBPACK_IMPORTED_MODULE_30__shift_list_shift_list_component__["a" /* ShiftListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClient */]]
                }
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/company-list/company-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company-list/company-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>Company / Search</p>\n    <div class=\"row\">\n      <a class=\"waves-effect waves-light btn green darken-4\" (click)=\"onAddbtnClick()\"><i class=\"material-icons center\">add</i></a>\n      <a class=\"waves-effect waves-light btn yellow accent-4\"><i class=\"material-icons center\">edit</i></a>\n      <a class=\"waves-effect waves-light btn deep-orange darken-4\"><i class=\"material-icons center\">delete</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"nav-wrapper teal darken-1\">\n        <form>\n          <div class=\"input-field \">\n            <input id=\"search\" name=\"search\" type=\"search\"  required>\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n            <i class=\"material-icons\">search</i>\n          </div>\n\n        </form>\n      </div>\n      <!-- <div class=\"input-field col s7 m9 l10 xl10\">\n        <label for=\"user_search\">Search</label>\n        <input id=\"user_search\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s2 m2 l2 xl2\">\n        <a class=\"waves-effect waves-light btn\" align=\"center\">search</a>\n      </div> -->\n    </div>\n\n    <div class=\"row\">\n      <table class=\"highlight\">\n        <thead>\n          <tr>\n            <th>Company Code</th>\n            <th>Company Thai Name</th>\n            <th>Company English Name</th>\n            <th>Active</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>GFW</td>\n            <td>BOSTON PARK Co., LTD. </td>\n            <td>BOSTON PARK Co., LTD. </td>\n            <td><i class=\"material-icons\">check_box</i></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <ul class=\"pagination tcenter\">\n      <li class=\"waves-effect\" *ngFor=\"let p of paging;let i = index;\" [ngClass]=\"{'active':i==numPage}\" (click)=\"gotoPage(i);\"><a>{{p}}</a></li>\n    </ul>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/company-list/company-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyListComponent = (function () {
    function CompanyListComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        this.tranService.use(this.currentLang);
    };
    CompanyListComponent.prototype.onAddbtnClick = function () {
        this.router.navigate(['Pmain', 'company']);
    };
    return CompanyListComponent;
}());
CompanyListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-company-list',
        template: __webpack_require__("../../../../../src/app/company-list/company-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company-list/company-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CompanyListComponent);

var _a, _b;
//# sourceMappingURL=company-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margTop{\r\n    margin-top: 4%;\r\n}\r\n.p{\r\n   /* border-width:5px;   */\r\n    border-style:ridge;\r\n}\r\n.text-2{\r\n    font-weight: bold;\r\n    margin-bottom: 7px;\r\n    margin-top: 7px;\r\n    margin-right: 2px;\r\n    margin-left: 2px;\r\n    font-size: 18px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>Company / Add</p>\n    <div class=\"row\">\n      <a class=\"btn  light-blue darken-4\"><i class=\"material-icons\">save</i></a>\n      <a class=\"btn red darken-4\"><i class=\"material-icons\">delete</i></a>\n      <a class=\"btn grey darken-1\"><i (click)=\"onCancelbtnClick();\" class=\"material-icons\">cancel</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"comp_code\">Company Code</label>\n        <input id=\"comp_code\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"col s6 l6 xl6  margTop\">\n        <input type=\"checkbox\" class=\"filled-in\" id=\"chkActive\" />\n        <label for=\"chkActive\">Active</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"comp_th_name\">Company Thai Name</label>\n        <input id=\"comp_th_name\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"comp_en_name\">Company English Code</label>\n        <input id=\"comp_en_name\" type=\"text\" class=\"validate\">\n      </div>\n    </div>\n\n    <!-- Start Tab  -->\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <ul class=\"tabs light-blue darken-1\">\n          <li class=\"tab col s3\"><a class=\"active\"  href=\"#test1\">General</a></li>\n          <li class=\"tab col s3\"><a href=\"#test2\">Hotel</a></li>\n          <li class=\"tab col s3\"><a href=\"#test3\">Interface</a></li>\n          <li class=\"tab col s3\"><a href=\"#test4\">Generate Tax/AR</a></li>\n        </ul>\n      </div>\n      <!-- Tab General  -->\n      <div id=\"test1\" class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s3 l3 xl3\">\n            <label for=\"officer_number\">Officer Number</label>\n            <input id=\"officer_number\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s3 l3 xl3\">\n            <label for=\"moo\">Moo</label>\n            <input id=\"moo\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s3 l3 xl3\">\n            <label for=\"soi\">Soi</label>\n            <input id=\"soi\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s3 l3 xl3\">\n            <label for=\"road\">Road</label>\n            <input id=\"road\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s4 l4 xl4\">\n            <label for=\"district\">District</label>\n            <input id=\"district\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s4 l4 xl4\">\n            <label for=\"border\">Border</label>\n            <input id=\"border\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s4 l4 xl4\">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose Province</option>\n          <option value=\"1\">Province 1</option>\n          <option value=\"2\">Province 2</option>\n          <option value=\"3\">Province 3</option>\n         </select>\n            <label>Province</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s4 l4 xl4\">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose Country</option>\n          <option value=\"1\">Country 1</option>\n          <option value=\"2\">Country 2</option>\n          <option value=\"3\">Country 3</option>\n         </select>\n            <label>Country</label>\n          </div>\n          <div class=\"input-field col s4 l4 xl4\">\n            <label for=\"PostalCode\">Postal Code</label>\n            <input id=\"PostalCode\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s4 l4 xl4\">\n            <label for=\"Telephone\">Telephone</label>\n            <input id=\"Telephone\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s3 l3 xl3\">\n            <label for=\"Fax\">Fax Number</label>\n            <input id=\"Fax\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s3 l3 xl3\">\n            <label for=\"Tax\">Tax ID</label>\n            <input id=\"Tax\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"col s2 l2 xl2  margTop\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"chkHeadofficer\" />\n            <label for=\"chkHeadofficer\">Head Officer</label>\n          </div>\n          <div class=\"input-field col s4 l4 xl4\">\n            <label for=\"Branch\">Branch</label>\n            <input id=\"Branch\" type=\"text\" class=\"validate\">\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12 l12 xl12\">\n            <textarea id=\"textarea1\" class=\"materialize-textarea\"></textarea>\n            <label for=\"textarea1\">Address Bill</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12 l12 xl12\">\n            <textarea id=\"textarea2\" class=\"materialize-textarea\"></textarea>\n            <label for=\"textarea2\">English Address Bill</label>\n          </div>\n        </div>\n      </div>\n      <!-- Tab Hotel -->\n      <div id=\"test2\" class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"thHotelname\">Thai Hotel Name</label>\n            <input id=\"thHotelname\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"enHotelname\">English Hotel Name</label>\n            <input id=\"enHotelname\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"thRptHead\">Thai Report Header</label>\n            <input id=\"thRptHead\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"enRptHead\">English Report Header</label>\n            <input id=\"enRptHead\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"col s6 l6 xl6 offset-s3 offset-l3 offset-xl3 p\">\n          <div class=\"card\">\n            <div class=\"card-image\">\n              <img src=\"./assets/images/company.png\">\n              <span class=\"card-title\">Card Title</span>\n              <div class=\"file-field input-field\">\n                <div class=\"btn\">\n                  <span>Upload</span>\n                  <input type=\"file\" name=\"avatar\" multiple><i class=\"material-icons\">file_upload</i>\n                </div>\n                <div class=\"file-path-wrapper\">\n                  <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload File Pictuer\">\n                </div>\n              </div>\n              <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">delete</i></a>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"row container col col s12 m4 offset-m4\">\n          <div class=\"card\">\n            <div class=\"card-image\">\n              <img src=\"./assets/images/company.png\">\n              <span class=\"card-title\">Card Title</span>\n              <div class=\"file-field input-field\">\n                <div class=\"btn\">\n                  <input type=\"file\" name=\"avatar\" multiple><i class=\"material-icons\">file_upload</i>\n                </div>\n                <div class=\"file-path-wrapper\">\n                  <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload File Pictuer\">\n                </div>\n              </div>\n              <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">delete</i></a>\n            </div>\n          </div>\n        </div> -->\n\n      </div>\n      <!-- Tab Interface -->\n      <div id=\"test3\" class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s11 l11 xl11\">\n            <label for=\"toendP\">To End Point</label>\n            <input id=\"toendP\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s11 l11 xl11\">\n            <label for=\"serverTimeout\">Server Timeout</label>\n            <input id=\"serverTimeout\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s3 l3 xl3  margTop\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"chkusehttp\" />\n            <label for=\"chkusehttp\">Use Https?</label>\n          </div>\n\n\n          <form action=\"#\">\n            <label for=\"Type\">Type</label>\n            <p>\n              <input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"Room\" />\n              <label for=\"Room\">Room</label>\n              <input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"Folio\" />\n              <label for=\"Folio\">Folio</label>\n            </p>\n          </form>\n\n        </div>\n      </div>\n      <!-- Tab Generate Tax/AR -->\n      <div id=\"test4\" class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"col s6 l6 xl6\">\n            <form action=\"#\">\n              <label for=\"Type\">Generate Tax/AR</label>\n              <p>\n                <input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"Workstation\" />\n                <label for=\"Workstation\">Workstation</label>\n                <input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"Outlet\" />\n                <label for=\"Outlet\">Outlet</label>\n              </p>\n            </form>\n          </div>\n          <div class=\"col s6 l6 xl6\">\n            <form action=\"#\">\n              <label for=\"Type\">Generate #RD</label>\n              <p>\n                <input class=\"with-gap\" name=\"group2\" type=\"radio\" id=\"WorkstationPay\" />\n                <label for=\"WorkstationPay\">Workstation Payment</label>\n                <input class=\"with-gap\" name=\"group2\" type=\"radio\" id=\"OutletRD\" />\n                <label for=\"OutletRD\">Outlet</label>\n              </p>\n            </form>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col s6 l6 xl6 p\">\n            <span class=\"left text-2\">Document Type</span>\n            <br>\n            <div class=\"row\">\n              <div class=\"col s12\">\n                <ul class=\"tabs tabs-fixed-width  grey lighten-1\">\n                  <li class=\"tab col s3\"><a class=\"active\" href=\"#tax_abb\">Tax ABB</a></li>\n                  <li class=\"tab col s3\"><a href=\"#tab_ar\">AR</a></li>\n                </ul>\n              </div>\n              <div id=\"tax_abb\" class=\"col s12\">\n                <div class=\"col s12 l12 xl12\">\n                  <span>Set Foemat Code</span>\n                  <div class=\"row\">\n                    <div class=\"input-field col s9 l9 xl9\">\n                      <label for=\"str\"></label>\n                      <input id=\"str\" type=\"text\" class=\"validate\">\n                    </div>\n                    <div class=\"col s3 l3 xl3  margTop\">\n                      <input type=\"checkbox\" class=\"filled-in\" id=\"chkSymbol1\" />\n                      <label for=\"chkSymbol1\">-</label>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"input-field col s9 l9 xl9\">\n                      <select materialize=\"material_select\"> \n                  <option value=\"\" disabled selected>Choose</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                </select>\n                      <label></label>\n                    </div>\n                    <div class=\"col s3 l3 xl3  margTop\">\n                      <input type=\"checkbox\" class=\"filled-in\" id=\"chkSymbol2\" />\n                      <label for=\"chkSymbol2\">-</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s9 l9 xl9\">\n                    <label for=\"str2\"></label>\n                    <input id=\"str2\" type=\"text\" class=\"validate\">\n                  </div>\n                </div>\n                <p class=\"center\">Format xx-xxx-xx</p>\n              </div>\n              <div id=\"tab_ar\" class=\"col s12\">\n                <div class=\"col s12 l12 xl12\">\n                  <span>Set Foemat Code</span>\n                  <div class=\"row\">\n                    <div class=\"input-field col s9 l9 xl9\">\n                      <label for=\"str\"></label>\n                      <input id=\"str\" type=\"text\" class=\"validate\">\n                    </div>\n                    <div class=\"col s3 l3 xl3  margTop\">\n                      <input type=\"checkbox\" class=\"filled-in\" id=\"chkSymbolar\" />\n                      <label for=\"chkSymbolar\">-</label>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"input-field col s9 l9 xl9\">\n                      <select materialize=\"material_select\"> \n                  <option value=\"\" disabled selected>Choose</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                </select>\n                      <label></label>\n                    </div>\n                    <div class=\"col s3 l3 xl3  margTop\">\n                      <input type=\"checkbox\" class=\"filled-in\" id=\"chkSymbol_ar2\" />\n                      <label for=\"chkSymbol_ar2\">-</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s9 l9 xl9\">\n                    <label for=\"str2\"></label>\n                    <input id=\"str2\" type=\"text\" class=\"validate\">\n                  </div>\n                </div>\n                <p class=\"center\">Format xx-xxx-xx</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col s6 l6 xl6 p\">\n            <span>Set Start At</span>\n            <table>\n              <thead>\n                <tr>\n                  <th>WorkStation Code</th>\n                  <th>WorkStaion Name</th>\n                  <th class=\"center\">Start At</th>\n                </tr>\n              </thead>\n\n              <tbody>\n                <tr>\n                  <td>01</td>\n                  <td>Grand Cafe Cashier</td>\n                  <td>\n                    <label for=\"txt\"></label>\n                    <input id=\"txt\" type=\"text\" class=\"validate\">\n                  </td>\n                </tr>\n                <tr>\n                  <td>02</td>\n                  <td>Room Service</td>\n                  <td>\n                    <label for=\"txt\"></label>\n                    <input id=\"txt\" type=\"text\" class=\"validate\">\n                  </td>\n                </tr>\n                <tr>\n                  <td>03</td>\n                  <td>Pool Bar</td>\n                  <td>\n                    <label for=\"txt\"></label>\n                    <input id=\"txt\" type=\"text\" class=\"validate\">\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <!-- <div class=\"row\">\n            <div class=\"row\">\n              <div class=\"input-field col s9 l9 xl9\">\n                <label for=\"str2\"></label>\n                <input id=\"str2\" type=\"text\" class=\"validate\">\n              </div>\n            </div>\n          </div> -->\n\n        </div>\n      </div>\n    </div>\n    <!-- End Tab  -->\n\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyComponent = (function () {
    function CompanyComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.tranService.use(this.currentLang);
        $(document).ready(function () {
            $('ul.tabs').tabs();
        });
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
        this.tranService.use(this.currentLang);
    };
    CompanyComponent.prototype.onCancelbtnClick = function () {
        this.router.navigate(['Pmain', 'company-list']);
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-company',
        template: __webpack_require__("../../../../../src/app/company/company.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CompanyComponent);

var _a, _b;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/discount-list/discount-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/discount-list/discount-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>Discount / Search</p>\n    <div class=\"row\">\n      <a class=\"waves-effect waves-light btn green darken-4\" routerLink=\"/Pmain/discount\"><i class=\"material-icons center\">add</i></a>\n      <a class=\"waves-effect waves-light btn yellow accent-4\"><i class=\"material-icons center\">edit</i></a>\n      <a class=\"waves-effect waves-light btn deep-orange darken-4\"><i class=\"material-icons center\">delete</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"nav-wrapper teal darken-1\">\n        <form>\n          <div class=\"input-field \">\n            <input id=\"search\" name=\"search\" type=\"search\" required>\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n            <i class=\"material-icons\">search</i>\n          </div>\n\n        </form>\n      </div>\n      <!-- <div class=\"input-field col s7 m9 l10 xl10\">\n        <label for=\"user_search\">Search</label>\n        <input id=\"user_search\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s2 m2 l2 xl2\">\n        <a class=\"waves-effect waves-light btn\" align=\"center\">search</a>\n      </div> -->\n    </div>\n\n    <div class=\"row\">\n      <table class=\"highlight\">\n        <thead>\n          <tr>\n            <th>Discount Code</th>\n            <th>Discount Name</th>\n            <th>Discount Description</th>\n            <th>Active</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>01</td>\n            <td>Disc Food%</td>\n            <td>Disc Food%</td>\n            <td><i class=\"material-icons\">check_box</i></td>\n          </tr>\n          <tr>\n            <td>02</td>\n            <td>Disc Bev%</td>\n            <td>Disc Bev%</td>\n            <td><i class=\"material-icons\">check_box</i></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ul class=\"pagination tcenter\">\n      <li class=\"waves-effect\" *ngFor=\"let p of paging;let i = index;\" [ngClass]=\"{'active':i==numPage}\" (click)=\"gotoPage(i);\"><a>{{p}}</a></li>\n    </ul>\n\n    <!-- <div class=\"fixed-action-btn\">\n      <a class=\"btn-floating btn right green darken-4\" (click)=\"onAddbtnClick()\"><i class=\"material-icons\">add</i></a>\n    </div> -->\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/discount-list/discount-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiscountListComponent = (function () {
    function DiscountListComponent() {
    }
    DiscountListComponent.prototype.ngOnInit = function () {
    };
    return DiscountListComponent;
}());
DiscountListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-discount-list',
        template: __webpack_require__("../../../../../src/app/discount-list/discount-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/discount-list/discount-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DiscountListComponent);

//# sourceMappingURL=discount-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/discount/discount.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margTop{\r\n    margin-top: 4%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/discount/discount.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>Discount / Add</p>\n    <div class=\"row\">\n      <a class=\"btn  light-blue darken-4\"><i class=\"material-icons\">save</i></a>\n      <a class=\"btn red darken-4\"><i class=\"material-icons\">delete</i></a>\n      <a class=\"btn grey darken-1\"><i  routerLink=\"/Pmain/discount-list\" class=\"material-icons\">cancel</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s4 l4 xl4\">\n        <label for=\"ipu_code\">Ipu Code</label>\n        <input id=\"ipu_code\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s4 l4 xl4\">\n        <label for=\"disc_code\">Discount Code</label>\n        <input id=\"disc_code\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"col s4 l4 xl4 margTop\">\n        <input type=\"checkbox\" class=\"filled-in\" id=\"chkActive\" checked=\"checked\" />\n        <label for=\"chkActive\">Active</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"disc_name\">Discount Name</label>\n        <input id=\"disc_name\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"disc_desc\">Discount Description</label>\n        <input id=\"disc_desc\" type=\"text\" class=\"validate\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <ul class=\"tabs tabs-fixed-width  light-blue darken-1\">\n          <li class=\"tab col s3\"><a class=\"active\" href=\"#test1\">General</a></li>\n          <li class=\"tab col s3\"><a href=\"#test2\">Subgroup</a></li>\n        </ul>\n      </div>\n      <!-- General  -->\n      <div id=\"test1\" class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <select materialize=\"material_select\"> \n                  <!-- <option value=\"\" disabled selected>Choose Product SubGroup</option> -->\n                  <option value=\"01\">Discount</option>\n                </select>\n            <label>Product SubGroup</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"discount_name1\">Discount Name1</label>\n            <input id=\"discount_name1\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s3 l3 xl3\">\n            <select materialize=\"material_select\"> \n                  <option value=\"\" disabled selected>Choose Calculate</option>\n                  <option value=\"1\">Amount</option>\n                  <option value=\"2\">Percent</option>\n                  \n                </select>\n            <label>Default SaleType</label>\n          </div>\n          <div class=\"input-field col s3 l3 xl3\">\n            <label for=\"calculate\"></label>\n            <input id=\"calculate\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"discount_name2\">Discount Name2</label>\n            <input id=\"discount_name2\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col s6 l6 xl6\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"chk_taxinclusive\" checked=\"checked\" />\n            <label for=\"chk_taxinclusive\">Tax Inclusive</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"discount_name3\">Discount Name3</label>\n            <input id=\"discount_name3\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <select materialize=\"material_select\"> \n                  <!-- <option value=\"\" disabled selected>Choose Order Type</option> -->\n                  <option value=\"01\">Fix</option>\n                  <option value=\"02\">Discription</option>\n                  <option value=\"03\">Value</option>\n                  <option value=\"04\">Customer</option>\n                </select>\n            <label>Order Type</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"discount_name4\">Discount Name4</label>\n            <input id=\"discount_name4\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col s6 l6 xl6\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"chkFmember\" checked=\"checked\" />\n            <label for=\"chkFmember\">For Member</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"discount_name5\">Discount Name5</label>\n            <input id=\"discount_name5\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col s4 l4 xl4\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"chk_cal_nonitem\" checked=\"checked\" />\n            <label for=\"chk_cal_nonitem\">Calculate with other NonItem</label>\n          </div>\n        </div>\n      </div>\n      <div id=\"test2\" class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"col s6 l6 xl6 p\">\n            <div class=\"card\">\n              <div class=\"card-image\">\n                <img src=\"./assets/images/outlet.jpg\">\n                <span class=\"card-title\">Card Title</span>\n                <div class=\"file-field input-field\">\n                  <div class=\"btn\">\n                    <span>Upload</span>\n                    <input type=\"file\" name=\"avatar\" multiple><i class=\"material-icons\">file_upload</i>\n                  </div>\n                  <div class=\"file-path-wrapper\">\n                    <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload File Pictuer\">\n                  </div>\n                </div>\n                <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">delete</i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col s6 l6 xl6 p\">\n            \n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/discount/discount.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiscountComponent = (function () {
    function DiscountComponent() {
    }
    DiscountComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
        $(document).ready(function () {
            $('ul.tabs').tabs();
        });
        $(document).ready(function () {
            $('select').material_select();
        });
    };
    return DiscountComponent;
}());
DiscountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-discount',
        template: __webpack_require__("../../../../../src/app/discount/discount.component.html"),
        styles: [__webpack_require__("../../../../../src/app/discount/discount.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DiscountComponent);

//# sourceMappingURL=discount.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Start Form Login 1  */\r\n.container {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n.marTop{\r\n    margin-top: 14%;\r\n}\r\n.centered-form {\r\n    margin-top: 140px;\r\n}\r\n.panel {\r\n    margin-bottom: 20px;\r\n    background-color: #fff;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\r\n}\r\n.panel-default {\r\n     border-color: #ddd; \r\n}\r\n.panel-heading {\r\n    padding: 10px 15px;\r\n    border-bottom: 1px solid transparent; \r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0; \r\n     border-radius: 0 !important;  \r\n}\r\n.head-register {\r\n    background-color:#039be5   !important;\r\n    color: white !important;\r\n    text-align: center;\r\n}\r\n.panel-title {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%; \r\n    height: 10%;\r\n    font-size: 16px;\r\n    color: inherit;\r\n}\r\n.panel-body {\r\n    padding: 15px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 15px;\r\n}\r\n.row {\r\n    margin-right: 25%;\r\n    margin-left: 25%;\r\n}\r\n.centered-form {\r\n    margin-top: 140px;\r\n}\r\n.btn-default {\r\n    width: 100% !important;  \r\n    height: 45px;\r\n    background-color: #039be5;\r\n    color: white;\r\n}\r\n.btn {\r\n    border-radius: 0 !important;\r\n}\r\n.pull-right {\r\n    float: right !important;\r\n}\r\n.input-lg {\r\n    font-size: 15px !important;\r\n    border-radius: 5px !important;\r\n}\r\n.form-control {\r\n    border-radius: 0;\r\n    line-height: 30px;\r\n    width: 100%;\r\n    line-height: 40px;\r\n    height: 40px;\r\n    padding: 0 12px;\r\n    vertical-align: middle;\r\n}\r\n/* ENG Form Login 1  */\r\n/*  From Login 2 */\r\n\r\n\r\nbody, html {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\nbackground: rgb(185,210,224); /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\nbackground: radial-gradient(ellipse at center,  rgba(185,210,224,1) 0%,rgba(187,214,228,1) 0%,rgba(186,211,225,1) 15%,rgba(186,211,225,1) 38%,rgba(169,199,215,1) 68%,rgba(169,199,215,1) 68%,rgba(169,199,215,1) 82%,rgba(158,191,208,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b9d2e0', endColorstr='#9ebfd0',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */\r\n\r\n}\r\n\r\n.login_box{\r\n    background:#f7f7f7;\r\n    border:3px solid #F4F4F4;\r\n    padding-left: 15px;\r\n    margin-bottom:25px;\r\n    }\r\n.input_title{\r\n    color:rgba(164, 164, 164, 0.9);\r\n    padding-left:3px;\r\n        margin-bottom: 2px;\r\n    }\r\n\r\nhr{\r\n    width:100%;\r\n}\r\n    \r\n.welcome{\r\n    font-family: \"myriad-pro\",sans-serif;\r\n    font-style: normal;\r\n    font-weight: 100;\r\n    color:#546e7a ;\r\n    margin-bottom:25px;\r\n    margin-top:50px;\r\n\r\n}\r\n\r\n.login_title{\r\n    font-family: \"myriad-pro\",sans-serif;\r\n    font-style: normal;\r\n    font-weight: 100;\r\n    color:rgba(164, 164, 164, 0.44);\r\n}\r\n\r\n.card-container.card {\r\n    max-width: 350px;\r\n\r\n}\r\n\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n    border-radius:0;\r\n    background:#43A6EB;\r\n    height: 55px;\r\n    margin-bottom:10px;\r\n}\r\n\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n    background-color: #FFFFFF;\r\n    /* just in case there no content*/\r\n    padding: 1px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 15%x;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n}\r\n\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n}\r\n\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n\r\n.btn.btn-signin {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 20px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n}\r\n\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n}\r\n\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n}\r\n\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n}\r\n/* ####################################################### form 3 ##########################  */\r\n\r\n.login-page {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n.form input {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n.form button {\r\n  font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n   background: #039be5; \r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n \r\n}\r\n.form button:hover,.form button:active,.form button:focus {\r\n  background:  #0288d1;\r\n}\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n.form .message a {\r\n  color: #4CAF50;\r\n  text-decoration: none;\r\n}\r\n.form .register-form {\r\n  display: none;\r\n}\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n.container .info span .fa {\r\n  color: #EF3B3A;\r\n}\r\nbody {\r\n  background: #76b852; /* fallback for old browsers */\r\n  background: linear-gradient(to left, #76b852, #8DC26F);\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;      \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"bg-default\">  -->\n<!-- <div class=\"container\">\n  <div class=\"row centered-form\">\n    <div class=\"col-xs-12 col-sm-8 col-md-5 col-sm-offset-2 col-md-offset-4 opacitybox\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading head-register\">\n          <h3 class=\"panel-title center-align\">{{'login.sign-in' | translate}}</h3>\n        </div>\n        <div class=\"panel-body\">\n          <form role=\"form\" method=\"post\" novalidate=\"novalidate\">\n            <div class=\"form-group\">\n              <br>\n              <input type=\"text\" name=\"login\" [placeholder]=\"'login.username'| translate\" aria-invalid=\"false\" aria-describedby=\"login-error\">\n              <span id=\"login-error\" class=\"help-block\"></span>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"Password\" name=\"password\" [placeholder]=\"'login.password'| translate\" aria-invalid=\"false\" aria-describedby=\"Pass-error\">\n              <span id=\"password-error\" class=\"help-block\"></span>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 \" align=\"center\">\n                <br>\n                <button type=\"submit\" class=\"btn btn-default btn-submit\" (click)=\"dosignin()\" value=\"1\">{{'login.sign-in' | translate}}</button>\n              </div>\n            </div>\n            <div class=\"pull-right\"><a>{{'login.forget-pass' | translate}}</a></div>\n            <div>\n              <br>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n<!-- </div>  -->\n\n\n<!-- start form 3  -->\n<div class=\"login-page\">\n  <div class=\"form\">\n    <p>{{'login.welcome' | translate}}</p>\n    <form class=\"login-form\">\n      <input type=\"text\" [placeholder]=\"'login.username'| translate\"/>\n      <input type=\"password\" [placeholder]=\"'login.password'| translate\"/>\n       <button type=\"submit\" class=\"btn btn-default btn-submit\" (click)=\"dosignin()\" value=\"1\">{{'login.sign-in' | translate}}</button>\n      <!-- <p class=\"message\">Not registered? <a href=\"#\">Create an account</a></p> -->\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
    }
    LoginComponent.prototype.ngOnInit = function () {
        $('.message a').click(function () {
            $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        });
        this.tranService.use(this.currentLang);
    };
    LoginComponent.prototype.dosignin = function () {
        this.router.navigate(['Pmain']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/master-page/master-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .bg-default {\r\n background-color: #2E3C45; \r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 0;\r\n    border-color: transparent !important;\r\n} \r\n.bg-image {\r\n    /* background-image: url(/assets/images/bg_login.png) !important;      */\r\n    background-color: #ffffff     ;    \r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: 50% 50%;\r\n    height: 100vh;\r\n}\r\n.margin-LR{\r\n    margin-left: 5%;\r\n}\r\n.container {\r\n     /* background-image: url(/assets/images/background.jpg) !important; */\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/master-page/master-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-image\">\r\n    <div>\r\n        <!-- <nav>\r\n            <div class=\"nav-wrapper bg-default\">\r\n                <a href=\"#!\" class=\"brand-logo margin-LR\">POS.Manager</a>\r\n                <ul class=\"right hide-on-med-and-down\">\r\n                    <li>\r\n                        <a (click)=\"changLangEN();\"><img src=\"assets/images/flag-icons/usa.png\"></a>\r\n                    </li>\r\n                    <li>\r\n                        <a (click)=\"changLangTH();\"><img src=\"assets/images/flag-icons/th.png\"></a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </nav> -->\r\n\r\n        <nav>\r\n            <div class=\"nav-wrapper blue-grey darken-2\">\r\n                <a class=\"margin-LR\">POS.Manager</a>\r\n                <a data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\r\n                <ul class=\"right hide-on-med-and-down\">\r\n                    <li><a class=\"waves-effect waves-light modal-trigger\" href=\"#modal1\">Database Tool</a></li>\r\n                    <li><a class=\"waves-effect waves-light modal-trigger\" href=\"#modal2\">Interface Tool</a></li>\r\n                    <!-- <li><a>Login</a></li> -->\r\n                    <li><a (click)=\"changLang();\"><i class=\"material-icons left\">language</i>{{currentLang}}</a></li>\r\n\r\n                </ul>\r\n                <ul class=\"side-nav\" id=\"mobile-demo\">\r\n                    <li><a class=\"waves-effect waves-light modal-trigger\" href=\"#modal1\"><i class=\"material-icons\">perm_data_setting</i>Database Tool</a></li>\r\n                    <li><a class=\"waves-effect waves-light modal-trigger\" href=\"#modal2\"><i class=\"material-icons\">swap_horiz</i>Interface Tool</a></li>\r\n                    <li class=\"divider\"></li>\r\n                    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">lock</i>Change Password</a>\r\n                        <!-- <li class=\"divider\"></li>\r\n                        <li class=\"bold\"><a (click)=\"toLogin();\" class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">exit_to_app</i>Sign in</a> -->\r\n\r\n                </ul>\r\n            </div>\r\n        </nav>\r\n        <!--  -->\r\n\r\n        <!-- Modal Structure Database Tool-->\r\n        <div id=\"modal1\" class=\"modal modal-fixed-footer\">\r\n            <div class=\"modal-content\">\r\n                <h4>Database Tool</h4>\r\n                <div class=\"row\">\r\n                    <form class=\"col s12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"input-field col s12\">\r\n\r\n                                <input id=\"server_name\" type=\"text\" class=\"validate\">\r\n                                <label for=\"server_name\">Sever Name</label>\r\n                            </div>\r\n                            <div class=\"input-field col s12\">\r\n                                <input id=\"database_name\" type=\"text\" class=\"validate\">\r\n                                <label for=\"database_name\">Database Name</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"input-field col s6\">\r\n                                <i class=\"material-icons prefix\">account_circle</i>\r\n                                <input id=\"user_name\" type=\"text\" class=\"validate\">\r\n                                <label for=\"user_name\">User Name</label>\r\n                            </div>\r\n                            <div class=\"input-field col s6\">\r\n                                <i class=\"material-icons prefix\">lock</i>\r\n                                <input id=\"password_name\" type=\"password\" class=\"validate\">\r\n                                <label for=\"password_name\">Password</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"pull-right\"><a>Status</a></div>\r\n                        <div Class=\"divider\"></div>\r\n                        <div class=\"input-field col s6\">\r\n                            <a class=\"waves-effect waves-light btn  green darken-4\"><i class=\"material-icons left\">save</i>Save</a>\r\n                        </div>\r\n                        <div class=\"input-field col s6\">\r\n                            <a class=\"waves-effect waves-light btn yellow accent-4\">Check Database</a>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"input-field col s6\">\r\n                                <a class=\"waves-effect waves-light btn grey lighten-1\">Backup Database</a>\r\n                            </div>\r\n                            <div class=\"input-field col s6\">\r\n                                <a class=\"waves-effect waves-light btn grey lighten-1\">Restore Database</a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"modal2\" class=\"modal\">\r\n            <div class=\"modal-content\">\r\n                <h4>Interface Tool</h4>\r\n                <div class=\"file-field input-field\">\r\n                    <div class=\"btn\">\r\n                        <span>Path</span>\r\n                        <input type=\"file\">\r\n                    </div>\r\n                    <div class=\"file-path-wrapper\">\r\n                        <input class=\"file-path validate\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col s6 offset-s3\">\r\n                        <a class=\"waves-effect waves-light btn green darken-4\">Save</a>\r\n                        <a class=\"waves-effect waves-light btn grey lighten-1\">Clear</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"modal-footer\">\r\n                <a class=\"modal-action modal-close waves-effect waves-green btn\">Close</a>\r\n            </div> -->\r\n        </div>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/master-page/master-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MasterPageComponent = (function () {
    function MasterPageComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
    }
    MasterPageComponent.prototype.ngOnInit = function () {
        this.tranService.use(this.currentLang);
        $(".button-collapse").sideNav({
            edge: 'left',
            closeOnClick: true,
            draggable: true //สไลด์เมนูอกมาจากด้านข้างยนโมบาย
        });
        // Model
        $(document).ready(function () {
            // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
            $('.modal').modal();
        });
    };
    MasterPageComponent.prototype.changLang = function () {
        this.currentLang = this.currentLang == "en" ? "th" : "en";
        this.tranService.use(this.currentLang);
    };
    MasterPageComponent.prototype.changLangEN = function () {
        this.currentLang = "en";
        this.tranService.use(this.currentLang);
    };
    MasterPageComponent.prototype.changLangTH = function () {
        this.currentLang = "th";
        this.tranService.use(this.currentLang);
    };
    return MasterPageComponent;
}());
MasterPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-master-page',
        template: __webpack_require__("../../../../../src/app/master-page/master-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/master-page/master-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MasterPageComponent);

var _a, _b;
//# sourceMappingURL=master-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/master-pmain/master-pmain.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-default {\r\n    background-color: #2E3C45; \r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 0;\r\n    border-color: transparent !important;\r\n} \r\n.margin-t{\r\n    margin-top: 20px;\r\n}\r\n.margin-setLogo{\r\n    margin-left: 3%;\r\n}\r\n.main_container .top_nav {\r\n    padding: 0 !important;\r\n    display: block;\r\n    padding: 10px 20px 0;\r\n    margin-left: 230px;\r\n   \r\n}\r\n.side-nav.fixed {\r\n    left: 0;\r\n    position: fixed;\r\n}\r\nul.side-nav.leftside-navigation {\r\n    top: 64px;\r\n    overflow: hidden;\r\n}\r\n.side-nav {\r\n    position: fixed;\r\n    width: 240px;\r\n    left: -105%;\r\n    top: 0;\r\n    margin: 0;\r\n    height: 100%;\r\n    height: calc(100% + 60px);\r\n    height: -moz-calc(100%);\r\n    padding-bottom: 60px;\r\n    background-color: #fff;\r\n    z-index: 999;\r\n    overflow-y: auto;\r\n    will-change: left;\r\n}\r\n.user-roal {\r\n    color: #fff;\r\n    margin-top: -34px;\r\n    font-size: 13px;\r\n    text-shadow: 1px 1px 1px #444;\r\n}\r\n.scrollbar\r\n{\r\n\tmargin-left: 30px;\r\n\tfloat: left;\r\n\theight: 300px;\r\n\twidth: 65px;\r\n\tbackground: #F5F5F5;\r\n\toverflow-y: scroll;\r\n\tmargin-bottom: 25px;\r\n}\r\n.force-overflow\r\n{\r\n\tmin-height: 450px;\r\n}\r\n.padContent{\r\n    padding-left: 12.5%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/master-pmain/master-pmain.component.html":
/***/ (function(module, exports) {

module.exports = "<script type=\"language-javascript\"> --> $(\".button-collapse\").sideNav();\n</script>\n<div class=\"main_container\" materialize=\"updateTextFields\">\n  <!-- START HEADER -->\n  <div class=\"col s12 l9 xl10 offset-s1 offset-l3 offset-xl2\">\n    <nav>\n      <div class=\"nav-wrapper bg-default\">\n        <a class=\"margin-setLogo\">POS.Manager</a>\n        <ul class=\"right\">\n          <li><i class=\"material-icons prefix\">account_circle</i></li>\n          <li><label class=\"margin-setUser\" for=\"prod_name\">Maratree Supasing</label></li>\n          <li><a (click)=\"changLangEN();\"><img src=\"assets/images/flag-icons/usa.png\"></a></li>\n          <li><a (click)=\"changLangTH();\"><img src=\"assets/images/flag-icons/th.png\"></a></li>\n          <li><a><i class=\"material-icons\">exit_to_app</i></a></li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n  <!-- END HEADER   -->\n\n  <!-- START MAIN -->\n  <div id=\"main\">\n    <!-- START WRAPPER -->\n    <div class=\"wrapper\">\n      <aside id=\"left-sideber-nav\">\n        <ul id=\"slide-out\" class=\"side-nav fixed leftside-navigation ps-container ps-active-y\" style=\"width: 240px;\">\n          <!-- <li class=\"user-details  light-blue darken-2\">\n            <div class=\"row\">\n              <div class=\"col col s4 m4 l4\">\n                <div class=\"center responsive-img margin-t\">\n                  <img class=\"circle\" src=\"./assets/images/user.png\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"col col s8 m8 l8\">\n                <p class=\"left-align\">Maratree Supasing</p>\n                <p class=\"user-roal left-align\">Administrator</p>\n              </div>\n            </div>\n          </li> -->\n          <!--Master  -->\n          <li class=\"no-padding\">\n            <ul class=\"collapsible collapsible-accordion\">\n              <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">domain</i>Master</a>\n                <div class=\"collapsible-body\">\n                  <li class=\"no-padding\">\n                    <ul class=\"collapsible collapsible-accordion\">\n                      <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">folder</i>Master Data</a>\n                        <div class=\"collapsible-body\">\n                          <ul>\n                            <li><a> - Company</a></li>\n                            <li><a> - Workstation</a></li>\n                            <li><a> - Outlet</a></li>\n                            <li><a> - Zone</a></li>\n                            <li><a> - Shift Group</a></li>\n                            <li><a> - Shift</a></li>\n                            <li class=\"no-padding\">\n                              <ul class=\"collapsible collapsible-accordion\">\n                                <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">folder</i>Decor</a>\n                                  <div class=\"collapsible-body\">\n                                    <ul>\n                                      <li><a> - Decor Type</a></li>\n                                      <li><a> - Decor Status Type</a></li>\n                                      <li><a> - Decor</a></li>\n                                    </ul>\n                                  </div>\n                                </li>\n                              </ul>\n                          </ul>\n                        </div>\n                        </li>\n                    </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">folder</i>Condiment</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - Condiment Group</a></li>\n                              <li><a> - Condiment</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">folder</i>NonItem</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - Discount</a></li>\n                              <li><a> - Service</a></li>\n                              <li><a> - Vat</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">folder</i>Product</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a (click)=\"to_productList();\"> - Product</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">folder</i>Menu</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - Menu</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">folder</i>Payment</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - Payment</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">folder</i>Printer</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - Printer</a></li>\n                              <li><a> - Print Format</a></li>\n                              <li><a> - Print Config</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">folder</i>Employee</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - officer</a></li>\n                              <li><a> - Entertain</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                     <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">folder</i>Promotion</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - Happy Hour</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                </div>\n                </li>\n            </ul>\n            </li>\n            <!--Setup  -->\n            <li class=\"no-padding\">\n              <ul class=\"collapsible collapsible-accordion\">\n                <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">perm_data_setting</i>Setup</a>\n                  <div class=\"collapsible-body\">\n                    <ul>\n                      <li><a>- Product</a></li>\n                      <li><a>- Sale Type</a></li>\n                      <li><a>- Policy</a></li>\n                      <li><a>- Message Templete</a></li>\n                      <li><a>- Set Control</a></li>\n                      <li><a>- Personal</a></li>\n                      <li><a>- Report Config</a></li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            <!--Security  -->\n            <li class=\"no-padding\">\n              <ul class=\"collapsible collapsible-accordion\">\n                <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">security</i>Security</a>\n                  <div class=\"collapsible-body\">\n                    <ul>\n                      <li class=\"no-padding\">\n                        <ul class=\"collapsible collapsible-accordion\">\n                          <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">supervisor_account</i>User</a>\n                            <div class=\"collapsible-body\">\n                              <ul>\n                                <li><a (click)=\"to_userList();\">  - User List</a></li>\n                                <li><a (click)=\"to_usergroupList()\">  - User Group</a></li>\n                              </ul>\n                            </div>\n                          </li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            <!--Interface F&B Costing  -->\n            <li class=\"no-padding\">\n              <ul class=\"collapsible collapsible-accordion\">\n                <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">transform</i>Interface FB Costing</a>\n                  <div class=\"collapsible-body\">\n                    <ul>\n                      <li><a>- Include Item</a></li>\n                      <li><a>- Generate Textfile</a></li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            <!--Report  -->\n            <li class=\"no-padding\">\n              <ul class=\"collapsible collapsible-accordion\">\n                <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">content_paste</i>Report</a>\n                  <div class=\"collapsible-body\">\n                    <ul>\n                      <li><a>- Report</a></li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            <div class=\"ps-scrollbar-y-rail\" style=\"top: 0px; height: 768px; right: 3px;\">\n              <div class=\"ps-scrollbar-y\" style=\"top: 0px; height: 453px;\"></div>\n            </div>\n        </ul>\n      </aside>\n      <!-- START CONTENT -->\n      <div>\n        <div>\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n      <!-- END CONTENT -->\n    </div>\n    <!-- END WRAPPER  -->\n\n  </div>\n\n  <!-- END MAIN -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/master-pmain/master-pmain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterPmainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MasterPmainComponent = (function () {
    function MasterPmainComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
    }
    MasterPmainComponent.prototype.ngOnInit = function () {
        this.tranService.use(this.currentLang);
        $(".button-collapse").sideNav({
            edge: 'right',
            closeOnClick: true,
            draggable: true //สไลด์เมนูอกมาจากด้านข้างยนโมบาย
        });
    };
    MasterPmainComponent.prototype.changLangEN = function () {
        // this.currentLang = this.currentLang == "en" ? "th" : "en";
        this.currentLang = "en";
        this.tranService.use(this.currentLang);
    };
    MasterPmainComponent.prototype.changLangTH = function () {
        this.currentLang = "th";
        this.tranService.use(this.currentLang);
    };
    MasterPmainComponent.prototype.to_productList = function () {
        this.router.navigate(['Pmain', 'product-list']);
    };
    MasterPmainComponent.prototype.to_userList = function () {
        this.router.navigate(['Pmain', 'user-list']);
    };
    MasterPmainComponent.prototype.to_usergroupList = function () {
        this.router.navigate(['Pmain', 'usergroup-list']);
    };
    return MasterPmainComponent;
}());
MasterPmainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-master-pmain',
        template: __webpack_require__("../../../../../src/app/master-pmain/master-pmain.component.html"),
        styles: [__webpack_require__("../../../../../src/app/master-pmain/master-pmain.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MasterPmainComponent);

var _a, _b;
//# sourceMappingURL=master-pmain.component.js.map

/***/ }),

/***/ "../../../../../src/app/outlet-list/outlet-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/outlet-list/outlet-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>Outlet / Search</p>\n    <div class=\"row\">\n      <a class=\"waves-effect waves-light btn green darken-4\" routerLink=\"/Pmain/outlet\"><i class=\"material-icons center\">add</i></a>\n      <a class=\"waves-effect waves-light btn yellow accent-4\"><i class=\"material-icons center\">edit</i></a>\n      <a class=\"waves-effect waves-light btn deep-orange darken-4\"><i class=\"material-icons center\">delete</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"nav-wrapper teal darken-1\">\n        <form>\n          <div class=\"input-field \">\n            <input id=\"search\" name=\"search\" type=\"search\" required>\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n            <i class=\"material-icons\">search</i>\n          </div>\n\n        </form>\n      </div>\n      <!-- <div class=\"input-field col s7 m9 l10 xl10\">\n        <label for=\"user_search\">Search</label>\n        <input id=\"user_search\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s2 m2 l2 xl2\">\n        <a class=\"waves-effect waves-light btn\" align=\"center\">search</a>\n      </div> -->\n    </div>\n\n    <div class=\"row\">\n      <table class=\"highlight\">\n        <thead>\n          <tr>\n            <th>Outlet Code</th>\n            <th>Outlet Name</th>\n            <th>Outlet Type</th>\n            <th>Tax Inclusive</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>01</td>\n            <td>Grand Cafe Cashier</td>\n            <td>Resterant</td>\n            <td><i class=\"material-icons\">check_box</i></td>\n          </tr>\n          <tr>\n            <td>02</td>\n            <td>Room Service</td>\n            <td>Resterant</td>\n            <td><i class=\"material-icons\">check_box</i></td>\n          </tr>\n          <tr>\n            <td>03</td>\n            <td>Pool Bar</td>\n            <td>Resterant</td>\n            <td><i class=\"material-icons\">check_box_outline_blank</i></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ul class=\"pagination tcenter\">\n      <li class=\"waves-effect\" *ngFor=\"let p of paging;let i = index;\" [ngClass]=\"{'active':i==numPage}\" (click)=\"gotoPage(i);\"><a>{{p}}</a></li>\n    </ul>\n\n    <!-- <div class=\"fixed-action-btn\">\n      <a class=\"btn-floating btn right green darken-4\" (click)=\"onAddbtnClick()\"><i class=\"material-icons\">add</i></a>\n    </div> -->\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/outlet-list/outlet-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutletListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutletListComponent = (function () {
    function OutletListComponent() {
    }
    OutletListComponent.prototype.ngOnInit = function () {
    };
    return OutletListComponent;
}());
OutletListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-outlet-list',
        template: __webpack_require__("../../../../../src/app/outlet-list/outlet-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/outlet-list/outlet-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OutletListComponent);

//# sourceMappingURL=outlet-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/outlet/outlet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p{\r\n    border-style:ridge;\r\n    width: auto;\r\n}\r\n.text{\r\n    font-weight: bold;\r\n    margin-bottom: 7px;\r\n    margin-top: 7px;\r\n    margin-right: 2px;\r\n    margin-left: 2px;\r\n}\r\n.text-2{\r\n    font-weight: bold;\r\n    margin-bottom: 7px;\r\n    margin-top: 7px;\r\n    margin-right: 2px;\r\n    margin-left: 2px;\r\n    font-size: 18px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/outlet/outlet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>Ouutlet / Add</p>\n    <div class=\"row\">\n      <a class=\"btn  light-blue darken-4\"><i class=\"material-icons\">save</i></a>\n      <a class=\"btn red darken-4\"><i class=\"material-icons\">delete</i></a>\n      <a class=\"btn grey darken-1\"><i routerLink=\"/Pmain/outlet-list\" class=\"material-icons\">cancel</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"outlet_code\">Outlet Code</label>\n        <input id=\"outlet_code\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"outlet_name\">Outlet Name</label>\n        <input id=\"outlet_name\" type=\"text\" class=\"validate\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <ul class=\"tabs tabs-fixed-width  light-blue darken-1\">\n          <li class=\"tab col s3\"><a class=\"active\" href=\"#test1\">General</a></li>\n          <li class=\"tab col s3\"><a href=\"#test2\">General2</a></li>\n          <li class=\"tab col s3\"><a href=\"#test3\">Detail</a></li>\n          <li class=\"tab col s3\"><a href=\"#test4\">Printer</a></li>\n          <li class=\"tab col s3\"><a href=\"#test5\">Images</a></li>\n          <li class=\"tab col s3\"><a href=\"#test6\">Location</a></li>\n        </ul>\n      </div>\n\n      <!-- General  -->\n      <div id=\"test1\" class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s5 l5 xl5\">\n            <select materialize=\"material_select\" disabled=\"disabled\"> \n                  <option value=\"\" disabled selected>Choose Floor Plan</option>\n                </select>\n            <label>Floor Plan</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"outlet_name1\">Outlet Name1</label>\n            <input id=\"outlet_name1\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s5 l5 xl5\">\n            <select materialize=\"material_select\"> \n                  <option value=\"\" disabled selected>Choose Outlet Type</option>\n                  <option value=\"1\">Resterant</option>\n                  <option value=\"2\">Fast Food</option>\n                  <option value=\"3\">Detail Shop</option>\n                  <option value=\"4\">Delivery</option>\n                </select>\n            <label>Outlet Type</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"outlet_name2\">Outlet Name2</label>\n            <input id=\"outlet_name2\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s5 l5 xl5\">\n            <select materialize=\"material_select\"> \n                  <option value=\"\" disabled selected>Choose Company</option>\n                  <option value=\"1\">Bostun co,. LTD,</option>\n                  \n                </select>\n            <label>Company</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"outlet_name3\">Outlet Name3</label>\n            <input id=\"outlet_name3\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s3 l3 xl3 margTop\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"chklongbill\" />\n            <label for=\"chklongbill\">Use LongBill</label>\n          </div>\n          <div class=\"col s2 l2 xl2  margTop\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"chkJournal\" />\n            <label for=\"chkJournal\">Use Journal</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"outlet_name4\">Outlet Name4</label>\n            <input id=\"outlet_name4\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s3 l3 xl3 margTop\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"chkinclusive\" />\n            <label for=\"chkinclusive\">Tax Inclusive</label>\n          </div>\n          <div class=\"col s2 l2 xl2  margTop\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"chkinterface\" />\n            <label for=\"chkinterface\">Use Interface</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"outlet_name5\">Outlet Name5</label>\n            <input id=\"outlet_name5\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s5 l5 xl5\">\n            <select materialize=\"material_select\"> \n                  <option value=\"\" disabled selected>Choose Default SaleType</option>\n                  <option value=\"1\">Normal</option>\n                  <option value=\"1\">Personal</option>\n                  \n                </select>\n            <label>Default SaleType</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <input type=\"text\" class=\"datepicker\" name=\"date\" materialize=\"pickadate\" [materializeParams]=\"[{closeOnSelect: true,format:'dd/mm/yyyy'}]\">\n            <label for=\"txtDate\">Date</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s5 l5 xl5\">\n            <select materialize=\"material_select\"> \n                  <option value=\"\" disabled selected>Choose Default Payment</option>\n                  <option value=\"1\">Cash</option>\n                  <option value=\"1\">Hotel Guest</option>\n                  <option value=\"1\">Visa Card</option>\n                </select>\n            <label>Default Payment</label>\n          </div>\n        </div>\n\n        <!-- <div class=\"row\">\n          <p>All Day Layout</p>\n          <p>\n            <input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"test2\" />\n            <label for=\"test2\">One Layout All DAy</label>\n            <input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"test3\" />\n            <label for=\"test3\">Change Layout By Shift</label>\n          </p>\n        </div>   -->\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"outlet_desc\">Outlet Description</label>\n            <input id=\"outlet_desc\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"vat_desc\">Vat Description</label>\n            <input id=\"vat_desc\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"rd\">#RD</label>\n            <input id=\"rd\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s3 l3 xl3 margTop\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"chkCloseDay\" />\n            <label for=\"chkCloseDay\">CloseDay Over SystemDate</label>\n          </div>\n        </div>\n      </div>\n      <!-- General2 -->\n      <div id=\"test2\" class=\"col s12\">\n        <div class=\"row\">\n          <p>Language</p>\n          <div class=\"input-field col s12 l12 xl12 \">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose Product Name</option>\n          <option id=\"1\">Product Name</option>\n          <option id=\"2\">Product Name1</option>\n          <option id=\"3\">Product Name2</option>\n         </select>\n            <label>Display Language</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12 l12 xl12 \">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose Product Name</option>\n          <option id=\"1\">Product Name</option>\n          <option id=\"2\">Product Name1</option>\n          <option id=\"3\">Product Name2</option>\n         </select>\n            <label>Print Language</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12 l12 xl12\">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose Product Name</option>\n          <option id=\"1\">Product Name</option>\n          <option id=\"2\">Product Name1</option>\n          <option id=\"3\">Product Name2</option>\n         </select>\n            <label>Kitchen Language</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s6 l6 xl6 p\">\n            <p>Outlet</p>\n            <p>\n              <input type=\"checkbox\" class=\"filled-in\" id=\"chkOfficer\" />\n              <label for=\"chkOfficer\">Print Officer Close Shift Report</label>\n            </p>\n            <p>\n              <input type=\"checkbox\" class=\"filled-in\" id=\"chkEntertain\" />\n              <label for=\"chkEntertain\">Print Entertain Close Shift Report</label>\n            </p>\n            <p>\n              <input type=\"checkbox\" class=\"filled-in\" id=\"chkCoupon\" />\n              <label for=\"chkCoupon\">Print Coupon Report</label>\n            </p>\n          </div>\n          <div class=\"col s6 l6 xl6 p \">\n            <p>Guest Check Reset</p>\n            <p>\n              <input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"EDay\" />\n              <label for=\"EDay\">Every Day</label>\n            </p>\n            <p>\n              <input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"EMonth\" />\n              <label for=\"EMonth\">Every Month</label>\n            </p>\n            <p>\n              <input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"resetNum\" />\n              <label for=\"resetNum\">Reset On Number</label>\n              <input id=\"reset_number\" type=\"textbox\" class=\"validate\">\n              <!-- <label for=\"last_name\">Last Name</label> -->\n\n            </p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s6 l6 xl6 p\">\n            <p>Cover</p>\n            <p>\n              <input type=\"checkbox\" class=\"filled-in\" id=\"chk1\" />\n              <label for=\"chk1\">Need Cover</label>\n            </p>\n            <p>\n              <input type=\"checkbox\" class=\"filled-in\" id=\"chk2\" />\n              <label for=\"chk2\">Cover On Open</label>\n            </p>\n          </div>\n        </div>\n        <!--  -->\n      </div>\n      <!-- Detail -->\n      <div id=\"test3\" class=\"col s12\">\n\n        <div class=\"row\">\n          <div class=\"row\">\n            <div class=\"input-field col s12 l12 xl12 light-blue lighten-5\">\n              <p class=\"text\">Normal</p>\n            </div>\n          </div>\n          <div id=\"Normal\" class=\"col s12\">\n            <table class=\"highlight\">\n              <thead>\n                <tr>\n                  <th class=\"center\">NonItem Name</th>\n                  <th class=\"center\">After Discount</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td class=\"center\">Service Charge</td>\n                  <td class=\"center\"><i class=\"material-icons\">check_box</i></td>\n                </tr>\n                <tr>\n                  <td class=\"center\">Vat</td>\n                  <td class=\"center\"><i class=\"material-icons\">check_box</i></td>\n                </tr>\n              </tbody>\n            </table>\n            <div class=\"row\">\n              <div class=\"input-field col s6 l6 xl6 center\">\n                <a class=\"waves-effect waves-light btn \">Set</a>\n                <a class=\"waves-effect waves-light btn grey lighten-1\">Clear</a>\n              </div>\n              <div class=\"input-field col s6 l6 xl6 center\">\n                <a class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">arrow_drop_up</i>Up</a>\n                <a class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">arrow_drop_down</i>Down</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12 l12 xl12 light-blue lighten-5\">\n              <p class=\"text\">Officer</p>\n            </div>\n          </div>\n          <div id=\"Officer\" class=\"col s12\">\n            <table class=\"highlight\">\n              <thead>\n                <tr>\n                  <th class=\"center\">NonItem Name</th>\n                  <th class=\"center\">After Discount</th>\n                </tr>\n              </thead>\n\n              <tbody>\n                <tr>\n                  <td class=\"center\">Service Charge</td>\n                  <td class=\"center\"><i class=\"material-icons\">check_box_outline_blank</i></td>\n                </tr>\n              </tbody>\n            </table>\n            <div class=\"row\">\n              <div class=\"input-field col s6 l6 xl6 center\">\n                <a class=\"waves-effect waves-light btn \">Set</a>\n                <a class=\"waves-effect waves-light btn grey lighten-1\">Clear</a>\n              </div>\n              <div class=\"input-field col s6 l6 xl6 center\">\n                <a class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">arrow_drop_up</i>Up</a>\n                <a class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">arrow_drop_down</i>Down</a>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12 l12 xl12 light-blue lighten-5\">\n              <p class=\"text\">Entertain</p>\n            </div>\n          </div>\n          <div id=\"Entertain\" class=\"col s12\">\n            <table class=\"highlight\">\n              <thead>\n                <tr>\n                  <th class=\"center\">NonItem Name</th>\n                  <th class=\"center\">After Discount</th>\n                </tr>\n              </thead>\n            </table>\n            <div class=\"row\">\n              <div class=\"input-field col s6 l6 xl6 center\">\n                <a class=\"waves-effect waves-light btn \">Set</a>\n                <a class=\"waves-effect waves-light btn grey lighten-1\">Clear</a>\n              </div>\n              <div class=\"input-field col s6 l6 xl6 center\">\n                <a class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">arrow_drop_up</i>Up</a>\n                <a class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">arrow_drop_down</i>Down</a>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <!-- Printer -->\n      <div id=\"test4\" class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"col s12 l12 xl12 p\">\n           \n            <span class=\"left text-2\">List Event</span>\n            <br>\n            <div class=\"row\">\n              <div class=\"col s12\">\n                <ul class=\"tabs tabs-fixed-width  grey lighten-1\">\n                  <li class=\"tab col s3\"><a class=\"active\" href=\"#guest_check\">Guest Check</a></li>\n                  <li class=\"tab col s3\"><a href=\"#payment\">Payment</a></li>\n                </ul>\n              </div>\n              <div id=\"guest_check\" class=\"col s12\">\n                <div class=\"col s12 l12 xl12\">\n                  <table>\n                    <thead>\n                      <tr>\n                        <th>Print Report Type</th>\n                        <th>Print Format</th>\n                        <th>Reprint format</th>\n                      </tr>\n                    </thead>\n                  </table>\n                </div>\n\n              </div>\n              <div id=\"payment\" class=\"col s12\">\n                <div class=\"col s12 l12 xl12\">\n                  <table>\n                    <thead>\n                      <tr>\n                        <th>Payment Type</th>\n                        <th>Document Type</th>\n                        <th>Print Report Type</th>\n                        <th>Print Format</th>\n                        <th>Reprint Format</th>\n                      </tr>\n                    </thead>\n                  </table>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"divider\"></div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col s12 l12 xl12 offset-l3\">\n            <a class=\"waves-effect waves-light btn green darken-4\"><i class=\"material-icons left\">add</i>Add Print Datail</a>\n            <a class=\"waves-effect waves-light btn deep-orange darken-4\"><i class=\"material-icons left\">delete</i>Delete Print Datail</a>\n          </div>\n        </div>\n      </div>\n      <!-- Images -->\n      <div id=\"test5\" class=\"col s12\">\n        <br>\n        <div class=\"row\">\n          <div class=\"col s6 l6 xl6 offset-s3 offset-l3 offset-xl3 p\">\n            <div class=\"card\">\n              <div class=\"card-image\">\n                <img src=\"./assets/images/outlet.jpg\">\n                <span class=\"card-title\">Card Title</span>\n                <div class=\"file-field input-field\">\n                  <div class=\"btn\">\n                    <span>Upload</span>\n                    <input type=\"file\" name=\"avatar\" multiple><i class=\"material-icons\">file_upload</i>\n                  </div>\n                  <div class=\"file-path-wrapper\">\n                    <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload File Pictuer\">\n                  </div>\n                </div>\n                <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">delete</i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Location -->\n      <div id=\"test6\" class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s4 l4 xl4\">\n            <label for=\"postal_code\">Postal Code</label>\n            <input id=\"postal_code\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s4 l4 xl4\">\n            <label for=\"telephon\">Telephon</label>\n            <input id=\"telephon\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s4 l4 xl4\">\n            <label for=\"fax\">Fax</label>\n            <input id=\"fax\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12 l12 xl12\">\n            <label for=\"email\">Email</label>\n            <input id=\"email\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12 l12 xl12\">\n            <textarea id=\"outlet_address\" class=\"materialize-textarea\"></textarea>\n            <label for=\"outlet_address\">Outlet Address</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col s6 l6 xl6 offset-s3 offset-l3 offset-xl3 p\">\n            <p>Select Map</p>\n            <div class=\"card\">\n              <div class=\"card-image\">\n                <img src=\"./assets/images/map.jpg\">\n                <span class=\"card-title\">Card Title</span>\n                <div class=\"file-field input-field\">\n                  <div class=\"btn\">\n                    <span>Upload</span>\n                    <input type=\"file\" name=\"avatar\" multiple><i class=\"material-icons\">file_upload</i>\n                  </div>\n                  <div class=\"file-path-wrapper\">\n                    <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload File Pictuer\">\n                  </div>\n                </div>\n                <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">delete</i></a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/outlet/outlet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutletComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OutletComponent = (function () {
    function OutletComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
    }
    OutletComponent.prototype.ngOnInit = function () {
        this.tranService.use(this.currentLang);
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
        $(document).ready(function () {
            $('ul.tabs').tabs();
        });
        $(document).ready(function () {
            $('select').material_select();
        });
        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
        });
    };
    return OutletComponent;
}());
OutletComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-outlet',
        template: __webpack_require__("../../../../../src/app/outlet/outlet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/outlet/outlet.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], OutletComponent);

var _a, _b;
//# sourceMappingURL=outlet.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-main/page-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tree, .tree ul {\r\n    margin:0;\r\n    padding:0;\r\n    list-style:none\r\n}\r\n.tree ul {\r\n    margin-left:1em;\r\n    position:relative\r\n}\r\n.tree ul ul {\r\n    margin-left:.5em\r\n}\r\n.tree ul:before {\r\n    content:\"\";\r\n    display:block;\r\n    width:0;\r\n    position:absolute;\r\n    top:0;\r\n    bottom:0;\r\n    left:0;\r\n    border-left:1px solid\r\n}\r\n.tree li {\r\n    margin:0;\r\n    padding:0 1em;\r\n    line-height:2em;\r\n    color:#369;\r\n    font-weight:700;\r\n    position:relative\r\n}\r\n.tree ul li:before {\r\n    content:\"\";\r\n    display:block;\r\n    width:10px;\r\n    height:0;\r\n    border-top:1px solid;\r\n    margin-top:-1px;\r\n    position:absolute;\r\n    top:1em;\r\n    left:0\r\n}\r\n.tree ul li:last-child:before {\r\n    background:#fff;\r\n    height:auto;\r\n    top:1em;\r\n    bottom:0\r\n}\r\n.indicator {\r\n    margin-right:5px;\r\n}\r\n.tree li a {\r\n    text-decoration: none;\r\n    color:#369;\r\n}\r\n.tree li button, .tree li button:active, .tree li button:focus {\r\n    text-decoration: none;\r\n    color:#369;\r\n    border:none;\r\n    background:transparent;\r\n    margin:0px 0px 0px 0px;\r\n    padding:0px 0px 0px 0px;\r\n    outline: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-main/page-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-image\">\n  <div>\n\n    <nav>\n      <div class=\"nav-wrapper blue-grey darken-2\">\n        <a class=\"margin-LR\">POS.Manager</a>\n        <a data-activates=\"mobile-demo\" class=\"button-collapse show-on-large\"><i class=\"material-icons\">menu</i></a>\n        <ul class=\"right hide-on-med-and-down\">\n          <li><i class=\"material-icons prefix\">account_circle</i></li>\n          <li><label class=\"margin-setUser\" for=\"prod_name\">Maratree Supasing</label></li>\n          <li><a (click)=\"changLang();\"><i class=\"material-icons left\">language</i>{{currentLang}}</a></li>\n          <!-- <li><a (click)=\"changLangEN();\"><img src=\"assets/images/flag-icons/usa.png\"></a></li>\n          <li><a (click)=\"changLangTH();\"><img src=\"assets/images/flag-icons/th.png\"></a></li> -->\n          <li><a (click)=\"toLogin();\"><i class=\"material-icons\">exit_to_app</i></a></li>\n        </ul>\n        <ul class=\"side-nav\" id=\"mobile-demo\">\n          <!--Master  -->\n          <li class=\"no-padding\">\n            <ul class=\"collapsible collapsible-accordion\">\n              <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">computer</i>Master</a>\n                <div class=\"collapsible-body\">\n                  <li class=\"no-padding\">\n                    <ul class=\"collapsible collapsible-accordion\">\n                      <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">tablet_mac</i>Master Data</a>\n                        <div class=\"collapsible-body\">\n                          <ul>\n                            <li><a routerLink=\"/Pmain/company-list\"> - Company</a></li>\n                            <li><a routerLink=\"/Pmain/workstation-list\"> - Workstation</a></li>\n                            <li><a routerLink=\"/Pmain/outlet-list\"> - Outlet</a></li>\n                            <li><a> - Zone</a></li>\n                            <li><a routerLink=\"/Pmain/shift-group\"> - Shift Group</a></li>\n                            <li><a routerLink=\"/Pmain/shift-list\"> - Shift</a></li>\n                            <li class=\"no-padding\">\n                              <ul class=\"collapsible collapsible-accordion\">\n                                <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">event_seat</i>Decor</a>\n                                  <div class=\"collapsible-body\">\n                                    <ul>\n                                      <li><a> - Decor Type</a></li>\n                                      <li><a> - Decor Status Type</a></li>\n                                      <li><a> - Decor</a></li>\n                                    </ul>\n                                  </div>\n                                </li>\n                              </ul>\n                          </ul>\n                        </div>\n                        </li>\n                    </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">note_add</i>Condiment</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - Condiment Group</a></li>\n                              <li><a> - Condiment</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">attach_money</i>NonItem</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a routerLink=\"/Pmain/discount-list\"> - Discount</a></li>\n                              <li><a> - Service</a></li>\n                              <li><a> - Vat</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">restaurant</i>Product</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a routerLink=\"/Pmain/product-list\"> - Product</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">restaurant_menu</i>Menu</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - Menu</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">payment</i>Payment</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - Payment</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">print</i>Printer</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - Printer</a></li>\n                              <li><a> - Print Format</a></li>\n                              <li><a> - Print Config</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">person</i>Employee</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - officer</a></li>\n                              <li><a> - Entertain</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                    <li class=\"no-padding\">\n                      <ul class=\"collapsible collapsible-accordion\">\n                        <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">stars</i>Promotion</a>\n                          <div class=\"collapsible-body\">\n                            <ul>\n                              <li><a> - Happy Hour</a></li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </li>\n                    <!--  -->\n                </div>\n                </li>\n            </ul>\n            </li>\n            <!--Setup  -->\n            <li class=\"no-padding\">\n              <ul class=\"collapsible collapsible-accordion\">\n                <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">settings</i>Setup</a>\n                  <div class=\"collapsible-body\">\n                    <ul>\n                      <li><a>- Product</a></li>\n                      <li><a>- Sale Type</a></li>\n                      <li><a>- Policy</a></li>\n                      <li><a>- Message Templete</a></li>\n                      <li><a>- Set Control</a></li>\n                      <li><a>- Personal</a></li>\n                      <li><a>- Report Config</a></li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            <!--TEST MENU  -->\n            <!-- <li class=\"no-padding\">\n              <ul class=\"collapsible collapsible-accordion\">\n                <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">security</i>TEST MENU</a>\n                  <div class=\"collapsible-body\">\n                    <ul>\n                      <li class=\"no-padding\">\n                        <ul class=\"collapsible collapsible-accordion\">\n                          <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">supervisor_account</i>MENU</a>\n                            <div class=\"collapsible-body\">\n                              <ul>\n                                <li><a *ngFor=\"let a of menuListData;\">{{a.menuname}}</a></li>\n                              </ul>\n                            </div>\n                          </li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li> -->\n            <!--Security  -->\n            <li class=\"no-padding\">\n              <ul class=\"collapsible collapsible-accordion\">\n                <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">security</i>Security</a>\n                  <div class=\"collapsible-body\">\n                    <ul>\n                      <li class=\"no-padding\">\n                        <ul class=\"collapsible collapsible-accordion\">\n                          <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">supervisor_account</i>User</a>\n                            <div class=\"collapsible-body\">\n                              <ul>\n                                <li><a (click)=\"to_userList();\">  - User List</a></li>\n                                <li><a (click)=\"to_usergroupList()\">  - User Group</a></li>\n                              </ul>\n                            </div>\n                          </li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            <!--Interface F&B Costing  -->\n            <li class=\"no-padding\">\n              <ul class=\"collapsible collapsible-accordion\">\n                <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">transfer_within_a_station</i>Interface FB Costing</a>\n                  <div class=\"collapsible-body\">\n                    <ul>\n                      <li><a>- Include Item</a></li>\n                      <li><a>- Generate Textfile</a></li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            <!--Report  -->\n            <li class=\"no-padding\">\n              <ul class=\"collapsible collapsible-accordion\">\n                <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">content_paste</i>Report</a>\n                  <div class=\"collapsible-body\">\n                    <ul>\n                      <li><a>- Report</a></li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            <li class=\"divider\"></li>\n            <li><a class=\"waves-effect waves-light modal-trigger\" href=\"#modal1\"><i class=\"material-icons left\">cast_connected</i>Database Tool</a></li>\n                    <li><a class=\"waves-effect waves-light modal-trigger\" href=\"#modal2\"><i class=\"material-icons left\">settings_input_hdmi</i>Interface Tool</a></li>\n                    <li class=\"divider\"></li>\n                    <li class=\"bold\"><a class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">lock</i>Change Password</a>\n              <!-- <li><a (click)=\"changLangEN();\"><img src=\"assets/images/flag-icons/usa.png\"></a></li>\n            <li><a (click)=\"changLangTH();\"><img src=\"assets/images/flag-icons/th.png\"></a></li> -->\n              <li class=\"bold\"><a (click)=\"toLogin();\" class=\"collapsible-header waves-effect waves-cyan\"><i class=\"material-icons\">exit_to_app</i>Sign out</a>\n\n        </ul>\n      </div>\n    </nav>\n   \n    <!-- Modal Structure Database Tool-->\n    <div id=\"modal1\" class=\"modal modal-fixed-footer\">\n      <div class=\"modal-content\">\n        <h4>Database Tool</h4>\n        <div class=\"row\">\n          <form class=\"col s12\">\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n\n                <input id=\"server_name\" type=\"text\" class=\"validate\">\n                <label for=\"server_name\">Sever Name</label>\n              </div>\n              <div class=\"input-field col s12\">\n                <input id=\"database_name\" type=\"text\" class=\"validate\">\n                <label for=\"database_name\">Database Name</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col s6\">\n                <i class=\"material-icons prefix\">account_circle</i>\n                <input id=\"user_name\" type=\"text\" class=\"validate\">\n                <label for=\"user_name\">User Name</label>\n              </div>\n              <div class=\"input-field col s6\">\n                <i class=\"material-icons prefix\">lock</i>\n                <input id=\"password_name\" type=\"password\" class=\"validate\">\n                <label for=\"password_name\">Password</label>\n              </div>\n            </div>\n            <div class=\"pull-right\"><a>Status</a></div>\n            <div Class=\"divider\"></div>\n            <div class=\"input-field col s6\">\n              <a class=\"waves-effect waves-light btn  green darken-4\"><i class=\"material-icons left\">save</i>Save</a>\n            </div>\n            <div class=\"input-field col s6\">\n              <a class=\"waves-effect waves-light btn yellow accent-4\">Check Database</a>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col s6\">\n                <a class=\"waves-effect waves-light btn grey lighten-1\">Backup Database</a>\n              </div>\n              <div class=\"input-field col s6\">\n                <a class=\"waves-effect waves-light btn grey lighten-1\">Restore Database</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div id=\"modal2\" class=\"modal\">\n      <div class=\"modal-content\">\n        <h4>Interface Tool</h4>\n        <div class=\"file-field input-field\">\n          <div class=\"btn\">\n            <span>Path</span>\n            <input type=\"file\">\n          </div>\n          <div class=\"file-path-wrapper\">\n            <input class=\"file-path validate\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6 offset-s3\">\n            <a class=\"waves-effect waves-light btn green darken-4\">Save</a>\n            <a class=\"waves-effect waves-light btn grey lighten-1\">Clear</a>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"modal-footer\">\n                <a class=\"modal-action modal-close waves-effect waves-green btn\">Close</a>\n            </div> -->\n    </div>\n    <router-outlet></router-outlet>\n    <!--*****************                    START TEST TREE MUEN                   **********************  -->\n    <!-- <div class=\"container\"> -->\n    <!-- <div class=\"row\">\n      <div class=\"well\" style=\"width:25%; padding: 8px 0;\">\n        <div style=\"overflow-y: scroll; overflow-x: hidden; height: 700px;\">\n          <ul class=\"nav nav-list\">\n            <li><label class=\"tree-toggler nav-header\">Master</label>\n              <ul class=\"nav nav-list tree\">\n                <li><label class=\"tree-toggler nav-header\">Master Data</label>\n                  <ul class=\"nav nav-list tree\">\n                    <li><a routerLink=\"/Pmain/company-list\">Company</a></li>\n                    <li><a>Workstation</a></li>\n                    <li><a>Outlet</a></li>\n                    <li><a>Zone</a></li>\n                    <li><a>Shift Group</a></li>\n                    <li><a>Shift</a></li>\n                    <li><label class=\"tree-toggler nav-header\">Decor</label>\n                      <ul class=\"nav nav-list tree\">\n                        <li><a>Decor Type</a></li>\n                        <li><a>Decor Type Status</a></li>\n                        <li><a>Decor</a></li>\n                      </ul>\n                    </li>\n                  </ul>\n                </li>\n                <li><label class=\"tree-toggler nav-header\">Condiment</label>\n                  <ul class=\"nav nav-list tree\">\n                    <li><a>Condiment Group</a></li>\n                    <li><a>Condiment</a></li>\n                  </ul>\n              </ul>\n              </li>\n              <li class=\"divider\"></li>\n              <li><label class=\"tree-toggler nav-header\">Header 2</label>\n                <ul class=\"nav nav-list tree\">\n                  <li><a>Link</a></li>\n                  <li><a>Link</a></li>\n                  <li><label class=\"tree-toggler nav-header\">Header 2.1</label>\n                    <ul class=\"nav nav-list tree\">\n                      <li><a>Link</a></li>\n                      <li><a>Link</a></li>\n                      <li><label class=\"tree-toggler nav-header\">Header 2.1.1</label>\n                        <ul class=\"nav nav-list tree\">\n                          <li><a>Link</a></li>\n                          <li><a>Link</a></li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </li>\n                  <li><label class=\"tree-toggler nav-header\">Header 2.2</label>\n                    <ul class=\"nav nav-list tree\">\n                      <li><a>Link</a></li>\n                      <li><a>Link</a></li>\n                      <li><label class=\"tree-toggler nav-header\">Header 2.2.1</label>\n                        <ul class=\"nav nav-list tree\">\n                          <li><a>Link</a></li>\n                          <li><a>Link</a></li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n              </li>\n          </ul>\n        </div>\n      </div>\n    </div> -->\n    <!-- </div> -->\n    <!--*****************                      END TEST TREE MUEN                   **********************  -->"

/***/ }),

/***/ "../../../../../src/app/page-main/page-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageMainComponent = (function () {
    function PageMainComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
        this.menuListData = [{ "id": "01", "menuname": "A", "mom": "0" },
            { "id": "0101", "menuname": "AA", "mom": "01" },
            { "id": "010101", "menuname": "AAA", "mom": "0101" }];
    }
    PageMainComponent.prototype.ngOnInit = function () {
        // menu tree
        // $(document).ready(function () {
        //   $('label.tree-toggler').click(function () {
        //     $(this).parent().children('ul.tree').toggle(300);
        //   });
        // });
        // end menu tree
        $(document).ready(function () {
            $('.collapsible').collapsible();
        });
        // Model
        $(document).ready(function () {
            // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
            $('.modal').modal();
        });
        $(".button-collapse").sideNav();
    };
    PageMainComponent.prototype.changLang = function () {
        this.currentLang = this.currentLang == "en" ? "th" : "en";
        this.tranService.use(this.currentLang);
    };
    PageMainComponent.prototype.changLangEN = function () {
        // this.currentLang = this.currentLang == "en" ? "th" : "en";
        this.currentLang = "en";
        this.tranService.use(this.currentLang);
    };
    PageMainComponent.prototype.changLangTH = function () {
        this.currentLang = "th";
        this.tranService.use(this.currentLang);
    };
    PageMainComponent.prototype.to_productList = function () {
        this.router.navigate(['Pmain', 'product-list']);
    };
    PageMainComponent.prototype.to_userList = function () {
        this.router.navigate(['Pmain', 'user-list']);
    };
    PageMainComponent.prototype.to_usergroupList = function () {
        this.router.navigate(['Pmain', 'usergroup-list']);
    };
    PageMainComponent.prototype.to_companyList = function () {
        this.router.navigate(['Pmain', 'company-list']);
    };
    PageMainComponent.prototype.toLogin = function () {
        this.router.navigate(['']);
    };
    return PageMainComponent;
}());
PageMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-page-main',
        template: __webpack_require__("../../../../../src/app/page-main/page-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-main/page-main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PageMainComponent);

var _a, _b;
//# sourceMappingURL=page-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>Product / Search</p>\n    <div class=\"row\">\n      <a class=\"waves-effect waves-light btn green darken-4\" (click)=\"onAddbtnClick()\"><i class=\"material-icons center\">add</i></a>\n      <a class=\"waves-effect waves-light btn yellow accent-4\"><i class=\"material-icons center\">edit</i></a>\n      <a class=\"waves-effect waves-light btn deep-orange darken-4\"><i class=\"material-icons center\">delete</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"nav-wrapper teal darken-1\">\n        <form>\n          <div class=\"input-field \">\n            <input id=\"search\" name=\"search\" type=\"search\" required>\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n            <i class=\"material-icons\">search</i>\n          </div>\n\n        </form>\n      </div>\n      <!-- <div class=\"input-field col s10 l10 xl10\">\n        <label for=\"prod_code\">Search</label>\n        <input id=\"prod_code\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s2 l2 xl2\">\n        <a class=\"waves-effect waves-light btn\" align=\"center\">search</a>\n      </div> -->\n      \n    </div>\n    <!-- \n    <div class=\"row\">\n      <div class=\"col s6 l3 xl2\">\n        <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose product type</option>\n          <option *ngFor=\"let prodTyp of prodtypeData; let i=index;\">{{prodTyp}}</option>\n        </select>\n        <label>Product Type</label>\n      </div>\n      <div class=\"col s6 l3 xl2\">\n        <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose product group</option>\n          <option *ngFor=\"let prodTyp of prodtypeData; let i=index;\">{{prodTyp}}</option>\n        </select>\n        <label>Product Group</label>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col s6 l3 xl2\">\n        <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose product subgroup</option>\n          <option *ngFor=\"let prodTyp of prodtypeData; let i=index;\">{{prodTyp}}</option>\n        </select>\n        <label>Product Subgroup</label>\n      </div>\n      <div class=\"col s6 l3 xl2\">\n        <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose inactive</option>\n          <option *ngFor=\"let prodTyp of prodtypeData; let i=index;\">{{prodTyp}}</option>\n        </select>\n        <label>Inactive</label>\n      </div>\n      <div class=\"col s6 l3 xl2\">\n        <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose interface FB costing</option>\n          <option *ngFor=\"let prodTyp of prodtypeData; let i=index;\">{{prodTyp}}</option>\n        </select>\n        <label>Interface FB Costing</label>\n      </div>\n      <div class=\"col s6 l3 xl2\">\n        <a class=\"waves-effect waves-light btn\">search</a>\n      </div>\n    </div> -->\n\n    <div class=\"row\">\n      <table class=\"striped\">\n        <thead>\n          <tr>\n            <th>Product Code</th>\n            <th>Product Name</th>\n            <th>Type</th>\n            <th>Group</th>\n            <th>Sub Group</th>\n            <th>Active</th>\n            <th>FB Costing</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngFor=\"let prod of productData; let i=index;\">\n            <th>{{prod}}</th>\n            <th>{{prod}}</th>\n            <th>{{prod}}</th>\n            <th>{{prod}}</th>\n            <th>{{prod}}</th>\n            <th>{{prod}}</th>\n            <th>{{prod}}</th>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n     <ul class=\"pagination tcenter\">\n      <li class=\"waves-effect\" *ngFor=\"let p of paging;let i = index;\" [ngClass]=\"{'active':i==numPage}\" (click)=\"gotoPage(i);\"><a>{{p}}</a></li>\n    </ul> \n\n    <!-- <div class=\"fixed-action-btn\">\n      <a class=\"btn-floating btn right green darken-4\" (click)=\"onAddbtnClick()\"><i class=\"material-icons\">add</i></a>\n    </div> -->\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = (function () {
    function ProductListComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
        this.productData = [1, 2, 3, 4, 5, 6, 7, 8];
        this.prodtypeData = ["sale type A", "sale type B"];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.tranService.use(this.currentLang);
    };
    ProductListComponent.prototype.onAddbtnClick = function () {
        this.router.navigate(['Pmain', 'product']);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProductListComponent);

var _a, _b;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p{\r\n    border-style:ridge;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>Product / Add</p>\n    <div class=\"row\">\n      <a class=\"btn  light-blue darken-4\"><i class=\"material-icons\">save</i></a>\n      <a class=\"btn red darken-4\"><i class=\"material-icons\">delete</i></a>\n      <a class=\"btn grey darken-1\"><i (click)=\"onCancelbtnClick();\" class=\"material-icons\">cancel</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"prod_code\">Product Code</label>\n        <input id=\"prod_code\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"bar_code\">Bar Code</label>\n        <input id=\"bar_code\" type=\"text\" class=\"validate\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"input-field col s12 l12 xl12\">\n        <ul class=\"tabs light-blue darken-1\">\n          <li class=\"tab col s4\"><a class=\"active\" href=\"#tab1\">General</a></li>\n          <li class=\"tab col s4\"><a href=\"#tab2\">Pictuer and Condiment</a></li>\n          <li class=\"tab col s4\"><a href=\"#tab3\">Product Print</a></li>\n        </ul>\n      </div>\n      <!-- Start Tab General  -->\n      <div id=\"tab1\" class=\"col s12 l12 xl12\">\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"prod_name\">Product Name</label>\n            <input id=\"prod_name\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"prod_name1\">Product Name1</label>\n            <input id=\"prod_name1\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"prod_desc\">Product Description</label>\n            <input id=\"prod_desc\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"prod_name2\">Product Name2</label>\n            <input id=\"prod_name2\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose product Type</option>\n          <option *ngFor=\"let prodTyp of prodtypeData; let i=index;\">{{prodTyp}}</option>\n         </select>\n            <label>Product Type</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"prod_name3\">Product Name3</label>\n            <input id=\"prod_name3\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose product group</option>\n          <option *ngFor=\"let prodTyp of prodtypeData; let i=index;\">{{prodTyp}}</option>\n         </select>\n            <label>Product Group</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"prod_name4\">Product Name4</label>\n            <input id=\"prod_name4\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose product subgroup</option>\n          <option *ngFor=\"let prodTyp of prodtypeData; let i=index;\">{{prodTyp}}</option>\n         </select>\n            <label>Product SubGroup</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"prod_name5\">Product Name5</label>\n            <input id=\"prod_name5\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"price\">Price</label>\n            <input id=\"price\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"cost\">Cost</label>\n            <input id=\"cost\" type=\"text\" class=\"validate\">\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <select materialize=\"material_select\"> \n            <option value=\"\" disabled selected>Choose biil company</option>\n            <option *ngFor=\"let prodTyp of prodtypeData; let i=index;\">{{prodTyp}}</option>\n          </select>\n            <label>Bill company</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <select materialize=\"material_select\"> \n            <option value=\"\" disabled selected>Choose owner company</option>\n            <option *ngFor=\"let prodTyp of prodtypeData; let i=index;\">{{prodTyp}}</option>\n          </select>\n            <label>Owner company</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose oder type</option>\n          <option *ngFor=\"let prodTyp of prodtypeData; let i=index;\">{{prodTyp}}</option>\n         </select>\n            <label>Oder Type</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose default backgroud</option>\n          <option *ngFor=\"let prodTyp of prodtypeData; let i=index;\">{{prodTyp}}</option>\n         </select>\n            <label>Default Backgroud</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s6 l6 xl6\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"intf_fb_cost\" />\n            <label for=\"intf_fb_cost\">Interface FB Costing</label>\n          </div>\n          <div class=\"col s6 l6 xl6\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"req_resource\" />\n            <label for=\"req_resource\">Request resource</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"intf_code\">Interface Code</label>\n            <input id=\"intf_code\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"row\">\n            <p>Set product print</p>\n            <div class=\"col s6 l6 xl6\">\n              <input type=\"checkbox\" class=\"filled-in\" id=\"p_kit\" />\n              <label for=\"p_kit\">Printer Kitchen</label>\n              <input type=\"checkbox\" class=\"filled-in\" id=\"p_inv\" />\n              <label for=\"p_inv\">Printer invoice</label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- End Tab General  -->\n      <!-- Start Tab Picture and Condiment  -->\n      <div id=\"tab2\" class=\"col s12 l12 xl12\">\n        <br>\n        <div class=\"row\">\n          <div class=\"col s6 l6 xl6 offset-s3 offset-l3 offset-xl3 p\">\n            <div class=\"card\">\n              <div class=\"card-image\">\n                <img src=\"./assets/images/pork-steak-02.jpg\">\n                <span class=\"card-title\">Card Title</span>\n                <div class=\"file-field input-field\">\n                  <div class=\"btn\">\n                    <span>Upload</span>\n                    <input type=\"file\" name=\"avatar\" multiple><i class=\"material-icons\">file_upload</i>\n                  </div>\n                  <div class=\"file-path-wrapper\">\n                    <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload File Pictuer\">\n                  </div>\n                </div>\n                <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">delete</i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- End Tab Picture and Condiment  -->\n      <!-- Start Tab Product Print  -->\n      <div id=\"tab3\" class=\"col s12 l12 xl12\">\n        <br>\n        <div class=\"col s6 l6 xl6\">\n          <a class=\"waves-effect waves-light btn green darken-4\"><i class=\"material-icons center\">add</i></a>\n          <a class=\"waves-effect waves-light btn yellow accent-4\"><i class=\"material-icons center\">edit</i></a>\n          <a class=\"waves-effect waves-light btn deep-orange darken-4\"><i class=\"material-icons center\">delete</i></a>\n        </div>\n        <table class=\"highlight\">\n          <thead>\n            <tr>\n              <th>Outlet Name</th>\n              <th>Zone Name</th>\n              <th>Shift Name</th>\n              <th>Printer Name</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Gotto</td>\n              <td>Zone1</td>\n              <td>Dinner</td>\n              <td>Snagit12</td>\n            </tr>\n            <tr>\n              <td>Bakery</td>\n              <td>Zone2</td>\n              <td>Luanch</td>\n              <td>Snagit12</td>\n            </tr>\n            <tr>\n              <td>Coffe Bar</td>\n              <td>Zone3</td>\n              <td>Luanch</td>\n              <td>Snagit12</td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n      <!-- End Tab Product Print  -->\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = (function () {
    function ProductComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
        this.prodtypeData = ["Type A", "Type B"];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.tranService.use(this.currentLang);
        $(document).ready(function () {
            $('ul.tabs').tabs();
        });
    };
    ProductComponent.prototype.onCancelbtnClick = function () {
        this.router.navigate(['Pmain', 'product-list']);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProductComponent);

var _a, _b;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/shift-group/shift-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shift-group/shift-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>Shift Group</p>\n    <div class=\"row\">\n      <a class=\"btn  light-blue darken-4\"><i class=\"material-icons\">save</i></a>\n      <!-- <a class=\"btn red darken-4\"><i class=\"material-icons\">delete</i></a> -->\n      <a class=\"btn grey darken-1\"><i class=\"material-icons\">cancel</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"nav-wrapper teal darken-1\">\n        <form>\n          <div class=\"input-field \">\n            <input id=\"search\" name=\"search\" type=\"search\" required>\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n            <i class=\"material-icons\">search</i>\n          </div>\n\n        </form>\n      </div>\n      <!-- <div class=\"input-field col s7 m9 l10 xl10\">\n        <label for=\"user_search\">Search</label>\n        <input id=\"user_search\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s2 m2 l2 xl2\">\n        <a class=\"waves-effect waves-light btn\" align=\"center\">Search</a>\n      </div> -->\n    </div>\n\n    <div class=\"row\">\n      <table class=\"highlight\">\n        <thead>\n          <tr>\n            <th>Code</th>\n            <th>Name</th>\n            <th class=\"center\">Active</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>1</td>\n            <td><input id=\"shift_group\" type=\"text\" class=\"validate\"></td>\n            <td class=\"center\"> <input type=\"checkbox\" class=\"filled-in\" id=\"filled-in-box1\" />\n              <label for=\"filled-in-box1\"></label></td>\n          </tr>\n          <tr>\n            <td>2</td>\n            <td><input id=\"shift_group\" type=\"text\" class=\"validate\"></td>\n            <td class=\"center\"> <input type=\"checkbox\" class=\"filled-in\" id=\"filled-in-box2\" />\n              <label for=\"filled-in-box2\"></label></td>\n          </tr>\n          <tr>\n            <td>3</td>\n            <td><input id=\"shift_group\" type=\"text\" class=\"validate\"></td>\n            <td class=\"center\"> <input type=\"checkbox\" class=\"filled-in\" id=\"filled-in-box3\" />\n              <label for=\"filled-in-box3\"></label></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ul class=\"pagination tcenter\">\n      <li class=\"waves-effect\" *ngFor=\"let p of paging;let i = index;\" [ngClass]=\"{'active':i==numPage}\" (click)=\"gotoPage(i);\"><a>{{p}}</a></li>\n    </ul>\n\n    <!-- <div class=\"fixed-action-btn\">\n      <a class=\"btn-floating btn right green darken-4\" (click)=\"onAddbtnClick()\"><i class=\"material-icons\">add</i></a>\n    </div> -->\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shift-group/shift-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShiftGroupComponent = (function () {
    function ShiftGroupComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
        this.shiftGroup = [{ "Code": "1", "Name": "Period 1", "Active": "active" }, { "Code": "2", "Name": "Period 2", "Active": "active" }];
    }
    ShiftGroupComponent.prototype.ngOnInit = function () {
        this.tranService.use(this.currentLang);
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
        this.tranService.use(this.currentLang);
    };
    return ShiftGroupComponent;
}());
ShiftGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-shift-group',
        template: __webpack_require__("../../../../../src/app/shift-group/shift-group.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shift-group/shift-group.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ShiftGroupComponent);

var _a, _b;
//# sourceMappingURL=shift-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/shift-list/shift-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shift-list/shift-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>Shift / Search</p>\n    <div class=\"row\">\n      <a class=\"waves-effect waves-light btn green darken-4\" routerLink=\"/Pmain/shift\"><i class=\"material-icons center\">add</i></a>\n      <a class=\"waves-effect waves-light btn yellow accent-4\"><i class=\"material-icons center\">edit</i></a>\n      <a class=\"waves-effect waves-light btn deep-orange darken-4\"><i class=\"material-icons center\">delete</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"nav-wrapper teal darken-1\">\n        <form>\n          <div class=\"input-field \">\n            <input id=\"search\" name=\"search\" type=\"search\" required>\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n            <i class=\"material-icons\">search</i>\n          </div>\n\n        </form>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <table class=\"highlight\">\n        <thead>\n          <tr>\n            <th>Shift Code</th>\n            <th>Shift Name</th>\n            <th>Outlet Name</th>\n            <th>Start Time</th>\n            <th>End Time</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>01</td>\n            <td>GC Breakfast</td>\n            <td>Grand Cafe</td>\n            <td>02:01:00</td>\n            <td>11:00:00</td>\n          </tr>\n          <tr>\n            <td>02</td>\n            <td>GC Dinner</td>\n            <td>Grand Cafe</td>\n            <td>17:00:01</td>\n            <td>01:59:00</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ul class=\"pagination tcenter\">\n      <li class=\"waves-effect\" *ngFor=\"let p of paging;let i = index;\" [ngClass]=\"{'active':i==numPage}\" (click)=\"gotoPage(i);\"><a>{{p}}</a></li>\n    </ul>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shift-list/shift-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShiftListComponent = (function () {
    function ShiftListComponent() {
    }
    ShiftListComponent.prototype.ngOnInit = function () {
    };
    return ShiftListComponent;
}());
ShiftListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-shift-list',
        template: __webpack_require__("../../../../../src/app/shift-list/shift-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shift-list/shift-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ShiftListComponent);

//# sourceMappingURL=shift-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/shift/shift.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shift/shift.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/shift/shift.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShiftComponent = (function () {
    function ShiftComponent() {
    }
    ShiftComponent.prototype.ngOnInit = function () {
    };
    return ShiftComponent;
}());
ShiftComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-shift',
        template: __webpack_require__("../../../../../src/app/shift/shift.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shift/shift.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ShiftComponent);

//# sourceMappingURL=shift.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".default-button{\r\n    height: 50px;\r\n    width: 90px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>User / Search</p>\n    <div class=\"row\">\n      <a class=\"waves-effect waves-light btn green darken-4\" (click)=\"onAddbtnClick()\"><i class=\"material-icons center\">add</i></a>\n      <a class=\"waves-effect waves-light btn yellow accent-4\"><i class=\"material-icons center\">edit</i></a>\n      <a class=\"waves-effect waves-light btn deep-orange darken-4\"><i class=\"material-icons center\">delete</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"nav-wrapper teal darken-1\">\n        <form>\n          <div class=\"input-field \">\n            <input id=\"search\" name=\"search\" type=\"search\" required>\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n            <i class=\"material-icons\">search</i>\n          </div>\n\n        </form>\n      </div>\n      <!-- <div class=\"input-field col s7 m9 l10 xl10\">\n        <label for=\"user_search\">Search</label>\n        <input id=\"user_search\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s2 m2 l2 xl2\">\n        <a class=\"waves-effect waves-light btn\" align=\"center\">search</a>\n      </div> -->\n    </div>\n\n    <div class=\"row\">\n      <table class=\"highlight\">\n        <thead>\n          <tr>\n            <th>Login Name</th>\n            <th>Activated</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>his</td>\n            <td><i class=\"material-icons\">check_box</i></td>\n          </tr>\n          <tr>\n            <td>admin</td>\n            <td><i class=\"material-icons\">check_box</i></td>\n          </tr>\n          <tr>\n            <td>nsjoy</td>\n            <td><i class=\"material-icons\">check_box_outline_blank</i></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ul class=\"pagination tcenter\">\n      <li class=\"waves-effect\" *ngFor=\"let p of paging;let i = index;\" [ngClass]=\"{'active':i==numPage}\" (click)=\"gotoPage(i);\"><a>{{p}}</a></li>\n    </ul>\n\n    <!-- <div class=\"fixed-action-btn\">\n      <a class=\"btn-floating btn right green darken-4\" (click)=\"onAddbtnClick()\"><i class=\"material-icons\">add</i></a>\n    </div> -->\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.tranService.use(this.currentLang);
    };
    UserListComponent.prototype.onAddbtnClick = function () {
        this.router.navigate(['Pmain', 'user']);
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserListComponent);

var _a, _b;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>User / Add</p>\n    <div class=\"row\">\n      <a class=\"btn  light-blue darken-4\"><i class=\"material-icons\">save</i></a>\n      <a class=\"btn red darken-4\"><i class=\"material-icons\">delete</i></a>\n      <a class=\"btn grey darken-1\"><i (click)=\"onCancelbtnClick();\" class=\"material-icons\">cancel</i></a>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"input-field col s12 l12 xl12\">\n        <img class=\"materialboxed\" width=\"140\" src=\"./assets/images/people.png\">\n      </div>\n    </div>\n    <!-- <div class=\"row\">\n      <div class=\"file-field input-field\">\n        <div class=\"btn\">\n          <span>Upload</span>\n          <input type=\"file\" name=\"avatar\" multiple><i class=\"material-icons\">file_upload</i>\n        </div>\n        <div class=\"file-path-wrapper\">\n          <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload File Pictuer\">\n        </div>\n      </div>\n    </div> -->\n\n    <div class=\"row\">\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"username\">Username</label>\n        <input id=\"username\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s6 l6 xl6\">\n        <a class=\"btn\">Check username</a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col s6 l6 xl6\">\n        <input type=\"checkbox\" class=\"filled-in\" id=\"chkeditpass\" />\n        <label for=\"chkeditpass\">Edit password</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"password\">Password</label>\n        <input id=\"password\" type=\"password\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"conf_password\">Confirm Password</label>\n        <input id=\"conf_password\" type=\"password\" class=\"validate\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"fname\">First Name</label>\n        <input id=\"fname\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"lname\">Last Name</label>\n        <input id=\"lname\" type=\"text\" class=\"validate\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <form class=\"col s6 l6 xl6\">\n        <div class=\"row\">\n          <div class=\"input-field col s12 l12 xl12\">\n            <textarea id=\"textarea1\" class=\"materialize-textarea\"></textarea>\n            <label for=\"textarea1\">Address 1</label>\n          </div>\n        </div>\n      </form>\n      <form class=\"col s6 l6 xl6\">\n        <div class=\"row\">\n          <div class=\"input-field col s12 l12 xl12\">\n            <textarea id=\"textarea2\" class=\"materialize-textarea\"></textarea>\n            <label for=\"textarea2\">Address 2</label>\n          </div>\n        </div>\n      </form>\n\n      <!-- <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"address1\">Address 1</label>\n        <input id=\"address1\" type=\"text\" class=\"validate\">\n      </div> -->\n      <!-- <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"address2\">Address 2</label>\n        <input id=\"address2\" type=\"text\" class=\"validate\">\n      </div> -->\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"tel\">Telephone</label>\n        <input id=\"tel\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s6 l6 xl6\">\n        <label for=\"mobile\">Mobile</label>\n        <input id=\"mobile\" type=\"text\" class=\"validate\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"input-field col s6 l6 xl6\">\n        <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose User group</option>\n          <option *ngFor=\"let ugroup of usergroupData; let i=index;\">{{ugroup}}</option>\n         </select>\n        <label>User Group</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col s6 l6 xl6\">\n        <input type=\"checkbox\" class=\"filled-in\" id=\"chkactivate\" />\n        <label for=\"chkactivate\">Active</label>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
        this.usergroupData = ["Administrator", "User admin", "Manager", "Cashier", "Waiter"];
    }
    UserComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
        this.tranService.use(this.currentLang);
    };
    UserComponent.prototype.onCancelbtnClick = function () {
        this.router.navigate(['Pmain', 'user-list']);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/usergroup-list/usergroup-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usergroup-list/usergroup-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>User group / Search</p>\n    <div class=\"row\">\n      <a class=\"waves-effect waves-light btn green darken-4\" (click)=\"onAddbtnClick()\"><i class=\"material-icons center\">add</i></a>\n      <a class=\"waves-effect waves-light btn yellow accent-4\"><i class=\"material-icons center\">edit</i></a>\n      <a class=\"waves-effect waves-light btn deep-orange darken-4\"><i class=\"material-icons center\">delete</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"nav-wrapper teal darken-1\">\n        <form>\n          <div class=\"input-field \">\n            <input id=\"search\" name=\"search\" type=\"search\" required>\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n            <i class=\"material-icons\">search</i>\n          </div>\n\n        </form>\n      </div>\n      <!-- <div class=\"input-field col s10 l10 xl10\">\n        <label for=\"user_search\">Search</label>\n        <input id=\"user_search\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s2 l2 xl2\">\n        <a class=\"waves-effect waves-light btn\" align=\"center\">search</a>\n      </div> -->\n    </div>\n\n    <div class=\"row\">\n      <table class=\"highlight\">\n        <thead>\n          <tr>\n            <th>Group name</th>\n            <th>Active</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Adminstrator</td>\n            <td><i class=\"material-icons\">check_box</i></td>\n          </tr>\n          <tr>\n            <td>Admin</td>\n            <td><i class=\"material-icons\">check_box</i></td>\n          </tr>\n          <tr>\n            <td>Manager</td>\n            <td><i class=\"material-icons\">check_box_outline_blank</i></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ul class=\"pagination tcenter\">\n      <li class=\"waves-effect\" *ngFor=\"let p of paging;let i = index;\" [ngClass]=\"{'active':i==numPage}\" (click)=\"gotoPage(i);\"><a>{{p}}</a></li>\n    </ul>\n\n    <!-- <div class=\"fixed-action-btn\">\n      <a class=\"btn-floating btn right green darken-4\" (click)=\"onAddbtnClick()\"><i class=\"material-icons\">add</i></a>\n    </div> -->\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/usergroup-list/usergroup-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsergroupListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsergroupListComponent = (function () {
    function UsergroupListComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
    }
    UsergroupListComponent.prototype.ngOnInit = function () {
        this.tranService.use(this.currentLang);
    };
    UsergroupListComponent.prototype.onAddbtnClick = function () {
        this.router.navigate(['Pmain', 'usergroup']);
    };
    return UsergroupListComponent;
}());
UsergroupListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-usergroup-list',
        template: __webpack_require__("../../../../../src/app/usergroup-list/usergroup-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/usergroup-list/usergroup-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UsergroupListComponent);

var _a, _b;
//# sourceMappingURL=usergroup-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/usergroup/usergroup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margintop{\r\n    margin-top: 5%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usergroup/usergroup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>User group / Add</p>\n    <div class=\"row\">\n      <a class=\"btn  light-blue darken-4\"><i class=\"material-icons\">save</i></a>\n      <a class=\"btn red darken-4\"><i class=\"material-icons\">delete</i></a>\n      <a class=\"btn grey darken-1\"><i (click)=\"onCancelbtnClick();\" class=\"material-icons\">cancel</i></a>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"input-field col s10 l10 xl10\">\n        <label for=\"Gname\">Group Name</label>\n        <input id=\"Gname\" type=\"text\" class=\"validate\">\n      </div>\n\n      <div class=\"col s2 l2 xl2 margintop\">\n        <input type=\"checkbox\" class=\"filled-in\" id=\"chkactive\" />\n        <label for=\"chkactive\">Active</label>\n      </div>\n\n      <div class=\"row\">\n        <table class=\"highlight\">\n          <thead>\n            <tr>\n              <th>PPID</th>\n              <th>Permission Name</th>\n              <th>Active</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>10001</td>\n              <td>New Order</td>\n              <td><input type=\"checkbox\" class=\"filled-in\" id=\"chkactive1\" />\n                <label for=\"chkactive1\"></label></td>\n            </tr>\n            <tr>\n              <td>10002</td>\n              <td>Close Check</td>\n              <td><input type=\"checkbox\" class=\"filled-in\" id=\"chkactive2\" />\n                <label for=\"chkactive2\"></label></td>\n            </tr>\n            <tr>\n              <td>10003</td>\n              <td>Re-Open Bill On Order Date</td>\n              <td><input type=\"checkbox\" class=\"filled-in\" id=\"chkactive3\" />\n                <label for=\"chkactive3\"></label></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/usergroup/usergroup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsergroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsergroupComponent = (function () {
    function UsergroupComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.currentLang = "en";
    }
    UsergroupComponent.prototype.ngOnInit = function () {
        this.tranService.use(this.currentLang);
    };
    UsergroupComponent.prototype.onCancelbtnClick = function () {
        this.router.navigate(['Pmain', 'usergroup-list']);
    };
    return UsergroupComponent;
}());
UsergroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-usergroup',
        template: __webpack_require__("../../../../../src/app/usergroup/usergroup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/usergroup/usergroup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UsergroupComponent);

var _a, _b;
//# sourceMappingURL=usergroup.component.js.map

/***/ }),

/***/ "../../../../../src/app/workstation-list/workstation-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/workstation-list/workstation-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>WorkStation / Search</p>\n    <div class=\"row\">\n      <a class=\"waves-effect waves-light btn green darken-4\" routerLink=\"/Pmain/workstation\"><i class=\"material-icons center\">add</i></a>\n      <a class=\"waves-effect waves-light btn yellow accent-4\"><i class=\"material-icons center\">edit</i></a>\n      <a class=\"waves-effect waves-light btn deep-orange darken-4\"><i class=\"material-icons center\">delete</i></a>\n    </div>\n    <div class=\"row\">\n      <div class=\"nav-wrapper teal darken-1\">\n        <form>\n          <div class=\"input-field \">\n            <input id=\"search\" name=\"search\" type=\"search\" required>\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n            <i class=\"material-icons\">search</i>\n          </div>\n\n        </form>\n      </div>\n      <!-- <div class=\"input-field col s7 m9 l10 xl10\">\n        <label for=\"user_search\">Search</label>\n        <input id=\"user_search\" type=\"text\" class=\"validate\">\n      </div>\n      <div class=\"input-field col s2 m2 l2 xl2\">\n        <a class=\"waves-effect waves-light btn\" align=\"center\">search</a>\n      </div> -->\n    </div>\n\n    <div class=\"row\">\n      <table class=\"highlight\">\n        <thead>\n          <tr>\n            <th>WorkStation Code</th>\n            <th>WorkStation Name</th>\n            <th>Outlet Name</th>\n            <th>Active</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>01</td>\n            <td>Grand Cafe Cashier</td>\n            <td>Grand Cafe</td>\n            <td><i class=\"material-icons\">check_box</i></td>\n          </tr>\n          <tr>\n            <td>02</td>\n            <td>Room Service</td>\n            <td>Room Service</td>\n            <td><i class=\"material-icons\">check_box</i></td>\n          </tr>\n          <tr>\n            <td>03</td>\n            <td>Pool Bar</td>\n            <td>Pool Bar</td>\n            <td><i class=\"material-icons\">check_box_outline_blank</i></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ul class=\"pagination tcenter\">\n      <li class=\"waves-effect\" *ngFor=\"let p of paging;let i = index;\" [ngClass]=\"{'active':i==numPage}\" (click)=\"gotoPage(i);\"><a>{{p}}</a></li>\n    </ul>\n\n    <!-- <div class=\"fixed-action-btn\">\n      <a class=\"btn-floating btn right green darken-4\" (click)=\"onAddbtnClick()\"><i class=\"material-icons\">add</i></a>\n    </div> -->\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/workstation-list/workstation-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkstationListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkstationListComponent = (function () {
    function WorkstationListComponent() {
    }
    WorkstationListComponent.prototype.ngOnInit = function () {
    };
    return WorkstationListComponent;
}());
WorkstationListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-workstation-list',
        template: __webpack_require__("../../../../../src/app/workstation-list/workstation-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/workstation-list/workstation-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WorkstationListComponent);

//# sourceMappingURL=workstation-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/workstation/workstation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".martop{\r\n    margin-top: 4%;\r\n}\r\n.p{\r\n    border-style:ridge;\r\n    \r\n}\r\n.text{\r\n    font-weight: bold;\r\n    margin-bottom: 7px;\r\n    margin-top: 7px;\r\n    margin-right: 2px;\r\n    margin-left: 2px;\r\n}\r\n.text-2{\r\n    font-weight: bold;\r\n    margin-bottom: 7px;\r\n    margin-top: 7px;\r\n    margin-right: 2px;\r\n    margin-left: 2px;\r\n    font-size: 18px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/workstation/workstation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <form class=\"col s12 l9 xl10 offset-l3 offset-xl2\">\n    <p>WorkStation / Add</p>\n    <div class=\"row\">\n      <a class=\"btn  light-blue darken-4\"><i class=\"material-icons\">save</i></a>\n      <a class=\"btn red darken-4\"><i class=\"material-icons\">delete</i></a>\n      <a class=\"btn grey darken-1\"><i routerLink=\"/Pmain/workstation-list/\" class=\"material-icons\">cancel</i></a>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <ul class=\"tabs tabs-fixed-width light-blue darken-1\">\n          <li class=\"tab col s3\"><a class=\"active\" href=\"#test1\">General</a></li>\n          <li class=\"tab col s3\"><a href=\"#test2\">Printer Bill</a></li>\n\n        </ul>\n      </div>\n      <!-- Start Tab General  -->\n      <div id=\"test1\" class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s4 l4 xl4\">\n            <label for=\"wsCode\">WorkStation Code</label>\n            <input id=\"wsCode\" type=\"text\" class=\"validate\">\n          </div>\n\n          <div class=\"col s2 l2 xl2 martop\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"chkactivate\" />\n            <label for=\"chkactivate\">Active</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"wsName\">WorkStation Name</label>\n            <input id=\"wsName\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"wsDesc\">WorkStation Description</label>\n            <input id=\"wswsDescCode\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose WorkStation Type</option>\n          <option id=\"1\">Desktop Cashier</option>\n          <option id=\"2\">Desktop Take Order</option>\n          <option id=\"3\">Terminal Box</option>\n         </select>\n            <label>WorkStation Type</label>\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose Company</option>\n          <option id=\"1\">BOSTON PARK Co., LTD. </option>\n         </select>\n            <label>Company Name</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"uncname\">UNC Name</label>\n            <input id=\"uncname\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"maxAdd\">Max Address</label>\n            <input id=\"maxAdd\" type=\"text\" class=\"validate\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <select materialize=\"material_select\"> \n          <option value=\"\" disabled selected>Choose Default Outlet</option>\n          <option id=\"1\">Grand Cafe</option>\n          <option id=\"2\">Room Service</option>\n          <option id=\"3\">Pool Bar</option>\n         </select>\n            <label>Default Outlet</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col s6 l6 xl6 p\">\n            <p>Outlet</p>\n            <p>\n              <input type=\"checkbox\" class=\"filled-in\" id=\"chkGCF\" [checked]=\"chkAll\" />\n              <label for=\"chkGCF\">Grand Cafe</label>\n            </p>\n            <p>\n              <input type=\"checkbox\" class=\"filled-in\" id=\"chkRSV\" [checked]=\"chkAll\" />\n              <label for=\"chkRSV\">Room Service</label>\n            </p>\n            <p>\n              <input type=\"checkbox\" class=\"filled-in\" id=\"chkPB\" [checked]=\"chkAll\" />\n              <label for=\"chkPB\">Pool Bar</label>\n            </p>\n            <p class=\"center\">\n              <a class=\"btn\" (click)=\"chkOutletAll();\"><i class=\"material-icons\">check_box</i></a>\n              <a class=\"btn\" (click)=\"chkOutletUnAll();\"><i class=\"material-icons\">check_box_outline_blank</i></a>\n            </p>\n            <br>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"rd\">#RD</label>\n            <input id=\"rd\" type=\"text\" class=\"validate\">\n          </div>\n\n          <div class=\"col s6 l6 xl6 martop\">\n            <input type=\"checkbox\" class=\"filled-in\" id=\"chkHCD\" />\n            <label for=\"chkHCD\">Have Cash Drawer</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <label for=\"cpuid\">CPU ID</label>\n            <input id=\"cpuid\" type=\"text\" class=\"validate\">\n          </div>\n          <div class=\"input-field col s6 l6 xl6\">\n            <a class=\"btn\">clear</a>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s6 l6 xl6\">\n            <textarea id=\"textarea1\" class=\"materialize-textarea\"></textarea>\n            <label for=\"textarea1\">Memo</label>\n          </div>\n\n        </div>\n\n      </div>\n      <!-- Start Tab Printer Bill  -->\n      <div id=\"test2\" class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"col s12 l12 xl12 p\">\n\n            <span class=\"left text-2\">Printer Event</span>\n            <br>\n            <div class=\"row\">\n              <div class=\"col s12\">\n                <ul class=\"tabs tabs-fixed-width  grey lighten-1\">\n                  <li class=\"tab col s3\"><a class=\"active\" href=\"#guest_check\">Guest Check</a></li>\n                  <li class=\"tab col s3\"><a href=\"#payment\">Payment</a></li>\n                  <li class=\"tab col s3\"><a href=\"#full_tax\">Full Tax</a></li>\n                </ul>\n              </div>\n              <div id=\"guest_check\" class=\"col s12\">\n                <div class=\"col s12 l12 xl12\">\n                  <table>\n                    <thead>\n                      <tr>\n                        <th>Printer Evet</th>\n                        <th>Printer Name</th>\n                        <th>Qty</th>\n                      </tr>\n                    </thead>\n                  </table>\n                </div>\n              </div>\n              <div id=\"payment\" class=\"col s12\">\n                <div class=\"col s12 l12 xl12\">\n                  <table>\n                    <thead>\n                      <tr>\n                        <th>Printer Evet</th>\n                        <th>Printer Name</th>\n                        <th>Qty</th>\n                      </tr>\n                    </thead>\n                  </table>\n                </div>\n              </div>\n              <div id=\"full_tax\" class=\"col s12\">\n                <div class=\"col s12 l12 xl12\">\n                  <table>\n                    <thead>\n                      <tr>\n                        <th>Printer Evet</th>\n                        <th>Printer Name</th>\n                        <th>Qty</th>\n                      </tr>\n                    </thead>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"divider\"></div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col s12 l12 xl12 offset-l4\">\n            <a class=\"waves-effect waves-light btn green darken-4\"><i class=\"material-icons left\">add</i>Add</a>\n            <a class=\"waves-effect waves-light btn deep-orange darken-4\"><i class=\"material-icons left\">delete</i>Delete</a>\n          </div>\n        </div>\n\n\n\n        <!-- <div class=\"row\">\n          <div class=\"col s4 l4 xl4 p\">\n            <span class=\"left\">Printer Event</span>\n            <br>\n            <div class=\"collection\">\n              <a class=\"collection-item btn\">Guest Check</a>\n              <a class=\"collection-item btn\">Payment</a>\n              <a class=\"collection-item btn\">Journal</a>\n            </div>\n          </div>\n          <div class=\"col s8 l8 xl8 p\">\n            <table>\n              <thead>\n                <tr>\n                  <th>Printer Event</th>\n                  <th>Printer Name</th>\n                  <th>Qty</th>\n                </tr>\n              </thead>\n\n              <tbody>\n                <tr>\n                  <td>Guest Check</td>\n                  <td>\n                    <div class=\"input-field col s12\">\n                      <select>\n                        <option value=\"1\">Cashier</option>\n                        <option value=\"2\">Bar</option>\n                        <option value=\"3\">Kitchen</option>\n                      </select>\n                    </div>\n                  </td>\n                  <td><label for=\"txt\"></label>\n                    <input id=\"txt\" type=\"text\" class=\"validate\"></td>\n                </tr>\n              </tbody>\n            </table>\n            <div class=\"col s6 l6 xl6 offset-s4 offset-l4 offset-xl4\">\n              <a class=\"waves-effect waves-light btn green darken-4\"><i class=\"material-icons\">add</i></a>\n              <a class=\"waves-effect waves-light btn deep-orange darken-4\"><i class=\"material-icons\">delete</i></a>\n            </div>\n          </div>\n\n        </div> -->\n      </div>\n\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/workstation/workstation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkstationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkstationComponent = (function () {
    function WorkstationComponent(tranService, router) {
        this.tranService = tranService;
        this.router = router;
        this.chkAll = "";
        this.currentLang = "en";
    }
    WorkstationComponent.prototype.ngOnInit = function () {
        this.tranService.use(this.currentLang);
        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });
        $(document).ready(function () {
            $('ul.tabs').tabs();
        });
        $(document).ready(function () {
            $('select').material_select();
        });
    };
    WorkstationComponent.prototype.chkOutletAll = function () {
        this.chkAll = "checked";
    };
    WorkstationComponent.prototype.chkOutletUnAll = function () {
        this.chkAll = "";
    };
    return WorkstationComponent;
}());
WorkstationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-workstation',
        template: __webpack_require__("../../../../../src/app/workstation/workstation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/workstation/workstation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], WorkstationComponent);

var _a, _b;
//# sourceMappingURL=workstation.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map