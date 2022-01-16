!function(){"use strict";function e(e,t){const n=document.querySelector(e);n.classList.add("show","fade"),n.classList.remove("hide"),document.body.style.overflow="hidden",console.log(t),t&&clearInterval(t)}function t(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show","fade"),document.body.style.overflow=""}window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>e(".modal",n)),15e3);(function(e,t,n,o){const s=document.querySelectorAll(e),r=document.querySelectorAll(t),a=document.querySelector(n);function c(){r.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),s.forEach((e=>{e.classList.remove(o)}))}function i(e=0){r[e].classList.add("show","fade"),r[e].classList.remove("hide"),s[e].classList.add(o)}c(),i(),a.addEventListener("click",(t=>{const n=t.target;n&&n.classList.contains(e.slice(1))&&s.forEach(((e,t)=>{n==e&&(c(),i(t))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,s){const r=document.querySelector(o);document.querySelectorAll(n).forEach((t=>{t.addEventListener("click",(()=>e(o,s)))})),r.addEventListener("click",(e=>{e.target!=r&&""!=e.target.getAttribute("data-close")||t(o)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&r.classList.contains("show")&&t(o)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(clearInterval(s),e(o,s),window.removeEventListener("scroll",t))}))}("[data-modal]",".modal",n),function(e,t){const n=document.querySelector(e),o=n.querySelector("#days"),s=n.querySelector("#hours"),r=n.querySelector("#minutes"),a=n.querySelector("#seconds"),c=setInterval(i,1e3);function i(){const e=function(e){const t=Date.parse(e)-new Date;return{total:t,days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/6e4%60),seconds:Math.floor(t/1e3%60)}}(t);o.innerHTML=e.days<10?`0${e.days}`:e.days,s.innerHTML=e.hours<10?`0${e.hours}`:e.hours,r.innerHTML=e.minutes<10?`0${e.minutes}`:e.minutes,a.innerHTML=e.seconds<10?`0${e.seconds}`:e.seconds,e.total<1e3&&clearInterval(c)}i()}(".timer","2022-03-11"),function(){class e{constructor(e,t,n,o,s,r,...a){this.src=e,this.alt=t,this.title=n,this.description=o,this.price=s,this.classes=a,this.parent=document.querySelector(r),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=Math.floor(this.price*this.transfer)}render(){const e=document.createElement("div");0===this.classes.length&&(this.classes=["menu__item"]),this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n            <img src=${this.src} alt=${this.alt}>\n            <h3 class="menu__item-subtitle">${this.title}</h3>\n            <div class="menu__item-descr">${this.description}</div>\n            <div class="menu__item-divider"></div>\n            <div class="menu__item-price">\n                <div class="menu__item-cost">Цена:</div>\n                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n            </div>\n        `,this.parent.append(e)}}(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((({img:t,altimg:n,title:o,descr:s,price:r})=>{new e(t,n,o,s,r,".menu .container").render()}))}))}(),function(){const e=document.querySelector(".calculating__result span");let t,n,o,s,r;function a(e,n){document.querySelectorAll(e).forEach((e=>{e.classList.remove(n),e.getAttribute("id")===t&&e.classList.add(n),e.getAttribute("data-ratio")===r&&e.classList.add(n)}))}function c(){e.textContent=t&&n&&o&&s&&r?"male"===t?Math.floor((88.36+13.4*o+4.8*n-5.7*s)*r):Math.floor((447.6+9.2*o+3.1*n-4.3*s)*r):"_____"}function i(e,n){const o=document.querySelectorAll(`${e} div`);document.querySelector(e).addEventListener("click",(e=>{(e.target.getAttribute("data-ratio")||"gender"!=e.target.getAttribute("id")&&e.target.getAttribute("id"))&&(e.target.getAttribute("data-ratio")?(r=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",r)):(t=e.target.getAttribute("id"),localStorage.setItem("sex",t)),o.forEach((e=>{e.classList.remove(n)})),e.target.classList.add(n),c())}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="3px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=+t.value;break;case"weight":o=+t.value;break;case"age":s=+t.value}c()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex",t)),localStorage.getItem("ratio")?r=localStorage.getItem("ratio"):(r=1.375,localStorage.setItem("ratio",r)),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),c(),i("#gender","calculating__choose-item_active"),i(".calculating__choose_big","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(n,o){function s(n){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),e(".modal",o);const r=document.createElement("div");r.classList.add("modal__dialog"),r.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>&times;</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `,document.querySelector(".modal").append(r),setTimeout((()=>{r.remove(),s.classList.remove("hide"),s.classList.add("show"),t(".modal")}),4e3)}document.querySelectorAll(n).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const n=document.createElement("img");n.src="./icons/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",t.insertAdjacentElement("afterend",n);const o=new FormData(t);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((e=>{console.log(e),s("Спасибо. Скоро наши операторы свяжутся с вами!"),n.remove()})).catch((()=>{s("Что-то не так. Обратитесь к администратору.")})).finally((()=>{t.reset()}))}))}))}("form",n),function({container:e,slide:t,nextArrow:n,prevArrow:o,totalCounter:s,currentCounter:r,wrapper:a,field:c}){const i=document.querySelectorAll(t),l=document.querySelector(e),d=document.querySelector(o),u=document.querySelector(n),m=document.querySelector(s),h=document.querySelector(r),g=document.querySelector(a),f=document.querySelector(c),y=window.getComputedStyle(g).width;let p=1,v=0;i.length<10?(m.textContent=`0${i.length}`,h.textContent=`0${p}`):(m.textContent=i.length,h.textContent=p),f.style.width=100*i.length+"%",f.style.display="flex",f.style.transition="0.5s all",g.style.overflow="hidden",i.forEach((e=>{e.style.width=y})),l.style.position="relative";const _=document.createElement("ol"),w=[];_.classList.add("carousel-indicators"),_.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ",l.append(_);for(let e=0;e<i.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        ",0===e&&(t.style.opacity=1),_.append(t),w.push(t)}u.addEventListener("click",(()=>{v==+y.slice(0,y.length-2)*(i.length-1)?v=0:v+=+y.slice(0,y.length-2),f.style.transform=`translateX(-${v}px)`,p===i.length?p=1:p++,i.length<10?h.textContent=`0${p}`:h.textContent=p,w.forEach((e=>e.style.opacity=".5")),w[p-1].style.opacity=1})),d.addEventListener("click",(()=>{0==v?v=+y.slice(0,y.length-2)*(i.length-1):v-=+y.slice(0,y.length-2),f.style.transform=`translateX(-${v}px)`,1===p?p=i.length:p--,i.length<10?h.textContent=`0${p}`:h.textContent=p,w.forEach((e=>e.style.opacity=".5")),w[p-1].style.opacity=1})),w.forEach((e=>{e.addEventListener("click",(e=>{const t=+e.target.getAttribute("data-slide-to");p=t,v=+y.slice(0,y.length-2)*(t-1),f.style.transform=`translateX(-${v}px)`,i.length<10?h.textContent=`0${p}`:h.textContent=p,w.forEach((e=>e.style.opacity=".5")),w[p-1].style.opacity=1}))}))}({container:".offer__slider",nextArrow:".offer__slider-next",slide:".offer__slide",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}();
//# sourceMappingURL=bundle.js.map