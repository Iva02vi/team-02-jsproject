import"./assets/quote-1da8f9b3.js";import{a as v,i as h}from"./assets/vendor-8cce9181.js";const a=document.querySelector(".back-to-top"),m=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(m),window.scrollTo(0,e-e/8))};a.addEventListener("click",m);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?a.classList.add("active"):a.classList.remove("active")});const d=document.querySelector(".exercises-gallery"),c=document.querySelector(".exercises-gallery-filter"),i=document.querySelector(".page-buttons-container"),w="https://energyflow.b.goit.study/api/filters";let r={filter:"Muscles",page:1,limit:8},S=0;const f="muscles",k=v.create({baseURL:w});function g(e){d.innerHTML="";const o=e.results.map(t=>`<li class="exercises-item">
      <a class="exercises-item-background "  href="${t.imgUrl}">
      <div>
        <img
          class="exercises-item"
          src="${t.imgUrl}"
          alt="${t.name}">
          <div class="text-card">
          <p class = "name-card">${t.name}</p>
          <p class = "type-card">${t.filter}</p>
          </div>
          </div>
      </a>
    </li>`);return d.insertAdjacentHTML("beforeend",o.join("")),e}function L(e){let o="";i.innerHTML="";for(let t=1;t<=e.totalPages;t++)t===1?o+=`<li>
      <button class="page-button active" type="button" id="${t}">${t}</button>
    </li>`:o+=`<li>
      <button class="page-button" type="button" id="${t}">${t}</button>`;i.insertAdjacentHTML("afterbegin",o)}c.addEventListener("click",function(e){if(e.target.tagName==="BUTTON"){const o=e.target.getAttribute("name");u(o)}});function u(e){let o={};switch(b(),e){case"body":r.filter="Body parts",o=c.querySelectorAll(`button[name="${e}"]`);break;case"equipment":r.filter="Equipment",o=c.querySelectorAll(`button[name="${e}"]`);break;default:r.filter="Muscles",o=c.querySelectorAll(`button[name="${e}"]`)}T(o);const s=`?${new URLSearchParams(r).toString()}`;p(s).then(n=>g(n)).then(n=>L(n)).catch(n=>console.error(n))}function q(){const o=`?${new URLSearchParams(r).toString()}`;p(o).then(t=>g(t)).catch(t=>console.error(t))}async function p(e){try{const o=await k.get(e);return S=o.data.totalPages,o.data}catch(o){console.error(o)}}function T(e){const o=c.querySelectorAll("button"),t=Array.from(e);for(let s=0;s<o.length;s++){const n=o[s];t.includes(n)?(n.style.backgroundColor="var(--dark-gray)",n.style.color="var(--white)"):(n.style.backgroundColor="var(--white-smoke)",n.style.color="var(--black)")}}i.addEventListener("click",function(e){const o=e.target.closest(".page-button");if(o){const t=o.id;console.log("Clicked button value: "+t),y(t)}});function y(e){document.querySelectorAll(".page-button").forEach(t=>{t.id===e?(t.classList.add("active"),r.page=e,q()):t.classList.remove("active")})}window.addEventListener("resize",()=>{b(),u(f),y(1)});function b(){document.documentElement.clientWidth>1440?(r.page=1,r.limit=12):(r.page=1,r.limit=8)}u(f);const E="feedback-form",l=document.querySelector(".footer-modal-form");l.addEventListener("submit",e=>{e.preventDefault();const{email:o}=l.elements,t={email:o.value.trim()};h.success({position:"topRight",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."}),console.log(t),localStorage.removeItem(E),l.reset()});
//# sourceMappingURL=commonHelpers2.js.map
