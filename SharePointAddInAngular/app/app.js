webpackJsonp([1],{

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(23);
var platform_browser_1 = __webpack_require__(58);
var app_component_1 = __webpack_require__(199);
var common_1 = __webpack_require__(57);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        providers: [
            {
                provide: common_1.APP_BASE_HREF, useValue: '/'
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(23);
__webpack_require__(350);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: __webpack_require__(352),
        styles: [__webpack_require__(353)]
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 350:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/angular.9db278d630f5fabd8e7ba16c2e329a3a.png";

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<main>\r\n    <h1>Hello from Angular App with Webpack</h1>\r\n    <img src=\"" + __webpack_require__(351) + "\">\r\n</main>";

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = "main {\r\n    padding: 1em;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    display: block;\r\n}\r\n"

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(88);
var core_1 = __webpack_require__(23);
var app_module_1 = __webpack_require__(192);
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ })

},[618]);
//# sourceMappingURL=app.js.map