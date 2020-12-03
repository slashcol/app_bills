function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./src/app/services/guards/auth.guard.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/guards/auth.guard.ts ***!
    \***********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user */
    "./src/app/services/user.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (!_user__WEBPACK_IMPORTED_MODULE_2__["User"].getCurrent()) {
            this.router.navigate(['1']);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs.router.module */
    "./src/app/tabs/tabs.router.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TabsPageModule
    });
    TabsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TabsPageModule_Factory(t) {
        return new (t || TabsPageModule)();
      },
      imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsPageModule, {
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
          declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_preference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/preference */
    "./src/app/services/preference.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function TabsPage_ion_tab_bar_1_ion_badge_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-badge", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.preference.cartCount, " ");
      }
    }

    function TabsPage_ion_tab_bar_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tab-bar", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-tab-button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsPage_ion_tab_bar_1_Template_ion_tab_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.handleTabClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsPage_ion_tab_bar_1_Template_ion_tab_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.handleTabClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-tab-button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsPage_ion_tab_bar_1_Template_ion_tab_button_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.handleTabClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ion-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TabsPage_ion_tab_bar_1_ion_badge_16_Template, 2, 1, "ion-badge", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-tab-button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsPage_ion_tab_bar_1_Template_ion_tab_button_click_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.handleTabClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ion-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "HOME"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "CATEGORIES"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "CART"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.preference.cartCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 11, "ACCOUNT"));
      }
    }

    function TabsPage_ion_tab_bar_2_ion_badge_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-badge", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.preference.cartCount, " ");
      }
    }

    function TabsPage_ion_tab_bar_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tab-bar", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-tab-button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsPage_ion_tab_bar_2_Template_ion_tab_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.handleTabClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsPage_ion_tab_bar_2_Template_ion_tab_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.handleTabClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-tab-button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsPage_ion_tab_bar_2_Template_ion_tab_button_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.handleTabClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ion-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TabsPage_ion_tab_bar_2_ion_badge_16_Template, 2, 1, "ion-badge", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-tab-button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsPage_ion_tab_bar_2_Template_ion_tab_button_click_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.handleTabClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ion-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "HOME"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "CATEGORIES"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "CART"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.preference.cartCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 11, "ACCOUNT"));
      }
    }

    var TabsPage = function TabsPage(platform, preference) {
      var _this = this;

      _classCallCheck(this, TabsPage);

      this.platform = platform;
      this.preference = preference;
      this.resetStackTabs = ['home', 'browse', 'cart', 'account'];

      this.handleTabClick = function (event) {
        var _event$composedPath$f = event.composedPath().find(function (element) {
          return element.tagName === 'ION-TAB-BUTTON';
        }),
            tab = _event$composedPath$f.tab;

        var deep = 1;
        var canGoBack = false;

        var deepFn = function deepFn() {
          if (_this.tabs.outlet.canGoBack(deep, tab)) {
            canGoBack = true;
            deep++;
            deepFn();
          }
        };

        deepFn();

        if (_this.resetStackTabs.includes(tab) && canGoBack) {
          event.stopImmediatePropagation();
          return _this.tabs.outlet.pop(deep - 1, tab);
        }
      };
    };

    TabsPage.ɵfac = function TabsPage_Factory(t) {
      return new (t || TabsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_preference__WEBPACK_IMPORTED_MODULE_2__["Preference"]));
    };

    TabsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabsPage,
      selectors: [["app-tabs"]],
      viewQuery: function TabsPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
        }
      },
      decls: 3,
      vars: 2,
      consts: [["slot", "bottom", "color", "dark", "fixed", "", 4, "ngIf"], ["slot", "top", "color", "dark", "fixed", "", 4, "ngIf"], ["slot", "bottom", "color", "dark", "fixed", ""], ["tab", "home", "layout", "icon-top", 3, "click"], ["name", "home", 1, "colorp"], [1, "colorp"], ["tab", "browse", "layout", "icon-top", 3, "click"], ["name", "list", 1, "colorp"], ["tab", "cart", "layout", "icon-top", 3, "click"], ["name", "cart", 1, "colorp"], ["color", "light", 4, "ngIf"], ["tab", "account", "layout", "icon-top", 3, "click"], ["name", "person", 1, "colorp"], ["color", "light"], ["slot", "top", "color", "dark", "fixed", ""], ["tab", "home", "layout", "icon-start", 3, "click"], ["tab", "browse", "layout", "icon-start", 3, "click"], ["tab", "cart", "layout", "icon-start", 3, "click"], ["class", "static margin-6-horizontal", "color", "light", 4, "ngIf"], ["tab", "account", "layout", "icon-start", 3, "click"], ["name", "people-circle", 1, "colorp"], ["color", "light", 1, "static", "margin-6-horizontal"]],
      template: function TabsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsPage_ion_tab_bar_1_Template, 22, 13, "ion-tab-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabsPage_ion_tab_bar_2_Template, 22, 13, "ion-tab-bar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.platform.is("mobile"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.platform.is("desktop"));
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBadge"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tabs',
          templateUrl: './tabs.page.html',
          styleUrls: ['./tabs.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: _services_preference__WEBPACK_IMPORTED_MODULE_2__["Preference"]
        }];
      }, {
        tabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/tabs/tabs.router.module.ts":
  /*!********************************************!*\
    !*** ./src/app/tabs/tabs.router.module.ts ***!
    \********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/guards/auth.guard */
    "./src/app/services/guards/auth.guard.ts");

    var routes = [{
      path: '1',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
      children: [{
        path: 'home',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-home-home-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/home/home.module */
            "./src/app/pages/home/home.module.ts")).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'search',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-search-search-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("pages-search-search-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/search/search.module */
            "./src/app/pages/search/search.module.ts")).then(function (m) {
              return m.SearchPageModule;
            });
          }
        }, {
          path: 'search/:term',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-search-search-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("pages-search-search-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/search/search.module */
            "./src/app/pages/search/search.module.ts")).then(function (m) {
              return m.SearchPageModule;
            });
          }
        }, {
          path: 'items',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-item-list-item-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("pages-item-list-item-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/item-list/item-list.module */
            "./src/app/pages/item-list/item-list.module.ts")).then(function (m) {
              return m.ItemListPageModule;
            });
          }
        }, {
          path: 'brands',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-brand-list-brand-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("pages-brand-list-brand-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/brand-list/brand-list.module */
            "./src/app/pages/brand-list/brand-list.module.ts")).then(function (m) {
              return m.BrandListPageModule;
            });
          }
        }, {
          path: 'categories',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-category-list-category-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("pages-category-list-category-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/category-list/category-list.module */
            "./src/app/pages/category-list/category-list.module.ts")).then(function (m) {
              return m.CategoryListPageModule;
            });
          }
        }, {
          path: 'subcategories',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-sub-category-list-sub-category-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("pages-sub-category-list-sub-category-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/sub-category-list/sub-category-list.module */
            "./src/app/pages/sub-category-list/sub-category-list.module.ts")).then(function (m) {
              return m.SubCategoryListPageModule;
            });
          }
        }, {
          path: 'items/:itemId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-item-item-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("default~pages-checkout-page-checkout-page-module~pages-item-item-module~pages-profile-page-profile-p~431f476f"), __webpack_require__.e("common"), __webpack_require__.e("pages-item-item-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/item/item.module */
            "./src/app/pages/item/item.module.ts")).then(function (m) {
              return m.ItemPageModule;
            });
          }
        }, {
          path: 'items/:itemId/reviews',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-review-list-review-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("common"), __webpack_require__.e("pages-review-list-review-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/review-list/review-list.module */
            "./src/app/pages/review-list/review-list.module.ts")).then(function (m) {
              return m.ReviewListPageModule;
            });
          }
        }, {
          path: 'items/:itemId/:slug',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-item-item-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("default~pages-checkout-page-checkout-page-module~pages-item-item-module~pages-profile-page-profile-p~431f476f"), __webpack_require__.e("common"), __webpack_require__.e("pages-item-item-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/item/item.module */
            "./src/app/pages/item/item.module.ts")).then(function (m) {
              return m.ItemPageModule;
            });
          }
        }, {
          path: 'items/:itemId/:slug/reviews',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-review-list-review-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("common"), __webpack_require__.e("pages-review-list-review-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/review-list/review-list.module */
            "./src/app/pages/review-list/review-list.module.ts")).then(function (m) {
              return m.ReviewListPageModule;
            });
          }
        }]
      }, {
        path: 'browse',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-category-list-category-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("pages-category-list-category-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/category-list/category-list.module */
            "./src/app/pages/category-list/category-list.module.ts")).then(function (m) {
              return m.CategoryListPageModule;
            });
          }
        }, {
          path: 'subcategories',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-sub-category-list-sub-category-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("pages-sub-category-list-sub-category-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/sub-category-list/sub-category-list.module */
            "./src/app/pages/sub-category-list/sub-category-list.module.ts")).then(function (m) {
              return m.SubCategoryListPageModule;
            });
          }
        }, {
          path: 'items',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-item-list-item-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("pages-item-list-item-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/item-list/item-list.module */
            "./src/app/pages/item-list/item-list.module.ts")).then(function (m) {
              return m.ItemListPageModule;
            });
          }
        }, {
          path: 'items/:itemId/:slug',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-item-item-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("default~pages-checkout-page-checkout-page-module~pages-item-item-module~pages-profile-page-profile-p~431f476f"), __webpack_require__.e("common"), __webpack_require__.e("pages-item-item-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/item/item.module */
            "./src/app/pages/item/item.module.ts")).then(function (m) {
              return m.ItemPageModule;
            });
          }
        }, {
          path: 'items/:itemId/reviews',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-review-list-review-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("common"), __webpack_require__.e("pages-review-list-review-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/review-list/review-list.module */
            "./src/app/pages/review-list/review-list.module.ts")).then(function (m) {
              return m.ReviewListPageModule;
            });
          }
        }, {
          path: 'items/:itemId/:slug/reviews',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-review-list-review-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("common"), __webpack_require__.e("pages-review-list-review-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/review-list/review-list.module */
            "./src/app/pages/review-list/review-list.module.ts")).then(function (m) {
              return m.ReviewListPageModule;
            });
          }
        }]
      }, {
        path: 'cart',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-cart-page-cart-page-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("pages-cart-page-cart-page-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/cart-page/cart-page.module */
            "./src/app/pages/cart-page/cart-page.module.ts")).then(function (m) {
              return m.CartPageModule;
            });
          }
        }, {
          path: 'items/:itemId/:slug',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-item-item-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("default~pages-checkout-page-checkout-page-module~pages-item-item-module~pages-profile-page-profile-p~431f476f"), __webpack_require__.e("common"), __webpack_require__.e("pages-item-item-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/item/item.module */
            "./src/app/pages/item/item.module.ts")).then(function (m) {
              return m.ItemPageModule;
            });
          }
        }, {
          path: 'items/:itemId/:slug/reviews',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-review-list-review-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("common"), __webpack_require__.e("pages-review-list-review-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/review-list/review-list.module */
            "./src/app/pages/review-list/review-list.module.ts")).then(function (m) {
              return m.ReviewListPageModule;
            });
          }
        }, {
          path: 'checkout',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-checkout-page-checkout-page-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("default~pages-checkout-page-checkout-page-module~pages-item-item-module~pages-profile-page-profile-p~431f476f"), __webpack_require__.e("default~pages-address-list-address-list-module~pages-checkout-page-checkout-page-module"), __webpack_require__.e("default~pages-card-list-card-list-module~pages-checkout-page-checkout-page-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-checkout-page-checkout-page-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/checkout-page/checkout-page.module */
            "./src/app/pages/checkout-page/checkout-page.module.ts")).then(function (m) {
              return m.CheckoutPageModule;
            });
          }
        }, {
          path: 'checkout/thanks/:orderId',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-thanks-page-thanks-page-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("common"), __webpack_require__.e("pages-thanks-page-thanks-page-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/thanks-page/thanks-page.module */
            "./src/app/pages/thanks-page/thanks-page.module.ts")).then(function (m) {
              return m.ThanksPageModule;
            });
          }
        }]
      }, {
        path: 'account',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-profile-page-profile-page-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("default~pages-checkout-page-checkout-page-module~pages-item-item-module~pages-profile-page-profile-p~431f476f"), __webpack_require__.e("pages-profile-page-profile-page-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/profile-page/profile-page.module */
            "./src/app/pages/profile-page/profile-page.module.ts")).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'payment',
          canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-card-list-card-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("default~pages-card-list-card-list-module~pages-checkout-page-checkout-page-module"), __webpack_require__.e("pages-card-list-card-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/card-list/card-list.module */
            "./src/app/pages/card-list/card-list.module.ts")).then(function (m) {
              return m.CardListPageModule;
            });
          }
        }, {
          path: 'addresses',
          canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-address-list-address-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("default~pages-address-list-address-list-module~pages-checkout-page-checkout-page-module"), __webpack_require__.e("pages-address-list-address-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/address-list/address-list.module */
            "./src/app/pages/address-list/address-list.module.ts")).then(function (m) {
              return m.AddressListPageModule;
            });
          }
        }, {
          path: 'help',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-about-about-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("common"), __webpack_require__.e("pages-about-about-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/about/about.module */
            "./src/app/pages/about/about.module.ts")).then(function (m) {
              return m.AboutPageModule;
            });
          }
        }, {
          path: 'favorites',
          canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-favorite-favorite-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("pages-favorite-favorite-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/favorite/favorite.module */
            "./src/app/pages/favorite/favorite.module.ts")).then(function (m) {
              return m.FavoritePageModule;
            });
          }
        }, {
          path: 'favorites/:itemId/:slug',
          canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-item-item-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("default~pages-checkout-page-checkout-page-module~pages-item-item-module~pages-profile-page-profile-p~431f476f"), __webpack_require__.e("common"), __webpack_require__.e("pages-item-item-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/item/item.module */
            "./src/app/pages/item/item.module.ts")).then(function (m) {
              return m.ItemPageModule;
            });
          }
        }, {
          path: 'favorites/:itemId/:slug/reviews',
          canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-review-list-review-list-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("common"), __webpack_require__.e("pages-review-list-review-list-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/review-list/review-list.module */
            "./src/app/pages/review-list/review-list.module.ts")).then(function (m) {
              return m.ReviewListPageModule;
            });
          }
        }, {
          path: 'orders',
          canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-order-list-page-order-list-page-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("common"), __webpack_require__.e("pages-order-list-page-order-list-page-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/order-list-page/order-list-page.module */
            "./src/app/pages/order-list-page/order-list-page.module.ts")).then(function (m) {
              return m.OrderListPageModule;
            });
          }
        }, {
          path: 'orders/:id',
          canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-order-detail-page-order-detail-page-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("common"), __webpack_require__.e("pages-order-detail-page-order-detail-page-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/order-detail-page/order-detail-page.module */
            "./src/app/pages/order-detail-page/order-detail-page.module.ts")).then(function (m) {
              return m.OrderDetailPageModule;
            });
          }
        }, {
          path: 'pages/:id/:slug',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-page-page-module */
            [__webpack_require__.e("default~pages-about-about-module~pages-address-list-address-list-module~pages-brand-list-brand-list-~454697f8"), __webpack_require__.e("common"), __webpack_require__.e("pages-page-page-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/page/page.module */
            "./src/app/pages/page/page.module.ts")).then(function (m) {
              return m.PageViewModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/1/home',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/1/home',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TabsPageRoutingModule
    });
    TabsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TabsPageRoutingModule_Factory(t) {
        return new (t || TabsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map