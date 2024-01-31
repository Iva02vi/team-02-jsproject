import{o as W}from"./assets/mob-menu-968d215d.js";/* empty css                      */import{i as h,a as M}from"./assets/vendor-8cce9181.js";const E=document.querySelector(".back-to-top"),q=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(q),window.scrollTo(0,e-e/8))};E.addEventListener("click",q);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?E.classList.add("active"):E.classList.remove("active")});var N=document.getElementById("myAudio");N.addEventListener("ended",function(){h.show({title:"Lets do it!",message:"Subscribe in the bottom, and learn about new exercises!",position:"bottomCenter",timeout:1e4,backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"})});const b=document.querySelector(".exercises-gallery-label"),i=document.querySelector(".exercises-gallery-group"),p=document.querySelector(".exercises-gallery-filter"),g=document.querySelector(".page-buttons-container");let l=null;const y=document.createElement("span"),$=document.querySelector("#filtre-key"),v=document.querySelector(".search-tool"),D=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location),I=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-Star-1",self.location),z=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-lighticon",self.location),A=document.querySelector(".error-card-message"),Q="https://energyflow.b.goit.study/api/";let d=1;const u={content:null,title:null},V="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},w="filter";const U="muscles",_=M.create({baseURL:V});function B(e){i.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return i.insertAdjacentHTML("beforeend",t.join("")),e}let m=0;p.addEventListener("click",function(e){if(R(),k(),m=0,v.style.display="none",e.target.tagName==="BUTTON"){w="filter";const t=e.target.getAttribute("name");x(t)}});function x(e){v.style.display="none";let t={};switch(H(),e){case"body":a.filter="Body parts",t=p.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=p.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=p.querySelectorAll(`button[name="${e}"]`)}Y(t);const s=`?${new URLSearchParams(a).toString()}`;j(s).then(o=>B(o)).then(o=>f(o.totalPages)).catch(o=>console.error(o))}function G(){const t=`?${new URLSearchParams(a).toString()}`;j(t).then(r=>B(r)).catch(r=>console.error(r))}async function j(e){try{return(await _.get(e)).data}catch(t){console.error(t)}}function Y(e){const t=p.querySelectorAll("button"),r=Array.from(e);for(let s=0;s<t.length;s++){const o=t[s];r.includes(o)?(o.style.backgroundColor="var(--dark-gray)",o.style.color="var(--white)"):(o.style.backgroundColor="var(--white-smoke)",o.style.color="var(--black)")}}function f(e,t){let r="";g.innerHTML="";for(let s=1;s<=e;s++)s==t?r+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:r+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;g.insertAdjacentHTML("afterbegin",r)}g.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;P(r)}});function P(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),w){case"filter":a.page=e,G();break;case"workout":d=e;const s={limit:T(),page:d};s[u.content]=u.title,C(s);break}else r.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),H(),x(U),P(1)});function H(){document.documentElement.clientWidth>1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}x(U);i.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){w="workout",v.style.display="flex";const r=t.querySelector(".name-card").textContent;let s=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");if(s==="bodyparts"&&(s=s.slice(0,-1)),Z(r,s),m===0)return;m>=3?f(3):f(m)}});function J(){k(),R(),i.innerHTML="",g.innerHTML=""}function K(e){let t="";e=Math.floor(e);for(let r=0;r<e;r++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href=${I}></use>
            </svg>
        </span>`;return t}v.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;d=1;const t=$.value.trim();if(t.length===0){h.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}J();const r={limit:T(),page:d,keyword:t};r[u.content]=u.title,$.value="",C(r)});function T(){return document.documentElement.clientWidth>768?12:8}function X(){A.style.display="block"}function k(){A.style.display="none"}k();function Z(e,t){u.title=e,u.content=t,d=1;const r={limit:T(),page:d};r[u.content]=e,ee(e),C(r)}async function C(e){try{const t=await M.get(`${Q}exercises`,{params:e}),{totalPages:r,results:s}=t.data;if(s.length==0){i.innerHTML="",X();return}let o=s.reduce((c,n)=>{i.innerHTML="",g.innerHTML="";const L=K(n.rating),F=Number(n.rating).toFixed(1),O=te(n.name);return c+`<li class="gallery-item-list" >
                <div class="workout-header-wrap">
                        <div class="workout-and-rating">
                            <p class="workout-item-title">WORKOUT</p>
                            <p class="rating-title-item">${F}
                                ${L}
                            </p>
                            </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button-item" data-exercise-id=${n._id}>Start
                                <svg class="start-workout-icon" width="14" height="14" aria-label="start-arrow">
                                    <use href=${D}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                       <div class="workout-type-item">
                        <svg  width="24" height="24" aria-label="run-man">
                            <use href=${z}></use>
                        </svg>
                        <p class="workout-name-item">${O}</p>
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
            </li>`},"");m=t.data.totalPages,i.innerHTML="",i.insertAdjacentHTML("beforeend",o),i.addEventListener("click",async c=>{let n;const L=c.target;c.target&&c.target.closest(".start-button-item")&&(n=L.closest(".start-button-item").getAttribute("data-exercise-id"),await W(n))}),w="workout",r<3?f(r,e.page):f(3,e.page)}catch(t){console.log(t)}}function ee(e){l=document.createElement("span"),l.classList.add("exercise-title-card"),l.innerHTML=e,y.classList.add("exercises-gallery-label"),y.innerHTML=" / ",b.appendChild(y),b.appendChild(l)}function R(){l&&(b.removeChild(l),b.removeChild(y),l=null,k())}function te(e){const t=document.documentElement.clientWidth;let r=20,s=295,o=.7;t>1440?(r=24,s=424,o=.85):t>768&&(r=24,s=313,o=.8);const c=s/(r/2)*o;return e.length>c?e.slice(0,c)+"...":e}const re="https://energyflow.b.goit.study/api/subscription",S=document.querySelector(".footer-modal-form");S.addEventListener("submit",async e=>{e.preventDefault();const{email:t}=S.elements;try{if((await fetch(re,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value.trim()})})).ok){const s={email:t.value.trim()};h.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"}),console.log(s),S.reset()}else h.error({position:"topCenter",message:"This email is already in the subscriber base. Maybe you should use another one",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"})}catch(r){console.error("Error POST API:",r.message)}});
//# sourceMappingURL=commonHelpers2.js.map
