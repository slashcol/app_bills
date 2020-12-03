(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-card-list-card-list-module"],{

/***/ "./src/app/pages/card-list/card-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/card-list/card-list.module.ts ***!
  \*****************************************************/
/*! exports provided: CardListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListPageModule", function() { return CardListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _card_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-list */ "./src/app/pages/card-list/card-list.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _card_add_card_add_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card-add/card-add.module */ "./src/app/pages/card-add/card-add.module.ts");







class CardListPageModule {
}
CardListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CardListPageModule });
CardListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CardListPageModule_Factory(t) { return new (t || CardListPageModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '',
                    component: _card_list__WEBPACK_IMPORTED_MODULE_2__["CardListPage"]
                }
            ]),
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _card_add_card_add_module__WEBPACK_IMPORTED_MODULE_4__["CardAddPageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardListPageModule, { declarations: [_card_list__WEBPACK_IMPORTED_MODULE_2__["CardListPage"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _card_add_card_add_module__WEBPACK_IMPORTED_MODULE_4__["CardAddPageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardListPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _card_list__WEBPACK_IMPORTED_MODULE_2__["CardListPage"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _card_list__WEBPACK_IMPORTED_MODULE_2__["CardListPage"]
                        }
                    ]),
                    _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _card_add_card_add_module__WEBPACK_IMPORTED_MODULE_4__["CardAddPageModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/card-list/card-list.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/card-list/card-list.ts ***!
  \**********************************************/
/*! exports provided: CardListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListPage", function() { return CardListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/card */ "./src/app/services/card.ts");
/* harmony import */ var _card_add_card_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card-add/card-add */ "./src/app/pages/card-add/card-add.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/empty-view/empty-view */ "./src/app/components/empty-view/empty-view.ts");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");













function CardListPage_empty_view_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "ERROR_DATA"));
} }
function CardListPage_empty_view_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "empty-view", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "EMPTY_CARDS"));
} }
function CardListPage_ion_row_18_ion_item_3_ion_badge_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "DEFAULT"), " ");
} }
function CardListPage_ion_row_18_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CardListPage_ion_row_18_ion_item_3_ion_badge_5_Template, 3, 3, "ion-badge", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardListPage_ion_row_18_ion_item_3_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const card_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.onDeleteCard(card_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "./assets/imgs/", card_r5.formatBrand(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u2022\u2022\u2022\u2022 ", card_r5.last4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", card_r5.isDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "DELETE"), " ");
} }
function CardListPage_ion_row_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CardListPage_ion_row_18_ion_item_3_Template, 9, 6, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.cards);
} }
const _c0 = function () { return { "border-radius": "0", height: "70px" }; };
function CardListPage_ion_row_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngx-skeleton-loader", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
class CardListPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_3__["BasePage"] {
    constructor(injector, actionSheetCtrl, creditCardService) {
        super(injector);
        this.actionSheetCtrl = actionSheetCtrl;
        this.creditCardService = creditCardService;
        this.cards = [];
    }
    enableMenuSwipe() {
        return false;
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.cards.length) {
                this.showLoadingView({ showOverlay: false });
                this.loadData();
            }
            const title = yield this.getTrans('PAYMENT');
            this.setPageTitle(title);
            this.setMetaTags({
                title: title
            });
        });
    }
    loadData(event = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.refresher = event.target;
                this.cards = yield this.creditCardService.load();
                if (this.cards.length) {
                    this.showContentView();
                }
                else {
                    this.showEmptyView();
                }
                this.onRefreshComplete();
            }
            catch (err) {
                this.showErrorView();
                this.onRefreshComplete();
                this.translate.get('ERROR_NETWORK').subscribe((str) => this.showToast(str));
            }
        });
    }
    presentActionSheet(card) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const str = yield this.getTrans(['ACTIONS', 'REMOVE', 'CANCEL']);
            const actionSheet = yield this.actionSheetCtrl.create({
                header: str.ACTIONS,
                buttons: [{
                        icon: !this.isIos() ? 'trash' : null,
                        text: str.REMOVE,
                        handler: () => {
                            this.onDeleteCard(card);
                        }
                    },
                    {
                        icon: !this.isIos() ? 'close' : null,
                        text: str.CANCEL
                    }]
            });
            return yield actionSheet.present();
        });
    }
    onDeleteCard(card) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let str = yield this.translate.get('DELETE_CONFIRMATION').toPromise();
                const res = yield this.showConfirm(str);
                if (!res)
                    return;
                yield card.destroy();
                let index = this.cards.indexOf(card);
                if (index !== -1)
                    this.cards.splice(index, 1);
                this.showContentView();
                this.translate.get('DELETED').subscribe(str => this.showToast(str));
            }
            catch (error) {
                this.showContentView();
                this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
            }
        });
    }
    onAddButtonTouched() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoadingView({ showOverlay: true });
            const modal = yield this.modalCtrl.create({
                component: _card_add_card_add__WEBPACK_IMPORTED_MODULE_5__["CardAddPage"],
            });
            yield modal.present();
            this.dismissLoadingView();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.cards.unshift(data);
                this.showContentView();
            }
        });
    }
}
CardListPage.ɵfac = function CardListPage_Factory(t) { return new (t || CardListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_card__WEBPACK_IMPORTED_MODULE_4__["Card"])); };
CardListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CardListPage, selectors: [["page-card-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 13, consts: [[1, "ion-no-border"], ["fixed", ""], ["slot", "start"], ["slot", "end"], [3, "click"], ["name", "add", "slot", "icon-only"], ["slot", "fixed", 3, "ionRefresh"], [3, "pullingText", "refreshingText"], ["icon", "alert-circle-outline", 3, "text", 4, "ngIf"], ["image", "./assets/imgs/undraw_credit_card_df1m.svg", "imageWidth", "120", 3, "text", 4, "ngIf"], ["class", "ion-justify-content-center", 4, "ngIf"], ["class", "ion-margin-vertical ion-justify-content-center", 4, "ngIf"], ["icon", "alert-circle-outline", 3, "text"], ["image", "./assets/imgs/undraw_credit_card_df1m.svg", "imageWidth", "120", 3, "text"], [1, "ion-justify-content-center"], ["size-xs", "12", "size-lg", "9"], ["lines", "none", 1, "ion-margin-top"], ["class", "radius ion-margin-bottom", "color", "light", 4, "ngFor", "ngForOf"], ["color", "light", 1, "radius", "ion-margin-bottom"], ["width", "40", "slot", "start", 3, "src"], ["class", "text-small", "color", "primary", 4, "ngIf"], ["fill", "clear", "color", "dark", "slot", "end", 3, "click"], ["color", "primary", 1, "text-small"], [1, "ion-margin-vertical", "ion-justify-content-center"], ["count", "12", 3, "theme"]], template: function CardListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardListPage_Template_ion_button_click_8_listener() { return ctx.onAddButtonTouched(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-refresher", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function CardListPage_Template_ion_refresher_ionRefresh_11_listener($event) { return ctx.loadData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-refresher-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CardListPage_empty_view_16_Template, 2, 3, "empty-view", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CardListPage_empty_view_17_Template, 2, 3, "empty-view", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CardListPage_ion_row_18_Template, 4, 1, "ion-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CardListPage_ion_row_19_Template, 3, 2, "ion-row", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, "PAYMENT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("pullingText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "PULL_TO_REFRESH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("refreshingText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 11, "REFRESHING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isErrorViewVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEmptyViewVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isContentViewVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoadingViewVisible);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_empty_view_empty_view__WEBPACK_IMPORTED_MODULE_7__["EmptyView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBadge"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__["NgxSkeletonLoaderComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\nion-grid[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --min-height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyZC1saXN0L0M6XFxVc2Vyc1xcdXN1YXJpb1xcRG93bmxvYWRzXFxFVkFOU1xcSW9uU2hvcF9SZWN1cnNvc1xcaW9uc2hvcC0zLjEuM1xcYXBwL3NyY1xcYXBwXFxwYWdlc1xcY2FyZC1saXN0XFxjYXJkLWxpc3Quc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FyZC1saXN0L2NhcmQtbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FyZC1saXN0L2NhcmQtbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDgwcHg7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDgwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CardListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'page-card-list',
                templateUrl: 'card-list.html',
                styleUrls: ['card-list.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }, { type: _services_card__WEBPACK_IMPORTED_MODULE_4__["Card"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-card-list-card-list-module-es2015.js.map