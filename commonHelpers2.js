import{o as D}from"./assets/mob-menu-fc4d99a8.js";/* empty css                      */import{a as k,i as b}from"./assets/vendor-8cce9181.js";const A=document.querySelector(".loader");k.interceptors.request.use(e=>(A.style.display="inline-block",e),e=>console.error(e));k.interceptors.response.use(e=>(A.style.display="none",e),e=>Promise.reject(e));const T=document.querySelector(".back-to-top"),U=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(U),window.scrollTo(0,e-e/8))};T.addEventListener("click",U);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?T.classList.add("active"):T.classList.remove("active")});var I=document.getElementById("myAudio");I.addEventListener("ended",function(){b.show({title:"Lets do it!",message:"Subscribe in the bottom, and learn about new exercises!",position:"bottomCenter",timeout:1e4,backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"})});const w=document.querySelector(".exercises-gallery-label"),n=document.querySelector(".exercises-gallery-group"),p=document.querySelector(".exercises-gallery-filter"),g=document.querySelector(".page-buttons-container");let l=null;const h=document.createElement("span"),C=document.querySelector("#filtre-key"),u=document.querySelector(".search-tool"),N=document.querySelector(".icon-search"),z=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location),G=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-Star-1",self.location),Q=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-lighticon",self.location),W=document.querySelector(".error-card-message"),V="https://energyflow.b.goit.study/api/";let v=1;const d={content:null,title:null},_="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},m=0,y="filter";const Y="muscles",J=k.create({baseURL:_});p.addEventListener("click",function(e){if(H(),L(),m=0,u.style.display="none",e.target.tagName==="BUTTON"){y="filter";const t=e.target.getAttribute("name");S(),B(t)}});n.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){y="workout",u.style.display="flex";const r=t.querySelector(".name-card").textContent;let s=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");if(s==="bodyparts"&&(s=s.slice(0,-1)),S(),oe(r,s),m===0)return;m>=3?f(3):f(m)}});g.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;Z(r)}});function B(e){u.style.display="none";let t={};switch(ee(),e){case"body":a.filter="Body parts",t=p.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=p.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=p.querySelectorAll(`button[name="${e}"]`)}K(t);const s=`?${new URLSearchParams(a).toString()}`;P(s).then(o=>j(o)).then(o=>f(o.totalPages,1)).catch(o=>console.error(o))}function K(e){const t=p.querySelectorAll("button"),r=Array.from(e);for(let s=0;s<t.length;s++){const o=t[s];r.includes(o)?(o.style.backgroundColor="var(--dark-gray)",o.style.color="var(--white)"):(o.style.backgroundColor="var(--white-smoke)",o.style.color="var(--black)")}}function X(){const t=`?${new URLSearchParams(a).toString()}`;P(t).then(r=>j(r)).catch(r=>console.error(r))}async function P(e){try{return(await J.get(e)).data}catch(t){console.error(t)}}async function $(e){try{const t=await k.get(`${V}exercises`,{params:e}),{totalPages:r,results:s}=t.data;if(s.length==0){n.innerHTML="",se();return}let o=s.reduce((c,i)=>{n.innerHTML="",g.innerHTML="";const E=re(i.rating),F=Number(i.rating).toFixed(1),O=ie(i.name);return c+`<li class="gallery-item-list" >
                <div class="workout-header-wrap">
                        <div class="workout-and-rating">
                            <p class="workout-item-title">WORKOUT</p>
                            <p class="rating-title-item">${F}
                                ${E}
                            </p>
                            </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button-item" data-exercise-id=${i._id}>Start
                                <svg class="start-workout-icon" width="14" height="14" aria-label="start-arrow">
                                    <use href=${z}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                       <div class="workout-type-item">
                        <svg  width="24" height="24" aria-label="run-man">
                            <use href=${Q}></use>
                        </svg>
                        <p class="workout-name-item">${O}</p>
                    </div>
                <div class="workout-items-box">
                
                 
                    <div class="workout-description">
                        <p class="description-item-name">Burned calories:
                            <span class="description-item-value">${i.burnedCalories} / ${i.time} min</span>
                        </p>
                        <p class="description-item-name">Body part:
                            <span class="description-item-value">${i.bodyPart}</span>
                        </p>
                        <p class="description-item-name">Target:
                            <span class="description-item-value">${i.target}</span>
                        </p>
                    </div> 
            </li>`},"");m=t.data.totalPages,n.innerHTML="",n.insertAdjacentHTML("beforeend",o),n.addEventListener("click",async c=>{let i;const E=c.target;c.target&&c.target.closest(".start-button-item")&&(i=E.closest(".start-button-item").getAttribute("data-exercise-id"),await D(i))}),y="workout",r<3?f(r,e.page):f(3,e.page)}catch(t){console.log(t)}}function j(e){n.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return n.insertAdjacentHTML("beforeend",t.join("")),e}function f(e,t){let r="";g.innerHTML="";for(let s=1;s<=e;s++)s==t?r+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:r+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;g.insertAdjacentHTML("afterbegin",r)}function Z(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),y){case"filter":a.page=e,X();break;case"workout":v=e;const s={limit:q(),page:v};s[d.content]=d.title,$(s);break}else r.classList.remove("active")})}function ee(){document.documentElement.clientWidth>=1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}function te(){L(),H(),n.innerHTML="",g.innerHTML=""}function re(e){let t="";e=Math.floor(e);for(let r=0;r<e;r++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href=${G}></use>
            </svg>
        </span>`;return t}N.addEventListener("click",e=>{e.preventDefault();const t=C.value.trim();R(t)});u.addEventListener("focus",()=>{});u.addEventListener("blur",()=>{});u.addEventListener("keypress",e=>{if(e.key==="Enter"){e.preventDefault();const t=C.value.trim();R(t)}});function R(e){if(e.length===0){b.error({title:"Error",position:"topRight",message:"Sorry, Please choose an exercise.",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"});return}te();const t={limit:q(),page:1,keyword:e};t[d.content]=d.title,C.value="",$(t)}function se(){W.style.display="block"}function L(){W.style.display="none"}function oe(e,t){d.title=e,d.content=t,v=1;const r={limit:q(),page:v};r[d.content]=e,ne(e),$(r)}function ne(e){l=document.createElement("span"),l.classList.add("exercise-title-card"),l.innerHTML=e,h.classList.add("exercises-gallery-label"),h.innerHTML=" / ",w.appendChild(h),w.appendChild(l)}function H(){l&&(w.removeChild(l),w.removeChild(h),l=null,L())}function q(){return document.documentElement.clientWidth>=768?9:8}function ie(e){const t=document.documentElement.clientWidth;let r=20,s=295,o=.7;t>=1440?(r=24,s=424,o=.85):t>=768&&(r=24,s=313,o=.8);const c=s/(r/2)*o;return e.length>c?e.slice(0,c)+"...":e}L();B(Y);/*!!!experimental functions: update gap desktop for exercise and workout gallery!!!!*/let M=window.innerWidth||window.clientWidth;window.addEventListener("load",S);window.addEventListener("resize",()=>{const e=window.innerWidth;e!==M&&(S(),M=e)});function S(){if(document.documentElement.clientWidth>=1440)switch(y){case"filter":n.style.cssText="",n.style.rowGap="40px";break;case"workout":n.style.cssText="",n.style.rowGap="28px";break;default:n.style.cssText=""}else n.style.cssText=""}const ae="https://energyflow.b.goit.study/api/subscription",x=document.querySelector(".footer-modal-form");x.addEventListener("submit",async e=>{e.preventDefault();const{email:t}=x.elements;try{if((await fetch(ae,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value.trim()})})).ok){const s={email:t.value.trim()};b.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"}),console.log(s),x.reset()}else b.error({position:"topCenter",message:"This email is already in the subscriber base. Maybe you should use another one",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"})}catch(r){console.error("Error POST API:",r.message)}});
//# sourceMappingURL=commonHelpers2.js.map
