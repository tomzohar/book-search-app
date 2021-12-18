"use strict";(self.webpackChunkbook_search=self.webpackChunkbook_search||[]).push([[592],{4733:(h,a,n)=>{n.d(a,{A:()=>p});var o=n(3668),r=n(5286),i=n(6019),_=n(4750);function s(l,u){if(1&l){const e=o.EpF();o.TgZ(0,"button",6),o.NdJ("click",function(){return o.CHM(e),o.oxw().addBookToWishList()}),o.qZA()}if(2&l){const e=o.oxw();o.Q6J("disabled",e.bookInWishList)}}const d=function(){return{width:"50vw"}},c=function(){return{"960px":"75vw","640px":"100vw"}};let p=(()=>{class l{constructor(){this.showModal=!1,this.bookInWishList=!1,this.showAddToWishList=!0,this.addToWishList=new o.vpe,this.hide=new o.vpe}set value(e){this.book=e}addBookToWishList(){this.addToWishList.emit()}}return l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-book-modal"]],inputs:{showModal:"showModal",bookInWishList:"bookInWishList",showAddToWishList:"showAddToWishList",value:"value"},outputs:{addToWishList:"addToWishList",hide:"hide"},decls:11,vars:11,consts:[[3,"visible","breakpoints","visibleChange","onHide"],[1,"book-info-container"],[1,"book-info"],[1,"book-image"],[3,"src","alt"],["pButton","","type","button","label","Add to wishlist","class","p-button-help p-button-sm",3,"disabled","click",4,"ngIf"],["pButton","","type","button","label","Add to wishlist",1,"p-button-help","p-button-sm",3,"disabled","click"]],template:function(e,t){1&e&&(o.TgZ(0,"p-dialog",0),o.NdJ("visibleChange",function(b){return t.showModal=b})("onHide",function(){return t.hide.emit()}),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o._UZ(4,"img",4),o.qZA(),o.TgZ(5,"div"),o.TgZ(6,"h1"),o._uU(7),o.qZA(),o.TgZ(8,"p"),o._uU(9),o.qZA(),o.qZA(),o.qZA(),o.YNc(10,s,1,1,"button",5),o.qZA(),o.qZA()),2&e&&(o.Akn(o.DdM(9,d)),o.Q6J("visible",t.showModal)("breakpoints",o.DdM(10,c)),o.xp6(4),o.Q6J("src",null==t.book||null==t.book.volumeInfo||null==t.book.volumeInfo.imageLinks?null:t.book.volumeInfo.imageLinks.thumbnail,o.LSH)("alt",null==t.book||null==t.book.volumeInfo?null:t.book.volumeInfo.title),o.xp6(3),o.Oqu(null==t.book||null==t.book.volumeInfo?null:t.book.volumeInfo.title),o.xp6(2),o.hij(" ",null==t.book||null==t.book.volumeInfo?null:t.book.volumeInfo.description," "),o.xp6(1),o.Q6J("ngIf",t.showAddToWishList))},directives:[r.V,i.O5,_.Hq],styles:[".book-info-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.book-info-container[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]{display:flex;flex-direction:row}@media only screen and (max-width: 768px){.book-info-container[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]{flex-direction:column}}.book-info-container[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:auto;margin-top:0}.book-info-container[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-image[_ngcontent-%COMP%]{margin-right:1.5rem}"],changeDetection:0}),l})()},4596:(h,a,n)=>{n.d(a,{I:()=>_});var o=n(5168),r=n(6019),i=n(3668);let _=(()=>{class s{}return s.\u0275fac=function(c){return new(c||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[[r.ez,o.W]]}),s})()},450:(h,a,n)=>{n.d(a,{S:()=>p});var o=n(3414),r=n(5974),i=n(3668),_=n(9007),s=n(7593),d=n(1931),c=n(3202);let p=(()=>{class l{constructor(e,t,m){this.store=e,this.router=t,this.cache=m,this.items=[],this.onLogout=()=>{this.store.dispatch((0,r.k)()),this.store.dispatch((0,o.ZH)()),this.cache.clear(),this.router.navigate(["login"])}}ngOnInit(){const e=this.router.url;this.items=[{label:"Logout",icon:"pi pi-sign-out",command:this.onLogout},{label:"search",icon:"pi pi-search",disabled:"/search"===e,command:()=>{this.router.navigate(["/search"])}},{label:"wishlist",icon:"pi pi-heart",command:()=>{this.router.navigate(["wishlist"])},disabled:"/wishlist"===e}]}}return l.\u0275fac=function(e){return new(e||l)(i.Y36(_.yh),i.Y36(s.F0),i.Y36(d.M))},l.\u0275cmp=i.Xpm({type:l,selectors:[["app-navbar"]],decls:1,vars:1,consts:[[3,"model"]],template:function(e,t){1&e&&i._UZ(0,"p-menubar",0),2&e&&i.Q6J("model",t.items)},directives:[c.nm],styles:[""],changeDetection:0}),l})()},4115:(h,a,n)=>{n.d(a,{S:()=>r});var o=n(3668);let r=(()=>{class i{transform(s){return s?s.join(" | "):""}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275pipe=o.Yjl({name:"arrayToString",type:i,pure:!0}),i})()}}]);