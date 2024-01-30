import"./assets/modal-window-exercise-b137e8a1.js";/* empty css                      */import{i as k,a as T}from"./assets/vendor-8cce9181.js";const v=document.querySelector(".back-to-top"),q=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(q),window.scrollTo(0,e-e/8))};v.addEventListener("click",q);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?v.classList.add("active"):v.classList.remove("active")});var R=document.getElementById("myAudio");R.addEventListener("ended",function(){k.show({title:"Lets do it!",message:"Subscribe in the bottom, and learn about new exercises!",position:"bottomCenter",timeout:1e4,backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"})});const f=document.querySelector(".exercises-gallery-label"),i=document.querySelector(".exercises-gallery-group"),d=document.querySelector(".exercises-gallery-filter"),p=document.querySelector(".page-buttons-container");let c=null;const g=document.createElement("span"),x=document.querySelector("#filtre-key"),y=document.querySelector(".search-tool"),C=document.querySelector(".error-card-message"),j="https://energyflow.b.goit.study/api/";let u=1;const a={content:null,title:null},D="https://energyflow.b.goit.study/api/filters";let s={filter:"Muscles",page:1,limit:8},m="filter";const $="muscles",O=T.create({baseURL:D});function M(e){i.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return i.insertAdjacentHTML("beforeend",t.join("")),e}d.addEventListener("click",function(e){if(H(),b(),y.style.display="none",e.target.tagName==="BUTTON"){m="filter";const t=e.target.getAttribute("name");S(t)}});function S(e){y.style.display="none";let t={};switch(U(),e){case"body":s.filter="Body parts",t=d.querySelectorAll(`button[name="${e}"]`);break;case"equipment":s.filter="Equipment",t=d.querySelectorAll(`button[name="${e}"]`);break;default:s.filter="Muscles",t=d.querySelectorAll(`button[name="${e}"]`)}W(t);const n=`?${new URLSearchParams(s).toString()}`;A(n).then(o=>M(o)).then(o=>w(o.totalPages)).catch(o=>console.error(o))}function I(){const t=`?${new URLSearchParams(s).toString()}`;A(t).then(r=>M(r)).catch(r=>console.error(r))}async function A(e){try{return(await O.get(e)).data}catch(t){console.error(t)}}function W(e){const t=d.querySelectorAll("button"),r=Array.from(e);for(let n=0;n<t.length;n++){const o=t[n];r.includes(o)?(o.style.backgroundColor="var(--dark-gray)",o.style.color="var(--white)"):(o.style.backgroundColor="var(--white-smoke)",o.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+m)}function w(e){let t="";p.innerHTML="";for(let r=1;r<=e;r++)r===1?t+=`<li>
      <button class="page-button active" type="button" id="${r}">${r}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${r}">${r}</button>`;p.insertAdjacentHTML("afterbegin",t)}p.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;B(r)}});function B(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),m){case"filter":s.page=e,I();break;case"workout":u=e;const n={limit:L(),page:u};n[a.content]=a.title,E(n);break}else r.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),U(),S($),B(1)});function U(){document.documentElement.clientWidth>1440?(s.page=1,s.limit=12):(s.page=1,s.limit=8)}S($);i.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){m="workout",y.style.display="flex";const r=t.querySelector(".name-card").textContent;let n=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");n==="bodyparts"&&(n=n.slice(0,-1)),Y(r,n)}});function N(){b(),H(),i.innerHTML="",p.innerHTML=""}function Q(e){let t="";e=Math.floor(e);for(let r=0;r<e;r++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}y.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;u=1;const t=x.value.trim();if(console.log(t),t.length===0){k.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}N();const r={limit:L(),page:u,keyword:t};r[a.content]=a.title,x.value="",E(r)});function L(){return document.documentElement.clientWidth>768?12:8}function V(){C.style.display="block"}function b(){C.style.display="none"}b();function Y(e,t){a.title=e,a.content=t,u=1;const r={limit:L(),page:u};r[a.content]=e,z(e),E(r)}async function E(e){try{const t=await T.get(`${j}exercises`,{params:e}),{totalPages:r,results:n}=t.data;if(n.length==0){V();return}let o=n.reduce((F,l)=>{i.innerHTML="",p.innerHTML="";const P=Q(l.rating);return F+`<li class="gallery-list-item">
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
            </li>`},"");i.insertAdjacentHTML("beforeend",o),m="workout",r<3?w(r):w(3)}catch(t){console.log(t)}}function z(e){c=document.createElement("span"),c.classList.add("exercise-title-card"),c.innerHTML=e,g.classList.add("exercises-gallery-label"),g.innerHTML=" / ",f.appendChild(g),f.appendChild(c)}function H(){c&&(f.removeChild(c),f.removeChild(g),c=null,b())}const G="feedback-form",h=document.querySelector(".footer-modal-form");h.addEventListener("submit",e=>{e.preventDefault();const{email:t}=h.elements,r={email:t.value.trim()};k.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(r),localStorage.removeItem(G),h.reset()});
//# sourceMappingURL=commonHelpers2.js.map
