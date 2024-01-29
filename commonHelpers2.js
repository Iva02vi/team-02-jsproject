import"./assets/mob-menu-bd67eb85.js";import{a as p,i as U}from"./assets/vendor-8cce9181.js";const z=document.querySelector(".loader");p.interceptors.request.use(e=>(z.style.display="inline-block",e),e=>console.error(e));p.interceptors.response.use(e=>(z.style.display="none",e),e=>Promise.reject(e));const A=document.querySelector(".back-to-top"),K=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(K),window.scrollTo(0,e-e/8))};A.addEventListener("click",K);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?A.classList.add("active"):A.classList.remove("active")});const Q=document.querySelector(".modal-give-rating"),F=document.querySelector(".give-rating-form"),me=document.querySelector(".give-rating-close"),W=F.querySelector('button[type="submit"]'),ge=document.querySelector(".give-rating-p1"),B=document.querySelector(".backdrop"),Y=document.querySelector(".modal-window"),pe="https://energyflow.b.goit.study/api",C=document.querySelector(".give-rating-stars"),fe=5,ye=new URL("/team-02-jsproject/assets/sprite-d76a1fc0.svg#icon-Star-2",self.location);let f,H;const ve=(e,t)=>{f=e.currentTarget.querySelector("input").value;const s=Array.from(t).slice(0,f),o=Array.from(t).slice(f);s.forEach(r=>r.classList.add("li-selected")),o.forEach(r=>r.classList.replace("li-selected","li-unselected"))},he=async e=>{var t,s;W.disabled=!0,e.preventDefault();try{if(!f)throw Error("Please select rating!");await p.patch(`${pe}/exercises/${H}/rating`,{rate:+f,email:e.target.email.value,review:e.target.comment.value}),F.reset(),J(),X(H)}catch(o){U.error({message:((s=(t=o.response)==null?void 0:t.data)==null?void 0:s.message)||o.message,position:"topRight",icon:""})}finally{W.disabled=!1}return!1},be=(e,t)=>{B.appendChild(Q),B.classList.remove("visually-hidden"),Y.style.display="none",C.innerHTML="",f=void 0,H=e,ge.innerHTML=t;const s=`
    <svg
      class="icon-Star-2"
      width="24"
      height="24"
      aria-label="modal rating star icon"
    >
      <use href="${ye}"></use>
    </svg>`,o=[];for(let l=0;l<fe;l++){const n=document.createElement("li");n.classList.add("li-star");const i=document.createElement("label");i.innerHTML=s,i.style.pointerEvents="none";const u=document.createElement("input");u.setAttribute("type","checkbox"),u.style.display="none",u.setAttribute("value",`${l+1}`),n.append(i,u),o.push(n)}C.append(...o);const r=C.querySelectorAll("li");r.forEach(l=>{l.addEventListener("click",n=>ve(n,r))}),F.addEventListener("submit",he)};me.addEventListener("click",()=>J());const J=()=>{Q.classList.add("hidden"),B.classList.remove("visually-hidden"),Y.style.display="block"},k=document.querySelector(".modal-window");console.log(k);const we=document.querySelector(".modal-btn-rating"),ke=document.querySelector(".modal-give-rating"),Le="https://energyflow.b.goit.study/api";async function X(e){try{let u=function(c){c.preventDefault();const w=favorites.findIndex(q=>q.name===n.name);w!==-1?(favorites.splice(w,1),iziToast.show({message:"Упражнение удалено из избранного",messageColor:"#f7f7fc",backgroundColor:"#3939db",position:"topRight"})):(favorites.push(n[0]),i.innerText="Убрать из избранного",iziToast.show({message:"Упражнение добавлено в избранное",messageColor:"#f7f7fc",backgroundColor:"#219c2b",position:"topRight"})),updateFavorites()},b=function(){k.innerHTML="",t.classList.add("visually-hidden"),i.removeEventListener("click",u),j.removeEventListener("click",b),document.removeEventListener("keydown",O),t.removeEventListener("click",G)},O=function(c){c.key==="Escape"&&b()},G=function(c){c.target===t&&b()};const t=document.querySelector(".backdrop"),s=(await p.get(`${Le}/exercises`)).data.results,{_id:o,rating:r}=s[s.length*Math.random()|0];we.addEventListener("click",c=>{t.classList.add("visually-hidden"),k.classList.add("hidden"),be(o,r),ke.classList.remove("hidden"),c.stopImmediatePropagation()});const l=await p.get(`https://energyflow.b.goit.study/api/exercises/${_id}`);console.log("test",n);const n=l.data;console.log(n),k.innerHTML=n.map(({gifUrl:c,name:w,rating:q,target:re,bodyPart:ne,equipment:ae,popularity:le,burnedCalories:ie,time:ce,description:de})=>{const N=Math.round(parseFloat(q)),ue=Array.from({length:5},(M,_)=>`
          <li>
            <svg class="modal-rating-stars-svg" width="18" height="18">
              <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
          </li>
        `).map((M,_)=>_<N?M.replace("<svg",'<svg class="is-active"'):M).join("");return`
          <div class="modal-tablet-pc-ver">
            <div class="modal-video"><img src="${c}" alt="Animated GIF"></div>
            <div>
              <h1 class="modal-title">${w}</h1>
              <div class="modal-rating">
                <p class="modal-rating-numbers">${N}</p>
                <ul class="modal-rating-stars">
                  ${ue}
                </ul>
              </div>
              <div class="modal-info">
                <ul class="modal-info-list">
                  <li>
                    <h3 class="modal-info-list-title">Target</h3>
                    <p class="modal-info-list-title-value">${re}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Body Part</h3>
                    <p class="modal-info-list-title-value">${ne}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Equipment</h3>
                    <p class="modal-info-list-title-value">${ae}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Popular</h3>
                    <p class="modal-info-list-title-value">${le}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Burned Calories</h3>
                    <p class="modal-info-list-title-value">${ie}/${ce} min</p>
                  </li>
                </ul>
              </div>
              <p class="descr">${de}</p>
            </div>
          </div>
        `}).join("");const i=document.querySelector(".add-to-favorites-btn");i.addEventListener("click",u);const j=document.querySelector(".modal-btn-close");j.addEventListener("click",b),document.addEventListener("keydown",O),t.addEventListener("click",G)}catch{}}X();const S=document.querySelector(".exercises-gallery-label"),g=document.querySelector(".exercises-gallery-group"),h=document.querySelector(".exercises-gallery-filter"),E=document.querySelector(".page-buttons-container");let m=null;const L=document.createElement("span"),V=document.querySelector("#filtre-key"),x=document.querySelector(".search-tool"),Z=document.querySelector(".error-card-message"),Se="https://energyflow.b.goit.study/api/";let y=1;const d={content:null,title:null},Ee="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},T="filter",v=0;const xe="muscles",Te=p.create({baseURL:Ee});function ee(e){g.innerHTML="";const t=e.results.map(s=>`<li class="exercises-item-background">
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
    </li>`);return g.insertAdjacentHTML("beforeend",t.join("")),e}h.addEventListener("click",function(e){if(oe(),$(),x.style.display="none",e.target.tagName==="BUTTON"){T="filter";const t=e.target.getAttribute("name");te(t)}});function te(e){x.style.display="none";let t={};switch(Ce(),e){case"body":a.filter="Body parts",t=h.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=h.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=h.querySelectorAll(`button[name="${e}"]`)}qe(t);const o=`?${new URLSearchParams(a).toString()}`;se(o).then(r=>ee(r)).then(r=>P(r.totalPages)).catch(r=>console.error(r))}function $e(){const t=`?${new URLSearchParams(a).toString()}`;se(t).then(s=>ee(s)).catch(s=>console.error(s))}async function se(e){try{return(await Te.get(e)).data}catch(t){console.error(t)}}function qe(e){const t=h.querySelectorAll("button"),s=Array.from(e);for(let o=0;o<t.length;o++){const r=t[o];s.includes(r)?(r.style.backgroundColor="var(--dark-gray)",r.style.color="var(--white)"):(r.style.backgroundColor="var(--white-smoke)",r.style.color="var(--black)")}}function P(e){console.log("RNDER PAGES ICON: "+e);let t="";for(let s=1;s<=e;s++)s===1?t+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;E.innerHTML="",E.insertAdjacentHTML("afterbegin",t)}E.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const s=t.id;Me(s)}});function Me(e){document.querySelectorAll(".page-button").forEach(s=>{if(s.id===e)switch(console.log("!!!!!!Button active: "),console.log("!!!!!!button.id: "+s.id),console.log("!!!!!!index.id: "+e),s.classList.add("active"),T){case"filter":a.page=e,$e();break;case"workout":y=e;const o={limit:I(),page:y};o[d.content]=d.title,D(o);break}else console.log("Button INACTIVE!!!!!!: "+s.id),s.classList.remove("active")})}function Ce(){document.documentElement.clientWidth>1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}te(xe);g.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){T="workout",x.style.display="flex";const s=t.querySelector(".name-card").textContent;let o=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");if(o==="bodyparts"&&(o=o.slice(0,-1)),He(s,o),console.log("RENDER TOTAL PAGE: "+v),v===0)return;v>3?P(3):P(v)}});function Re(){$(),oe(),g.innerHTML="",E.innerHTML=""}function Ae(e){let t="";e=Math.floor(e);for(let s=0;s<e;s++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}x.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;y=1;const t=V.value.trim();if(console.log(t),t.length===0){U.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}Re();const s={limit:I(),page:y,keyword:t};s[d.content]=d.title,V.value="",D(s)});function I(){return document.documentElement.clientWidth>768?12:8}function Be(){Z.style.display="block"}function $(){Z.style.display="none"}$();function He(e,t){d.title=e,d.content=t,y=1;const s={limit:I(),page:y};s[d.content]=e,Pe(e),D(s)}async function D(e){try{const t=await p.get(`${Se}exercises`,{params:e}),{totalPages:s,results:o}=t.data;if(o.length==0){g.innerHTML="",Be();return}let r=o.reduce((l,n)=>{const i=Ae(n.rating);return l+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-rating">
                        <p class="workout-title">WORKOUT</p>
                        <p class="rating-title">${n.rating}
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
                        <p class="workout-name">${n.name}</p>
                    </div>
                    <div class="body-description">
                        <p class="burned-callories">Burned calories:
                            <span class="amount-callories">${n.burnedCalories}/${n.time} min</span>
                        </p>
                        <p class="filtred-class">Filtre:
                            <span class="filter-type">${d.content}</span>
                        </p>
                        <p class="target">Target:
                        <span class="key-word">${n.target}</span>
                        </p>
                    </div>
                </div>
            </li>`},"");v=Math.ceil(t.data.totalPages/t.data.perPage),g.innerHTML="",g.insertAdjacentHTML("beforeend",r),T="workout"}catch(t){console.log(t)}}function Pe(e){m=document.createElement("span"),m.classList.add("exercise-title-card"),m.innerHTML=e,L.classList.add("exercises-gallery-label"),L.innerHTML=" / ",S.appendChild(L),S.appendChild(m)}function oe(){m&&(S.removeChild(m),S.removeChild(L),m=null,$())}const Ue="feedback-form",R=document.querySelector(".footer-modal-form");R.addEventListener("submit",e=>{e.preventDefault();const{email:t}=R.elements,s={email:t.value.trim()};U.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(s),localStorage.removeItem(Ue),R.reset()});
//# sourceMappingURL=commonHelpers2.js.map
