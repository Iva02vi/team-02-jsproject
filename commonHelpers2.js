import"./assets/mob-menu-fd6c460a.js";import{a as h,i as H}from"./assets/vendor-8cce9181.js";const R=document.querySelector(".back-to-top"),Z=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(Z),window.scrollTo(0,e-e/8))};R.addEventListener("click",Z);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?R.classList.add("active"):R.classList.remove("active")});const de=document.querySelector(".modal-give-rating"),F=document.querySelector(".give-rating-form"),ue=document.querySelector(".give-rating-close"),J=F.querySelector('button[type="submit"]'),me=document.querySelector(".give-rating-p1"),ge=document.querySelector(".backdrop"),pe=document.querySelector(".modal-window"),fe="https://energyflow.b.goit.study/api",M=document.querySelector(".give-rating-stars"),ve=5;let g,A;const ye=(e,t)=>{g=e.currentTarget.querySelector("input").value;const s=Array.from(t).slice(0,g),n=Array.from(t).slice(g);s.forEach(r=>r.classList.add("li-selected")),n.forEach(r=>r.classList.replace("li-selected","li-unselected"))},he=async e=>{var t,s;J.disabled=!0,e.preventDefault();try{if(!g)throw Error("Please select rating!");await h.patch(`${fe}/exercises/${A}/rating`,{rate:+g,email:e.target.email.value,review:e.target.comment.value}),F.reset(),ee(),te(A)}catch(n){H.error({message:((s=(t=n.response)==null?void 0:t.data)==null?void 0:s.message)||n.message,position:"topRight",icon:""})}finally{J.disabled=!1}return!1},be=(e,t)=>{M.innerHTML="",g=void 0,A=e,me.innerHTML=t;const s=`
  <svg
    class="icon-Star-2"
    width="24"
    height="24"
    aria-label="modal rating star icon"
  >
    <use href="./img/sprite.svg#icon-Star-2"></use>
  </svg>`,n=[];for(let l=0;l<ve;l++){const o=document.createElement("li");o.classList.add("li-star");const i=document.createElement("label");i.innerHTML=s,i.style.pointerEvents="none";const u=document.createElement("input");u.setAttribute("type","checkbox"),u.style.display="none",u.setAttribute("value",`${l+1}`),o.append(i,u),n.push(o)}M.append(...n);const r=M.querySelectorAll("li");r.forEach(l=>{l.addEventListener("click",o=>ye(o,r))}),F.addEventListener("submit",he)};ue.addEventListener("click",()=>{ee()});const ee=()=>{de.classList.add("hidden"),ge.classList.remove("visually-hidden"),pe.style.display="block"},S=document.querySelector(".modal-window");console.log(S);const we=document.querySelector(".modal-btn-rating"),ke=document.querySelector(".modal-give-rating"),Le="https://energyflow.b.goit.study/api";async function te(e){try{let u=function(c){c.preventDefault();const v=favorites.findIndex(L=>L.name===o.name);v!==-1?(favorites.splice(v,1),iziToast.show({message:"Упражнение удалено из избранного",messageColor:"#f7f7fc",backgroundColor:"#3939db",position:"topRight"})):(favorites.push(o[0]),i.innerText="Убрать из избранного",iziToast.show({message:"Упражнение добавлено в избранное",messageColor:"#f7f7fc",backgroundColor:"#219c2b",position:"topRight"})),updateFavorites()},k=function(){S.innerHTML="",t.classList.add("visually-hidden"),i.removeEventListener("click",u),P.removeEventListener("click",k),document.removeEventListener("keydown",j),t.removeEventListener("click",O)},j=function(c){c.key==="Escape"&&k()},O=function(c){c.target===t&&k()};const t=document.querySelector(".backdrop"),s=(await h.get(`${Le}/exercises`)).data.results,{_id:n,rating:r}=s[s.length*Math.random()|0];we.addEventListener("click",async()=>{t.classList.add("visually-hidden"),S.classList.add("hidden"),be(n,r),ke.classList.remove("hidden")});const l=await h.get(`https://energyflow.b.goit.study/api/exercises/${_id}`);console.log("test",o);const o=l.data;console.log(o),S.innerHTML=o.map(({gifUrl:c,name:v,rating:L,target:_,bodyPart:G,equipment:W,popularity:z,burnedCalories:N,time:K,description:Q})=>{const V=Math.round(parseFloat(L));console.log(c,v,L,_,G,W,z,N,K,Q);const ce=Array.from({length:5},(q,Y)=>`
          <li>
            <svg class="modal-rating-stars-svg" width="18" height="18">
              <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
          </li>
        `).map((q,Y)=>Y<V?q.replace("<svg",'<svg class="is-active"'):q).join("");return`
          <div class="modal-tablet-pc-ver">
            <div class="modal-video"><img src="${c}" alt="Animated GIF"></div>
            <div>
              <h1 class="modal-title">${v}</h1>
              <div class="modal-rating">
                <p class="modal-rating-numbers">${V}</p>
                <ul class="modal-rating-stars">
                  ${ce}
                </ul>
              </div>
              <div class="modal-info">
                <ul class="modal-info-list">
                  <li>
                    <h3 class="modal-info-list-title">Target</h3>
                    <p class="modal-info-list-title-value">${_}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Body Part</h3>
                    <p class="modal-info-list-title-value">${G}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Equipment</h3>
                    <p class="modal-info-list-title-value">${W}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Popular</h3>
                    <p class="modal-info-list-title-value">${z}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Burned Calories</h3>
                    <p class="modal-info-list-title-value">${N}/${K} min</p>
                  </li>
                </ul>
              </div>
              <p class="descr">${Q}</p>
            </div>
          </div>
        `}).join("");const i=document.querySelector(".add-to-favorites-btn");i.addEventListener("click",u);const P=document.querySelector(".modal-btn-close");P.addEventListener("click",k),document.addEventListener("keydown",j),t.addEventListener("click",O)}catch{}}te();const x=document.querySelector(".exercises-gallery-label"),p=document.querySelector(".exercises-gallery-group"),y=document.querySelector(".exercises-gallery-filter"),b=document.querySelector(".page-buttons-container");let m=null;const E=document.createElement("span"),X=document.querySelector("#filtre-key"),$=document.querySelector(".search-tool"),se=document.querySelector(".error-card-message"),Se="https://energyflow.b.goit.study/api/";let f=1;const d={content:null,title:null},Ee="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},w="filter";const ne="muscles",xe=h.create({baseURL:Ee});function re(e){p.innerHTML="";const t=e.results.map(s=>`<li class="exercises-item-background">
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
    </li>`);return p.insertAdjacentHTML("beforeend",t.join("")),e}y.addEventListener("click",function(e){if(ie(),T(),$.style.display="none",e.target.tagName==="BUTTON"){w="filter";const t=e.target.getAttribute("name");U(t)}});function U(e){$.style.display="none";let t={};switch(le(),e){case"body":a.filter="Body parts",t=y.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=y.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=y.querySelectorAll(`button[name="${e}"]`)}Te(t);const n=`?${new URLSearchParams(a).toString()}`;oe(n).then(r=>re(r)).then(r=>B(r.totalPages)).catch(r=>console.error(r))}function $e(){const t=`?${new URLSearchParams(a).toString()}`;oe(t).then(s=>re(s)).catch(s=>console.error(s))}async function oe(e){try{return(await xe.get(e)).data}catch(t){console.error(t)}}function Te(e){const t=y.querySelectorAll("button"),s=Array.from(e);for(let n=0;n<t.length;n++){const r=t[n];s.includes(r)?(r.style.backgroundColor="var(--dark-gray)",r.style.color="var(--white)"):(r.style.backgroundColor="var(--white-smoke)",r.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+w)}function B(e){let t="";b.innerHTML="";for(let s=1;s<=e;s++)s===1?t+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;b.insertAdjacentHTML("afterbegin",t)}b.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const s=t.id;ae(s)}});function ae(e){document.querySelectorAll(".page-button").forEach(s=>{if(s.id===e)switch(s.classList.add("active"),w){case"filter":a.page=e,$e();break;case"workout":f=e;const n={limit:I(),page:f};n[d.content]=d.title,D(n);break}else s.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),le(),U(ne),ae(1)});function le(){document.documentElement.clientWidth>1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}U(ne);p.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){w="workout",$.style.display="flex";const s=t.querySelector(".name-card").textContent;let n=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");n==="bodyparts"&&(n=n.slice(0,-1)),Re(s,n)}});function qe(){T(),ie(),p.innerHTML="",b.innerHTML=""}function Me(e){let t="";e=Math.floor(e);for(let s=0;s<e;s++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}$.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;f=1;const t=X.value.trim();if(console.log(t),t.length===0){H.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}qe();const s={limit:I(),page:f,keyword:t};s[d.content]=d.title,X.value="",D(s)});function I(){return document.documentElement.clientWidth>768?12:8}function Ce(){se.style.display="block"}function T(){se.style.display="none"}T();function Re(e,t){d.title=e,d.content=t,f=1;const s={limit:I(),page:f};s[d.content]=e,Ae(e),D(s)}async function D(e){try{const t=await h.get(`${Se}exercises`,{params:e}),{totalPages:s,results:n}=t.data;if(n.length==0){Ce();return}let r=n.reduce((l,o)=>{p.innerHTML="",b.innerHTML="";const i=Me(o.rating);return l+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-rating">
                        <p class="workout-title">WORKOUT</p>
                        <p class="rating-title">${o.rating}
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
                        <p class="workout-name">${o.name}</p>
                    </div>
                    <div class="body-description">
                        <p class="burned-callories">Burned calories:
                            <span class="amount-callories">${o.burnedCalories}/${o.time} min</span>
                        </p>
                        <p class="filtred-class">Filtre:
                            <span class="filter-type">${d.content}</span>
                        </p>
                        <p class="target">Target:
                        <span class="key-word">${o.target}</span>
                        </p>
                    </div>
                </div>
            </li>`},"");p.insertAdjacentHTML("beforeend",r),w="workout",s<3?B(s):B(3)}catch(t){console.log(t)}}function Ae(e){m=document.createElement("span"),m.classList.add("exercise-title-card"),m.innerHTML=e,E.classList.add("exercises-gallery-label"),E.innerHTML=" / ",x.appendChild(E),x.appendChild(m)}function ie(){m&&(x.removeChild(m),x.removeChild(E),m=null,T())}const Be="feedback-form",C=document.querySelector(".footer-modal-form");C.addEventListener("submit",e=>{e.preventDefault();const{email:t}=C.elements,s={email:t.value.trim()};H.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(s),localStorage.removeItem(Be),C.reset()});
//# sourceMappingURL=commonHelpers2.js.map
