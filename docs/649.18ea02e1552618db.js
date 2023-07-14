"use strict";(self.webpackChunksimulador_investimentos=self.webpackChunksimulador_investimentos||[]).push([[649],{5649:(Z,f,u)=>{u.r(f),u.d(f,{SimulateFixedInvestmentsModule:()=>A});var o=u(95),p=u(6814),g=u(4670),t=u(4946),x=u(665);let w=new t.OlP("currency.mask.config");class M{constructor(n){this.htmlInputElement=n}setCursorAt(n){if(this.htmlInputElement.setSelectionRange)this.htmlInputElement.focus(),this.htmlInputElement.setSelectionRange(n,n);else if(this.htmlInputElement.createTextRange){let e=this.htmlInputElement.createTextRange();e.collapse(!0),e.moveEnd("character",n),e.moveStart("character",n),e.select()}}updateValueAndCursor(n,e,i){this.rawValue=n,this.setCursorAt(i-=e-n.length)}get canInputMoreNumbers(){let n=!(this.rawValue.length>=this.htmlInputElement.maxLength&&this.htmlInputElement.maxLength>=0),e=this.inputSelection.selectionStart,i=this.inputSelection.selectionEnd,a=!(e==i||!this.htmlInputElement.value.substring(e,i).match(/\d/)),s="0"==this.htmlInputElement.value.substring(0,1);return n||a||s}get inputSelection(){let n=0,e=0;if("number"==typeof this.htmlInputElement.selectionStart&&"number"==typeof this.htmlInputElement.selectionEnd)n=this.htmlInputElement.selectionStart,e=this.htmlInputElement.selectionEnd;else{let i=document.getSelection().anchorNode;if(i&&i.firstChild==this.htmlInputElement){let a=this.htmlInputElement.value.length,s=this.htmlInputElement.value.replace(/\r\n/g,"\n"),r=this.htmlInputElement.createTextRange(),c=this.htmlInputElement.createTextRange();c.collapse(!1),r.compareEndPoints("StartToEnd",c)>-1?n=e=a:(n=-r.moveStart("character",-a),n+=s.slice(0,n).split("\n").length-1,r.compareEndPoints("EndToEnd",c)>-1?e=a:(e=-r.moveEnd("character",-a),e+=s.slice(0,e).split("\n").length-1))}}return{selectionStart:n,selectionEnd:e}}get rawValue(){return this.htmlInputElement&&this.htmlInputElement.value}set rawValue(n){this._storedRawValue=n,this.htmlInputElement&&(this.htmlInputElement.value=n)}get storedRawValue(){return this._storedRawValue}}class y{constructor(n,e){this.htmlInputElement=n,this.options=e,this.inputManager=new M(n)}addNumber(n){this.rawValue||(this.rawValue=this.applyMask(!1,"0"));let e=String.fromCharCode(n),i=this.inputSelection.selectionStart,a=this.inputSelection.selectionEnd;this.rawValue=this.rawValue.substring(0,i)+e+this.rawValue.substring(a,this.rawValue.length),this.updateFieldValue(i+1)}applyMask(n,e){let{allowNegative:i,decimal:a,precision:s,prefix:r,suffix:c,thousands:N}=this.options,d=(e=n?new Number(e).toFixed(s):e).replace(/[^0-9]/g,"");if(!d)return"";let m=d.slice(0,d.length-s).replace(/^0*/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,N);""==m&&(m="0");let _=m,h=d.slice(d.length-s);s>0&&(h="0".repeat(s-h.length)+h,_+=a+h);let F=0==parseInt(m)&&(0==parseInt(h)||""==h);return(e.indexOf("-")>-1&&i&&!F?"-":"")+r+_+c}clearMask(n){if(null==n||""==n)return null;let e=n.replace(this.options.prefix,"").replace(this.options.suffix,"");return this.options.thousands&&(e=e.replace(new RegExp("\\"+this.options.thousands,"g"),"")),this.options.decimal&&(e=e.replace(this.options.decimal,".")),parseFloat(e)}changeToNegative(){if(this.options.allowNegative&&""!=this.rawValue&&"-"!=this.rawValue.charAt(0)&&0!=this.value){let n=this.inputSelection.selectionStart;this.rawValue="-"+this.rawValue,this.updateFieldValue(n+1)}}changeToPositive(){let n=this.inputSelection.selectionStart;this.rawValue=this.rawValue.replace("-",""),this.updateFieldValue(n-1)}fixCursorPosition(n){let e=this.inputSelection.selectionStart;e>this.getRawValueWithoutSuffixEndPosition()||n?this.inputManager.setCursorAt(this.getRawValueWithoutSuffixEndPosition()):e<this.getRawValueWithoutPrefixStartPosition()&&this.inputManager.setCursorAt(this.getRawValueWithoutPrefixStartPosition())}getRawValueWithoutSuffixEndPosition(){return this.rawValue.length-this.options.suffix.length}getRawValueWithoutPrefixStartPosition(){return null!=this.value&&this.value<0?this.options.prefix.length+1:this.options.prefix.length}removeNumber(n){let{decimal:e,thousands:i}=this.options,a=this.inputSelection.selectionEnd,s=this.inputSelection.selectionStart;s>this.rawValue.length-this.options.suffix.length&&(a=this.rawValue.length-this.options.suffix.length,s=this.rawValue.length-this.options.suffix.length),a==s&&((46==n||63272==n)&&/^\d+$/.test(this.rawValue.substring(s,a+1))&&(a+=1),(46==n||63272==n)&&(this.rawValue.substring(s,a+1)==e||this.rawValue.substring(s,a+1)==i)&&(a+=2,s+=1),8==n&&/^\d+$/.test(this.rawValue.substring(s-1,a))&&(s-=1),8==n&&(this.rawValue.substring(s-1,a)==e||this.rawValue.substring(s-1,a)==i)&&(s-=2,a-=1)),this.rawValue=this.rawValue.substring(0,s)+this.rawValue.substring(a,this.rawValue.length),this.updateFieldValue(s)}updateFieldValue(n){let e=this.applyMask(!1,this.rawValue||"");this.inputManager.updateValueAndCursor(e,this.rawValue.length,n=n??this.rawValue.length)}updateOptions(n){let e=this.value;this.options=n,this.value=e}get canInputMoreNumbers(){return this.inputManager.canInputMoreNumbers}get inputSelection(){return this.inputManager.inputSelection}get rawValue(){return this.inputManager.rawValue}set rawValue(n){this.inputManager.rawValue=n}get storedRawValue(){return this.inputManager.storedRawValue}get value(){return this.clearMask(this.rawValue)}set value(n){this.rawValue=this.applyMask(!0,""+n)}}class I{constructor(n,e){this.inputService=new y(n,e),this.htmlInputElement=n}handleClick(n,e){0==Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart)&&!isNaN(this.inputService.value)&&this.inputService.fixCursorPosition(e)}handleCut(n){this.isReadOnly()||setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},0)}handleInput(n){if(this.isReadOnly())return;let e=this.getNewKeyCode(this.inputService.storedRawValue,this.inputService.rawValue),i=this.inputService.rawValue.length,a=this.inputService.inputSelection.selectionEnd,s=this.inputService.getRawValueWithoutSuffixEndPosition(),r=this.inputService.storedRawValue.length;if(this.inputService.rawValue=this.inputService.storedRawValue,a==s&&1==Math.abs(i-r)||0==r){if(i<r&&(0!=this.inputService.value?this.inputService.removeNumber(8):this.setValue(null)),i>r)switch(e){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:if(!this.inputService.canInputMoreNumbers||isNaN(this.inputService.value)&&null==String.fromCharCode(e).match(/\d/))return;this.inputService.addNumber(e)}this.setCursorPosition(n),this.onModelChange(this.inputService.value)}else this.setCursorPosition(n)}handleKeydown(n){if(this.isReadOnly())return;let e=n.which||n.charCode||n.keyCode;if(8==e||46==e||63272==e){n.preventDefault();let i=Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart);(i==this.inputService.rawValue.length||0==this.inputService.value)&&(this.setValue(null),this.onModelChange(this.inputService.value)),0==i&&!isNaN(this.inputService.value)&&(this.inputService.removeNumber(e),this.onModelChange(this.inputService.value)),(8===e||46===e)&&0!=i&&!isNaN(this.inputService.value)&&(this.inputService.removeNumber(e),this.onModelChange(this.inputService.value))}}handleKeypress(n){if(this.isReadOnly())return;let e=n.which||n.charCode||n.keyCode;if(null!=e&&-1==[9,13].indexOf(e)&&!this.isArrowEndHomeKeyInFirefox(n)){switch(e){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:this.inputService.canInputMoreNumbers&&(!isNaN(this.inputService.value)||null!=String.fromCharCode(e).match(/\d/))&&this.inputService.addNumber(e)}n.preventDefault(),this.onModelChange(this.inputService.value)}}handleKeyup(n){this.inputService.fixCursorPosition()}handlePaste(n){this.isReadOnly()||setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},1)}updateOptions(n){this.inputService.updateOptions(n)}getOnModelChange(){return this.onModelChange}setOnModelChange(n){this.onModelChange=n}getOnModelTouched(){return this.onModelTouched}setOnModelTouched(n){this.onModelTouched=n}setValue(n){this.inputService.value=n}getNewKeyCode(n,e){if(n.length>e.length)return null;for(let i=0;i<e.length;i++)if(n.length==i||n[i]!=e[i])return e.charCodeAt(i);return null}isArrowEndHomeKeyInFirefox(n){return-1!=[35,36,37,38,39,40].indexOf(n.keyCode)&&(null==n.charCode||0==n.charCode)}isReadOnly(){return this.htmlInputElement&&this.htmlInputElement.readOnly}setCursorPosition(n){let e=this.inputService.getRawValueWithoutSuffixEndPosition();const i=n.target;setTimeout(function(){i.setSelectionRange(e,e)},0)}}const O={provide:o.JU,useExisting:(0,t.Gpc)(()=>v),multi:!0};let v=(()=>{class l{constructor(e,i,a){this.currencyMaskConfig=e,this.elementRef=i,this.keyValueDiffers=a,this.options={},this.optionsTemplate={align:"right",allowNegative:!0,decimal:".",precision:2,prefix:"$ ",suffix:"",thousands:","},e&&(this.optionsTemplate=e),this.keyValueDiffer=a.find({}).create()}ngAfterViewInit(){this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align}ngDoCheck(){this.keyValueDiffer.diff(this.options)&&(this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align,this.inputHandler.updateOptions(Object.assign({},this.optionsTemplate,this.options)))}ngOnInit(){this.inputHandler=new I(this.elementRef.nativeElement,Object.assign({},this.optionsTemplate,this.options))}handleBlur(e){this.inputHandler.getOnModelTouched().apply(e)}handleClick(e){this.inputHandler.handleClick(e,this.isChromeAndroid())}handleCut(e){this.isChromeAndroid()||this.inputHandler.handleCut(e)}handleInput(e){this.isChromeAndroid()&&this.inputHandler.handleInput(e)}handleKeydown(e){this.isChromeAndroid()||this.inputHandler.handleKeydown(e)}handleKeypress(e){this.isChromeAndroid()||this.inputHandler.handleKeypress(e)}handleKeyup(e){this.isChromeAndroid()||this.inputHandler.handleKeyup(e)}handlePaste(e){this.isChromeAndroid()||this.inputHandler.handlePaste(e)}isChromeAndroid(){return/chrome/i.test(navigator.userAgent)&&/android/i.test(navigator.userAgent)}registerOnChange(e){this.inputHandler.setOnModelChange(e)}registerOnTouched(e){this.inputHandler.setOnModelTouched(e)}setDisabledState(e){this.elementRef.nativeElement.disabled=e}validate(e){let i={};return e.value>this.max&&(i.max=!0),e.value<this.min&&(i.min=!0),i!={}?i:null}writeValue(e){this.inputHandler.setValue(e)}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(w,8),t.Y36(t.SBq),t.Y36(t.aQg))},l.\u0275dir=t.lG2({type:l,selectors:[["","currencyMask",""]],hostBindings:function(e,i){1&e&&t.NdJ("blur",function(s){return i.handleBlur(s)})("click",function(s){return i.handleClick(s)})("cut",function(s){return i.handleCut(s)})("input",function(s){return i.handleInput(s)})("keydown",function(s){return i.handleKeydown(s)})("keypress",function(s){return i.handleKeypress(s)})("keyup",function(s){return i.handleKeyup(s)})("paste",function(s){return i.handlePaste(s)})},inputs:{max:"max",min:"min",options:"options"},features:[t._Bn([O,{provide:o.Cf,useExisting:l,multi:!0}])]}),l})(),V=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[p.ez,o.u5]]}),l})();const C=function(l,n){return{selected:l,unselected:n}};let E=(()=>{class l{constructor(){this.nameOn="Sim",this.nameOff="N\xe3o",this.isOn=!0,this.newItemEvent=new t.vpe}updadeCheckBox(e){this.isOn=e.currentTarget.checked,this.newItemEvent.emit(this.isOn),console.log(this.isOn)}}return l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-switch-context"]],inputs:{nameOn:"nameOn",nameOff:"nameOff",isOn:"isOn"},outputs:{newItemEvent:"newItemEvent"},decls:7,vars:11,consts:[[1,"switch"],["type","checkbox",1,"checkbox",3,"ngModel","ngModelChange","change"],[1,"slider","round",2,"justify-content","center"],[1,"name","on",3,"ngClass"],[1,"name","off",3,"ngClass"]],template:function(e,i){1&e&&(t.TgZ(0,"label",0)(1,"input",1),t.NdJ("ngModelChange",function(s){return i.isOn=s})("change",function(s){return i.updadeCheckBox(s)}),t.qZA(),t.TgZ(2,"span",2)(3,"span",3),t._uU(4),t.qZA(),t.TgZ(5,"span",4),t._uU(6),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("ngModel",i.isOn),t.xp6(2),t.Q6J("ngClass",t.WLB(5,C,i.isOn,!i.isOn)),t.xp6(1),t.Oqu(i.nameOn),t.xp6(1),t.Q6J("ngClass",t.WLB(8,C,!i.isOn,i.isOn)),t.xp6(1),t.Oqu(i.nameOff))},dependencies:[p.mk,o.Wl,o.JJ,o.On],styles:['.switch[_ngcontent-%COMP%]{position:relative;width:100%;height:48px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#e8e8e8;transition:.4s}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:48px;width:50%;background-color:#414141;transition:.4s}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(100%)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:34px}.name[_ngcontent-%COMP%]{position:absolute;margin-top:10px}.name.on[_ngcontent-%COMP%]{right:20%}.name.off[_ngcontent-%COMP%]{left:20%}.selected[_ngcontent-%COMP%]{font-weight:700;color:#fff}.unselected[_ngcontent-%COMP%]{font-weight:400;color:#000}*[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}']}),l})();function b(l,n){if(1&l){const e=t.EpF();t.TgZ(0,"app-switch-context",19),t.NdJ("newItemEvent",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.updateInvestmentTime(a))}),t.qZA()}if(2&l){const e=t.oxw();t.Q6J("isOn",e.fixedService.dueDateTypeByMonth())}}function T(l,n){if(1&l){const e=t.EpF();t.TgZ(0,"app-switch-context",15),t.NdJ("newItemEvent",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.updateInvestmentTime(a))}),t.qZA()}if(2&l){const e=t.oxw();t.Q6J("isOn",e.fixedService.dueDateTypeByMonth())}}function k(l,n){if(1&l&&(t.TgZ(0,"p",20),t._uU(1),t.qZA()),2&l){const e=t.oxw();t.xp6(1),t.hij("taxa selic atual (",e.fixedService.currentSelic,"%) ano")}}const S=function(){return{prefix:"R$ ",thousands:".",decimal:",",align:"left"}},P=[{path:"",component:(()=>{class l{constructor(e,i){this.router=e,this.fixedService=i,console.log(i.model.dueDateType),console.log(i.model.taxType)}simulateInvestment(){this.router.navigate(["resultado"])}updateTax(e){this.fixedService.model.taxType=e?"m\xeas":"ano",console.log("taxPerMonth"+this.fixedService.model.taxType)}updateInvestmentTime(e){this.fixedService.model.dueDateType=e?"m\xeas":"ano",console.log("dueDateType"+this.fixedService.model.dueDateType)}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(g.F0),t.Y36(x.h))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-simulate-fixed-investments"]],decls:36,vars:12,consts:[[1,"container"],[1,"row"],[1,"title","unselected"],[1,"label_input","money","unselected"],["currencyMask","",3,"ngModel","options","ngModelChange"],[1,"label_input","unselected"],[1,"row","p-0","m-0"],[1,"col"],["type","number","min","1","step","1","pattern","[0-9]","oninput","this.value=(parseInt(this.value)||0)",3,"ngModel","ngModelChange"],[1,"col-5"],["nameOn","meses","nameOff","anos",3,"isOn","newItemEvent",4,"ngIf","ngIfElse"],["oneRepeat",""],[1,"col","percentInput"],["type","number",3,"ngModel","ngModelChange"],[1,"unselected"],["nameOn","m\xeas","nameOff","ano",3,"isOn","newItemEvent"],["class","label_current_tax_selic unselected",4,"ngIf"],[2,"width","100%"],[1,"button_action","unselected",3,"click"],["nameOn","meses","nameOff","anos",3,"isOn","newItemEvent"],[1,"label_current_tax_selic","unselected"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3,"Simulador de "),t.TgZ(4,"b"),t._uU(5,"Investimentos"),t.qZA()(),t.TgZ(6,"div")(7,"p",3),t._uU(8,"valor inicial"),t.qZA(),t.TgZ(9,"input",4),t.NdJ("ngModelChange",function(s){return i.fixedService.model.initialValue=s}),t.qZA()(),t.TgZ(10,"div")(11,"p",5),t._uU(12,"aporte mensal"),t.qZA(),t.TgZ(13,"input",4),t.NdJ("ngModelChange",function(s){return i.fixedService.model.monthlyValue=s}),t.qZA()(),t.TgZ(14,"div",6)(15,"p",5),t._uU(16,"tempo de investimento"),t.qZA(),t.TgZ(17,"div",7)(18,"input",8),t.NdJ("ngModelChange",function(s){return i.fixedService.model.dueDate=s}),t.qZA()(),t.TgZ(19,"div",9),t.YNc(20,b,1,1,"app-switch-context",10),t.qZA(),t.YNc(21,T,1,1,"ng-template",null,11,t.W1O),t.qZA(),t.TgZ(23,"div",6)(24,"p",5),t._uU(25,"taxa de juros"),t.qZA(),t.TgZ(26,"div",12)(27,"input",13),t.NdJ("ngModelChange",function(s){return i.fixedService.model.taxValue=s}),t.qZA(),t.TgZ(28,"span",14),t._uU(29,"%"),t.qZA()(),t.TgZ(30,"div",9)(31,"app-switch-context",15),t.NdJ("newItemEvent",function(s){return i.updateTax(s)}),t.qZA()(),t.YNc(32,k,2,1,"p",16),t.qZA(),t.TgZ(33,"div",17)(34,"button",18),t.NdJ("click",function(){return i.simulateInvestment()}),t._uU(35,"simular investimento"),t.qZA()()()()),2&e){const a=t.MAs(22);t.xp6(9),t.Q6J("ngModel",i.fixedService.model.initialValue)("options",t.DdM(10,S)),t.xp6(4),t.Q6J("ngModel",i.fixedService.model.monthlyValue)("options",t.DdM(11,S)),t.xp6(5),t.Q6J("ngModel",i.fixedService.model.dueDate),t.xp6(2),t.Q6J("ngIf",1!=i.fixedService.model.dueDate)("ngIfElse",a),t.xp6(7),t.Q6J("ngModel",i.fixedService.model.taxValue),t.xp6(4),t.Q6J("isOn",i.fixedService.taxesByMonth()),t.xp6(1),t.Q6J("ngIf",0!=i.fixedService.currentSelic)}},dependencies:[p.O5,o.Fj,o.wV,o.JJ,o.c5,o.qQ,o.On,v,E],styles:[".title[_ngcontent-%COMP%]{font-size:32px;margin-top:64px}.label_current_tax_selic[_ngcontent-%COMP%]{font-style:italic;font-size:14px}.label_input[_ngcontent-%COMP%]{margin-bottom:8px;margin-top:16px}.unselected[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.button_action[_ngcontent-%COMP%]{background-color:#000;padding:16px;color:#fff;position:relative;margin-top:32px;width:100%;border-radius:90px;margin-bottom:32px}input[_ngcontent-%COMP%]{width:100%;background-color:#f2f2f2;padding:12px;border:0;border-radius:12px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.percentInput[_ngcontent-%COMP%]{position:relative}.percentInput[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;right:32px;top:12px}.num_percent[_ngcontent-%COMP%]{text-align:right;padding-right:12px}"]}),l})()}];let R=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[g.Bz.forChild(P),g.Bz]}),l})(),A=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[p.ez,R,o.u5,V]}),l})()}}]);