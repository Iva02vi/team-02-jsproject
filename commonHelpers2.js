import"./assets/modal-window-exercise-3ceb1f94.js";/* empty css                      */import{a as q,i as x}from"./assets/vendor-8cce9181.js";const h=document.querySelector(".back-to-top"),T=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(T),window.scrollTo(0,e-e/8))};h.addEventListener("click",T);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?h.classList.add("active"):h.classList.remove("active")});const y=document.querySelector(".exercises-gallery-label"),i=document.querySelector(".exercises-gallery-group"),d=document.querySelector(".exercises-gallery-filter"),g=document.querySelector(".page-buttons-container");let c=null;const m=document.createElement("span"),E=document.querySelector("#filtre-key"),f=document.querySelector(".search-tool"),$=document.querySelector(".error-card-message"),P="https://energyflow.b.goit.study/api/";let u=1;const a={content:null,title:null},j="https://energyflow.b.goit.study/api/filters";let s={filter:"Muscles",page:1,limit:8},p="filter";const M="muscles",D=q.create({baseURL:j});function C(e){i.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return i.insertAdjacentHTML("beforeend",t.join("")),e}d.addEventListener("click",function(e){if(R(),v(),f.style.display="none",e.target.tagName==="BUTTON"){p="filter";const t=e.target.getAttribute("name");S(t)}});function S(e){f.style.display="none";let t={};switch(U(),e){case"body":s.filter="Body parts",t=d.querySelectorAll(`button[name="${e}"]`);break;case"equipment":s.filter="Equipment",t=d.querySelectorAll(`button[name="${e}"]`);break;default:s.filter="Muscles",t=d.querySelectorAll(`button[name="${e}"]`)}W(t);const o=`?${new URLSearchParams(s).toString()}`;A(o).then(n=>C(n)).then(n=>w(n.totalPages)).catch(n=>console.error(n))}function O(){const t=`?${new URLSearchParams(s).toString()}`;A(t).then(r=>C(r)).catch(r=>console.error(r))}async function A(e){try{return(await D.get(e)).data}catch(t){console.error(t)}}function W(e){const t=d.querySelectorAll("button"),r=Array.from(e);for(let o=0;o<t.length;o++){const n=t[o];r.includes(n)?(n.style.backgroundColor="var(--dark-gray)",n.style.color="var(--white)"):(n.style.backgroundColor="var(--white-smoke)",n.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+p)}function w(e){let t="";g.innerHTML="";for(let r=1;r<=e;r++)r===1?t+=`<li>
      <button class="page-button active" type="button" id="${r}">${r}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${r}">${r}</button>`;g.insertAdjacentHTML("afterbegin",t)}g.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;B(r)}});function B(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),p){case"filter":s.page=e,O();break;case"workout":u=e;const o={limit:k(),page:u};o[a.content]=a.title,L(o);break}else r.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),U(),S(M),B(1)});function U(){document.documentElement.clientWidth>1440?(s.page=1,s.limit=12):(s.page=1,s.limit=8)}S(M);i.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){p="workout",f.style.display="flex";const r=t.querySelector(".name-card").textContent;let o=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");o==="bodyparts"&&(o=o.slice(0,-1)),Q(r,o)}});function I(){v(),R(),i.innerHTML="",g.innerHTML=""}function G(e){let t="";e=Math.floor(e);for(let r=0;r<e;r++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}f.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;u=1;const t=E.value.trim();if(console.log(t),t.length===0){x.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}I();const r={limit:k(),page:u,keyword:t};r[a.content]=a.title,E.value="",L(r)});function k(){return document.documentElement.clientWidth>768?12:8}function N(){$.style.display="block"}function v(){$.style.display="none"}v();function Q(e,t){a.title=e,a.content=t,u=1;const r={limit:k(),page:u};r[a.content]=e,V(e),L(r)}async function L(e){try{const t=await q.get(`${P}exercises`,{params:e}),{totalPages:r,results:o}=t.data;if(o.length==0){N();return}let n=o.reduce((H,l)=>{i.innerHTML="",g.innerHTML="";const F=G(l.rating);return H+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-rating">
                        <p class="workout-title">WORKOUT</p>
                        <p class="rating-title">${l.rating}
                          ${F}
                        </p>
                            <button type="button" class="start-button">Start
                            <span class="arrow-icon">
                                <svg class="start-arrow-icon" width="14" height="14" aria-label="start-arrow">
                                    <use href="./img/sprite.svg#icon-arrow"></use>
                                </svg>
                            </span>
                            </button>
                    </div>
                    <div class="workout-type">
                        <svg class="run-man-icon" width="24" height="24" aria-label="run-man">
                            <use href="../img/sprite.svg#icon-lighticon"></use>
                        </svg>
                        <p class="workout-name">${l.name}</p>
                    </div>
                    <div class="body-description">
                        <p class="burned-callories">Burned calories:
                            <span class="amount-callories">${l.burnedCalories}/${l.time} min</span>
                        </p>
                        <p class="filtred-class">Filtre:
                            <span class="filter-type">${a.content}</span>
                        </p>
                        <p class="target">Target:
                        <span class="key-word">${l.target}</span>
                        </p>
                    </div>
                </div>
            </li>`},"");i.insertAdjacentHTML("beforeend",n),p="workout",r<3?w(r):w(3)}catch(t){console.log(t)}}function V(e){c=document.createElement("span"),c.classList.add("exercise-title-card"),c.innerHTML=e,m.classList.add("exercises-gallery-label"),m.innerHTML=" / ",y.appendChild(m),y.appendChild(c)}function R(){c&&(y.removeChild(c),y.removeChild(m),c=null,v())}const Y=document.querySelector(".modal-give-rating"),z=document.querySelector(".give-rating-form"),K=document.querySelector(".give-rating-close");z.querySelector('button[type="submit"]');document.querySelector(".give-rating-p1");const _=document.querySelector(".backdrop"),J=document.querySelector(".modal-window");document.querySelector(".give-rating-stars");new URL("/team-02-jsproject/assets/sprite-224c3807.svg#icon-Star-2",self.location);K.addEventListener("click",()=>X());const X=()=>{Y.classList.add("hidden"),_.classList.remove("visually-hidden"),J.style.display="block"},Z="feedback-form",b=document.querySelector(".footer-modal-form");b.addEventListener("submit",e=>{e.preventDefault();const{email:t}=b.elements,r={email:t.value.trim()};x.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(r),localStorage.removeItem(Z),b.reset()});
//# sourceMappingURL=commonHelpers2.js.map
