import"./assets/mob-menu-1d0d75a8.js";/* empty css                      */import{i as y,a as q}from"./assets/vendor-8cce9181.js";const S=document.querySelector(".back-to-top"),$=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame($),window.scrollTo(0,e-e/8))};S.addEventListener("click",$);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?S.classList.add("active"):S.classList.remove("active")});var N=document.getElementById("myAudio");N.addEventListener("ended",function(){y.show({title:"Lets do it!",message:"Subscribe in the bottom, and learn about new exercises!",position:"bottomCenter",timeout:1e4,backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"})});const h=document.querySelector(".exercises-gallery-label"),c=document.querySelector(".exercises-gallery-group"),d=document.querySelector(".exercises-gallery-filter"),b=document.querySelector(".page-buttons-container");let i=null;const f=document.createElement("span"),C=document.querySelector("#filtre-key"),v=document.querySelector(".search-tool");new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location);const M=document.querySelector(".error-card-message"),W="https://energyflow.b.goit.study/api/";let u=1;const l={content:null,title:null},D="https://energyflow.b.goit.study/api/filters";let n={filter:"Muscles",page:1,limit:8},p="filter";const A="muscles",I=q.create({baseURL:D});function B(e){c.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return c.insertAdjacentHTML("beforeend",t.join("")),e}let m=0;d.addEventListener("click",function(e){if(j(),w(),m=0,v.style.display="none",e.target.tagName==="BUTTON"){p="filter";const t=e.target.getAttribute("name");E(t)}});function E(e){v.style.display="none";let t={};switch(H(),e){case"body":n.filter="Body parts",t=d.querySelectorAll(`button[name="${e}"]`);break;case"equipment":n.filter="Equipment",t=d.querySelectorAll(`button[name="${e}"]`);break;default:n.filter="Muscles",t=d.querySelectorAll(`button[name="${e}"]`)}Q(t);const s=`?${new URLSearchParams(n).toString()}`;P(s).then(o=>B(o)).then(o=>L(o.totalPages)).catch(o=>console.error(o))}function z(){const t=`?${new URLSearchParams(n).toString()}`;P(t).then(r=>B(r)).catch(r=>console.error(r))}async function P(e){try{return(await I.get(e)).data}catch(t){console.error(t)}}function Q(e){const t=d.querySelectorAll("button"),r=Array.from(e);for(let s=0;s<t.length;s++){const o=t[s];r.includes(o)?(o.style.backgroundColor="var(--dark-gray)",o.style.color="var(--white)"):(o.style.backgroundColor="var(--white-smoke)",o.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+p)}function L(e){let t="";b.innerHTML="";for(let r=1;r<=e;r++)r===1?t+=`<li>
      <button class="page-button active" type="button" id="${r}">${r}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${r}">${r}</button>`;b.insertAdjacentHTML("afterbegin",t)}b.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;U(r)}});function U(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),p){case"filter":n.page=e,z();break;case"workout":u=e;const s={limit:x(),page:u};s[l.content]=l.title,T(s);break}else r.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),H(),E(A),U(1)});function H(){document.documentElement.clientWidth>1440?(n.page=1,n.limit=12):(n.page=1,n.limit=8)}E(A);c.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){p="workout",v.style.display="flex";const r=t.querySelector(".name-card").textContent;let s=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");if(s==="bodyparts"&&(s=s.slice(0,-1)),_(r,s),m===0)return;m>=3?L(3):L(m)}});function V(){w(),j(),c.innerHTML="",b.innerHTML=""}function G(e){let t="";return t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`,t}v.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;u=1;const t=C.value.trim();if(t.length===0){y.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}V();const r={limit:x(),page:u,keyword:t};r[l.content]=l.title,C.value="",T(r)});function x(){return document.documentElement.clientWidth>768?12:8}function Y(){M.style.display="block"}function w(){M.style.display="none"}w();function _(e,t){l.title=e,l.content=t,u=1;const r={limit:x(),page:u};r[l.content]=e,J(e),T(r)}function J(e){i=document.createElement("span"),i.classList.add("exercise-title-card"),i.innerHTML=e,f.classList.add("exercises-gallery-label"),f.innerHTML=" / ",h.appendChild(f),h.appendChild(i)}function j(){i&&(h.removeChild(i),h.removeChild(f),i=null,w())}async function T(e){try{const t=await q.get(`${W}exercises`,{params:e}),{totalPages:r,results:s}=t.data;if(s.length==0){c.innerHTML="",Y();return}let o=s.reduce((g,a)=>{const R=G(a.rating),F=Number(a.rating).toFixed(1),O=K(a.name);return g+`<li class="gallery-item-list">
                <div class="workout-header-wrap">
                        <div class= "workout-and-rating">
                            <p class="workout-item-title">WORKOUT</p>
                            <p class="rating-title-item">${F}
                                ${R}
                            </p>
                            </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button-item">Start
                                <svg class="start-workout-icon" width="14" height="14" aria-label="start-arrow">
                                    <use href="./img/sprite.svg#icon-arrow"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                       <div class="workout-type-item">
                        <svg  width="24" height="24" aria-label="run-man">
                            <use href="./img/sprite.svg#icon-lighticon"></use>
                        </svg>
                        <p class="workout-name-item">${O}</p>
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
            </li>`},"");m=t.data.totalPages,c.innerHTML="",c.insertAdjacentHTML("beforeend",o),p="workout"}catch(t){console.log(t)}}function K(e){const t=document.documentElement.clientWidth;let r=20,s=295,o=.75;t>1440?(r=24,s=424,o=.85):t>768&&(r=24,s=313,o=.8);const g=s/(r/2)*o;return e.length>g?e.slice(0,g)+"...":e}const X="https://energyflow.b.goit.study/api/subscription",k=document.querySelector(".footer-modal-form");k.addEventListener("submit",async e=>{e.preventDefault();const{email:t}=k.elements;try{if((await fetch(X,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value.trim()})})).ok){const s={email:t.value.trim()};y.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"}),console.log(s),k.reset()}else y.error({position:"topCenter",message:"This email is already in the subscriber base. Maybe you should use another one",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"})}catch(r){console.error("Error POST API:",r.message)}});
//# sourceMappingURL=commonHelpers2.js.map
