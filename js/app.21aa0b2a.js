(function(e){function t(t){for(var n,o,l=t[0],s=t[1],u=t[2],d=0,m=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/salary-list/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"main_title"},[e._v("Lista płac pracowników")]),a("h3",{staticClass:"second_title"},[e._v("Szukaj pracownika")]),a("div",{staticClass:"search__container"},[a("label",[e._v(" Imię: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Name,expression:"Name"}],attrs:{type:"text"},domProps:{value:e.Name},on:{input:function(t){t.target.composing||(e.Name=t.target.value)}}})]),a("label",[e._v(" Nazwisko: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Surname,expression:"Surname"}],attrs:{type:"text"},domProps:{value:e.Surname},on:{input:function(t){t.target.composing||(e.Surname=t.target.value)}}})]),a("label",[e._v(" Dział: "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.Departament,expression:"Departament"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.Departament=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}}),a("option",{attrs:{value:"IT"}},[e._v("IT")]),a("option",{attrs:{value:"Handlowiec"}},[e._v("Handlowiec")]),a("option",{attrs:{value:"Administracja"}},[e._v("Administracja")])])]),a("label",[e._v(" Wynagrodzenie(PLN): "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.Salary,expression:"Salary"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.Salary=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}}),a("option",{attrs:{value:"0"}},[e._v("Poniżej 2500")]),a("option",{attrs:{value:"1"}},[e._v("2500 - 3200")]),a("option",{attrs:{value:"2"}},[e._v("3200 - 4000")]),a("option",{attrs:{value:"3"}},[e._v("Powyżej 4000")])])])]),a("div",{staticClass:"table_container"},[a("table",[e._m(0),e._l(e.filteredWorkers,(function(e){return a("TableRow",{key:e.surname,attrs:{worker:e}})}))],2)]),a("h3",{staticClass:"second_title"},[e._v("Dodaj pracownika")]),a("Add",{attrs:{workers:e.workers,AllSum:e.AllSum,ITSum:e.ITSum,HSum:e.HSum,AdSum:e.AdSum,calculateAll:e.calculateAll,calculateIT:e.calculateIT,calculateAd:e.calculateAd,calculateH:e.calculateH}}),a("button",{staticClass:"show",on:{click:e.changeClass}},[e._v(e._s(e.show?"Ukryj":"Pokaż wszystkich"))]),a("table",{staticClass:"all_table",class:{visible:e.show}},[e._m(1),e._l(e.workers,(function(e){return a("TableRow",{key:e.surname,attrs:{worker:e}})})),a("tr",[a("td",{attrs:{colspan:"3"}},[e._v("Suma(Dział: IT)")]),a("td",{attrs:{colspan:"1"}},[e._v(e._s(e.ITSum))]),a("td",[e._v("PLN")])]),a("tr",[a("td",{attrs:{colspan:"3"}},[e._v("Suma(Dział: Administracja)")]),a("td",{attrs:{colspan:"1"}},[e._v(e._s(e.AdSum))]),a("td",[e._v("PLN")])]),a("tr",[a("td",{attrs:{colspan:"3"}},[e._v("Suma(Dział: Handlowiec)")]),a("td",{attrs:{colspan:"1"}},[e._v(e._s(e.HSum))]),a("td",[e._v("PLN")])]),a("tr",[a("td",{attrs:{colspan:"3"}},[e._v("Suma")]),a("td",{attrs:{colspan:"1"}},[e._v(e._s(e.AllSum))]),a("td",[e._v("PLN")])])],2)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",{staticClass:"first_row"},[a("td",[e._v("Imię")]),a("td",[e._v("Nazwisko")]),a("td",[e._v("Dział")]),a("td",[e._v("Wynagrodzenie")]),a("td",[e._v("Waluta")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",{staticClass:"first_row"},[a("td",[e._v("Imię")]),a("td",[e._v("Nazwisko")]),a("td",[e._v("Dział")]),a("td",[e._v("Wynagrodzenie")]),a("td",[e._v("Waluta")])])}],o=(a("4de4"),a("13d5"),a("ac1f"),a("466d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add__container"},[a("label",{attrs:{for:""}},[e._v(" Imię: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],staticClass:"name",attrs:{type:"text"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}})]),a("label",{attrs:{for:""}},[e._v(" Nazwisko: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newSurname,expression:"newSurname"}],staticClass:"surname",attrs:{type:"text"},domProps:{value:e.newSurname},on:{input:function(t){t.target.composing||(e.newSurname=t.target.value)}}})]),a("label",[e._v(" Dział: "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newDepartament,expression:"newDepartament"}],staticClass:"departament",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.newDepartament=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"IT"}},[e._v("IT")]),a("option",{attrs:{value:"Administracja"}},[e._v("Administracja")]),a("option",{attrs:{value:"Handlowiec"}},[e._v("Handlowiec")])])]),a("label",[e._v(" Wynagrodzenie(PLN): "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newSalary,expression:"newSalary"}],staticClass:"salary",attrs:{type:"number"},domProps:{value:e.newSalary},on:{input:function(t){t.target.composing||(e.newSalary=t.target.value)}}})]),a("button",{on:{click:e.handelAdd}},[e._v("Dodaj pracownika")])])}),l=[],s={props:["workers","ITSum","AdSum","HSum","AllSum","calculateAll","calculateIT","calculateH","calculateAd"],data:function(){return{newName:"",newSurname:"",newDepartament:"",newSalary:""}},methods:{handelAdd:function(){""!==this.newName&&""!==this.newSurname&&""!==this.newDepartament&&""!==this.newSalary?(this.workers.push({imie:this.newName,nazwisko:this.newSurname,dzial:this.newDepartament,wynagrodzenieKwota:1*this.newSalary,wynagrodzenieWaluta:"PLN"}),"IT"===this.newDepartament?this.calculateIT():"Handlowiec"===this.newDepartament?this.calculateH():"Administracja"===this.newDepartament&&this.calculateAd(),this.calculateAll(),alert("Dodano nowego pracownika do listy.")):alert("Sprawdź poprawność danych"),this.show=!0}}},u=s,c=(a("91a1"),a("2877")),d=Object(c["a"])(u,o,l,!1,null,null,null),m=d.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",[e._v(e._s(e.worker.imie))]),a("td",[e._v(e._s(e.worker.nazwisko))]),a("td",[e._v(e._s(e.worker.dzial))]),a("td",[e._v(e._s(e.worker.wynagrodzenieKwota))]),a("td",[e._v(e._s(e.worker.wynagrodzenieWaluta))])])},p=[],v={props:["worker"]},f=v,_=Object(c["a"])(f,w,p,!1,null,null,null),h=_.exports,y={data:function(){return{show:!1,workers:[{imie:"Jan",nazwisko:"Kowalski",dzial:"IT",wynagrodzenieKwota:3e3,wynagrodzenieWaluta:"PLN"},{imie:"Anna",nazwisko:"Bąk",dzial:"Administracja",wynagrodzenieKwota:2400.5,wynagrodzenieWaluta:"PLN"},{imie:"Paweł",nazwisko:"Zabłocki",dzial:"IT",wynagrodzenieKwota:3300,wynagrodzenieWaluta:"PLN"},{imie:"Tomasz",nazwisko:"Osiecki",dzial:"Administracja",wynagrodzenieKwota:2100,wynagrodzenieWaluta:"PLN"},{imie:"Iwona",nazwisko:"Leihs-Gutowska",dzial:"Handlowiec",wynagrodzenieKwota:3100,wynagrodzenieWaluta:"PLN"}],ITSum:"",AdSum:"",HSum:"",AllSum:"",Name:"",Surname:"",Departament:"",Salary:""}},computed:{filteredWorkers:function(){var e=this;return this.workers.filter((function(t){return""!==e.Name?t.imie.match(e.Name):""!==e.Surname?t.nazwisko.match(e.Surname):""!==e.Departament?t.dzial.match(e.Departament):""!==e.Salary?"0"===e.Salary?t.wynagrodzenieKwota<2500:"1"===e.Salary?t.wynagrodzenieKwota>2500&&t.wynagrodzenieKwota<=3200:"2"===e.Salary?t.wynagrodzenieKwota>3200&&t.wynagrodzenieKwota<=4e3:t.wynagrodzenieKwota>4e3:void 0}))}},components:{Add:m,TableRow:h},methods:{changeClass:function(){this.show=!this.show,console.log(this.show)},calculateIT:function(){var e=this,t=[];this.workers.filter((function(a){"IT"===a.dzial&&(t.push(a.wynagrodzenieKwota),e.ITSum=t.reduce((function(e,t){return e+t})))}))},calculateAd:function(){var e=this,t=[];this.workers.filter((function(a){"Administracja"===a.dzial&&(t.push(a.wynagrodzenieKwota),e.AdSum=t.reduce((function(e,t){return e+t})))}))},calculateH:function(){var e=this,t=[];this.workers.filter((function(a){"Handlowiec"===a.dzial&&(t.push(a.wynagrodzenieKwota),e.HSum=t.reduce((function(e,t){return e+t})))}))},calculateAll:function(){var e=this,t=[];this.workers.filter((function(a){t.push(a.wynagrodzenieKwota),e.AllSum=t.reduce((function(e,t){return e+t}))}))}},mounted:function(){this.$nextTick(this.calculateIT),this.$nextTick(this.calculateAd),this.$nextTick(this.calculateH),this.$nextTick(this.calculateAll)}},g=y,S=(a("9993"),Object(c["a"])(g,r,i,!1,null,null,null)),z=S.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(z)}}).$mount("#app")},"7dad":function(e,t,a){},"91a1":function(e,t,a){"use strict";var n=a("b07b"),r=a.n(n);r.a},9993:function(e,t,a){"use strict";var n=a("7dad"),r=a.n(n);r.a},b07b:function(e,t,a){}});
//# sourceMappingURL=app.21aa0b2a.js.map