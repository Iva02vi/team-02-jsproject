import{o as F}from"./assets/mob-menu-01472419.js";/* empty css                      */import{a as v,i as y}from"./assets/vendor-8cce9181.js";const q=document.querySelector(".loader");v.interceptors.request.use(e=>(q.style.display="inline-block",e),e=>console.error(e));v.interceptors.response.use(e=>(q.style.display="none",e),e=>Promise.reject(e));const E=document.querySelector(".back-to-top"),M=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(M),window.scrollTo(0,e-e/8))};E.addEventListener("click",M);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?E.classList.add("active"):E.classList.remove("active")});var O=document.getElementById("myAudio");O.addEventListener("ended",function(){y.show({title:"Lets do it!",message:"Subscribe in the bottom, and learn about new exercises!",position:"bottomCenter",timeout:1e4,backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"})});const b=document.querySelector(".exercises-gallery-label"),i=document.querySelector(".exercises-gallery-group"),d=document.querySelector(".exercises-gallery-filter"),m=document.querySelector(".page-buttons-container");let l=null;const f=document.createElement("span"),$=document.querySelector("#filtre-key"),w=document.querySelector(".search-tool"),W=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location),I=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-Star-1",self.location),N=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-lighticon",self.location),A=document.querySelector(".error-card-message"),D="https://energyflow.b.goit.study/api/";let h=1;const u={content:null,title:null},Q="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},p=0,k="filter";const V="muscles",_=v.create({baseURL:Q});function U(e){i.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return i.insertAdjacentHTML("beforeend",t.join("")),e}d.addEventListener("click",function(e){if(P(),S(),p=0,w.style.display="none",e.target.tagName==="BUTTON"){k="filter";const t=e.target.getAttribute("name");B(t)}});function B(e){w.style.display="none";let t={};switch(J(),e){case"body":a.filter="Body parts",t=d.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=d.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=d.querySelectorAll(`button[name="${e}"]`)}G(t);const s=`?${new URLSearchParams(a).toString()}`;j(s).then(o=>U(o)).then(o=>g(o.totalPages)).catch(o=>console.error(o))}function z(){const t=`?${new URLSearchParams(a).toString()}`;j(t).then(r=>U(r)).catch(r=>console.error(r))}async function j(e){try{return(await _.get(e)).data}catch(t){console.error(t)}}function G(e){const t=d.querySelectorAll("button"),r=Array.from(e);for(let s=0;s<t.length;s++){const o=t[s];r.includes(o)?(o.style.backgroundColor="var(--dark-gray)",o.style.color="var(--white)"):(o.style.backgroundColor="var(--white-smoke)",o.style.color="var(--black)")}}function g(e,t){let r="";m.innerHTML="";for(let s=1;s<=e;s++)s==t?r+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:r+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;m.insertAdjacentHTML("afterbegin",r)}m.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;Y(r)}});function Y(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),k){case"filter":a.page=e,z();break;case"workout":h=e;const s={limit:T(),page:h};s[u.content]=u.title,C(s);break}else r.classList.remove("active")})}function J(){document.documentElement.clientWidth>=1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}i.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){k="workout",w.style.display="flex";const r=t.querySelector(".name-card").textContent;let s=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");if(s==="bodyparts"&&(s=s.slice(0,-1)),ee(r,s),p===0)return;p>=3?g(3):g(p)}});function K(){S(),P(),i.innerHTML="",m.innerHTML=""}function X(e){let t="";e=Math.floor(e);for(let r=0;r<e;r++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href=${I}></use>
            </svg>
        </span>`;return t}w.addEventListener("submit",e=>{e.preventDefault();const t=$.value.trim();if(t.length===0){y.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}K();const r={limit:T(),page:1,keyword:t};r[u.content]=u.title,$.value="",C(r)});function T(){return document.documentElement.clientWidth>=768?12:8}function Z(){A.style.display="block"}function S(){A.style.display="none"}S();function ee(e,t){u.title=e,u.content=t,h=1;const r={limit:T(),page:h};r[u.content]=e,te(e),C(r)}async function C(e){try{const t=await v.get(`${D}exercises`,{params:e}),{totalPages:r,results:s}=t.data;if(s.length==0){i.innerHTML="",Z();return}let o=s.reduce((c,n)=>{i.innerHTML="",m.innerHTML="";const L=X(n.rating),H=Number(n.rating).toFixed(1),R=re(n.name);return c+`<li class="gallery-item-list" >
                <div class="workout-header-wrap">
                        <div class="workout-and-rating">
                            <p class="workout-item-title">WORKOUT</p>
                            <p class="rating-title-item">${H}
                                ${L}
                            </p>
                            </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button-item" data-exercise-id=${n._id}>Start
                                <svg class="start-workout-icon" width="14" height="14" aria-label="start-arrow">
                                    <use href=${W}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                       <div class="workout-type-item">
                        <svg  width="24" height="24" aria-label="run-man">
                            <use href=${N}></use>
                        </svg>
                        <p class="workout-name-item">${R}</p>
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
            </li>`},"");p=t.data.totalPages,i.innerHTML="",i.insertAdjacentHTML("beforeend",o),i.addEventListener("click",async c=>{let n;const L=c.target;c.target&&c.target.closest(".start-button-item")&&(n=L.closest(".start-button-item").getAttribute("data-exercise-id"),await F(n))}),k="workout",r<3?g(r,e.page):g(3,e.page)}catch(t){console.log(t)}}function te(e){l=document.createElement("span"),l.classList.add("exercise-title-card"),l.innerHTML=e,f.classList.add("exercises-gallery-label"),f.innerHTML=" / ",b.appendChild(f),b.appendChild(l)}function P(){l&&(b.removeChild(l),b.removeChild(f),l=null,S())}function re(e){const t=document.documentElement.clientWidth;let r=20,s=295,o=.7;t>=1440?(r=24,s=424,o=.85):t>=768&&(r=24,s=313,o=.8);const c=s/(r/2)*o;return e.length>c?e.slice(0,c)+"...":e}B(V);const se="https://energyflow.b.goit.study/api/subscription",x=document.querySelector(".footer-modal-form");x.addEventListener("submit",async e=>{e.preventDefault();const{email:t}=x.elements;try{if((await fetch(se,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value.trim()})})).ok){const s={email:t.value.trim()};y.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"}),console.log(s),x.reset()}else y.error({position:"topCenter",message:"This email is already in the subscriber base. Maybe you should use another one",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"})}catch(r){console.error("Error POST API:",r.message)}});
//# sourceMappingURL=commonHelpers2.js.map
