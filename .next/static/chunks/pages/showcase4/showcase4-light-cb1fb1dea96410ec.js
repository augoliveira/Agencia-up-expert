(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4481],{9472:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showcase4/showcase4-light",function(){return n(7301)}])},4396:function(e,t){"use strict";t.Z=function(){document.querySelector(".swiper-pagination")&&(document.querySelector(".swiper-pagination").innerHTML=document.querySelector(".swiper-pagination").innerHTML.replace(" / ",""))}},9185:function(e,t,n){"use strict";var r=n(6383);t.Z=function(){var e=document.createElement("div");e.classList.add("div-tooltip-tit"),document.body.appendChild(e);var t=document.createElement("div");t.classList.add("div-tooltip-sub"),document.body.appendChild(t),document.querySelectorAll("[data-tooltip-tit]").forEach((function(t){e=document.querySelector(".div-tooltip-tit"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-tit")})),t.addEventListener("mousemove",(function(t){(0,r.Ji)(e,800),e.style.top=t.pageY+10+"px",e.style.left=t.pageX+20+"px",e.style.padding="0px 10px"})),t.addEventListener("mouseleave",(function(){(0,r.U6)(e,800),e.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(e){t=document.querySelector(".div-tooltip-sub"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-sub")})),e.addEventListener("mousemove",(function(e){(0,r.Ji)(t,800),t.style.top=e.pageY-15+"px",t.style.left=e.pageX+30+"px",t.style.padding="5px 10px"})),e.addEventListener("mouseleave",(function(){(0,r.U6)(t,800),t.style.padding=0}))}))}},5784:function(e,t,n){"use strict";var r=n(5893),i=n(7294),s=n(1664),a=n.n(s),o=n(8352),l=n(265),c=n(8116),u=(n(1082),n(6797),n(1669),n(3520),n(9185)),d=n(4396);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);a=!0);}catch(l){o=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(o)throw i}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}c.ZP.use([c.W_,c.tl,c.VS,c.Gk]);t.Z=function(){var e=f(i.useState(!0),2),t=e[0],n=e[1];i.useEffect((function(){setTimeout((function(){n(!1),(0,u.Z)(),(0,d.Z)()}))}),[]);var s=i.useRef(null),c=i.useRef(null),p=i.useRef(null);return(0,r.jsxs)("header",{className:"slider showcase-grid",children:[(0,r.jsx)("div",{id:"content-carousel-container-unq-1",className:"swiper-container",children:t?null:(0,r.jsx)(o.tq,{speed:1e3,mousewheel:!0,autoplay:!0,loop:!0,spaceBetween:30,navigation:{prevEl:s.current,nextEl:c.current},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:4}},onBeforeInit:function(e){e.params.navigation.prevEl=s.current,e.params.navigation.nextEl=c.current},onSwiper:function(e){setTimeout((function(){for(var t=0;t<e.slides.length;t++)e.slides[t].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=s.current,e.params.navigation.nextEl=c.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update()}))},className:"swiper-wrapper",slidesPerView:4,children:l.map((function(e){return(0,r.jsx)(o.o5,{className:"swiper-slide",children:(0,r.jsx)(a(),{passHref:!0,href:"/project-details2/project-details2-dark",children:(0,r.jsx)("div",{className:"bg-img",style:{backgroundImage:"url(".concat(e.image,")")},"data-tooltip-tit":e.title.first+" "+e.title.second,"data-tooltip-sub":e.sub})})},e.id)}))})}),(0,r.jsxs)("div",{className:"txt-botm",children:[(0,r.jsxs)("div",{ref:c,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:[(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:"Next Slide"})}),(0,r.jsx)("div",{children:(0,r.jsx)("i",{className:"fas fa-chevron-right"})})]}),(0,r.jsxs)("div",{ref:s,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:[(0,r.jsx)("div",{children:(0,r.jsx)("i",{className:"fas fa-chevron-left"})}),(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:"Prev Slide"})})]}),(0,r.jsx)("div",{className:"swiper-pagination dots",ref:p})]})]})}},23:function(e,t,n){"use strict";var r=n(5893),i=n(7294),s=n(9008);t.Z=function(e){var t=e.children;return e.bdOn&&i.useEffect((function(){return document.querySelector("body").classList.add("bd-dark"),function(){document.querySelector("body").classList.remove("bd-dark")}})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.default,{children:(0,r.jsx)("link",{rel:"stylesheet",href:"/css/light.css"})}),t]})}},7301:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=(n(7294),n(7366)),s=n(5784),a=n(23);t.default=function(){return(0,r.jsxs)(a.Z,{bdOn:!0,children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(s.Z,{})]})}},6797:function(){}},function(e){e.O(0,[94,5817,9774,2888,179],(function(){return t=9472,e(e.s=t);var t}));var t=e.O();_N_E=t}]);