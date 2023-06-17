(()=>{"use strict";function t(t,e,n){const o=document.documentElement,a="data-outisde";function c(s){t.contains(s.target)||(t.removeAttribute(a,""),e.forEach((t=>{o.removeEventListener(t,c)})),n())}t.hasAttribute(a)||(e.forEach((t=>{setTimeout((()=>{o.addEventListener(t,c)}))})),t.setAttribute(a,""))}!function(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({block:"start",behavior:"smooth"})}document.querySelectorAll("[data-menu='smooth'] a[href^='#']").forEach((e=>{e.addEventListener("click",t)}))}(),function(){const t=document.querySelectorAll("[data-anime='scroll']");function e(){const e=.6*window.innerHeight;t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(e(),window.addEventListener("scroll",e))}(),function(){const t=document.querySelectorAll("[data-anime='accordion'] dt"),e="ativo";function n(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t.length&&(t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((t=>{t.addEventListener("click",n)})))}(),function(){const t=document.querySelectorAll("[data-tab='menu'] li"),e=document.querySelectorAll("[data-tab='content'] section");t.length&&e.length&&(e[0].classList.add("ativo"),t.forEach(((t,n)=>{t.addEventListener("click",(()=>{!function(t){e.forEach((t=>{t.classList.remove("ativo")}));const n=e[t].dataset.anime;e[t].classList.add("ativo",n)}(n)}))})))}(),function(){const t=document.querySelector("[data-modal='open']"),e=document.querySelector("[data-modal='close']"),n=document.querySelector("[data-modal='container']");function o(t){t.preventDefault(),n.classList.toggle("ativo")}t&&e&&n&&(t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&o(t)})))}(),function(){const t=document.querySelectorAll("[data-tooltip]"),e={handleEvent(t){this.tooltipBox.style.top=`${t.pageY+20}px`,this.tooltipBox.style.left=`${t.pageX+20}px`}},n={handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}};function o(){const t=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);n.tooltipBox=t,n.element=this,this.addEventListener("mouseleave",n),e.tooltipBox=t,this.addEventListener("mousemove",e)}t&&t.forEach((t=>{t.addEventListener("mouseover",o)}))}(),function(){const e=document.querySelectorAll("[data-dropdown]");function n(e){e.preventDefault(),this.classList.add("ativo"),t(this,["click","touchstart"],(()=>{this.classList.remove("ativo")}))}e&&e.forEach((t=>{["touchstart","click"].forEach((e=>{t.addEventListener(e,n)}))}))}(),function(){const e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"]'),o=["click","touchstart"];function a(){n.classList.add("ativo"),e.classList.add("ativo"),t(n,o,(()=>{n.classList.remove("ativo"),e.classList.remove("ativo")}))}e&&o.forEach((t=>{e.addEventListener(t,a)}))}(),function(){const t=document.querySelector("[data-semana]");if(t){const e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,a=o.getDay(),c=o.getHours(),s=-1!==e.indexOf(a),i=c>=n[0]&&c<n[1];s&&i?t.classList.add("aberto"):t.classList.add("fechado")}}(),async function(t){try{const t=await fetch("../../../../../automacao-front-end/animais-webpack/src/api/animais.json"),e=await t.json(),n=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`\n      <h3>${t.specie}</h3>\n      <span data-numero>${t.total}</span>\n    `,e}(t);n.appendChild(e)})),function(){let t;t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=t,n=+e.innerText,o=Math.floor(n/100);let a=0;const c=setInterval((()=>{a+=o,e.innerText=a,a>n&&(e.innerText=n,clearInterval(c))}),25*Math.random())})))}));const e=document.querySelector(".numeros");t.observe(e,{attributes:!0})}()}catch(t){console.log(Error(t))}}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))}))})();