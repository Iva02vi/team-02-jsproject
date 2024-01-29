import"./assets/mob-menu-bd67eb85.js";import{a as h,i as F}from"./assets/vendor-8cce9181.js";const R=document.querySelector(".back-to-top"),ee=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(ee),window.scrollTo(0,e-e/8))};R.addEventListener("click",ee);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?R.classList.add("active"):R.classList.remove("active")});const te=document.querySelector(".modal-give-rating"),U=document.querySelector(".give-rating-form"),ge=document.querySelector(".give-rating-close"),X=U.querySelector('button[type="submit"]'),pe=document.querySelector(".give-rating-p1"),A=document.querySelector(".backdrop"),se=document.querySelector(".modal-window"),fe="https://energyflow.b.goit.study/api",M=document.querySelector(".give-rating-stars"),ve=5;let g,B;const ye=(e,t)=>{g=e.currentTarget.querySelector("input").value;const s=Array.from(t).slice(0,g),n=Array.from(t).slice(g);s.forEach(o=>o.classList.add("li-selected")),n.forEach(o=>o.classList.replace("li-selected","li-unselected"))},he=async e=>{var t,s;X.disabled=!0,e.preventDefault();try{if(!g)throw Error("Please select rating!");await h.patch(`${fe}/exercises/${B}/rating`,{rate:+g,email:e.target.email.value,review:e.target.comment.value}),U.reset(),ne(),oe(B)}catch(n){F.error({message:((s=(t=n.response)==null?void 0:t.data)==null?void 0:s.message)||n.message,position:"topRight",icon:""})}finally{X.disabled=!1}return!1},be=(e,t)=>{A.appendChild(te),A.classList.remove("visually-hidden"),se.style.display="none",M.innerHTML="",g=void 0,B=e,pe.innerHTML=t;const s=`
  <svg
    class="icon-Star-2"
    width="24"
    height="24"
    aria-label="modal rating star icon"
  >
    <use href="./img/sprite.svg#icon-Star-2"></use>
  </svg>`,n=[];for(let l=0;l<ve;l++){const r=document.createElement("li");r.classList.add("li-star");const i=document.createElement("label");i.innerHTML=s,i.style.pointerEvents="none";const u=document.createElement("input");u.setAttribute("type","checkbox"),u.style.display="none",u.setAttribute("value",`${l+1}`),r.append(i,u),n.push(r)}M.append(...n);const o=M.querySelectorAll("li");o.forEach(l=>{l.addEventListener("click",r=>ye(r,o))}),U.addEventListener("submit",he)};ge.addEventListener("click",()=>ne());const ne=()=>{te.classList.add("hidden"),A.classList.remove("visually-hidden"),se.style.display="block"},S=document.querySelector(".modal-window");console.log(S);const we=document.querySelector(".modal-btn-rating"),ke=document.querySelector(".modal-give-rating"),Le="https://energyflow.b.goit.study/api";async function oe(e){try{let u=function(c){c.preventDefault();const v=favorites.findIndex(L=>L.name===r.name);v!==-1?(favorites.splice(v,1),iziToast.show({message:"Упражнение удалено из избранного",messageColor:"#f7f7fc",backgroundColor:"#3939db",position:"topRight"})):(favorites.push(r[0]),i.innerText="Убрать из избранного",iziToast.show({message:"Упражнение добавлено в избранное",messageColor:"#f7f7fc",backgroundColor:"#219c2b",position:"topRight"})),updateFavorites()},k=function(){S.innerHTML="",t.classList.add("visually-hidden"),i.removeEventListener("click",u),j.removeEventListener("click",k),document.removeEventListener("keydown",O),t.removeEventListener("click",_)},O=function(c){c.key==="Escape"&&k()},_=function(c){c.target===t&&k()};const t=document.querySelector(".backdrop"),s=(await h.get(`${Le}/exercises`)).data.results,{_id:n,rating:o}=s[s.length*Math.random()|0];we.addEventListener("click",async()=>{t.classList.add("visually-hidden"),S.classList.add("hidden"),be(n,o),ke.classList.remove("hidden")});const l=await h.get(`https://energyflow.b.goit.study/api/exercises/${_id}`);console.log("test",r);const r=l.data;console.log(r),S.innerHTML=r.map(({gifUrl:c,name:v,rating:L,target:G,bodyPart:W,equipment:z,popularity:N,burnedCalories:K,time:Q,description:V})=>{const Y=Math.round(parseFloat(L));console.log(c,v,L,G,W,z,N,K,Q,V);const me=Array.from({length:5},(q,J)=>`
          <li>
            <svg class="modal-rating-stars-svg" width="18" height="18">
              <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
          </li>
        `).map((q,J)=>J<Y?q.replace("<svg",'<svg class="is-active"'):q).join("");return`
          <div class="modal-tablet-pc-ver">
            <div class="modal-video"><img src="${c}" alt="Animated GIF"></div>
            <div>
              <h1 class="modal-title">${v}</h1>
              <div class="modal-rating">
                <p class="modal-rating-numbers">${Y}</p>
                <ul class="modal-rating-stars">
                  ${me}
                </ul>
              </div>
              <div class="modal-info">
                <ul class="modal-info-list">
                  <li>
                    <h3 class="modal-info-list-title">Target</h3>
                    <p class="modal-info-list-title-value">${G}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Body Part</h3>
                    <p class="modal-info-list-title-value">${W}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Equipment</h3>
                    <p class="modal-info-list-title-value">${z}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Popular</h3>
                    <p class="modal-info-list-title-value">${N}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Burned Calories</h3>
                    <p class="modal-info-list-title-value">${K}/${Q} min</p>
                  </li>
                </ul>
              </div>
              <p class="descr">${V}</p>
            </div>
          </div>
        `}).join("");const i=document.querySelector(".add-to-favorites-btn");i.addEventListener("click",u);const j=document.querySelector(".modal-btn-close");j.addEventListener("click",k),document.addEventListener("keydown",O),t.addEventListener("click",_)}catch{}}oe();const x=document.querySelector(".exercises-gallery-label"),p=document.querySelector(".exercises-gallery-group"),y=document.querySelector(".exercises-gallery-filter"),b=document.querySelector(".page-buttons-container");let m=null;const E=document.createElement("span"),Z=document.querySelector("#filtre-key"),$=document.querySelector(".search-tool"),re=document.querySelector(".error-card-message"),Se="https://energyflow.b.goit.study/api/";let f=1;const d={content:null,title:null},Ee="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},w="filter";const ae="muscles",xe=h.create({baseURL:Ee});function le(e){p.innerHTML="";const t=e.results.map(s=>`<li class="exercises-item-background">
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
    </li>`);return p.insertAdjacentHTML("beforeend",t.join("")),e}y.addEventListener("click",function(e){if(ue(),T(),$.style.display="none",e.target.tagName==="BUTTON"){w="filter";const t=e.target.getAttribute("name");I(t)}});function I(e){$.style.display="none";let t={};switch(de(),e){case"body":a.filter="Body parts",t=y.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=y.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=y.querySelectorAll(`button[name="${e}"]`)}Te(t);const n=`?${new URLSearchParams(a).toString()}`;ie(n).then(o=>le(o)).then(o=>H(o.totalPages)).catch(o=>console.error(o))}function $e(){const t=`?${new URLSearchParams(a).toString()}`;ie(t).then(s=>le(s)).catch(s=>console.error(s))}async function ie(e){try{return(await xe.get(e)).data}catch(t){console.error(t)}}function Te(e){const t=y.querySelectorAll("button"),s=Array.from(e);for(let n=0;n<t.length;n++){const o=t[n];s.includes(o)?(o.style.backgroundColor="var(--dark-gray)",o.style.color="var(--white)"):(o.style.backgroundColor="var(--white-smoke)",o.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+w)}function H(e){let t="";b.innerHTML="";for(let s=1;s<=e;s++)s===1?t+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;b.insertAdjacentHTML("afterbegin",t)}b.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const s=t.id;ce(s)}});function ce(e){document.querySelectorAll(".page-button").forEach(s=>{if(s.id===e)switch(s.classList.add("active"),w){case"filter":a.page=e,$e();break;case"workout":f=e;const n={limit:D(),page:f};n[d.content]=d.title,P(n);break}else s.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),de(),I(ae),ce(1)});function de(){document.documentElement.clientWidth>1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}I(ae);p.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){w="workout",$.style.display="flex";const s=t.querySelector(".name-card").textContent;let n=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");n==="bodyparts"&&(n=n.slice(0,-1)),Re(s,n)}});function qe(){T(),ue(),p.innerHTML="",b.innerHTML=""}function Me(e){let t="";e=Math.floor(e);for(let s=0;s<e;s++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}$.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;f=1;const t=Z.value.trim();if(console.log(t),t.length===0){F.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}qe();const s={limit:D(),page:f,keyword:t};s[d.content]=d.title,Z.value="",P(s)});function D(){return document.documentElement.clientWidth>768?12:8}function Ce(){re.style.display="block"}function T(){re.style.display="none"}T();function Re(e,t){d.title=e,d.content=t,f=1;const s={limit:D(),page:f};s[d.content]=e,Ae(e),P(s)}async function P(e){try{const t=await h.get(`${Se}exercises`,{params:e}),{totalPages:s,results:n}=t.data;if(n.length==0){Ce();return}let o=n.reduce((l,r)=>{p.innerHTML="",b.innerHTML="";const i=Me(r.rating);return l+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-rating">
                        <p class="workout-title">WORKOUT</p>
                        <p class="rating-title">${r.rating}
                          ${i}
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
                        <p class="workout-name">${r.name}</p>
                    </div>
                    <div class="body-description">
                        <p class="burned-callories">Burned calories:
                            <span class="amount-callories">${r.burnedCalories}/${r.time} min</span>
                        </p>
                        <p class="filtred-class">Filtre:
                            <span class="filter-type">${d.content}</span>
                        </p>
                        <p class="target">Target:
                        <span class="key-word">${r.target}</span>
                        </p>
                    </div>
                </div>
            </li>`},"");p.insertAdjacentHTML("beforeend",o),w="workout",s<3?H(s):H(3)}catch(t){console.log(t)}}function Ae(e){m=document.createElement("span"),m.classList.add("exercise-title-card"),m.innerHTML=e,E.classList.add("exercises-gallery-label"),E.innerHTML=" / ",x.appendChild(E),x.appendChild(m)}function ue(){m&&(x.removeChild(m),x.removeChild(E),m=null,T())}const Be="feedback-form",C=document.querySelector(".footer-modal-form");C.addEventListener("submit",e=>{e.preventDefault();const{email:t}=C.elements,s={email:t.value.trim()};F.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(s),localStorage.removeItem(Be),C.reset()});
//# sourceMappingURL=commonHelpers2.js.map
