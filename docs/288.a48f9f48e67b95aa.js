"use strict";(self.webpackChunksimulador_investimentos=self.webpackChunksimulador_investimentos||[]).push([[288],{288:(w,p,r)=>{r.r(p),r.d(p,{ResultsFixedInvestmentsModule:()=>A});var u=r(814),d=r(538),e=r(946),v=r(665);function f(t,i){if(1&t&&(e.TgZ(0,"div",5),e._uU(1),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Oqu(n.data.currentMonth)}}const x=function(t,i,n){return{"item-table-par":t,"item-table-impar":i,"item-table-last":n}};function _(t,i){if(1&t&&(e.TgZ(0,"div",3),e.YNc(1,f,2,1,"div",4),e.TgZ(2,"div",5),e._uU(3),e.qZA(),e.TgZ(4,"div",5),e._uU(5),e.qZA(),e.TgZ(6,"div",5),e._uU(7),e.qZA(),e.TgZ(8,"div",5),e._uU(9),e.qZA()()),2&t){const n=e.oxw(),o=e.MAs(2);e.Q6J("ngClass",e.kEZ(7,x,n.data.currentMonth%2==0,n.data.currentMonth%2!=0,n.last)),e.xp6(1),e.Q6J("ngIf",n.data.currentMonth>0)("ngIfElse",o),e.xp6(2),e.Oqu(n.service.formatValue(n.data.currentTax)),e.xp6(2),e.Oqu(n.service.formatValue(n.data.currentTotalWithoutTax)),e.xp6(2),e.Oqu(n.service.formatValue(n.data.totalTax)),e.xp6(2),e.Oqu(n.service.formatValue(n.data.currentTotalWithTax))}}function h(t,i){1&t&&(e.TgZ(0,"div",5),e._uU(1,"*"),e.qZA())}function T(t,i){1&t&&(e.TgZ(0,"div",6)(1,"div",5),e._uU(2,"m\xeas"),e.qZA(),e.TgZ(3,"div",5),e._uU(4,"juros"),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"investido"),e.qZA(),e.TgZ(7,"div",5),e._uU(8,"juros total"),e.qZA(),e.TgZ(9,"div",5),e._uU(10,"total"),e.qZA()())}let b=(()=>{class t{constructor(n){this.service=n,this.isHeader=!1,this.last=!1,this.data={currentMonth:0,currentTax:0,currentTotalWithTax:0,currentTotalWithoutTax:0,totalTax:0}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(v.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-table-investments"]],inputs:{isHeader:"isHeader",last:"last",data:"data"},decls:5,vars:2,consts:[["class","row item-table-par",3,"ngClass",4,"ngIf","ngIfElse"],["monthzero",""],["headerTemplate",""],[1,"row","item-table-par",3,"ngClass"],["class","col",4,"ngIf","ngIfElse"],[1,"col"],[1,"row","header-table"]],template:function(n,o){if(1&n&&(e.YNc(0,_,10,11,"div",0),e.YNc(1,h,2,0,"ng-template",null,1,e.W1O),e.YNc(3,T,11,0,"ng-template",null,2,e.W1O)),2&n){const s=e.MAs(4);e.Q6J("ngIf",!o.isHeader)("ngIfElse",s)}},dependencies:[u.mk,u.O5],styles:[".header-table[_ngcontent-%COMP%]{background-color:#000;color:#fff;padding:4px;border-radius:25px 25px 0 0;font-weight:700}.item-table-par[_ngcontent-%COMP%]{background-color:#eee;color:#000;padding:4px}.item-table-impar[_ngcontent-%COMP%]{background-color:#fefefe;color:#000;padding:4px}.item-table-last[_ngcontent-%COMP%]{border-radius:0 0 25px 25px;box-shadow:0 5px #0000000a}div.row[_ngcontent-%COMP%]{border:1px solid;border-bottom:0px;border-left:0;border-right:0;border-color:#dedede}"]}),t})();function Z(t,i){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-table-investments",20),e.qZA()),2&t){const n=i.$implicit,o=i.last;e.xp6(1),e.Q6J("data",n)("last",o)}}const C=[{path:"",component:(()=>{class t{constructor(n,o){this.router=n,this.fixedService=o,o.calcFixedInvestment()}backToSimulate(){this.router.navigate([""])}share(){this.exportToCsv("teste.csv",this.fixedService.historicData)}exportToCsv(n,o){if(!o||!o.length)return;const g=Object.keys(o[0]),M=g.join("|")+"\n"+o.map(c=>g.map(m=>{let a=null==c[m]?"":c[m];return a=a instanceof Date?a.toLocaleString():a.toString().replace(/"/g,'""'),a.search(/("|\n)/g)>=0&&(a=`"${a}"`),a}).join("|")).join("\n"),O=new Blob([M],{type:"text/csv;charset=utf-8;"}),l=document.createElement("a");if(void 0!==l.download){const c=URL.createObjectURL(O);l.setAttribute("href",c),l.setAttribute("download",n),l.style.visibility="hidden",document.body.appendChild(l),l.click(),document.body.removeChild(l)}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.F0),e.Y36(v.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-results-fixed-investments"]],decls:33,vars:6,consts:[[1,"container"],[1,"row","root"],[1,"row"],[1,"col",2,"margin","0","text-align","left","max-width","19px"],["xmlns","http://www.w3.org/2000/svg","width","19","height","28","viewBox","0 0 19 28","fill","none",2,"cursor","pointer",3,"click"],["d","M13.8182 0L0 13.8182L13.8182 27.6364L19 22.4545L10.3636 13.8182L19 5.18182L13.8182 0Z","fill","black"],[1,"col",2,"margin","0","text-align","left"],[2,"margin-left","16px"],[2,"cursor","pointer",3,"click"],[1,"description_value"],[1,"cifrao-result"],[1,"value-result"],[1,"after-value-result"],[1,"row",2,"margin-bottom","32px"],[1,"col","cifrao-result",2,"margin","0","text-align","left"],[1,"value-result-month"],[3,"isHeader"],[4,"ngFor","ngForOf"],[2,"width","100%"],[1,"button_action","unselected",3,"click"],[3,"data","last"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.O4$(),e.TgZ(4,"svg",4),e.NdJ("click",function(){return o.backToSimulate()}),e._UZ(5,"path",5),e.qZA()(),e.kcU(),e.TgZ(6,"div",6)(7,"p",7)(8,"u",8),e.NdJ("click",function(){return o.backToSimulate()}),e._uU(9,"voltar para simula\xe7\xe3o"),e.qZA()()()(),e.TgZ(10,"p",9),e._uU(11),e.qZA(),e.TgZ(12,"div",2)(13,"div",6)(14,"p",10),e._uU(15,"R$ "),e.TgZ(16,"span",11),e._uU(17),e.qZA(),e.TgZ(18,"span",12),e._uU(19," em caixa"),e.qZA()()()(),e.TgZ(20,"div",13)(21,"div",14)(22,"p",10),e._uU(23,"R$ "),e.TgZ(24,"span",15),e._uU(25),e.qZA(),e.TgZ(26,"span",12),e._uU(27," de renda mensal"),e.qZA()()()(),e._UZ(28,"app-table-investments",16),e.YNc(29,Z,2,2,"div",17),e.TgZ(30,"div",18)(31,"button",19),e.NdJ("click",function(){return o.share()}),e._uU(32,"compartilhar simula\xe7\xe3o"),e.qZA()()()()),2&n&&(e.xp6(11),e.AsE("at\xe9 o fim do periodo seguindo uma taxa de ",o.fixedService.model.taxValue,"% ao ",o.fixedService.model.taxType," sem impostos e infla\xe7\xe3o voc\xea teria o equivalente a:"),e.xp6(6),e.Oqu(o.fixedService.formatValue(o.fixedService.historicData.slice(-1)[0].currentTotalWithTax,!1)),e.xp6(8),e.Oqu(o.fixedService.formatValue(o.fixedService.historicData.slice(-1)[0].currentTax,!1)),e.xp6(3),e.Q6J("isHeader",!0),e.xp6(1),e.Q6J("ngForOf",o.fixedService.historicData))},dependencies:[u.sg,b],styles:[".button_action[_ngcontent-%COMP%]{background-color:#000;padding:16px;color:#fff;position:relative;margin-top:32px;width:100%;border-radius:90px}.root[_ngcontent-%COMP%]{padding:32px;width:100%;min-width:300px}*[_ngcontent-%COMP%]{margin:auto;vertical-align:baseline;padding:0}.description_value[_ngcontent-%COMP%]{margin-top:42px;margin-bottom:14px;font-weight:500}.cifrao-result[_ngcontent-%COMP%]{font-size:38px;color:#000;font-weight:700;margin:auto;vertical-align:baseline}.value-result[_ngcontent-%COMP%]{font-size:38px;color:#000;font-weight:500;margin:auto;vertical-align:baseline}.value-result-month[_ngcontent-%COMP%]{font-size:32px;color:#000;font-weight:500;margin:auto;vertical-align:baseline}.after-value-result[_ngcontent-%COMP%]{font-size:18px;color:#000;font-weight:500;margin:auto;vertical-align:baseline}"]}),t})()}];let I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(C),d.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,I]}),t})()}}]);