import{o as O}from"./assets/mob-menu-03ed0ff3.js";/* empty css                      */import{a as k,i as b}from"./assets/vendor-8cce9181.js";const A=document.querySelector(".loader");k.interceptors.request.use(e=>(A.style.display="inline-block",e),e=>console.error(e));k.interceptors.response.use(e=>(A.style.display="none",e),e=>Promise.reject(e));const T=document.querySelector(".back-to-top"),U=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(U),window.scrollTo(0,e-e/8))};T.addEventListener("click",U);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?T.classList.add("active"):T.classList.remove("active")});var D=document.getElementById("myAudio");D.addEventListener("ended",function(){b.show({title:"Lets do it!",message:"Subscribe in the bottom, and learn about new exercises!",position:"bottomCenter",timeout:1e4,backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"})});const w=document.querySelector(".exercises-gallery-label"),n=document.querySelector(".exercises-gallery-group"),p=document.querySelector(".exercises-gallery-filter"),g=document.querySelector(".page-buttons-container");let c=null;const h=document.createElement("span"),C=document.querySelector("#filtre-key"),d=document.querySelector(".search-tool"),I=document.querySelector(".icon-search"),N=new URL("/team-02-jsproject/assets/sprite-a657f742.svg#icon-arrow",self.location),G=new URL("/team-02-jsproject/assets/sprite-a657f742.svg#icon-Star-1",self.location),z=new URL("/team-02-jsproject/assets/sprite-a657f742.svg#icon-lighticon",self.location),B=document.querySelector(".error-card-message"),Q="https://energyflow.b.goit.study/api/";let v=1;const l={content:null,title:null},V="https://energyflow.b.goit.study/api/filters";let i={filter:"Muscles",page:1,limit:8},m=0,f="filter";const _="muscles",Y=k.create({baseURL:V});p.addEventListener("click",function(e){if(H(),L(),m=0,d.style.display="none",e.target.tagName==="BUTTON"){f="filter";const t=e.target.getAttribute("name");S(),P(t)}});n.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){f="workout",d.style.display="flex";const r=t.querySelector(".name-card").textContent;let s=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");if(s==="bodyparts"&&(s=s.slice(0,-1)),S(),se(r,s),m===0)return;m>=3?y(3):y(m)}});g.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;X(r)}});function P(e){d.style.display="none";let t={};switch(Z(),e){case"body":i.filter="Body parts",t=p.querySelectorAll(`button[name="${e}"]`);break;case"equipment":i.filter="Equipment",t=p.querySelectorAll(`button[name="${e}"]`);break;default:i.filter="Muscles",t=p.querySelectorAll(`button[name="${e}"]`)}J(t);const s=`?${new URLSearchParams(i).toString()}`;W(s).then(o=>j(o)).then(o=>y(o.totalPages,1)).catch(o=>console.error(o))}function J(e){const t=p.querySelectorAll("button"),r=Array.from(e);for(let s=0;s<t.length;s++){const o=t[s];r.includes(o)?(o.style.backgroundColor="var(--dark-gray)",o.style.color="var(--white)"):(o.style.backgroundColor="var(--white-smoke)",o.style.color="var(--black)")}}function K(){const t=`?${new URLSearchParams(i).toString()}`;W(t).then(r=>j(r)).catch(r=>console.error(r))}async function W(e){try{return(await Y.get(e)).data}catch(t){console.error(t)}}async function $(e){try{const t=await k.get(`${Q}exercises`,{params:e}),{totalPages:r,results:s}=t.data;if(s.length==0){n.innerHTML="",re();return}let o=s.reduce((E,a)=>{n.innerHTML="",g.innerHTML="";const u=te(a.rating),F=Number(a.rating).toFixed(1);return E+`<li class="gallery-item-list">
          <button type="button" class="gallery-button-item" data-exercise-id=${a._id}>
              <div class="workout-header-wrap">
                  <div class="workout-and-rating">
                    <p class="workout-item-title">WORKOUT</p>
                    <p class="rating-title-item">${F}
                        ${u}
                    </p>
                  </div>
                  <div class="start-button-wrap">Start
                      <svg class="start-workout-icon" width="14" height="14" aria-label="start-arrow">
                          <use href=${N}></use>
                      </svg>
                  </div>
              </div>
              <div class="workout-type-item">
                <svg  width="24" height="24" aria-label="run-man">
                    <use href=${z}></use>
                </svg>
                <p class="workout-name-item">${a.name}</p>
              </div>
              <div class="workout-items-box">

              <div class="workout-description">
                  <p class="description-item-name">Burned calories:
                      <span class="description-item-value">${a.burnedCalories} / ${a.time} min</span>
                  </p>
                  <p class="description-item-name">Body part:
                      <span class="description-item-value">${a.bodyPart}</span>
                  </p>
                  <p class="description-item-name">Target:
                      <span class="description-item-value">${a.target}</span>
                  </p>
              </div> 
            </button>
          </li>`},"");m=t.data.totalPages,n.innerHTML="",n.insertAdjacentHTML("beforeend",o),n.addEventListener("click",async E=>{let a;const u=E.target;u&&u.closest(".gallery-button-item")&&(a=u.closest(".gallery-button-item").getAttribute("data-exercise-id"),await O(a))}),f="workout",r<3?y(r,e.page):y(3,e.page)}catch(t){console.log(t)}}function j(e){n.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
      <a href="${r.imgUrl}">
      <div>
        <img
          class="exercises-item"
          src="${r.imgUrl}"
          alt="${r.name}">
          <div class="text-card">
          <p class = "name-card">${r.name}</p>
          <p class = "type-card">${r.filter}</p>
          </div>
          </div>
      </a>
    </li>`);return n.insertAdjacentHTML("beforeend",t.join("")),e}function y(e,t){let r="";g.innerHTML="";for(let s=1;s<=e;s++)s==t?r+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:r+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;g.insertAdjacentHTML("afterbegin",r)}function X(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),f){case"filter":i.page=e,K();break;case"workout":v=e;const s={limit:q(),page:v};s[l.content]=l.title,$(s);break}else r.classList.remove("active")})}function Z(){document.documentElement.clientWidth>=1440?(i.page=1,i.limit=12):(i.page=1,i.limit=8)}function ee(){L(),H(),n.innerHTML="",g.innerHTML=""}function te(e){let t="";e=Math.floor(e);for(let r=0;r<e;r++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href=${G}></use>
            </svg>
        </span>`;return t}I.addEventListener("click",e=>{e.preventDefault();const t=C.value.trim();R(t)});d.addEventListener("focus",()=>{});d.addEventListener("blur",()=>{});d.addEventListener("keypress",e=>{if(e.key==="Enter"){e.preventDefault();const t=C.value.trim();R(t)}});function R(e){if(e.length===0){b.error({title:"Error",position:"topRight",message:"Sorry, Please choose an exercise.",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"});return}ee();const t={limit:q(),page:1,keyword:e};t[l.content]=l.title,C.value="",$(t)}function re(){B.style.display="block"}function L(){B.style.display="none"}function se(e,t){l.title=e,l.content=t,v=1;const r={limit:q(),page:v};r[l.content]=e,oe(e),$(r)}function oe(e){c=document.createElement("span"),c.classList.add("exercise-title-card"),c.innerHTML=e,h.classList.add("exercises-gallery-label"),h.innerHTML=" / ",w.appendChild(h),w.appendChild(c)}function H(){c&&(w.removeChild(c),w.removeChild(h),c=null,L())}function q(){return document.documentElement.clientWidth>=768?9:8}L();P(_);/*!!!experimental functions: update gap desktop for exercise and workout gallery!!!!*/let M=window.innerWidth||window.clientWidth;window.addEventListener("load",S);window.addEventListener("resize",()=>{const e=window.innerWidth;e!==M&&(S(),M=e)});function S(){if(document.documentElement.clientWidth>=1440)switch(f){case"filter":n.style.rowGap="40px";break;case"workout":n.style.rowGap="28px";break;default:n.style.cssText=""}else n.style.cssText=""}const ne="https://energyflow.b.goit.study/api/subscription",x=document.querySelector(".footer-modal-form");x.addEventListener("submit",async e=>{e.preventDefault();const{email:t}=x.elements;try{if((await fetch(ne,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value.trim()})})).ok){const s={email:t.value.trim()};b.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"}),console.log(s),x.reset()}else b.error({position:"topCenter",message:"This email is already in the subscriber base. Maybe you should use another one",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"})}catch(r){console.error("Error POST API:",r.message)}});
//# sourceMappingURL=commonHelpers2.js.map
