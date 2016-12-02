/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './profile';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from 'ionic-angular/navigation/view-controller';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from 'ionic-angular/components/toolbar/toolbar';
import * as import22 from 'ionic-angular/util/keyboard';
import * as import23 from '@angular/core/src/zone/ng_zone';
import * as import24 from 'ionic-angular/components/tabs/tabs';
import * as import25 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import26 from 'ionic-angular/components/navbar/navbar';
import * as import27 from 'ionic-angular/components/button/button';
import * as import28 from 'ionic-angular/components/content/content';
export var Wrapper_ProfilePage = (function () {
    function Wrapper_ProfilePage(p0, p1) {
        this.changed = false;
        this.context = new import0.ProfilePage(p0, p1);
    }
    Wrapper_ProfilePage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_ProfilePage;
}());
var renderType_ProfilePage_Host = null;
var _View_ProfilePage_Host0 = (function (_super) {
    __extends(_View_ProfilePage_Host0, _super);
    function _View_ProfilePage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProfilePage_Host0, renderType_ProfilePage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProfilePage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-profile', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ProfilePage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ProfilePage_0_4 = new Wrapper_ProfilePage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams));
        this._appEl_0.initComponent(this._ProfilePage_0_4.context, [], compView_0);
        compView_0.create(this._ProfilePage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ProfilePage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ProfilePage) && (0 === requestNodeIndex))) {
            return this._ProfilePage_0_4.context;
        }
        return notFoundResult;
    };
    _View_ProfilePage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ProfilePage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ProfilePage_Host0;
}(import1.AppView));
function viewFactory_ProfilePage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ProfilePage_Host === null)) {
        (renderType_ProfilePage_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_ProfilePage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ProfilePageNgFactory = new import11.ComponentFactory('page-profile', viewFactory_ProfilePage_Host0, import0.ProfilePage);
var styles_ProfilePage = [];
var renderType_ProfilePage = null;
var _View_ProfilePage0 = (function (_super) {
    __extends(_View_ProfilePage0, _super);
    function _View_ProfilePage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ProfilePage0, renderType_ProfilePage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ProfilePage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import12.Wrapper_Header(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import19.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_2, 'hideBackButton', '');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import13.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import20.App), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n        ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import14.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import14.Wrapper_ToolbarTitle(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import21.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Profile', null);
        compView_4.create(this._ToolbarTitle_4_4.context, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n    ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_9, 'padding', '');
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import15.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import15.Wrapper_Content(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import20.App), this.parentInjector.get(import22.Keyboard), this.parentInjector.get(import23.NgZone), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import24.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n    ', null);
        this._el_11 = this.renderer.createElement(null, 'br', null);
        this._el_12 = this.renderer.createElement(null, 'br', null);
        this._text_13 = this.renderer.createText(null, '\n    ', null);
        this._text_14 = this.renderer.createText(null, '\n    ', null);
        this._el_15 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_15, 'block', '');
        this.renderer.setElementAttribute(this._el_15, 'ion-button', '');
        this._appEl_15 = new import3.AppElement(15, 9, this, this._el_15);
        var compView_15 = import16.viewFactory_Button0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Button_15_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_15), this.renderer);
        this._appEl_15.initComponent(this._Button_15_4.context, [], compView_15);
        this._text_16 = this.renderer.createText(null, ' Logout ', null);
        compView_15.create(this._Button_15_4.context, [[].concat([this._text_16])], null);
        this._text_17 = this.renderer.createText(null, '\n   \n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._el_12,
                this._text_13,
                this._text_14,
                this._el_15,
                this._text_17
            ]),
            []
        ], null);
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_15, 'click', this.eventHandler(this._handle_click_15_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17
        ], [disposable_0], []);
        return null;
    };
    _View_ProfilePage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import26.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import21.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import27.Button) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Button_15_4.context;
        }
        if (((token === import28.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Content_9_4.context;
        }
        return notFoundResult;
    };
    _View_ProfilePage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_0 = '';
        this._Navbar_2_4.check_hideBackButton(currVal_0, throwOnChange, false);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._ToolbarTitle_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._Content_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        var currVal_5 = '';
        this._Button_15_4.check_block(currVal_5, throwOnChange, false);
        if (this._Button_15_4.detectChangesInternal(this, this._el_15, throwOnChange)) {
            this._appEl_15.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_15_4.context.ngAfterContentInit();
            }
        }
        var currVal_1 = this._Navbar_2_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Navbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Content_9_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ProfilePage0.prototype.destroyInternal = function () {
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_ProfilePage0.prototype._handle_click_15_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.logout() !== false);
        return (true && pd_0);
    };
    return _View_ProfilePage0;
}(import1.AppView));
export function viewFactory_ProfilePage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ProfilePage === null)) {
        (renderType_ProfilePage = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_ProfilePage, {}));
    }
    return new _View_ProfilePage0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=profile.ngfactory.js.map