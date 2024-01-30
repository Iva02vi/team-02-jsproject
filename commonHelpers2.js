import"./assets/mob-menu-21ce6386.js";/* empty css                      */import{a as x,i as R}from"./assets/vendor-8cce9181.js";const E=document.querySelector(".back-to-top"),N=()=>{const t=Math.max(document.documentElement.scrollTop,document.body.scrollTop);t>0&&(window.requestAnimationFrame(N),window.scrollTo(0,t-t/8))};E.addEventListener("click",N);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?E.classList.add("active"):E.classList.remove("active")});const z=document.querySelector(".modal-window");async function G(t){try{let a=function(i){i.stopPropagation(),i.preventDefault();let d=JSON.parse(localStorage.getItem("favorites"));d==null&&(d=[]);const $=d.findIndex(W=>W.name===e.name);$!==-1?(d.splice($,1),s.innerText="Add to favorites",iziToast.show({message:"Упражнение удалено из избранного",messageColor:"#f7f7fc",backgroundColor:"#3939db",position:"topRight"})):(d.push(e),s.innerText="Remove from favorites",iziToast.show({message:"Упражнение добавлено в избранное",messageColor:"#f7f7fc",backgroundColor:"#219c2b",position:"topRight"})),localStorage.setItem("favorites",JSON.stringify(d))},h=function(){z.innerHTML="",g.classList.remove("is-open"),s.removeEventListener("click",a),v.removeEventListener("click",h),document.removeEventListener("keydown",B),g.removeEventListener("click",H)},B=function(i){i.key==="Escape"&&h()},H=function(){h()};const e=(await x.get(`https://energyflow.b.goit.study/api/exercises/${t}`)).data;console.log(e);const r=document.getElementsByClassName("modal-rating-stars")[0];r.innerHTML=e.rating;for(let i=1;i<=5;i++)i<e.rating?r.innerHTML+=`<li>
      
      <svg class="modal-rating-stars-svg" width="18" height="18">
        <use href="../img/sprite.svg#icon-Star-1"></use>
      </svg>
    </li>`:r.innerHTML+=`<li>
        
        <svg class="modal-rating-stars-svg" width="18" height="18">
          <use href="../img/sprite.svg#icon-Star-1"></use>
        </svg>
      </li>`;document.getElementsByClassName("imgGif")[0].src=e.gifUrl,document.getElementsByClassName("modal-title")[0].innerHTML=e.name,document.getElementsByClassName("modal-info-list-title-value")[0].innerHTML=e.target,document.getElementsByClassName("modal-info-list-title-value")[1].innerHTML=e.bodyPart,document.getElementsByClassName("modal-info-list-title-value")[2].innerHTML=e.equipment,document.getElementsByClassName("modal-info-list-title-value")[3].innerHTML=e.popularity,document.getElementsByClassName("modal-info-list-title-value")[4].innerHTML=e.burnedCalories,document.getElementsByClassName("descr")[0].innerHTML=e.description;const s=document.querySelector(".modal-btn-favorites"),g=document.querySelector(".backdrop");s.addEventListener("click",a);const v=document.querySelector(".modal-btn-close");v.addEventListener("click",h),document.addEventListener("keydown",B),g.addEventListener("click",H)}catch{}}G("64f389465ae26083f39b17a4");const w=document.querySelector(".exercises-gallery-label"),u=document.querySelector(".exercises-gallery-group"),p=document.querySelector(".exercises-gallery-filter"),f=document.querySelector(".page-buttons-container");let c=null;const b=document.createElement("span"),A=document.querySelector("#filtre-key"),k=document.querySelector(".search-tool"),U=document.querySelector(".error-card-message"),K="https://energyflow.b.goit.study/api/";let m=1;const l={content:null,title:null},Q="https://energyflow.b.goit.study/api/filters";let o={filter:"Muscles",page:1,limit:8},y="filter";const F="muscles",V=x.create({baseURL:Q});function P(t){u.innerHTML="";const n=t.results.map(e=>`<li class="exercises-item-background">
      <a href="${e.imgUrl}">
      <div>
        <img
          class="exercises-item"
          src="${e.imgUrl}"
          alt="${e.name}">
          <div class="text-card">
          <p class = "name-card">${e.name}</p>
          <p class = "type-card">${e.filter}</p>
          </div>
          </div>
      </a>
    </li>`);return u.insertAdjacentHTML("beforeend",n.join("")),t}p.addEventListener("click",function(t){if(I(),L(),k.style.display="none",t.target.tagName==="BUTTON"){y="filter";const n=t.target.getAttribute("name");q(n)}});function q(t){k.style.display="none";let n={};switch(O(),t){case"body":o.filter="Body parts",n=p.querySelectorAll(`button[name="${t}"]`);break;case"equipment":o.filter="Equipment",n=p.querySelectorAll(`button[name="${t}"]`);break;default:o.filter="Muscles",n=p.querySelectorAll(`button[name="${t}"]`)}J(n);const r=`?${new URLSearchParams(o).toString()}`;D(r).then(s=>P(s)).then(s=>T(s.totalPages)).catch(s=>console.error(s))}function Y(){const n=`?${new URLSearchParams(o).toString()}`;D(n).then(e=>P(e)).catch(e=>console.error(e))}async function D(t){try{return(await V.get(t)).data}catch(n){console.error(n)}}function J(t){const n=p.querySelectorAll("button"),e=Array.from(t);for(let r=0;r<n.length;r++){const s=n[r];e.includes(s)?(s.style.backgroundColor="var(--dark-gray)",s.style.color="var(--white)"):(s.style.backgroundColor="var(--white-smoke)",s.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+y)}function T(t){let n="";f.innerHTML="";for(let e=1;e<=t;e++)e===1?n+=`<li>
      <button class="page-button active" type="button" id="${e}">${e}</button>
    </li>`:n+=`<li>
      <button class="page-button" type="button" id="${e}">${e}</button>`;f.insertAdjacentHTML("afterbegin",n)}f.addEventListener("click",function(t){const n=t.target.closest(".page-button");if(n){const e=n.id;j(e)}});function j(t){document.querySelectorAll(".page-button").forEach(e=>{if(e.id===t)switch(e.classList.add("active"),y){case"filter":o.page=t,Y();break;case"workout":m=t;const r={limit:C(),page:m};r[l.content]=l.title,M(r);break}else e.classList.remove("active")})}window.addEventListener("resize",t=>{t.preventDefault(),O(),q(F),j(1)});function O(){document.documentElement.clientWidth>1440?(o.page=1,o.limit=12):(o.page=1,o.limit=8)}q(F);u.addEventListener("click",t=>{t.preventDefault();const n=t.target.closest(".exercises-item-background");if(n){y="workout",k.style.display="flex";const e=n.querySelector(".name-card").textContent;let r=n.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");r==="bodyparts"&&(r=r.slice(0,-1)),ee(e,r)}});function _(){L(),I(),u.innerHTML="",f.innerHTML=""}function X(t){let n="";t=Math.floor(t);for(let e=0;e<t;e++)n+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return n}k.addEventListener("click",t=>{if(t.preventDefault(),t.target.localName!="svg")return;m=1;const n=A.value.trim();if(console.log(n),n.length===0){R.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}_();const e={limit:C(),page:m,keyword:n};e[l.content]=l.title,A.value="",M(e)});function C(){return document.documentElement.clientWidth>768?12:8}function Z(){U.style.display="block"}function L(){U.style.display="none"}L();function ee(t,n){l.title=t,l.content=n,m=1;const e={limit:C(),page:m};e[l.content]=t,te(t),M(e)}async function M(t){try{const n=await x.get(`${K}exercises`,{params:t}),{totalPages:e,results:r}=n.data;if(r.length==0){Z();return}let s=r.reduce((g,a)=>{u.innerHTML="",f.innerHTML="";const v=X(a.rating);return g+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-rating">
                        <p class="workout-title">WORKOUT</p>
                        <p class="rating-title">${a.rating}
                          ${v}
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
                        <p class="workout-name">${a.name}</p>
                    </div>
                    <div class="body-description">
                        <p class="burned-callories">Burned calories:
                            <span class="amount-callories">${a.burnedCalories}/${a.time} min</span>
                        </p>
                        <p class="filtred-class">Filtre:
                            <span class="filter-type">${l.content}</span>
                        </p>
                        <p class="target">Target:
                        <span class="key-word">${a.target}</span>
                        </p>
                    </div>
                </div>
            </li>`},"");u.insertAdjacentHTML("beforeend",s),y="workout",e<3?T(e):T(3)}catch(n){console.log(n)}}function te(t){c=document.createElement("span"),c.classList.add("exercise-title-card"),c.innerHTML=t,b.classList.add("exercises-gallery-label"),b.innerHTML=" / ",w.appendChild(b),w.appendChild(c)}function I(){c&&(w.removeChild(c),w.removeChild(b),c=null,L())}const ne=document.querySelector(".modal-give-rating"),re=document.querySelector(".give-rating-form"),se=document.querySelector(".give-rating-close");re.querySelector('button[type="submit"]');document.querySelector(".give-rating-p1");const oe=document.querySelector(".backdrop"),ae=document.querySelector(".modal-window");document.querySelector(".give-rating-stars");new URL("/team-02-jsproject/assets/sprite-224c3807.svg#icon-Star-2",self.location);se.addEventListener("click",()=>ie());const ie=()=>{ne.classList.add("hidden"),oe.classList.remove("visually-hidden"),ae.style.display="block"},le="feedback-form",S=document.querySelector(".footer-modal-form");S.addEventListener("submit",t=>{t.preventDefault();const{email:n}=S.elements,e={email:n.value.trim()};R.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(e),localStorage.removeItem(le),S.reset()});
//# sourceMappingURL=commonHelpers2.js.map
