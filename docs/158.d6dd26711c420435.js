"use strict";(self.webpackChunksimulador_investimentos=self.webpackChunksimulador_investimentos||[]).push([[158],{4158:(I,g,u)=>{u.r(g),u.d(g,{ResultsFixedInvetmentsModule:()=>F});var p=u(6814),m=u(504);function x(a,o,i,t,n,s,l){try{var c=a[s](l),d=c.value}catch(v){return void i(v)}c.done?o(d):Promise.resolve(d).then(t,n)}var T=u(5218),e=u(4769),h=u(665),_=u(742);const Z=function(a,o,i){return{"item-table-par":a,"item-table-impar":o,"item-table-last":i}};function b(a,o){if(1&a&&(e.TgZ(0,"div",2)(1,"div",3),e._uU(2),e.qZA(),e.TgZ(3,"div",4),e._uU(4),e.ALo(5,"date"),e.ALo(6,"date"),e.qZA(),e.TgZ(7,"div",4),e._uU(8),e.ALo(9,"currency"),e.qZA(),e.TgZ(10,"div",4),e._uU(11),e.ALo(12,"currency"),e.qZA(),e.TgZ(13,"div",4),e._uU(14),e.ALo(15,"currency"),e.qZA(),e.TgZ(16,"div",4),e._uU(17),e.ALo(18,"currency"),e.qZA()()),2&a){const i=e.oxw();e.Q6J("ngClass",e.kEZ(24,Z,i.index%2==0,i.index%2!=0,i.last)),e.xp6(2),e.Oqu(i.index),e.xp6(2),e.Oqu(e.xi3(5,7,e.lcZ(6,10,i.data.currentMonth),"dd/MM/yyyy")),e.xp6(4),e.Oqu(e.xi3(9,12,i.data.currentTax,"BRL")),e.xp6(3),e.Oqu(e.xi3(12,15,i.data.currentTotalWithoutTax,"BRL")),e.xp6(3),e.Oqu(e.xi3(15,18,i.data.totalTax,"BRL")),e.xp6(3),e.Oqu(e.xi3(18,21,i.data.currentTotalWithTax,"BRL"))}}function M(a,o){1&a&&(e.TgZ(0,"div",5)(1,"div",3),e._uU(2,"m\xeas"),e.qZA(),e.TgZ(3,"div",4),e._uU(4,"data"),e.qZA(),e.TgZ(5,"div",4),e._uU(6,"juros"),e.qZA(),e.TgZ(7,"div",4),e._uU(8,"investido"),e.qZA(),e.TgZ(9,"div",4),e._uU(10,"juros total"),e.qZA(),e.TgZ(11,"div",4),e._uU(12,"total"),e.qZA()())}let y=(()=>{var a;class o{constructor(t){this.service=t,this.isHeader=!1,this.last=!1,this.index=0,this.data={currentMonth:"",currentTax:0,currentTotalWithTax:0,currentTotalWithoutTax:0,totalTax:0}}}return(a=o).\u0275fac=function(t){return new(t||a)(e.Y36(h.h))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-table-investments"]],inputs:{isHeader:"isHeader",last:"last",index:"index",data:"data"},decls:3,vars:2,consts:[["class","row flex-nowrap",3,"ngClass",4,"ngIf","ngIfElse"],["headerTemplate",""],[1,"row","flex-nowrap",3,"ngClass"],[1,"col-1"],[1,"col"],[1,"row","header-table","flex-nowrap"]],template:function(t,n){if(1&t&&(e.YNc(0,b,19,28,"div",0),e.YNc(1,M,13,0,"ng-template",null,1,e.W1O)),2&t){const s=e.MAs(2);e.Q6J("ngIf",!n.isHeader)("ngIfElse",s)}},dependencies:[p.mk,p.O5,p.H9,p.uU],styles:[".header-table[_ngcontent-%COMP%]{background-color:#000;color:#fff;padding:4px;border-radius:25px 25px 0 0;font-weight:700}.item-table-par[_ngcontent-%COMP%]{background-color:#eee;color:#000;padding:4px}.item-table-impar[_ngcontent-%COMP%]{background-color:#fefefe;color:#000;padding:4px}.item-table-last[_ngcontent-%COMP%]{border-radius:0 0 25px 25px;box-shadow:0 5px #0000000a}div.row[_ngcontent-%COMP%]{border:1px solid;border-bottom:0px;border-left:0;border-right:0;border-color:#dedede}"]}),o})();const w=["chart"];function C(a,o){if(1&a&&(e.TgZ(0,"div"),e._UZ(1,"app-table-investments",24),e.qZA()),2&a){const i=o.$implicit,t=o.last,n=o.index;e.xp6(1),e.Q6J("data",i)("last",t)("index",n)}}const A=function(a){return{scrool:a}},O=function(a,o){return{"expand-content":a,"max-content":o}},q=[{path:"",component:(()=>{var a;class o{constructor(t,n,s){this.router=t,this.fixedService=n,this.activeRoute=s,this.chart={},this.chartOptions={};var l=this.getModel();this.investments=this.fixedService.calcFixedInvestment(l),this.plotChart(this.investments)}getModel(){var t=new T.Z;return t.initialValue=Number.parseFloat(this.activeRoute.snapshot.queryParamMap.get("initialValue")),t.dueDate=Number.parseInt(this.activeRoute.snapshot.queryParamMap.get("dueDate")),t.dueDateType=this.activeRoute.snapshot.queryParamMap.get("dueDateType"),t.taxType=this.activeRoute.snapshot.queryParamMap.get("taxType"),t.taxValue=Number.parseFloat(this.activeRoute.snapshot.queryParamMap.get("taxValue")),t.monthlyValue=Number.parseFloat(this.activeRoute.snapshot.queryParamMap.get("monthlyValue")),t.initialDate=this.activeRoute.snapshot.queryParamMap.get("startDate"),t}plotChart(t){var n=[],s=[],l=[],c=[],d=[],v=0;t.forEach(r=>{s.push(r.currentMonth),l.push(r.currentTotalWithTax),d.push(r.totalTax),c.push(r.currentTotalWithoutTax),n.push(v),v+=1}),this.chartOptions={series:[{name:"total investido",data:c},{name:"total com juros",data:l}],chart:{height:200,type:"line"},colors:["#909090","#000000"],title:{text:""},xaxis:{categories:n},yaxis:{labels:{formatter:function(r){return r<1e3?r:r>=1e3&&r<1e6?+(r/1e3).toFixed(1)+"K":r>=1e6&&r<1e9?+(r/1e6).toFixed(1)+"M":r>=1e9&&r<1e12?+(r/1e9).toFixed(1)+"B":r>=1e12?+(r/1e12).toFixed(1)+"T":r}}}}}detectMob(){const t=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),n=window.innerWidth<600;return n&&!t||n&&t}backToSimulate(){this.router.navigate([""])}share(){var t=this;return function f(a){return function(){var o=this,i=arguments;return new Promise(function(t,n){var s=a.apply(o,i);function l(d){x(s,t,n,l,c,"next",d)}function c(d){x(s,t,n,l,c,"throw",d)}l(void 0)})}}(function*(){try{const s={title:"Meus investimentos",text:"Veja esta simula\xe7\xe3o de investimento!",url:"https://mbcampolino.github.io/simulador-investimentos/?initialValue="+t.getModel().initialValue+"&monthlyValue="+t.getModel().monthlyValue+"&dueDateType="+t.getModel().dueDateType+"&taxType="+t.getModel().taxType+"&taxValue="+t.getModel().taxValue+"&dueDate="+t.getModel().dueDate};yield navigator.share(s)}catch{}})()}}return(a=o).\u0275fac=function(t){return new(t||a)(e.Y36(m.F0),e.Y36(h.h),e.Y36(m.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-results-fixed-investments"]],viewQuery:function(t,n){if(1&t&&e.Gf(w,5),2&t){let s;e.iGM(s=e.CRH())&&(n.chart=s.first)}},decls:38,vars:20,consts:[[1,"container"],[1,"row"],[1,"row","header",3,"click"],[1,"col",2,"margin","0","text-align","left","max-width","19px"],["xmlns","http://www.w3.org/2000/svg","width","19","height","28","viewBox","0 0 19 28","fill","none"],["d","M13.8182 0L0 13.8182L13.8182 27.6364L19 22.4545L10.3636 13.8182L19 5.18182L13.8182 0Z","fill","black"],[1,"col",2,"margin","0","text-align","left"],[2,"margin-left","16px"],[1,"description_value"],[1,"row",2,"background-color","black"],[1,"cifrao-result"],[1,"value-result"],[1,"after-value-result"],[2,"color","green","font-weight","600"],[1,"row",2,"margin-bottom","32px","background-color","rgb(26, 26, 26)"],[1,"col","cifrao-result",2,"margin","0","text-align","left"],[1,"value-result-month"],[2,"text-align","center","padding","0"],[3,"series","chart","xaxis","yaxis","title","colors"],[3,"ngClass"],[3,"isHeader"],[4,"ngFor","ngForOf"],[2,"width","100%"],[1,"button_action","unselected",3,"click"],[3,"data","last","index"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.NdJ("click",function(){return n.backToSimulate()}),e.TgZ(3,"div",3),e.O4$(),e.TgZ(4,"svg",4),e._UZ(5,"path",5),e.qZA()(),e.kcU(),e.TgZ(6,"div",6)(7,"p",7),e._uU(8,"voltar para simula\xe7\xe3o"),e.qZA()()(),e.TgZ(9,"p",8),e._uU(10),e.qZA(),e.TgZ(11,"div",9)(12,"div",6)(13,"p",10),e._uU(14,"R$ "),e.TgZ(15,"span",11),e._uU(16),e.qZA(),e.TgZ(17,"span",12),e._uU(18," em caixa"),e.qZA()(),e.TgZ(19,"p",13),e._uU(20),e.qZA()()(),e.TgZ(21,"div",14)(22,"div",15)(23,"p",10),e._uU(24,"R$ "),e.TgZ(25,"span",16),e._uU(26),e.qZA(),e.TgZ(27,"span",12),e._uU(28," de renda mensal"),e.qZA()()()(),e.TgZ(29,"div",17),e._UZ(30,"apx-chart",18),e.qZA(),e.TgZ(31,"div",19)(32,"div",19),e._UZ(33,"app-table-investments",20),e.YNc(34,C,2,3,"div",21),e.qZA()(),e.TgZ(35,"div",22)(36,"button",23),e.NdJ("click",function(){return n.share()}),e._uU(37,"compartilhar simula\xe7\xe3o"),e.qZA()()()()),2&t&&(e.xp6(10),e.AsE("at\xe9 o fim do periodo seguindo uma taxa de ",n.getModel().taxValue,"% ao ",n.getModel().taxType," sem impostos e infla\xe7\xe3o voc\xea teria o equivalente a:"),e.xp6(6),e.Oqu(n.fixedService.formatValue(n.investments.slice(-1)[0].currentTotalWithTax,!1)),e.xp6(4),e.Oqu(n.fixedService.getTotalCalculed(n.investments.slice(-1)[0].totalTax,n.investments.slice(-1)[0].currentTotalWithTax,n.getModel().dueDate,n.getModel().dueDateType)),e.xp6(6),e.Oqu(n.fixedService.formatValue(n.investments.slice(-1)[0].currentTax,!1)),e.xp6(4),e.Q6J("series",n.chartOptions.series)("chart",n.chartOptions.chart)("xaxis",n.chartOptions.xaxis)("yaxis",n.chartOptions.yaxis)("title",n.chartOptions.title)("colors",n.chartOptions.colors),e.xp6(1),e.Q6J("ngClass",e.VKq(15,A,n.detectMob())),e.xp6(1),e.Q6J("ngClass",e.WLB(17,O,!n.detectMob(),n.detectMob())),e.xp6(1),e.Q6J("isHeader",!0),e.xp6(1),e.Q6J("ngForOf",n.investments))},dependencies:[p.mk,p.sg,_.x,y],styles:[".button_action[_ngcontent-%COMP%]{background-color:#000;padding:16px;color:#fff;position:relative;margin-top:32px;width:100%;border-radius:90px;margin-bottom:32px}.description_value[_ngcontent-%COMP%]{margin-top:42px;margin-bottom:14px;font-weight:500}.cifrao-result[_ngcontent-%COMP%]{font-size:38px;color:#fff;font-weight:700;margin:auto;vertical-align:baseline}.value-result[_ngcontent-%COMP%]{font-size:38px;color:#fff;font-weight:500;margin:auto;vertical-align:baseline}.value-result-month[_ngcontent-%COMP%]{font-size:32px;color:#fff;font-weight:500;margin:auto;vertical-align:baseline}.after-value-result[_ngcontent-%COMP%]{font-size:18px;color:#fff;font-weight:500;margin:auto;vertical-align:baseline}.max-content[_ngcontent-%COMP%]{max-width:max-content;width:max-content;margin:16px}.scrool[_ngcontent-%COMP%]{white-space:nowrap;overflow-x:scroll;overflow:auto}.header[_ngcontent-%COMP%]{margin-top:16px;width:300px;cursor:pointer}"]}),o})()}];let R=(()=>{var a;class o{}return(a=o).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[m.Bz.forChild(q),m.Bz]}),o})(),F=(()=>{var a;class o{}return(a=o).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[p.ez,R]}),o})()}}]);