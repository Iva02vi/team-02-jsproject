import"./assets/mob-menu-fd6c460a.js";import{a as y,i as U}from"./assets/vendor-8cce9181.js";const w=document.querySelector(".back-to-top"),F=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(F),window.scrollTo(0,e-e/8))};w.addEventListener("click",F);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?w.classList.add("active"):w.classList.remove("active")});const k=document.querySelector(".modal-window");console.log(k);async function te(e){try{let u=function(c){c.preventDefault();const f=favorites.findIndex(v=>v.name===s.name);f!==-1?(favorites.splice(f,1),iziToast.show({message:"Упражнение удалено из избранного",messageColor:"#f7f7fc",backgroundColor:"#3939db",position:"topRight"})):(favorites.push(s[0]),n.innerText="Убрать из избранного",iziToast.show({message:"Упражнение добавлено в избранное",messageColor:"#f7f7fc",backgroundColor:"#219c2b",position:"topRight"})),updateFavorites()},d=function(){k.innerHTML="",r.classList.add("visually-hidden"),n.removeEventListener("click",u),o.removeEventListener("click",d),document.removeEventListener("keydown",T),r.removeEventListener("click",C)},T=function(c){c.key==="Escape"&&d()},C=function(c){c.target===r&&d()};const s=(await y.get(`https://energyflow.b.goit.study/api/exercises/${e}`)).data;k.innerHTML=s.map(({gifUrl:c,name:f,rating:v,target:K,bodyPart:V,equipment:Y,popularity:_,burnedCalories:X,time:J,description:Z})=>{const M=Math.round(parseFloat(v)),ee=Array.from({length:5},(h,B)=>`
          <li>
            <svg class="modal-rating-stars-svg" width="18" height="18">
              <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
          </li>
        `).map((h,B)=>B<M?h.replace("<svg",'<svg class="is-active"'):h).join("");return`
          <div class="modal-tablet-pc-ver">
            <div class="modal-video"><img src="${c}" alt="Animated GIF"></div>
            <div>
              <h1 class="modal-title">${f}</h1>
              <div class="modal-rating">
                <p class="modal-rating-numbers">${M}</p>
                <ul class="modal-rating-stars">
                  ${ee}
                </ul>
              </div>
              <div class="modal-info">
                <ul class="modal-info-list">
                  <li>
                    <h3 class="modal-info-list-title">Target</h3>
                    <p class="modal-info-list-title-value">${K}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Body Part</h3>
                    <p class="modal-info-list-title-value">${V}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Equipment</h3>
                    <p class="modal-info-list-title-value">${Y}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Popular</h3>
                    <p class="modal-info-list-title-value">${_}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Burned Calories</h3>
                    <p class="modal-info-list-title-value">${X}/${J} min</p>
                  </li>
                </ul>
              </div>
              <p class="descr">${Z}</p>
            </div>
          </div>
        `}).join("");const n=document.querySelector(".add-to-favorites-btn"),r=document.querySelector(".backdrop");n.addEventListener("click",u);const o=document.querySelector(".modal-btn-close");o.addEventListener("click",d),document.addEventListener("keydown",T),r.addEventListener("click",C)}catch{}}te(1);const S=document.querySelector(".gallery-collection");document.querySelector(".gallery-item");document.querySelector(".filtred-submit");const H=document.querySelector(".gallery-list"),se=document.querySelector(".exercise-title"),L=document.querySelector(".page-button-list"),P=document.querySelector(".input-submit-key"),ne=document.querySelector(".filtred-submit"),R="https://energyflow.b.goit.study/api/",re="muscles",oe="bodypart",ae="equipment";let i=1;const l={content:null,title:null},j=document.querySelector(".muscles");j.classList.add(".active");j.addEventListener("click",D);const le=document.querySelector(".body-parts");le.addEventListener("click",ce);const ie=document.querySelector(".equipment");ie.addEventListener("click",ue);L.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!=="button")return;m(),i=parseInt(e.target.value);const t={limit:p(),page:i};t[l.content]=l.title,q(t)});function D(){m();const e={limit:p(),page:i,filter:"Muscles"};l.content=re,$(e)}function ce(){m();const e={limit:p(),page:i,filter:"Body parts"};l.content=oe,$(e)}function ue(){m();const e={limit:p(),page:i,filter:"Equipment"};l.content=ae,$(e)}function m(){N(),me(),pe()}async function $(e){try{const t=await y.get(`${R}filters`,{params:e});console.log(t);const{totalPages:s,results:n}=t.data;if(n.length==0)return alert("NO MORE EXEERCISES"),console.log(n.data);let r=n.reduce((u,o)=>u+`<li class="gallery-item">
                        <a class="gallery-link" href="${o.imgUrl}">
                            <img class="gallery-image" data-source="${o.imgUrl}" src="${o.imgUrl}" alt="${o.name}" width="360" height="200"/>
                        </a>
                        <div class='title'>
                            <p>${o.name}</p>
                        </div>
                </li>`,"");S.insertAdjacentHTML("beforeend",r)}catch(t){console.log(t)}}S.addEventListener("click",e=>{e.preventDefault(),m();const t=e.target.alt;l.title=t,i=1;const s={limit:p(),page:i};s[l.content]=t,de(t),q(s)});function de(e){se.innerHTML=`Exercises / <span class="exercise-title-card"> ${e}</span>`}async function q(e){try{const t=await y.get(`${R}exercises`,{params:e}),{totalPages:s,results:n}=t.data;if(n.length==0){ve(),ye();return}let r=n.reduce((u,o)=>{const d=ge(o.rating);return u+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-rating">
                        <p class="workout-title">WORKOUT</p>
                        <p class="rating-title">${o.rating}
                          ${d}
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
                        <p class="workout-name">${o.name}</p>
                    </div>
                    <div class="body-description">
                        <p class="burned-callories">Burned calories:
                            <span class="amount-callories">${o.burnedCalories}/${o.time} min</span>
                        </p>
                        <p class="filtred-class">Filtre:
                            <span class="filter-type">${l.content}</span>
                        </p>
                        <p class="target">Target:
                        <span class="key-word">${o.target}</span>
                        </p>
                    </div>
                </div>
            </li>`},"");H.insertAdjacentHTML("beforeend",r),L.innerHTML=fe(s)}catch(t){console.log(t)}}function me(){S.replaceChildren()}function pe(){H.replaceChildren()}function ge(e){let t="";e=Math.floor(e);for(let s=0;s<e;s++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}function fe(e){let t="";const s=Math.min(e,5);for(let n=1;n<=s;n++)t+=`<button class="button-next-page" value="${n}">${n}</button>`;return t}const I=document.querySelector(".card-error-message");function ye(){I.style.visibility="visible"}function N(){I.style.visibility="hidden"}ne.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;i=1;const t=P.value.trim();if(console.log(t),t.length===0){U.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}m();const s={limit:p(),page:i,keyword:t};s[l.content]=l.title,P.value="",q(s)});function ve(){L.replaceChildren()}function p(){return document.documentElement.clientWidth>768?12:8}N();D();const A=document.querySelector(".exercises-gallery"),g=document.querySelector(".exercises-gallery-filter"),E=document.querySelector(".page-buttons-container"),he="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},be=0;const O="muscles",we=y.create({baseURL:he});function Q(e){A.innerHTML="";const t=e.results.map(s=>`<li class="exercises-item-background">
      <a href="${s.imgUrl}">
      <div>
        <img
          class="exercises-item"
          src="${s.imgUrl}"
          alt="${s.name}">
          <div class="text-card">
          <p class = "name-card">${s.name}</p>
          <p class = "type-card">${s.filter}</p>
          </div>
          </div>
      </a>
    </li>`);return A.insertAdjacentHTML("beforeend",t.join("")),e}function ke(e){let t="";E.innerHTML="";for(let s=1;s<=e.totalPages;s++)s===1?t+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;E.insertAdjacentHTML("afterbegin",t)}g.addEventListener("click",function(e){if(e.target.tagName==="BUTTON"){const t=e.target.getAttribute("name");x(t)}});function x(e){let t={};switch(W(),e){case"body":a.filter="Body parts",t=g.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=g.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=g.querySelectorAll(`button[name="${e}"]`)}Se(t);const n=`?${new URLSearchParams(a).toString()}`;z(n).then(r=>Q(r)).then(r=>ke(r)).catch(r=>console.error(r))}function Ee(){const t=`?${new URLSearchParams(a).toString()}`;z(t).then(s=>Q(s)).catch(s=>console.error(s))}async function z(e){try{const t=await we.get(e);return be=t.data.totalPages,t.data}catch(t){console.error(t)}}function Se(e){const t=g.querySelectorAll("button"),s=Array.from(e);for(let n=0;n<t.length;n++){const r=t[n];s.includes(r)?(r.style.backgroundColor="var(--dark-gray)",r.style.color="var(--white)"):(r.style.backgroundColor="var(--white-smoke)",r.style.color="var(--black)")}}E.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const s=t.id;console.log("Clicked button value: "+s),G(s)}});function G(e){document.querySelectorAll(".page-button").forEach(s=>{s.id===e?(s.classList.add("active"),a.page=e,Ee()):s.classList.remove("active")})}window.addEventListener("resize",()=>{W(),x(O),G(1)});function W(){document.documentElement.clientWidth>1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}x(O);const Le="feedback-form",b=document.querySelector(".footer-modal-form");b.addEventListener("submit",e=>{e.preventDefault();const{email:t}=b.elements,s={email:t.value.trim()};U.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(s),localStorage.removeItem(Le),b.reset()});
//# sourceMappingURL=commonHelpers2.js.map
