"use strict";(self.webpackChunksimulador_investimentos=self.webpackChunksimulador_investimentos||[]).push([[288],{2288:(q,v,l)=>{l.r(v),l.d(v,{ResultsFixedInvestmentsModule:()=>I});var c=l(6814),m=l(4670),e=l(4946),g=l(665);function f(t,i){if(1&t&&(e.TgZ(0,"div",6),e._uU(1),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Oqu(n.data.currentMonth)}}const x=function(t,i,n){return{"item-table-par":t,"item-table-impar":i,"item-table-last":n}};function h(t,i){if(1&t&&(e.TgZ(0,"div",3),e.YNc(1,f,2,1,"div",4),e.TgZ(2,"div",5),e._uU(3),e.qZA(),e.TgZ(4,"div",5),e._uU(5),e.qZA(),e.TgZ(6,"div",5),e._uU(7),e.qZA(),e.TgZ(8,"div",5),e._uU(9),e.qZA()()),2&t){const n=e.oxw(),o=e.MAs(2);e.Q6J("ngClass",e.kEZ(7,x,n.data.currentMonth%2==0,n.data.currentMonth%2!=0,n.last)),e.xp6(1),e.Q6J("ngIf",n.data.currentMonth>0)("ngIfElse",o),e.xp6(2),e.Oqu(n.service.formatValue(n.data.currentTax)),e.xp6(2),e.Oqu(n.service.formatValue(n.data.currentTotalWithoutTax)),e.xp6(2),e.Oqu(n.service.formatValue(n.data.totalTax)),e.xp6(2),e.Oqu(n.service.formatValue(n.data.currentTotalWithTax))}}function _(t,i){1&t&&(e.TgZ(0,"div",6),e._uU(1,"*"),e.qZA())}function T(t,i){1&t&&(e.TgZ(0,"div",7)(1,"div",6),e._uU(2,"m\xeas"),e.qZA(),e.TgZ(3,"div",5),e._uU(4,"juros"),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"investido"),e.qZA(),e.TgZ(7,"div",5),e._uU(8,"juros total"),e.qZA(),e.TgZ(9,"div",5),e._uU(10,"total"),e.qZA()())}let b=(()=>{class t{constructor(n){this.service=n,this.isHeader=!1,this.last=!1,this.data={currentMonth:0,currentTax:0,currentTotalWithTax:0,currentTotalWithoutTax:0,totalTax:0}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-table-investments"]],inputs:{isHeader:"isHeader",last:"last",data:"data"},decls:5,vars:2,consts:[["class","row flex-nowrap",3,"ngClass",4,"ngIf","ngIfElse"],["monthzero",""],["headerTemplate",""],[1,"row","flex-nowrap",3,"ngClass"],["class","col-1",4,"ngIf","ngIfElse"],[1,"col"],[1,"col-1"],[1,"row","header-table","flex-nowrap"]],template:function(n,o){if(1&n&&(e.YNc(0,h,10,11,"div",0),e.YNc(1,_,2,0,"ng-template",null,1,e.W1O),e.YNc(3,T,11,0,"ng-template",null,2,e.W1O)),2&n){const a=e.MAs(4);e.Q6J("ngIf",!o.isHeader)("ngIfElse",a)}},dependencies:[c.mk,c.O5],styles:[".header-table[_ngcontent-%COMP%]{background-color:#000;color:#fff;padding:4px;border-radius:25px 25px 0 0;font-weight:700}.item-table-par[_ngcontent-%COMP%]{background-color:#eee;color:#000;padding:4px}.item-table-impar[_ngcontent-%COMP%]{background-color:#fefefe;color:#000;padding:4px}.item-table-last[_ngcontent-%COMP%]{border-radius:0 0 25px 25px;box-shadow:0 5px #0000000a}div.row[_ngcontent-%COMP%]{border:1px solid;border-bottom:0px;border-left:0;border-right:0;border-color:#dedede}"]}),t})();function Z(t,i){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-table-investments",20),e.qZA()),2&t){const n=i.$implicit,o=i.last;e.xp6(1),e.Q6J("data",n)("last",o)}}const C=function(t){return{scrool:t}},w=function(t,i){return{"expand-content":t,"max-content":i}},M=[{path:"",component:(()=>{class t{constructor(n,o){this.router=n,this.fixedService=o,o.calcFixedInvestment()}detectMob(){const n=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),o=window.innerWidth<600;return o&&!n||o&&n}backToSimulate(){this.router.navigate([""])}share(){}exportToCsv(n,o){if(!o||!o.length)return;const d=Object.keys(o[0]),O=d.join("|")+"\n"+o.map(u=>d.map(p=>{let s=null==u[p]?"":u[p];return s=s instanceof Date?s.toLocaleString():s.toString().replace(/"/g,'""'),s.search(/("|\n)/g)>=0&&(s=`"${s}"`),s}).join("|")).join("\n"),U=new Blob([O],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");if(void 0!==r.download){const u=URL.createObjectURL(U);r.setAttribute("href",u),r.setAttribute("download",n),r.style.visibility="hidden",document.body.appendChild(r),r.click(),document.body.removeChild(r)}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.F0),e.Y36(g.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-results-fixed-investments"]],decls:34,vars:13,consts:[[1,"container"],[1,"row"],[1,"row","header",3,"click"],[1,"col",2,"margin","0","text-align","left","max-width","19px"],["xmlns","http://www.w3.org/2000/svg","width","19","height","28","viewBox","0 0 19 28","fill","none"],["d","M13.8182 0L0 13.8182L13.8182 27.6364L19 22.4545L10.3636 13.8182L19 5.18182L13.8182 0Z","fill","black"],[1,"col",2,"margin","0","text-align","left"],[2,"margin-left","16px"],[1,"description_value"],[1,"cifrao-result"],[1,"value-result"],[1,"after-value-result"],[1,"row",2,"margin-bottom","32px"],[1,"col","cifrao-result",2,"margin","0","text-align","left"],[1,"value-result-month"],[3,"ngClass"],[3,"isHeader"],[4,"ngFor","ngForOf"],[2,"width","100%"],[1,"button_action","unselected",3,"click"],[3,"data","last"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.NdJ("click",function(){return o.backToSimulate()}),e.TgZ(3,"div",3),e.O4$(),e.TgZ(4,"svg",4),e._UZ(5,"path",5),e.qZA()(),e.kcU(),e.TgZ(6,"div",6)(7,"p",7),e._uU(8,"voltar para simula\xe7\xe3o"),e.qZA()()(),e.TgZ(9,"p",8),e._uU(10),e.qZA(),e.TgZ(11,"div",1)(12,"div",6)(13,"p",9),e._uU(14,"R$ "),e.TgZ(15,"span",10),e._uU(16),e.qZA(),e.TgZ(17,"span",11),e._uU(18," em caixa"),e.qZA()()()(),e.TgZ(19,"div",12)(20,"div",13)(21,"p",9),e._uU(22,"R$ "),e.TgZ(23,"span",14),e._uU(24),e.qZA(),e.TgZ(25,"span",11),e._uU(26," de renda mensal"),e.qZA()()()(),e.TgZ(27,"div",15)(28,"div",15),e._UZ(29,"app-table-investments",16),e.YNc(30,Z,2,2,"div",17),e.qZA()(),e.TgZ(31,"div",18)(32,"button",19),e.NdJ("click",function(){return o.share()}),e._uU(33,"compartilhar simula\xe7\xe3o"),e.qZA()()()()),2&n&&(e.xp6(10),e.AsE("at\xe9 o fim do periodo seguindo uma taxa de ",o.fixedService.model.taxValue,"% ao ",o.fixedService.model.taxType," sem impostos e infla\xe7\xe3o voc\xea teria o equivalente a:"),e.xp6(6),e.Oqu(o.fixedService.formatValue(o.fixedService.historicData.slice(-1)[0].currentTotalWithTax,!1)),e.xp6(8),e.Oqu(o.fixedService.formatValue(o.fixedService.historicData.slice(-1)[0].currentTax,!1)),e.xp6(3),e.Q6J("ngClass",e.VKq(8,C,o.detectMob())),e.xp6(1),e.Q6J("ngClass",e.WLB(10,w,!o.detectMob(),o.detectMob())),e.xp6(1),e.Q6J("isHeader",!0),e.xp6(1),e.Q6J("ngForOf",o.fixedService.historicData))},dependencies:[c.mk,c.sg,b],styles:[".button_action[_ngcontent-%COMP%]{background-color:#000;padding:16px;color:#fff;position:relative;margin-top:32px;width:100%;border-radius:90px;margin-bottom:32px}.description_value[_ngcontent-%COMP%]{margin-top:42px;margin-bottom:14px;font-weight:500}.cifrao-result[_ngcontent-%COMP%]{font-size:38px;color:#000;font-weight:700;margin:auto;vertical-align:baseline}.value-result[_ngcontent-%COMP%]{font-size:38px;color:#000;font-weight:500;margin:auto;vertical-align:baseline}.value-result-month[_ngcontent-%COMP%]{font-size:32px;color:#000;font-weight:500;margin:auto;vertical-align:baseline}.after-value-result[_ngcontent-%COMP%]{font-size:18px;color:#000;font-weight:500;margin:auto;vertical-align:baseline}.max-content[_ngcontent-%COMP%]{max-width:max-content;width:max-content;margin:16px}.scrool[_ngcontent-%COMP%]{white-space:nowrap;overflow-x:scroll;overflow:auto}.header[_ngcontent-%COMP%]{margin-top:16px;width:300px;cursor:pointer}"]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(M),m.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,A]}),t})()}}]);