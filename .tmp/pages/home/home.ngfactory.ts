/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './home';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from 'ionic-angular/components/app/app';
import * as import11 from 'ionic-angular/components/alert/alert';
import * as import12 from 'ionic-angular/util/events';
import * as import13 from '@angular/http/src/http';
import * as import14 from '@angular/core/src/metadata/view';
import * as import15 from '@angular/core/src/linker/component_factory';
import * as import16 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from 'ionic-angular/components/toolbar/toolbar';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import28 from 'ionic-angular/components/navbar/navbar';
import * as import29 from 'ionic-angular/components/content/content';
export class Wrapper_HomePage {
  context:import0.HomePage;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any,p5:any) {
    this.changed = false;
    this.context = new import0.HomePage(p0,p1,p2,p3,p4,p5);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
}
var renderType_HomePage_Host:import2.RenderComponentType = (null as any);
class _View_HomePage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _HomePage_0_4:Wrapper_HomePage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomePage_Host0,renderType_HomePage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-home',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HomePage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HomePage_0_4 = new Wrapper_HomePage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.NavParams),this.parentInjector.get(import10.App),this.parentInjector.get(import11.AlertController),this.parentInjector.get(import12.Events),this.parentInjector.get(import13.Http));
    this._appEl_0.initComponent(this._HomePage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._HomePage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HomePage) && (0 === requestNodeIndex))) { return this._HomePage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HomePage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HomePage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_HomePage_Host === (null as any))) { (renderType_HomePage_Host = viewUtils.createRenderComponentType('',0,import14.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HomePage_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomePageNgFactory:import15.ComponentFactory<import0.HomePage> = new import15.ComponentFactory<import0.HomePage>('page-home',viewFactory_HomePage_Host0,import0.HomePage);
const styles_HomePage:any[] = ([] as any[]);
var renderType_HomePage:import2.RenderComponentType = (null as any);
class _View_HomePage0 extends import1.AppView<import0.HomePage> {
  _el_0:any;
  _Header_0_3:import16.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import17.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import18.Wrapper_ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _Content_9_4:import19.Wrapper_Content;
  _text_10:any;
  _text_11:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomePage0,renderType_HomePage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import16.Wrapper_Header(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import22.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this.renderer.setElementAttribute(this._el_2,'hideBackButton','');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import17.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import17.Wrapper_Navbar(this.parentInjector.get(import10.App),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import18.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import18.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import23.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'Home',(null as any));
    compView_4.create(this._ToolbarTitle_4_4.context,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_9,'padding','');
    this._appEl_9 = new import3.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import19.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import19.Wrapper_Content(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import10.App),this.parentInjector.get(import24.Keyboard),this.parentInjector.get(import25.NgZone),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import26.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n  \n',(null as any));
    compView_9.create(this._Content_9_4.context,[
      ([] as any[]),
      ([] as any[]).concat([this._text_10]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
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
      this._text_11
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import27.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import28.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4.context; }
    if (((token === import23.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3.context; }
    if (((token === import29.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._Content_9_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    const currVal_0:any = '';
    this._Navbar_2_4.check_hideBackButton(currVal_0,throwOnChange,false);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._Content_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._Navbar_2_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Navbar_2_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._Content_9_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_9_4.context.ngOnDestroy();
  }
}
export function viewFactory_HomePage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.HomePage> {
  if ((renderType_HomePage === (null as any))) { (renderType_HomePage = viewUtils.createRenderComponentType('',0,import14.ViewEncapsulation.None,styles_HomePage,{})); }
  return new _View_HomePage0(viewUtils,parentInjector,declarationEl);
}