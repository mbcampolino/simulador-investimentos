"use strict";(self.webpackChunksimulador_investimentos=self.webpackChunksimulador_investimentos||[]).push([[494],{665:(Ae,W,u)=>{u.d(W,{h:()=>$});var o=u(4946),x=u(9862);let $=(()=>{class _{constructor(c){this.httpClient=c,this.total=0,this.lastMonthTax=0,this.currentSelic=0,this.investimentsByMonth=!1,this.model={initialValue:1e5,dueDate:1,dueDateType:"ano",taxType:"ano",taxValue:this.currentSelic,monthlyValue:1e3},this.historicData=[],this.getApiSelic("/api/servico/sitebcb/historicotaxasjuros")}taxesByMonth(){return"m\xeas"==this.model.taxType}dueDateTypeByMonth(){return"m\xeas"==this.model.dueDateType}calcFixedInvestment(){this.historicData=[];var c,m;c="ano"==this.model.dueDateType?12*this.model.dueDate:this.model.dueDate,m="ano"==this.model.taxType?this.model.taxValue/12:this.model.taxValue;for(var h=0;h<c+1;h++)if(0===h)this.historicData.push({currentMonth:0,currentTax:0,currentTotalWithTax:this.model.initialValue,currentTotalWithoutTax:this.model.initialValue,totalTax:0});else{var y=this.historicData[h-1].currentTotalWithTax/100*m;this.historicData.push({currentMonth:h,currentTax:y,currentTotalWithTax:this.historicData[h-1].currentTotalWithTax+y+this.model.monthlyValue,currentTotalWithoutTax:this.historicData[h-1].currentTotalWithoutTax+this.model.monthlyValue,totalTax:y+this.historicData[h-1].totalTax})}console.log(this.historicData)}formatValue(c,m=!0){return m?c.toLocaleString("pt-br",{style:"currency",currency:"BRL",minimumFractionDigits:2,currencyDisplay:"narrowSymbol"}):new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(c).replace("EUR","").trim()}getApiSelic(c){return this.httpClient.get(c,{headers:{Accept:"application/json"}}).subscribe(g=>{console.log(g.conteudo[0].MetaSelic);var y=Number(Number(g.conteudo[0].MetaSelic).toFixed(2));this.currentSelic=y,this.model.taxValue=y},g=>{this.currentSelic=0,console.log("error catch"+g)})}}return _.\u0275fac=function(c){return new(c||_)(o.LFG(x.eN))},_.\u0275prov=o.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},95:(Ae,W,u)=>{u.d(W,{Wl:()=>Z,Fj:()=>T,u5:()=>Cn,qQ:()=>vt,Cf:()=>l,JU:()=>p,JJ:()=>Wt,On:()=>ct,wV:()=>ht,c5:()=>Vt,UX:()=>Vn});var o=u(4946),x=u(6814),$=u(7715),_=u(5592),z=u(7453),c=u(4829),m=u(4564),h=u(8251),g=u(7400),y=u(2714),Q=u(7398);let B=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),A=(()=>{class n extends B{}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const p=new o.OlP("NgValueAccessor"),De={provide:p,useExisting:(0,o.Gpc)(()=>Z),multi:!0};let Z=(()=>{class n extends A{writeValue(t){this.setProperty("checked",t)}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(t,r){1&t&&o.NdJ("change",function(s){return r.onChange(s.target.checked)})("blur",function(){return r.onTouched()})},features:[o._Bn([De]),o.qOj]}),n})();const Me={provide:p,useExisting:(0,o.Gpc)(()=>T),multi:!0},Fe=new o.OlP("CompositionEventMode");let T=(()=>{class n extends B{constructor(t,r,i){super(t,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function be(){const n=(0,x.q)()?(0,x.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Fe,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Me]),o.qOj]}),n})();function v(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}const l=new o.OlP("NgValidators"),C=new o.OlP("NgAsyncValidators");function I(n){return null}function Gt(n){return null!=n}function xt(n){return(0,o.QGY)(n)?(0,$.D)(n):n}function Bt(n){let e={};return n.forEach(t=>{e=null!=t?{...e,...t}:e}),0===Object.keys(e).length?null:e}function Tt(n,e){return e.map(t=>t(n))}function It(n){return n.map(e=>function Oe(n){return!n.validate}(e)?e:t=>e.validate(t))}function X(n){return null!=n?function kt(n){if(!n)return null;const e=n.filter(Gt);return 0==e.length?null:function(t){return Bt(Tt(t,e))}}(It(n)):null}function K(n){return null!=n?function Pt(n){if(!n)return null;const e=n.filter(Gt);return 0==e.length?null:function(t){return function J(...n){const e=(0,m.jO)(n),{args:t,keys:r}=(0,z.D)(n),i=new _.y(s=>{const{length:a}=t;if(!a)return void s.complete();const f=new Array(a);let b=a,E=a;for(let Y=0;Y<a;Y++){let At=!1;(0,c.Xf)(t[Y]).subscribe((0,h.x)(s,An=>{At||(At=!0,E--),f[Y]=An},()=>b--,void 0,()=>{(!b||!At)&&(E||s.next(r?(0,y.n)(r,f):f),s.complete())}))}});return e?i.pipe((0,g.Z)(e)):i}(Tt(t,e).map(xt)).pipe((0,Q.U)(Bt))}}(It(n)):null}function Ht(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function tt(n){return n?Array.isArray(n)?n:[n]:[]}function k(n,e){return Array.isArray(n)?n.includes(e):n===e}function jt(n,e){const t=tt(e);return tt(n).forEach(i=>{k(t,i)||t.push(i)}),t}function Lt(n,e){return tt(e).filter(t=>!k(n,t))}class qt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=X(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=K(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class d extends qt{get formDirective(){return null}get path(){return null}}class V extends qt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Yt{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Wt=(()=>{class n extends Yt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(V,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})();const O="VALID",H="INVALID",F="PENDING",w="DISABLED";function R(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class Qt{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===H}get pending(){return this.status==F}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(jt(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(jt(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Lt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Lt(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=F,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(r=>{r.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(r=>{r.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===F)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=F,this._hasOwnPendingAsyncValidator=!0;const t=xt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){let t=e;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(F)?F:this._anyControlsHaveStatus(H)?H:O}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){R(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=function xe(n){return Array.isArray(n)?X(n):n||null}(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=function Be(n){return Array.isArray(n)?K(n):n||null}(this._rawAsyncValidators)}}const D=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>S}),S="always";function N(n,e,t=S){(function st(n,e){const t=function Rt(n){return n._rawValidators}(n);null!==e.validator?n.setValidators(Ht(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=function Ut(n){return n._rawAsyncValidators}(n);null!==e.asyncValidator?n.setAsyncValidators(Ht(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();L(e._rawValidators,i),L(e._rawAsyncValidators,i)})(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||"always"===t)&&e.valueAccessor.setDisabledState?.(n.disabled),function ke(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Zt(n,e)})}(n,e),function He(n,e){const t=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function Pe(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Zt(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function Ie(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function L(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Zt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function te(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}function ee(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const ne=class extends Qt{constructor(e=null,t,r){super(function rt(n){return(R(n)?n.validators:n)||null}(t),function ot(n,e){return(R(e)?e.asyncValidators:n)||null}(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=ee(e)?e.value:e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){te(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){te(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){ee(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}},$e={provide:V,useExisting:(0,o.Gpc)(()=>ct)},ie=(()=>Promise.resolve())();let ct=(()=>{class n extends V{constructor(t,r,i,s,a,f){super(),this._changeDetectorRef=a,this.callSetDisabledState=f,this.control=new ne,this._registered=!1,this.name="",this.update=new o.vpe,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function ut(n,e){if(!e)return null;let t,r,i;return Array.isArray(e),e.forEach(s=>{s.constructor===T?t=s:function je(n){return Object.getPrototypeOf(n.constructor)===A}(s)?r=s:i=s}),i||r||t||null}(0,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),function lt(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){N(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){ie.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const r=t.isDisabled.currentValue,i=0!==r&&(0,o.VuI)(r);ie.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?function U(n,e){return[...e.path,n]}(t,this._parent):[t]}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(d,9),o.Y36(l,10),o.Y36(C,10),o.Y36(p,10),o.Y36(o.sBO,8),o.Y36(D,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([$e]),o.qOj,o.TTD]}),n})();const Je={provide:p,useExisting:(0,o.Gpc)(()=>ht),multi:!0};let ht=(()=>{class n extends A{writeValue(t){this.setProperty("value",t??"")}registerOnChange(t){this.onChange=r=>{t(""==r?null:parseFloat(r))}}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},features:[o._Bn([Je]),o.qOj]}),n})(),se=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const ft=new o.OlP("NgModelWithFormControlWarning");let M=(()=>{class n{constructor(){this._validator=I}ngOnChanges(t){if(this.inputName in t){const r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):I,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return null!=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const hn={provide:l,useExisting:(0,o.Gpc)(()=>vt),multi:!0};let vt=(()=>{class n extends M{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=t=>function me(n){return"number"==typeof n?n:parseFloat(n)}(t),this.createValidator=t=>function Mt(n){return e=>{if(v(e.value)||v(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}(t)}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,r){2&t&&o.uIk("min",r._enabled?r.min:null)},inputs:{min:"min"},features:[o._Bn([hn]),o.qOj]}),n})();const yn={provide:l,useExisting:(0,o.Gpc)(()=>Vt),multi:!0};let Vt=(()=>{class n extends M{constructor(){super(...arguments),this.inputName="pattern",this.normalizeInput=t=>t,this.createValidator=t=>function Nt(n){if(!n)return I;let e,t;return"string"==typeof n?(t="","^"!==n.charAt(0)&&(t+="^"),t+=n,"$"!==n.charAt(n.length-1)&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),r=>{if(v(r.value))return null;const i=r.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}(t)}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(t,r){2&t&&o.uIk("pattern",r._enabled?r.pattern:null)},inputs:{pattern:"pattern"},features:[o._Bn([yn]),o.qOj]}),n})(),Ve=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[se]}),n})(),Cn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:D,useValue:t.callSetDisabledState??S}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Ve]}),n})(),Vn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ft,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:D,useValue:t.callSetDisabledState??S}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Ve]}),n})()}}]);