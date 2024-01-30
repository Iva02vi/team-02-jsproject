import{o as W}from"./assets/mob-menu-1d0d75a8.js";/* empty css                      */import{i as y,a as $}from"./assets/vendor-8cce9181.js";const L=document.querySelector(".back-to-top"),M=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(M),window.scrollTo(0,e-e/8))};L.addEventListener("click",M);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?L.classList.add("active"):L.classList.remove("active")});var N=document.getElementById("myAudio");N.addEventListener("ended",function(){y.show({title:"Lets do it!",message:"Subscribe in the bottom, and learn about new exercises!",position:"bottomCenter",timeout:1e4,backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"})});const h=document.querySelector(".exercises-gallery-label"),c=document.querySelector(".exercises-gallery-group"),m=document.querySelector(".exercises-gallery-filter"),b=document.querySelector(".page-buttons-container");let l=null;const f=document.createElement("span"),q=document.querySelector("#filtre-key"),v=document.querySelector(".search-tool");new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location);const A=document.querySelector(".error-card-message"),D="https://energyflow.b.goit.study/api/";let d=1;const u={content:null,title:null},I="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},g="filter";const B="muscles",z=$.create({baseURL:I});function P(e){c.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return c.insertAdjacentHTML("beforeend",t.join("")),e}let p=0;m.addEventListener("click",function(e){if(R(),w(),p=0,v.style.display="none",e.target.tagName==="BUTTON"){g="filter";const t=e.target.getAttribute("name");x(t)}});function x(e){v.style.display="none";let t={};switch(j(),e){case"body":a.filter="Body parts",t=m.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=m.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=m.querySelectorAll(`button[name="${e}"]`)}V(t);const s=`?${new URLSearchParams(a).toString()}`;U(s).then(o=>P(o)).then(o=>E(o.totalPages)).catch(o=>console.error(o))}function Q(){const t=`?${new URLSearchParams(a).toString()}`;U(t).then(r=>P(r)).catch(r=>console.error(r))}async function U(e){try{return(await z.get(e)).data}catch(t){console.error(t)}}function V(e){const t=m.querySelectorAll("button"),r=Array.from(e);for(let s=0;s<t.length;s++){const o=t[s];r.includes(o)?(o.style.backgroundColor="var(--dark-gray)",o.style.color="var(--white)"):(o.style.backgroundColor="var(--white-smoke)",o.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+g)}function E(e){let t="";b.innerHTML="";for(let r=1;r<=e;r++)r===1?t+=`<li>
      <button class="page-button active" type="button" id="${r}">${r}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${r}">${r}</button>`;b.insertAdjacentHTML("afterbegin",t)}b.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;H(r)}});function H(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),g){case"filter":a.page=e,Q();break;case"workout":d=e;const s={limit:T(),page:d};s[u.content]=u.title,C(s);break}else r.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),j(),x(B),H(1)});function j(){document.documentElement.clientWidth>1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}x(B);c.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){g="workout",v.style.display="flex";const r=t.querySelector(".name-card").textContent;let s=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");if(s==="bodyparts"&&(s=s.slice(0,-1)),J(r,s),p===0)return;p>=3?E(3):E(p)}});function G(){w(),R(),c.innerHTML="",b.innerHTML=""}function Y(e){let t="";return t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`,t}v.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;d=1;const t=q.value.trim();if(t.length===0){y.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}G();const r={limit:T(),page:d,keyword:t};r[u.content]=u.title,q.value="",C(r)});function T(){return document.documentElement.clientWidth>768?12:8}function _(){A.style.display="block"}function w(){A.style.display="none"}w();function J(e,t){u.title=e,u.content=t,d=1;const r={limit:T(),page:d};r[u.content]=e,K(e),C(r)}function K(e){l=document.createElement("span"),l.classList.add("exercise-title-card"),l.innerHTML=e,f.classList.add("exercises-gallery-label"),f.innerHTML=" / ",h.appendChild(f),h.appendChild(l)}function R(){l&&(h.removeChild(l),h.removeChild(f),l=null,w())}async function C(e){try{const t=await $.get(`${D}exercises`,{params:e}),{totalPages:r,results:s}=t.data;if(s.length==0){c.innerHTML="",_();return}let o=s.reduce((i,n)=>{const k=Y(n.rating),F=Number(n.rating).toFixed(1),O=X(n.name);return i+`<li class="gallery-item-list">
                <div class="workout-header-wrap">
                        <div class= "workout-and-rating">
                            <p class="workout-item-title">WORKOUT</p>
                            <p class="rating-title-item">${F}
                                ${k}
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
                            <span class="description-item-value">${n.burnedCalories} / ${n.time} min</span>
                        </p>
                        <p class="description-item-name">Body part:
                            <span class="description-item-value">${n.bodyPart}</span>
                        </p>
                        <p class="description-item-name">Target:
                            <span class="description-item-value">${n.target}</span>
                        </p>
                    </div> 
            </li>`},"");c.addEventListener("click",async i=>{let n;const k=i.target;i.target&&i.target.closest(".start-button")&&(n=k.closest(".start-button").getAttribute("data-exercise-id"),await W(n))}),p=t.data.totalPages,c.innerHTML="",c.insertAdjacentHTML("beforeend",o),g="workout"}catch(t){console.log(t)}}function X(e){const t=document.documentElement.clientWidth;let r=20,s=295,o=.75;t>1440?(r=24,s=424,o=.85):t>768&&(r=24,s=313,o=.8);const i=s/(r/2)*o;return e.length>i?e.slice(0,i)+"...":e}const Z="https://energyflow.b.goit.study/api/subscription",S=document.querySelector(".footer-modal-form");S.addEventListener("submit",async e=>{e.preventDefault();const{email:t}=S.elements;try{if((await fetch(Z,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value.trim()})})).ok){const s={email:t.value.trim()};y.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"}),console.log(s),S.reset()}else y.error({position:"topCenter",message:"This email is already in the subscriber base. Maybe you should use another one",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"})}catch(r){console.error("Error POST API:",r.message)}});
//# sourceMappingURL=commonHelpers2.js.map
