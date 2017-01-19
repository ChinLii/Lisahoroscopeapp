/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/platform/platform';
import * as import9 from '@ionic/cloud-angular/dist/es5/index';
import * as import10 from 'ionic-angular/components/alert/alert';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import14 from 'ionic-angular/navigation/view-controller';
import * as import15 from 'ionic-angular/navigation/nav-controller-base';
import * as import16 from 'ionic-angular/components/app/app';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from 'ionic-angular/util/keyboard';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/core/src/zone/ng_zone';
import * as import21 from '@angular/core/src/linker/component_factory_resolver';
import * as import22 from 'ionic-angular/gestures/gesture-controller';
import * as import23 from 'ionic-angular/transitions/transition-controller';
import * as import24 from 'ionic-angular/navigation/deep-linker';
import * as import25 from 'ionic-angular/components/nav/nav';
export class Wrapper_MyApp {
  context:import0.MyApp;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this.changed = false;
    this.context = new import0.MyApp(p0,p1,p2);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_MyApp_Host:import2.RenderComponentType = (null as any);
class _View_MyApp_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _MyApp_0_4:Wrapper_MyApp;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MyApp_Host0,renderType_MyApp_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MyApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MyApp_0_4 = new Wrapper_MyApp(this.parentInjector.get(import8.Platform),this.parentInjector.get(import9.Push),this.parentInjector.get(import10.AlertController));
    this._appEl_0.initComponent(this._MyApp_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._MyApp_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MyApp) && (0 === requestNodeIndex))) { return this._MyApp_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MyApp_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MyApp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_MyApp_Host === (null as any))) { (renderType_MyApp_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_MyApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const MyAppNgFactory:import12.ComponentFactory<import0.MyApp> = new import12.ComponentFactory<import0.MyApp>('ng-component',viewFactory_MyApp_Host0,import0.MyApp);
const styles_MyApp:any[] = ([] as any[]);
var renderType_MyApp:import2.RenderComponentType = (null as any);
class _View_MyApp0 extends import1.AppView<import0.MyApp> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Nav_0_4:import13.Wrapper_Nav;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MyApp0,renderType_MyApp,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-nav',(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import13.viewFactory_Nav0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Nav_0_4 = new import13.Wrapper_Nav(this.parentInjector.get(import14.ViewController,(null as any)),this.parentInjector.get(import15.NavControllerBase,(null as any)),this.parentInjector.get(import16.App),this.parentInjector.get(import17.Config),this.parentInjector.get(import18.Keyboard),new import19.ElementRef(this._el_0),this.parentInjector.get(import20.NgZone),this.renderer,this.parentInjector.get(import21.ComponentFactoryResolver),this.parentInjector.get(import22.GestureController),this.parentInjector.get(import23.TransitionController),this.parentInjector.get(import24.DeepLinker,(null as any)));
    this._appEl_0.initComponent(this._Nav_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._Nav_0_4.context,([] as any[]),(null as any));
    this.init(([] as any[]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.Nav) && (0 === requestNodeIndex))) { return this._Nav_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.rootPage;
    this._Nav_0_4.check_root(currVal_0,throwOnChange,false);
    this._Nav_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Nav_0_4.context.ngAfterViewInit(); } }
  }
}
export function viewFactory_MyApp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.MyApp> {
  if ((renderType_MyApp === (null as any))) { (renderType_MyApp = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,styles_MyApp,{})); }
  return new _View_MyApp0(viewUtils,parentInjector,declarationEl);
}