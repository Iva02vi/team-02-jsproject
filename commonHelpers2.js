import"./assets/modal-window-exercise-1da8ab07.js";/* empty css                      */import{a as x,i as T}from"./assets/vendor-8cce9181.js";const v=document.querySelector(".back-to-top"),q=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(q),window.scrollTo(0,e-e/8))};v.addEventListener("click",q);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?v.classList.add("active"):v.classList.remove("active")});const f=document.querySelector(".exercises-gallery-label"),i=document.querySelector(".exercises-gallery-group"),d=document.querySelector(".exercises-gallery-filter"),p=document.querySelector(".page-buttons-container");let c=null;const m=document.createElement("span"),E=document.querySelector("#filtre-key"),y=document.querySelector(".search-tool"),$=document.querySelector(".error-card-message"),R="https://energyflow.b.goit.study/api/";let u=1;const a={content:null,title:null},j="https://energyflow.b.goit.study/api/filters";let o={filter:"Muscles",page:1,limit:8},g="filter";const C="muscles",D=x.create({baseURL:j});function M(e){i.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return i.insertAdjacentHTML("beforeend",t.join("")),e}d.addEventListener("click",function(e){if(H(),h(),y.style.display="none",e.target.tagName==="BUTTON"){g="filter";const t=e.target.getAttribute("name");k(t)}});function k(e){y.style.display="none";let t={};switch(U(),e){case"body":o.filter="Body parts",t=d.querySelectorAll(`button[name="${e}"]`);break;case"equipment":o.filter="Equipment",t=d.querySelectorAll(`button[name="${e}"]`);break;default:o.filter="Muscles",t=d.querySelectorAll(`button[name="${e}"]`)}W(t);const s=`?${new URLSearchParams(o).toString()}`;A(s).then(n=>M(n)).then(n=>w(n.totalPages)).catch(n=>console.error(n))}function O(){const t=`?${new URLSearchParams(o).toString()}`;A(t).then(r=>M(r)).catch(r=>console.error(r))}async function A(e){try{return(await D.get(e)).data}catch(t){console.error(t)}}function W(e){const t=d.querySelectorAll("button"),r=Array.from(e);for(let s=0;s<t.length;s++){const n=t[s];r.includes(n)?(n.style.backgroundColor="var(--dark-gray)",n.style.color="var(--white)"):(n.style.backgroundColor="var(--white-smoke)",n.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+g)}function w(e){let t="";p.innerHTML="";for(let r=1;r<=e;r++)r===1?t+=`<li>
      <button class="page-button active" type="button" id="${r}">${r}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${r}">${r}</button>`;p.insertAdjacentHTML("afterbegin",t)}p.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;B(r)}});function B(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),g){case"filter":o.page=e,O();break;case"workout":u=e;const s={limit:S(),page:u};s[a.content]=a.title,L(s);break}else r.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),U(),k(C),B(1)});function U(){document.documentElement.clientWidth>1440?(o.page=1,o.limit=12):(o.page=1,o.limit=8)}k(C);i.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){g="workout",y.style.display="flex";const r=t.querySelector(".name-card").textContent;let s=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");s==="bodyparts"&&(s=s.slice(0,-1)),V(r,s)}});function I(){h(),H(),i.innerHTML="",p.innerHTML=""}function N(e){let t="";e=Math.floor(e);for(let r=0;r<e;r++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}y.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;u=1;const t=E.value.trim();if(console.log(t),t.length===0){T.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}I();const r={limit:S(),page:u,keyword:t};r[a.content]=a.title,E.value="",L(r)});function S(){return document.documentElement.clientWidth>768?12:8}function Q(){$.style.display="block"}function h(){$.style.display="none"}h();function V(e,t){a.title=e,a.content=t,u=1;const r={limit:S(),page:u};r[a.content]=e,Y(e),L(r)}async function L(e){try{const t=await x.get(`${R}exercises`,{params:e}),{totalPages:r,results:s}=t.data;if(s.length==0){Q();return}let n=s.reduce((F,l)=>{i.innerHTML="",p.innerHTML="";const P=N(l.rating);return F+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-rating">
                        <p class="workout-title">WORKOUT</p>
                        <p class="rating-title">${l.rating}
                          ${P}
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
            </li>`},"");i.insertAdjacentHTML("beforeend",n),g="workout",r<3?w(r):w(3)}catch(t){console.log(t)}}function Y(e){c=document.createElement("span"),c.classList.add("exercise-title-card"),c.innerHTML=e,m.classList.add("exercises-gallery-label"),m.innerHTML=" / ",f.appendChild(m),f.appendChild(c)}function H(){c&&(f.removeChild(c),f.removeChild(m),c=null,h())}const z="feedback-form",b=document.querySelector(".footer-modal-form");b.addEventListener("submit",e=>{e.preventDefault();const{email:t}=b.elements,r={email:t.value.trim()};T.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(r),localStorage.removeItem(z),b.reset()});
//# sourceMappingURL=commonHelpers2.js.map
