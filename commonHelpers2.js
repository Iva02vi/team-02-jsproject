import"./assets/modal-window-exercise-b86e61c1.js";/* empty css                      */import{i as S,a as T}from"./assets/vendor-8cce9181.js";const w=document.querySelector(".back-to-top"),q=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(q),window.scrollTo(0,e-e/8))};w.addEventListener("click",q);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?w.classList.add("active"):w.classList.remove("active")});var W=document.getElementById("myAudio");W.addEventListener("ended",function(){S.show({title:"Lets do it!",message:"Subscribe in the bottom, and learn about new exercises!",position:"bottomCenter",timeout:1e4,backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"})});const f=document.querySelector(".exercises-gallery-label"),c=document.querySelector(".exercises-gallery-group"),d=document.querySelector(".exercises-gallery-filter"),y=document.querySelector(".page-buttons-container");let i=null;const g=document.createElement("span"),C=document.querySelector("#filtre-key"),h=document.querySelector(".search-tool");new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location);const $=document.querySelector(".error-card-message"),D="https://energyflow.b.goit.study/api/";let u=1;const l={content:null,title:null},N="https://energyflow.b.goit.study/api/filters";let s={filter:"Muscles",page:1,limit:8},m="filter";const M="muscles",O=T.create({baseURL:N});function A(e){c.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return c.insertAdjacentHTML("beforeend",t.join("")),e}d.addEventListener("click",function(e){if(H(),b(),workoutCountPages=0,h.style.display="none",e.target.tagName==="BUTTON"){m="filter";const t=e.target.getAttribute("name");L(t)}});function L(e){h.style.display="none";let t={};switch(U(),e){case"body":s.filter="Body parts",t=d.querySelectorAll(`button[name="${e}"]`);break;case"equipment":s.filter="Equipment",t=d.querySelectorAll(`button[name="${e}"]`);break;default:s.filter="Muscles",t=d.querySelectorAll(`button[name="${e}"]`)}z(t);const o=`?${new URLSearchParams(s).toString()}`;B(o).then(n=>A(n)).then(n=>k(n.totalPages)).catch(n=>console.error(n))}function I(){const t=`?${new URLSearchParams(s).toString()}`;B(t).then(r=>A(r)).catch(r=>console.error(r))}async function B(e){try{return(await O.get(e)).data}catch(t){console.error(t)}}function z(e){const t=d.querySelectorAll("button"),r=Array.from(e);for(let o=0;o<t.length;o++){const n=t[o];r.includes(n)?(n.style.backgroundColor="var(--dark-gray)",n.style.color="var(--white)"):(n.style.backgroundColor="var(--white-smoke)",n.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+m)}function k(e){let t="";y.innerHTML="";for(let r=1;r<=e;r++)r===1?t+=`<li>
      <button class="page-button active" type="button" id="${r}">${r}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${r}">${r}</button>`;y.insertAdjacentHTML("afterbegin",t)}y.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;P(r)}});function P(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),m){case"filter":s.page=e,I();break;case"workout":u=e;const o={limit:E(),page:u};o[l.content]=l.title,x(o);break}else r.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),U(),L(M),P(1)});function U(){document.documentElement.clientWidth>1440?(s.page=1,s.limit=12):(s.page=1,s.limit=8)}L(M);c.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){m="workout",h.style.display="flex";const r=t.querySelector(".name-card").textContent;let o=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");if(o==="bodyparts"&&(o=o.slice(0,-1)),G(r,o),workoutCountPages===0)return;workoutCountPages>=3?k(3):k(workoutCountPages)}});function Q(){b(),H(),c.innerHTML="",y.innerHTML=""}function V(e){let t="";return t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`,t}h.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;u=1;const t=C.value.trim();if(t.length===0){S.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}Q();const r={limit:E(),page:u,keyword:t};r[l.content]=l.title,C.value="",x(r)});function E(){return document.documentElement.clientWidth>768?12:8}function Y(){$.style.display="block"}function b(){$.style.display="none"}b();function G(e,t){l.title=e,l.content=t,u=1;const r={limit:E(),page:u};r[l.content]=e,K(e),x(r)}function K(e){i=document.createElement("span"),i.classList.add("exercise-title-card"),i.innerHTML=e,g.classList.add("exercises-gallery-label"),g.innerHTML=" / ",f.appendChild(g),f.appendChild(i)}function H(){i&&(f.removeChild(i),f.removeChild(g),i=null,b())}async function x(e){try{const t=await T.get(`${D}exercises`,{params:e}),{totalPages:r,results:o}=t.data;if(o.length==0){c.innerHTML="",Y();return}let n=o.reduce((p,a)=>{const j=V(a.rating),F=Number(a.rating).toFixed(1),R=_(a.name);return p+`<li class="gallery-item-list">
                <div class="workout-header-wrap">
                        <div class= "workout-and-rating">
                            <p class="workout-item-title">WORKOUT</p>
                            <p class="rating-title-item">${F}
                                ${j}
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
                        <p class="workout-name-item">${R}</p>
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
            </li>`},"");workoutCountPages=t.data.totalPages,c.innerHTML="",c.insertAdjacentHTML("beforeend",n),m="workout"}catch(t){console.log(t)}}function _(e){const t=document.documentElement.clientWidth;let r=20,o=295,n=.75;t>1440?(r=24,o=424,n=.85):t>768&&(r=24,o=313,n=.8);const p=o/(r/2)*n;return e.length>p?e.slice(0,p)+"...":e}const J="feedback-form",v=document.querySelector(".footer-modal-form");v.addEventListener("submit",e=>{e.preventDefault();const{email:t}=v.elements,r={email:t.value.trim()};S.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(r),localStorage.removeItem(J),v.reset()});
//# sourceMappingURL=commonHelpers2.js.map
