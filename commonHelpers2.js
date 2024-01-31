import{o as O}from"./assets/mob-menu-fc4d99a8.js";/* empty css                      */import{a as w,i as h}from"./assets/vendor-8cce9181.js";const q=document.querySelector(".loader");w.interceptors.request.use(e=>(q.style.display="inline-block",e),e=>console.error(e));w.interceptors.response.use(e=>(q.style.display="none",e),e=>Promise.reject(e));const x=document.querySelector(".back-to-top"),M=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(M),window.scrollTo(0,e-e/8))};x.addEventListener("click",M);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?x.classList.add("active"):x.classList.remove("active")});var W=document.getElementById("myAudio");W.addEventListener("ended",function(){h.show({title:"Lets do it!",message:"Subscribe in the bottom, and learn about new exercises!",position:"bottomCenter",timeout:1e4,backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"})});const b=document.querySelector(".exercises-gallery-label"),i=document.querySelector(".exercises-gallery-group"),p=document.querySelector(".exercises-gallery-filter"),g=document.querySelector(".page-buttons-container");let l=null;const y=document.createElement("span"),T=document.querySelector("#filtre-key"),d=document.querySelector(".search-tool"),D=document.querySelector(".icon-search"),I=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location),N=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-Star-1",self.location),Q=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-lighticon",self.location),A=document.querySelector(".error-card-message"),V="https://energyflow.b.goit.study/api/";let v=1;const u={content:null,title:null},_="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},m=0,k="filter";const z="muscles",G=w.create({baseURL:_});p.addEventListener("click",function(e){if(H(),S(),m=0,d.style.display="none",e.target.tagName==="BUTTON"){k="filter";const t=e.target.getAttribute("name");U(t)}});i.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){k="workout",d.style.display="flex";const r=t.querySelector(".name-card").textContent;let s=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");if(s==="bodyparts"&&(s=s.slice(0,-1)),re(r,s),m===0)return;m>=3?f(3):f(m)}});g.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;K(r)}});function U(e){d.style.display="none";let t={};switch(X(),e){case"body":a.filter="Body parts",t=p.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=p.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=p.querySelectorAll(`button[name="${e}"]`)}Y(t);const s=`?${new URLSearchParams(a).toString()}`;B(s).then(o=>P(o)).then(o=>f(o.totalPages,1)).catch(o=>console.error(o))}function Y(e){const t=p.querySelectorAll("button"),r=Array.from(e);for(let s=0;s<t.length;s++){const o=t[s];r.includes(o)?(o.style.backgroundColor="var(--dark-gray)",o.style.color="var(--white)"):(o.style.backgroundColor="var(--white-smoke)",o.style.color="var(--black)")}}function J(){const t=`?${new URLSearchParams(a).toString()}`;B(t).then(r=>P(r)).catch(r=>console.error(r))}async function B(e){try{return(await G.get(e)).data}catch(t){console.error(t)}}async function C(e){try{const t=await w.get(`${V}exercises`,{params:e}),{totalPages:r,results:s}=t.data;if(s.length==0){i.innerHTML="",te();return}let o=s.reduce((c,n)=>{i.innerHTML="",g.innerHTML="";const L=ee(n.rating),R=Number(n.rating).toFixed(1),F=oe(n.name);return c+`<li class="gallery-item-list" >
                <div class="workout-header-wrap">
                        <div class="workout-and-rating">
                            <p class="workout-item-title">WORKOUT</p>
                            <p class="rating-title-item">${R}
                                ${L}
                            </p>
                            </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button-item" data-exercise-id=${n._id}>Start
                                <svg class="start-workout-icon" width="14" height="14" aria-label="start-arrow">
                                    <use href=${I}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                       <div class="workout-type-item">
                        <svg  width="24" height="24" aria-label="run-man">
                            <use href=${Q}></use>
                        </svg>
                        <p class="workout-name-item">${F}</p>
                    </div>
                <div class="workout-items-box">
                
                 
                    <div class="workout-description">
                        <p class="description-item-name">Burned calories:
                            <span class="description-item-value">${n.burnedCalories} / ${n.time} min</span>
                        </p>
                        <p class="description-item-name">Body part:
                            <span class="description-item-value">${n.bodyPart}</span>
                        </p>
                        <p class="description-item-name">Target:
                            <span class="description-item-value">${n.target}</span>
                        </p>
                    </div> 
            </li>`},"");m=t.data.totalPages,i.innerHTML="",i.insertAdjacentHTML("beforeend",o),i.addEventListener("click",async c=>{let n;const L=c.target;c.target&&c.target.closest(".start-button-item")&&(n=L.closest(".start-button-item").getAttribute("data-exercise-id"),await O(n))}),k="workout",r<3?f(r,e.page):f(3,e.page)}catch(t){console.log(t)}}function P(e){i.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return i.insertAdjacentHTML("beforeend",t.join("")),e}function f(e,t){let r="";g.innerHTML="";for(let s=1;s<=e;s++)s==t?r+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:r+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;g.insertAdjacentHTML("afterbegin",r)}function K(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),k){case"filter":a.page=e,J();break;case"workout":v=e;const s={limit:$(),page:v};s[u.content]=u.title,C(s);break}else r.classList.remove("active")})}function X(){document.documentElement.clientWidth>=1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}function Z(){S(),H(),i.innerHTML="",g.innerHTML=""}function ee(e){let t="";e=Math.floor(e);for(let r=0;r<e;r++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href=${N}></use>
            </svg>
        </span>`;return t}D.addEventListener("click",e=>{e.preventDefault();const t=T.value.trim();j(t)});d.addEventListener("focus",()=>{});d.addEventListener("blur",()=>{});d.addEventListener("keypress",e=>{if(e.key==="Enter"){e.preventDefault();const t=T.value.trim();j(t)}});function j(e){if(e.length===0){h.error({title:"Error",position:"topRight",message:"Sorry, Please choose an exercise.",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"});return}Z();const t={limit:$(),page:1,keyword:e};t[u.content]=u.title,T.value="",C(t)}function te(){A.style.display="block"}function S(){A.style.display="none"}function re(e,t){u.title=e,u.content=t,v=1;const r={limit:$(),page:v};r[u.content]=e,se(e),C(r)}function se(e){l=document.createElement("span"),l.classList.add("exercise-title-card"),l.innerHTML=e,y.classList.add("exercises-gallery-label"),y.innerHTML=" / ",b.appendChild(y),b.appendChild(l)}function H(){l&&(b.removeChild(l),b.removeChild(y),l=null,S())}function $(){return document.documentElement.clientWidth>=768?12:8}function oe(e){const t=document.documentElement.clientWidth;let r=20,s=295,o=.7;t>=1440?(r=24,s=424,o=.85):t>=768&&(r=24,s=313,o=.8);const c=s/(r/2)*o;return e.length>c?e.slice(0,c)+"...":e}S();U(z);const ne="https://energyflow.b.goit.study/api/subscription",E=document.querySelector(".footer-modal-form");E.addEventListener("submit",async e=>{e.preventDefault();const{email:t}=E.elements;try{if((await fetch(ne,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value.trim()})})).ok){const s={email:t.value.trim()};h.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"}),console.log(s),E.reset()}else h.error({position:"topCenter",message:"This email is already in the subscriber base. Maybe you should use another one",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"})}catch(r){console.error("Error POST API:",r.message)}});
//# sourceMappingURL=commonHelpers2.js.map
