import"./assets/mob-menu-fd6c460a.js";import{a as p,i as Y}from"./assets/vendor-8cce9181.js";const x=document.querySelector(".back-to-top"),X=()=>{const t=Math.max(document.documentElement.scrollTop,document.body.scrollTop);t>0&&(window.requestAnimationFrame(X),window.scrollTo(0,t-t/8))};x.addEventListener("click",X);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?x.classList.add("active"):x.classList.remove("active")});const J=document.querySelector(".modal-give-rating"),T=document.querySelector(".give-rating-form"),ue=document.querySelector(".give-rating-close"),z=T.querySelector('button[type="submit"]'),me=document.querySelector(".give-rating-p1"),ge=document.querySelector(".backdrop"),pe=document.querySelector(".modal-window"),W="https://energyflow.b.goit.study/api",E=document.querySelector(".give-rating-stars"),fe=5;let h,$;const ye=(t,e)=>{E.innerHTML="",$=t,me.innerHTML=e;const s=`
  <svg
    class="icon-Star-2"
    width="24"
    height="24"
    aria-label="modal rating star icon"
  >
    <use href="/img/sprite.svg#icon-Star-2"></use>
  </svg>`,r=[];for(let a=0;a<fe;a++){const n=document.createElement("li");n.classList.add("li-star");const l=document.createElement("label");l.innerHTML=s,l.style.pointerEvents="none";const d=document.createElement("input");d.setAttribute("type","checkbox"),d.style.display="none",d.setAttribute("value",`${a+1}`),n.append(l,d),r.push(n)}E.append(...r);const o=E.querySelectorAll("li");o.forEach(a=>{a.addEventListener("click",n=>{h=n.currentTarget.querySelector("input").value;const l=Array.from(o).slice(0,h),d=Array.from(o).slice(h);l.forEach(g=>g.classList.add("li-selected")),d.forEach(g=>g.classList.replace("li-selected","li-unselected"))})}),T.addEventListener("submit",async a=>{z.disabled=!0,a.preventDefault();try{if(!h)throw Error("Please select rating!");console.log(`${W}/exercises/${$}/rating`),await p.patch(`${W}/exercises/${$}/rating`,{rate:+h,email:a.target.email.value,review:a.target.comment.value}),T.reset(),J.classList.add("hidden")}catch(n){console.error(n.message)}finally{z.disabled=!1}return!1})};ue.addEventListener("click",()=>{J.classList.add("hidden"),ge.classList.remove("visually-hidden"),pe.style.display="block"});const L=document.querySelector(".modal-window");console.log(L);const ve=document.querySelector(".modal-btn-rating"),he=document.querySelector(".modal-give-rating"),be="https://energyflow.b.goit.study/api";async function Se(t){try{let d=function(m){m.preventDefault();const v=favorites.findIndex(w=>w.name===n.name);v!==-1?(favorites.splice(v,1),iziToast.show({message:"Упражнение удалено из избранного",messageColor:"#f7f7fc",backgroundColor:"#3939db",position:"topRight"})):(favorites.push(n[0]),l.innerText="Убрать из избранного",iziToast.show({message:"Упражнение добавлено в избранное",messageColor:"#f7f7fc",backgroundColor:"#219c2b",position:"topRight"})),updateFavorites()},S=function(){L.innerHTML="",e.classList.add("visually-hidden"),l.removeEventListener("click",d),g.removeEventListener("click",S),document.removeEventListener("keydown",U),e.removeEventListener("click",H)},U=function(m){m.key==="Escape"&&S()},H=function(m){m.target===e&&S()};const e=document.querySelector(".backdrop"),s=(await p.get(`${be}/exercises`)).data.results,{_id:r,rating:o}=s[s.length*Math.random()|0];ve.addEventListener("click",async()=>{e.classList.add("visually-hidden"),L.classList.add("hidden"),ye(r,o),he.classList.remove("hidden")});const a=await p.get(`https://energyflow.b.goit.study/api/exercises/${_id}`);console.log("test",n);const n=a.data;console.log(n),L.innerHTML=n.map(({gifUrl:m,name:v,rating:w,target:F,bodyPart:I,equipment:D,popularity:j,burnedCalories:N,time:O,description:G})=>{const _=Math.round(parseFloat(w));console.log(m,v,w,F,I,D,j,N,O,G);const de=Array.from({length:5},(k,Q)=>`
          <li>
            <svg class="modal-rating-stars-svg" width="18" height="18">
              <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
          </li>
        `).map((k,Q)=>Q<_?k.replace("<svg",'<svg class="is-active"'):k).join("");return`
          <div class="modal-tablet-pc-ver">
            <div class="modal-video"><img src="${m}" alt="Animated GIF"></div>
            <div>
              <h1 class="modal-title">${v}</h1>
              <div class="modal-rating">
                <p class="modal-rating-numbers">${_}</p>
                <ul class="modal-rating-stars">
                  ${de}
                </ul>
              </div>
              <div class="modal-info">
                <ul class="modal-info-list">
                  <li>
                    <h3 class="modal-info-list-title">Target</h3>
                    <p class="modal-info-list-title-value">${F}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Body Part</h3>
                    <p class="modal-info-list-title-value">${I}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Equipment</h3>
                    <p class="modal-info-list-title-value">${D}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Popular</h3>
                    <p class="modal-info-list-title-value">${j}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Burned Calories</h3>
                    <p class="modal-info-list-title-value">${N}/${O} min</p>
                  </li>
                </ul>
              </div>
              <p class="descr">${G}</p>
            </div>
          </div>
        `}).join("");const l=document.querySelector(".add-to-favorites-btn");l.addEventListener("click",d);const g=document.querySelector(".modal-btn-close");g.addEventListener("click",S),document.addEventListener("keydown",U),e.addEventListener("click",H)}catch{}}Se();const C=document.querySelector(".gallery-collection");document.querySelector(".gallery-item");document.querySelector(".filtred-submit");const Z=document.querySelector(".gallery-list"),we=document.querySelector(".exercise-title"),B=document.querySelector(".page-button-list"),K=document.querySelector(".input-submit-key"),Le=document.querySelector(".filtred-submit"),ee="https://energyflow.b.goit.study/api/",ke="muscles",Ee="bodypart",$e="equipment";let u=1;const c={content:null,title:null},te=document.querySelector(".muscles");te.classList.add(".active");te.addEventListener("click",se);const qe=document.querySelector(".body-parts");qe.addEventListener("click",Te);const xe=document.querySelector(".equipment");xe.addEventListener("click",Me);B.addEventListener("click",t=>{if(t.preventDefault(),t.target.localName!=="button")return;f(),u=parseInt(t.target.value);const e={limit:y(),page:u};e[c.content]=c.title,A(e)});function se(){f();const t={limit:y(),page:u,filter:"Muscles"};c.content=ke,R(t)}function Te(){f();const t={limit:y(),page:u,filter:"Body parts"};c.content=Ee,R(t)}function Me(){f();const t={limit:y(),page:u,filter:"Equipment"};c.content=$e,R(t)}function f(){re(),Be(),Re()}async function R(t){try{const e=await p.get(`${ee}filters`,{params:t});console.log(e);const{totalPages:s,results:r}=e.data;if(r.length==0)return alert("NO MORE EXEERCISES"),console.log(r.data);let o=r.reduce((a,n)=>a+`<li class="gallery-item">
                        <a class="gallery-link" href="${n.imgUrl}">
                            <img class="gallery-image" data-source="${n.imgUrl}" src="${n.imgUrl}" alt="${n.name}" width="360" height="200"/>
                        </a>
                        <div class='title'>
                            <p>${n.name}</p>
                        </div>
                </li>`,"");C.insertAdjacentHTML("beforeend",o)}catch(e){console.log(e)}}C.addEventListener("click",t=>{t.preventDefault(),f();const e=t.target.alt;c.title=e,u=1;const s={limit:y(),page:u};s[c.content]=e,Ce(e),A(s)});function Ce(t){we.innerHTML=`Exercises / <span class="exercise-title-card"> ${t}</span>`}async function A(t){try{const e=await p.get(`${ee}exercises`,{params:t}),{totalPages:s,results:r}=e.data;if(r.length==0){He(),Ue();return}let o=r.reduce((a,n)=>{const l=Ae(n.rating);return a+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-rating">
                        <p class="workout-title">WORKOUT</p>
                        <p class="rating-title">${n.rating}
                          ${l}
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
                        <p class="workout-name">${n.name}</p>
                    </div>
                    <div class="body-description">
                        <p class="burned-callories">Burned calories:
                            <span class="amount-callories">${n.burnedCalories}/${n.time} min</span>
                        </p>
                        <p class="filtred-class">Filtre:
                            <span class="filter-type">${c.content}</span>
                        </p>
                        <p class="target">Target:
                        <span class="key-word">${n.target}</span>
                        </p>
                    </div>
                </div>
            </li>`},"");Z.insertAdjacentHTML("beforeend",o),B.innerHTML=Pe(s)}catch(e){console.log(e)}}function Be(){C.replaceChildren()}function Re(){Z.replaceChildren()}function Ae(t){let e="";t=Math.floor(t);for(let s=0;s<t;s++)e+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return e}function Pe(t){let e="";const s=Math.min(t,5);for(let r=1;r<=s;r++)e+=`<button class="button-next-page" value="${r}">${r}</button>`;return e}const ne=document.querySelector(".card-error-message");function Ue(){ne.style.visibility="visible"}function re(){ne.style.visibility="hidden"}Le.addEventListener("click",t=>{if(t.preventDefault(),t.target.localName!="svg")return;u=1;const e=K.value.trim();if(console.log(e),e.length===0){Y.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}f();const s={limit:y(),page:u,keyword:e};s[c.content]=c.title,K.value="",A(s)});function He(){B.replaceChildren()}function y(){return document.documentElement.clientWidth>768?12:8}re();se();const V=document.querySelector(".exercises-gallery"),b=document.querySelector(".exercises-gallery-filter"),M=document.querySelector(".page-buttons-container"),Fe="https://energyflow.b.goit.study/api/filters";let i={filter:"Muscles",page:1,limit:8},Ie=0;const oe="muscles",De=p.create({baseURL:Fe});function ae(t){V.innerHTML="";const e=t.results.map(s=>`<li class="exercises-item-background">
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
    </li>`);return V.insertAdjacentHTML("beforeend",e.join("")),t}function je(t){let e="";M.innerHTML="";for(let s=1;s<=t.totalPages;s++)s===1?e+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:e+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;M.insertAdjacentHTML("afterbegin",e)}b.addEventListener("click",function(t){if(t.target.tagName==="BUTTON"){const e=t.target.getAttribute("name");P(e)}});function P(t){let e={};switch(ce(),t){case"body":i.filter="Body parts",e=b.querySelectorAll(`button[name="${t}"]`);break;case"equipment":i.filter="Equipment",e=b.querySelectorAll(`button[name="${t}"]`);break;default:i.filter="Muscles",e=b.querySelectorAll(`button[name="${t}"]`)}Oe(e);const r=`?${new URLSearchParams(i).toString()}`;le(r).then(o=>ae(o)).then(o=>je(o)).catch(o=>console.error(o))}function Ne(){const e=`?${new URLSearchParams(i).toString()}`;le(e).then(s=>ae(s)).catch(s=>console.error(s))}async function le(t){try{const e=await De.get(t);return Ie=e.data.totalPages,e.data}catch(e){console.error(e)}}function Oe(t){const e=b.querySelectorAll("button"),s=Array.from(t);for(let r=0;r<e.length;r++){const o=e[r];s.includes(o)?(o.style.backgroundColor="var(--dark-gray)",o.style.color="var(--white)"):(o.style.backgroundColor="var(--white-smoke)",o.style.color="var(--black)")}}M.addEventListener("click",function(t){const e=t.target.closest(".page-button");if(e){const s=e.id;console.log("Clicked button value: "+s),ie(s)}});function ie(t){document.querySelectorAll(".page-button").forEach(s=>{s.id===t?(s.classList.add("active"),i.page=t,Ne()):s.classList.remove("active")})}window.addEventListener("resize",()=>{ce(),P(oe),ie(1)});function ce(){document.documentElement.clientWidth>1440?(i.page=1,i.limit=12):(i.page=1,i.limit=8)}P(oe);const Ge="feedback-form",q=document.querySelector(".footer-modal-form");q.addEventListener("submit",t=>{t.preventDefault();const{email:e}=q.elements,s={email:e.value.trim()};Y.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(s),localStorage.removeItem(Ge),q.reset()});
//# sourceMappingURL=commonHelpers2.js.map
