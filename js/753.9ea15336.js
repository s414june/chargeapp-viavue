"use strict";(self["webpackChunkcharge_app_via_vue"]=self["webpackChunkcharge_app_via_vue"]||[]).push([[753],{753:function(e,n,t){t.r(n),t.d(n,{mdTransitionAnimation:function(){return o}});var a=t(980),i=t(26);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=(e,n)=>{const t="40px",o="0px",r="back"===n.direction,s=n.enteringEl,c=n.leavingEl,l=(0,i.g)(s),d=l.querySelector("ion-toolbar"),u=(0,a.c)();if(u.addElement(l).fill("both").beforeRemoveClass("ion-page-invisible"),r?u.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):u.duration(n.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${t})`,`translateY(${o})`).fromTo("opacity",.01,1),d){const e=(0,a.c)();e.addElement(d),u.addAnimation(e)}if(c&&r){u.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const e=(0,a.c)();e.addElement((0,i.g)(c)).onFinish((n=>{1===n&&e.elements.length>0&&e.elements[0].style.setProperty("display","none")})).fromTo("transform",`translateY(${o})`,`translateY(${t})`).fromTo("opacity",1,0),u.addAnimation(e)}return u}}}]);
//# sourceMappingURL=753.9ea15336.js.map