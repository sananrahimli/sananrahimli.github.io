!function(){"use strict";var e={91:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},829:function(e,t,n){e.exports=n.p+"images/foods__1.png"},449:function(e,t,n){e.exports=n.p+"images/foods__2.png"},762:function(e,t,n){e.exports=n.p+"images/foods__3.png"},69:function(e,t,n){e.exports=n.p+"images/foods__4.png"},21:function(e,t,n){e.exports=n.p+"images/foods__5.png"},593:function(e,t,n){e.exports=n.p+"images/foods__6.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),n.b=document.baseURI||self.location.href,function(){var e=n(91),t=n.n(e),r=new URL(n(829),n.b),o=new URL(n(449),n.b),i=new URL(n(762),n.b),c=new URL(n(69),n.b),s=new URL(n(21),n.b),a=new URL(n(593),n.b);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t()(r),t()(o),t()(i),t()(c),t()(s),t()(a);var l,f=new Swiper(".foodsMidget",{loop:!0,spaceBetween:30,slidesPerView:4,freeMode:!0,lazy:!0,watchSlidesProgress:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:4,spaceBetween:5},1280:{slidesPerView:4,spaceBetween:30}}}),p=(new Swiper(".foodsMain",{lazy:!0,loop:!0,spaceBetween:10,effect:"fade",thumbs:{swiper:f}}),function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw i}}}}(document.querySelectorAll(".like")));try{var d=function(){var e=l.value;e.addEventListener("click",(function(){e.classList.toggle("active-like")}))};for(p.s();!(l=p.n()).done;)d()}catch(e){p.e(e)}finally{p.f()}var g=document.querySelector(".burgerMenuButton"),v=document.querySelector(".burgerClose"),m=document.querySelector("button.search-button"),w=document.querySelector(".wrapper"),b=document.querySelector("#bigMenu"),y=document.querySelector("input.searchInput");g.addEventListener("click",(function(){w.classList.add("menu-active"),b.classList.add("menu-active")})),v.addEventListener("click",(function(){w.classList.remove("menu-active"),b.classList.remove("menu-active")})),m.addEventListener("click",(function(){y.classList.toggle("search-active"),m.classList.toggle("icon-cross-svgrepo-com")}))}()}();