import"./assets/mob-menu-21ce6386.js";import{a as y,i as U}from"./assets/vendor-8cce9181.js";const R=document.querySelector(".back-to-top"),K=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(K),window.scrollTo(0,e-e/8))};R.addEventListener("click",K);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?R.classList.add("active"):R.classList.remove("active")});const Q=document.querySelector(".modal-give-rating"),F=document.querySelector(".give-rating-form"),ge=document.querySelector(".give-rating-close"),z=F.querySelector('button[type="submit"]'),pe=document.querySelector(".give-rating-p1"),A=document.querySelector(".backdrop"),V=document.querySelector(".modal-window"),fe="https://energyflow.b.goit.study/api",M=document.querySelector(".give-rating-stars"),ve=5,ye=new URL("/team-02-jsproject/assets/sprite-224c3807.svg#icon-Star-2",self.location);let g,H;const he=(e,t)=>{g=e.currentTarget.querySelector("input").value;const s=Array.from(t).slice(0,g),r=Array.from(t).slice(g);s.forEach(n=>n.classList.add("li-selected")),r.forEach(n=>n.classList.replace("li-selected","li-unselected"))},be=(e,t)=>{const s=e.currentTarget.querySelector("input").value,r=Array.from(t).slice(0,s),n=Array.from(t).slice(s);r.forEach(a=>a.classList.add("li-selected")),n.forEach(a=>a.classList.replace("li-selected","li-unselected"))},we=async e=>{var t,s;z.disabled=!0,e.preventDefault();try{if(!g)throw Error("Please select rating!");await y.patch(`${fe}/exercises/${H}/rating`,{rate:+g,email:e.target.email.value,review:e.target.comment.value}),F.reset(),Y(),J(H)}catch(r){U.error({message:((s=(t=r.response)==null?void 0:t.data)==null?void 0:s.message)||r.message,position:"topRight",icon:""})}finally{z.disabled=!1}return!1},Le=(e,t)=>{A.appendChild(Q),A.classList.remove("visually-hidden"),V.style.display="none",M.innerHTML="",g=void 0,H=e,pe.innerHTML=t;const s=`
    <svg
      class="icon-Star-2"
      width="24"
      height="24"
      aria-label="modal rating star icon"
    >
      <use href="${ye}"></use>
    </svg>`,r=[];for(let a=0;a<ve;a++){const o=document.createElement("li");o.classList.add("li-star");const i=document.createElement("label");i.innerHTML=s,i.style.pointerEvents="none";const u=document.createElement("input");u.setAttribute("type","checkbox"),u.style.display="none",u.setAttribute("value",`${a+1}`),o.append(i,u),r.push(o)}M.append(...r);const n=M.querySelectorAll("li");n.forEach(a=>{a.addEventListener("click",o=>he(o,n)),a.addEventListener("mouseover",o=>be(o,n))}),F.addEventListener("submit",we)};ge.addEventListener("click",()=>Y());const Y=()=>{Q.classList.add("hidden"),A.classList.remove("visually-hidden"),V.style.display="block"},k=document.querySelector(".modal-window");console.log(k);const ke=document.querySelector(".modal-btn-rating"),Se=document.querySelector(".modal-give-rating"),Ee="https://energyflow.b.goit.study/api";async function J(e){try{let u=function(c){c.preventDefault();const L=favorites.findIndex(T=>T.name===o.name);L!==-1?(favorites.splice(L,1),iziToast.show({message:"Упражнение удалено из избранного",messageColor:"#f7f7fc",backgroundColor:"#3939db",position:"topRight"})):(favorites.push(o[0]),i.innerText="Убрать из избранного",iziToast.show({message:"Упражнение добавлено в избранное",messageColor:"#f7f7fc",backgroundColor:"#219c2b",position:"topRight"})),updateFavorites()},w=function(){k.innerHTML="",t.classList.add("visually-hidden"),i.removeEventListener("click",u),j.removeEventListener("click",w),document.removeEventListener("keydown",_),t.removeEventListener("click",O)},_=function(c){c.key==="Escape"&&w()},O=function(c){c.target===t&&w()};const t=document.querySelector(".backdrop"),s=(await y.get(`${Ee}/exercises`)).data.results,{_id:r,rating:n}=s[s.length*Math.random()|0];ke.addEventListener("click",c=>{t.classList.add("visually-hidden"),k.classList.add("hidden"),Le(r,n),Se.classList.remove("hidden"),c.stopImmediatePropagation()});const a=await y.get(`https://energyflow.b.goit.study/api/exercises/${_id}`);console.log("test",o);const o=a.data;console.log(o),k.innerHTML=o.map(({gifUrl:c,name:L,rating:T,target:oe,bodyPart:ae,equipment:le,popularity:ie,burnedCalories:ce,time:de,description:ue})=>{const G=Math.round(parseFloat(T)),me=Array.from({length:5},(q,W)=>`
          <li>
            <svg class="modal-rating-stars-svg" width="18" height="18">
              <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
          </li>
        `).map((q,W)=>W<G?q.replace("<svg",'<svg class="is-active"'):q).join("");return`
          <div class="modal-tablet-pc-ver">
            <div class="modal-video"><img src="${c}" alt="Animated GIF"></div>
            <div>
              <h1 class="modal-title">${L}</h1>
              <div class="modal-rating">
                <p class="modal-rating-numbers">${G}</p>
                <ul class="modal-rating-stars">
                  ${me}
                </ul>
              </div>
              <div class="modal-info">
                <ul class="modal-info-list">
                  <li>
                    <h3 class="modal-info-list-title">Target</h3>
                    <p class="modal-info-list-title-value">${oe}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Body Part</h3>
                    <p class="modal-info-list-title-value">${ae}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Equipment</h3>
                    <p class="modal-info-list-title-value">${le}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Popular</h3>
                    <p class="modal-info-list-title-value">${ie}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Burned Calories</h3>
                    <p class="modal-info-list-title-value">${ce}/${de} min</p>
                  </li>
                </ul>
              </div>
              <p class="descr">${ue}</p>
            </div>
          </div>
        `}).join("");const i=document.querySelector(".add-to-favorites-btn");i.addEventListener("click",u);const j=document.querySelector(".modal-btn-close");j.addEventListener("click",w),document.addEventListener("keydown",_),t.addEventListener("click",O)}catch{}}J();const E=document.querySelector(".exercises-gallery-label"),p=document.querySelector(".exercises-gallery-group"),v=document.querySelector(".exercises-gallery-filter"),h=document.querySelector(".page-buttons-container");let m=null;const S=document.createElement("span"),N=document.querySelector("#filtre-key"),x=document.querySelector(".search-tool"),X=document.querySelector(".error-card-message"),xe="https://energyflow.b.goit.study/api/";let f=1;const d={content:null,title:null},$e="https://energyflow.b.goit.study/api/filters";let l={filter:"Muscles",page:1,limit:8},b="filter";const Z="muscles",Te=y.create({baseURL:$e});function ee(e){p.innerHTML="";const t=e.results.map(s=>`<li class="exercises-item-background">
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
    </li>`);return p.insertAdjacentHTML("beforeend",t.join("")),e}v.addEventListener("click",function(e){if(ne(),$(),x.style.display="none",e.target.tagName==="BUTTON"){b="filter";const t=e.target.getAttribute("name");I(t)}});function I(e){x.style.display="none";let t={};switch(re(),e){case"body":l.filter="Body parts",t=v.querySelectorAll(`button[name="${e}"]`);break;case"equipment":l.filter="Equipment",t=v.querySelectorAll(`button[name="${e}"]`);break;default:l.filter="Muscles",t=v.querySelectorAll(`button[name="${e}"]`)}Me(t);const r=`?${new URLSearchParams(l).toString()}`;te(r).then(n=>ee(n)).then(n=>B(n.totalPages)).catch(n=>console.error(n))}function qe(){const t=`?${new URLSearchParams(l).toString()}`;te(t).then(s=>ee(s)).catch(s=>console.error(s))}async function te(e){try{return(await Te.get(e)).data}catch(t){console.error(t)}}function Me(e){const t=v.querySelectorAll("button"),s=Array.from(e);for(let r=0;r<t.length;r++){const n=t[r];s.includes(n)?(n.style.backgroundColor="var(--dark-gray)",n.style.color="var(--white)"):(n.style.backgroundColor="var(--white-smoke)",n.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+b)}function B(e){let t="";h.innerHTML="";for(let s=1;s<=e;s++)s===1?t+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;h.insertAdjacentHTML("afterbegin",t)}h.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const s=t.id;se(s)}});function se(e){document.querySelectorAll(".page-button").forEach(s=>{if(s.id===e)switch(s.classList.add("active"),b){case"filter":l.page=e,qe();break;case"workout":f=e;const r={limit:P(),page:f};r[d.content]=d.title,D(r);break}else s.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),re(),I(Z),se(1)});function re(){document.documentElement.clientWidth>1440?(l.page=1,l.limit=12):(l.page=1,l.limit=8)}I(Z);p.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){b="workout",x.style.display="flex";const s=t.querySelector(".name-card").textContent;let r=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");r==="bodyparts"&&(r=r.slice(0,-1)),He(s,r)}});function Ce(){$(),ne(),p.innerHTML="",h.innerHTML=""}function Re(e){let t="";e=Math.floor(e);for(let s=0;s<e;s++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}x.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;f=1;const t=N.value.trim();if(console.log(t),t.length===0){U.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}Ce();const s={limit:P(),page:f,keyword:t};s[d.content]=d.title,N.value="",D(s)});function P(){return document.documentElement.clientWidth>768?12:8}function Ae(){X.style.display="block"}function $(){X.style.display="none"}$();function He(e,t){d.title=e,d.content=t,f=1;const s={limit:P(),page:f};s[d.content]=e,Be(e),D(s)}async function D(e){try{const t=await y.get(`${xe}exercises`,{params:e}),{totalPages:s,results:r}=t.data;if(r.length==0){Ae();return}let n=r.reduce((a,o)=>{p.innerHTML="",h.innerHTML="";const i=Re(o.rating);return a+`<li class="gallery-list-item">
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
            </li>`},"");p.insertAdjacentHTML("beforeend",n),b="workout",s<3?B(s):B(3)}catch(t){console.log(t)}}function Be(e){m=document.createElement("span"),m.classList.add("exercise-title-card"),m.innerHTML=e,S.classList.add("exercises-gallery-label"),S.innerHTML=" / ",E.appendChild(S),E.appendChild(m)}function ne(){m&&(E.removeChild(m),E.removeChild(S),m=null,$())}const Ue="feedback-form",C=document.querySelector(".footer-modal-form");C.addEventListener("submit",e=>{e.preventDefault();const{email:t}=C.elements,s={email:t.value.trim()};U.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(s),localStorage.removeItem(Ue),C.reset()});
//# sourceMappingURL=commonHelpers2.js.map
