import"./assets/modal-window-exercise-b86e61c1.js";/* empty css                      */import{i as f,a as C}from"./assets/vendor-8cce9181.js";const k=document.querySelector(".back-to-top"),q=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(q),window.scrollTo(0,e-e/8))};k.addEventListener("click",q);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?k.classList.add("active"):k.classList.remove("active")});var O=document.getElementById("myAudio");O.addEventListener("ended",function(){f.show({title:"Lets do it!",message:"Subscribe in the bottom, and learn about new exercises!",position:"bottomCenter",timeout:1e4,backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"})});const y=document.querySelector(".exercises-gallery-label"),c=document.querySelector(".exercises-gallery-group"),d=document.querySelector(".exercises-gallery-filter"),h=document.querySelector(".page-buttons-container");let i=null;const g=document.createElement("span"),T=document.querySelector("#filtre-key"),b=document.querySelector(".search-tool");new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location);const $=document.querySelector(".error-card-message"),N="https://energyflow.b.goit.study/api/";let u=1;const l={content:null,title:null},W="https://energyflow.b.goit.study/api/filters";let n={filter:"Muscles",page:1,limit:8},m="filter";const P="muscles",D=C.create({baseURL:W});function M(e){c.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return c.insertAdjacentHTML("beforeend",t.join("")),e}d.addEventListener("click",function(e){if(H(),v(),workoutCountPages=0,b.style.display="none",e.target.tagName==="BUTTON"){m="filter";const t=e.target.getAttribute("name");L(t)}});function L(e){b.style.display="none";let t={};switch(U(),e){case"body":n.filter="Body parts",t=d.querySelectorAll(`button[name="${e}"]`);break;case"equipment":n.filter="Equipment",t=d.querySelectorAll(`button[name="${e}"]`);break;default:n.filter="Muscles",t=d.querySelectorAll(`button[name="${e}"]`)}z(t);const o=`?${new URLSearchParams(n).toString()}`;A(o).then(s=>M(s)).then(s=>S(s.totalPages)).catch(s=>console.error(s))}function I(){const t=`?${new URLSearchParams(n).toString()}`;A(t).then(r=>M(r)).catch(r=>console.error(r))}async function A(e){try{return(await D.get(e)).data}catch(t){console.error(t)}}function z(e){const t=d.querySelectorAll("button"),r=Array.from(e);for(let o=0;o<t.length;o++){const s=t[o];r.includes(s)?(s.style.backgroundColor="var(--dark-gray)",s.style.color="var(--white)"):(s.style.backgroundColor="var(--white-smoke)",s.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+m)}function S(e){let t="";h.innerHTML="";for(let r=1;r<=e;r++)r===1?t+=`<li>
      <button class="page-button active" type="button" id="${r}">${r}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${r}">${r}</button>`;h.insertAdjacentHTML("afterbegin",t)}h.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;B(r)}});function B(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),m){case"filter":n.page=e,I();break;case"workout":u=e;const o={limit:E(),page:u};o[l.content]=l.title,x(o);break}else r.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),U(),L(P),B(1)});function U(){document.documentElement.clientWidth>1440?(n.page=1,n.limit=12):(n.page=1,n.limit=8)}L(P);c.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){m="workout",b.style.display="flex";const r=t.querySelector(".name-card").textContent;let o=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");if(o==="bodyparts"&&(o=o.slice(0,-1)),Y(r,o),workoutCountPages===0)return;workoutCountPages>=3?S(3):S(workoutCountPages)}});function Q(){v(),H(),c.innerHTML="",h.innerHTML=""}function V(e){let t="";return t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`,t}b.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;u=1;const t=T.value.trim();if(t.length===0){f.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}Q();const r={limit:E(),page:u,keyword:t};r[l.content]=l.title,T.value="",x(r)});function E(){return document.documentElement.clientWidth>768?12:8}function G(){$.style.display="block"}function v(){$.style.display="none"}v();function Y(e,t){l.title=e,l.content=t,u=1;const r={limit:E(),page:u};r[l.content]=e,_(e),x(r)}function _(e){i=document.createElement("span"),i.classList.add("exercise-title-card"),i.innerHTML=e,g.classList.add("exercises-gallery-label"),g.innerHTML=" / ",y.appendChild(g),y.appendChild(i)}function H(){i&&(y.removeChild(i),y.removeChild(g),i=null,v())}async function x(e){try{const t=await C.get(`${N}exercises`,{params:e}),{totalPages:r,results:o}=t.data;if(o.length==0){c.innerHTML="",G();return}let s=o.reduce((p,a)=>{const j=V(a.rating),R=Number(a.rating).toFixed(1),F=J(a.name);return p+`<li class="gallery-item-list">
                <div class="workout-header-wrap">
                        <div class= "workout-and-rating">
                            <p class="workout-item-title">WORKOUT</p>
                            <p class="rating-title-item">${R}
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
                        <p class="workout-name-item">${F}</p>
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
            </li>`},"");workoutCountPages=t.data.totalPages,c.innerHTML="",c.insertAdjacentHTML("beforeend",s),m="workout"}catch(t){console.log(t)}}function J(e){const t=document.documentElement.clientWidth;let r=20,o=295,s=.75;t>1440?(r=24,o=424,s=.85):t>768&&(r=24,o=313,s=.8);const p=o/(r/2)*s;return e.length>p?e.slice(0,p)+"...":e}const K="https://energyflow.b.goit.study/api/subscription",w=document.querySelector(".footer-modal-form");w.addEventListener("submit",async e=>{e.preventDefault();const{email:t}=w.elements;try{if((await fetch(K,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value.trim()})})).ok){const o={email:t.value.trim()};f.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"}),console.log(o),w.reset()}else f.error({position:"topCenter",message:"This email is already in the subscriber base. Maybe you should use another one",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"})}catch(r){console.error("Error POST API:",r.message)}});
//# sourceMappingURL=commonHelpers2.js.map
