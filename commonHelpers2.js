import"./assets/mob-menu-bd67eb85.js";import{a as h,i as U}from"./assets/vendor-8cce9181.js";const A=document.querySelector(".back-to-top"),z=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(z),window.scrollTo(0,e-e/8))};A.addEventListener("click",z);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?A.classList.add("active"):A.classList.remove("active")});const K=document.querySelector(".modal-give-rating"),F=document.querySelector(".give-rating-form"),ue=document.querySelector(".give-rating-close"),W=F.querySelector('button[type="submit"]'),me=document.querySelector(".give-rating-p1"),B=document.querySelector(".backdrop"),Q=document.querySelector(".modal-window"),ge="https://energyflow.b.goit.study/api",C=document.querySelector(".give-rating-stars"),pe=5,fe=new URL("/team-02-jsproject/assets/sprite-d76a1fc0.svg#icon-Star-2",self.location);let p,H;const ve=(e,t)=>{p=e.currentTarget.querySelector("input").value;const s=Array.from(t).slice(0,p),o=Array.from(t).slice(p);s.forEach(n=>n.classList.add("li-selected")),o.forEach(n=>n.classList.replace("li-selected","li-unselected"))},ye=async e=>{var t,s;W.disabled=!0,e.preventDefault();try{if(!p)throw Error("Please select rating!");await h.patch(`${ge}/exercises/${H}/rating`,{rate:+p,email:e.target.email.value,review:e.target.comment.value}),F.reset(),Y(),J(H)}catch(o){U.error({message:((s=(t=o.response)==null?void 0:t.data)==null?void 0:s.message)||o.message,position:"topRight",icon:""})}finally{W.disabled=!1}return!1},he=(e,t)=>{B.appendChild(K),B.classList.remove("visually-hidden"),Q.style.display="none",C.innerHTML="",p=void 0,H=e,me.innerHTML=t;const s=`
    <svg
      class="icon-Star-2"
      width="24"
      height="24"
      aria-label="modal rating star icon"
    >
      <use href="${fe}"></use>
    </svg>`,o=[];for(let l=0;l<pe;l++){const r=document.createElement("li");r.classList.add("li-star");const i=document.createElement("label");i.innerHTML=s,i.style.pointerEvents="none";const u=document.createElement("input");u.setAttribute("type","checkbox"),u.style.display="none",u.setAttribute("value",`${l+1}`),r.append(i,u),o.push(r)}C.append(...o);const n=C.querySelectorAll("li");n.forEach(l=>{l.addEventListener("click",r=>ve(r,n))}),F.addEventListener("submit",ye)};ue.addEventListener("click",()=>Y());const Y=()=>{K.classList.add("hidden"),B.classList.remove("visually-hidden"),Q.style.display="block"},k=document.querySelector(".modal-window");console.log(k);const be=document.querySelector(".modal-btn-rating"),we=document.querySelector(".modal-give-rating"),ke="https://energyflow.b.goit.study/api";async function J(e){try{let u=function(c){c.preventDefault();const w=favorites.findIndex(q=>q.name===r.name);w!==-1?(favorites.splice(w,1),iziToast.show({message:"Упражнение удалено из избранного",messageColor:"#f7f7fc",backgroundColor:"#3939db",position:"topRight"})):(favorites.push(r[0]),i.innerText="Убрать из избранного",iziToast.show({message:"Упражнение добавлено в избранное",messageColor:"#f7f7fc",backgroundColor:"#219c2b",position:"topRight"})),updateFavorites()},b=function(){k.innerHTML="",t.classList.add("visually-hidden"),i.removeEventListener("click",u),j.removeEventListener("click",b),document.removeEventListener("keydown",O),t.removeEventListener("click",G)},O=function(c){c.key==="Escape"&&b()},G=function(c){c.target===t&&b()};const t=document.querySelector(".backdrop"),s=(await h.get(`${ke}/exercises`)).data.results,{_id:o,rating:n}=s[s.length*Math.random()|0];be.addEventListener("click",c=>{t.classList.add("visually-hidden"),k.classList.add("hidden"),he(o,n),we.classList.remove("hidden"),c.stopImmediatePropagation()});const l=await h.get(`https://energyflow.b.goit.study/api/exercises/${_id}`);console.log("test",r);const r=l.data;console.log(r),k.innerHTML=r.map(({gifUrl:c,name:w,rating:q,target:oe,bodyPart:ne,equipment:re,popularity:ae,burnedCalories:le,time:ie,description:ce})=>{const N=Math.round(parseFloat(q)),de=Array.from({length:5},(M,_)=>`
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
                  ${de}
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
                    <p class="modal-info-list-title-value">${ne}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Equipment</h3>
                    <p class="modal-info-list-title-value">${re}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Popular</h3>
                    <p class="modal-info-list-title-value">${ae}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Burned Calories</h3>
                    <p class="modal-info-list-title-value">${le}/${ie} min</p>
                  </li>
                </ul>
              </div>
              <p class="descr">${ce}</p>
            </div>
          </div>
        `}).join("");const i=document.querySelector(".add-to-favorites-btn");i.addEventListener("click",u);const j=document.querySelector(".modal-btn-close");j.addEventListener("click",b),document.addEventListener("keydown",O),t.addEventListener("click",G)}catch{}}J();const E=document.querySelector(".exercises-gallery-label"),g=document.querySelector(".exercises-gallery-group"),y=document.querySelector(".exercises-gallery-filter"),S=document.querySelector(".page-buttons-container");let m=null;const L=document.createElement("span"),V=document.querySelector("#filtre-key"),x=document.querySelector(".search-tool"),X=document.querySelector(".error-card-message"),Le="https://energyflow.b.goit.study/api/";let f=1;const d={content:null,title:null},Ee="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},T="filter",v=0;const Se="muscles",xe=h.create({baseURL:Ee});function Z(e){g.innerHTML="";const t=e.results.map(s=>`<li class="exercises-item-background">
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
    </li>`);return g.insertAdjacentHTML("beforeend",t.join("")),e}y.addEventListener("click",function(e){if(se(),$(),x.style.display="none",e.target.tagName==="BUTTON"){T="filter";const t=e.target.getAttribute("name");ee(t)}});function ee(e){x.style.display="none";let t={};switch(Me(),e){case"body":a.filter="Body parts",t=y.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=y.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=y.querySelectorAll(`button[name="${e}"]`)}$e(t);const o=`?${new URLSearchParams(a).toString()}`;te(o).then(n=>Z(n)).then(n=>P(n.totalPages)).catch(n=>console.error(n))}function Te(){const t=`?${new URLSearchParams(a).toString()}`;te(t).then(s=>Z(s)).catch(s=>console.error(s))}async function te(e){try{return(await xe.get(e)).data}catch(t){console.error(t)}}function $e(e){const t=y.querySelectorAll("button"),s=Array.from(e);for(let o=0;o<t.length;o++){const n=t[o];s.includes(n)?(n.style.backgroundColor="var(--dark-gray)",n.style.color="var(--white)"):(n.style.backgroundColor="var(--white-smoke)",n.style.color="var(--black)")}}function P(e){console.log("RNDER PAGES ICON: "+e);let t="";for(let s=1;s<=e;s++)s===1?t+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;S.innerHTML="",S.insertAdjacentHTML("afterbegin",t)}S.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const s=t.id;qe(s)}});function qe(e){document.querySelectorAll(".page-button").forEach(s=>{if(s.id===e)switch(console.log("!!!!!!Button active: "),console.log("!!!!!!button.id: "+s.id),console.log("!!!!!!index.id: "+e),s.classList.add("active"),T){case"filter":a.page=e,Te();break;case"workout":f=e;const o={limit:I(),page:f};o[d.content]=d.title,D(o);break}else console.log("Button INACTIVE!!!!!!: "+s.id),s.classList.remove("active")})}function Me(){document.documentElement.clientWidth>1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}ee(Se);g.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){T="workout",x.style.display="flex";const s=t.querySelector(".name-card").textContent;let o=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");if(o==="bodyparts"&&(o=o.slice(0,-1)),Be(s,o),console.log("RENDER TOTAL PAGE: "+v),v===0)return;v>3?P(3):P(v)}});function Ce(){$(),se(),g.innerHTML="",S.innerHTML=""}function Re(e){let t="";e=Math.floor(e);for(let s=0;s<e;s++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}x.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;f=1;const t=V.value.trim();if(console.log(t),t.length===0){U.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}Ce();const s={limit:I(),page:f,keyword:t};s[d.content]=d.title,V.value="",D(s)});function I(){return document.documentElement.clientWidth>768?12:8}function Ae(){X.style.display="block"}function $(){X.style.display="none"}$();function Be(e,t){d.title=e,d.content=t,f=1;const s={limit:I(),page:f};s[d.content]=e,He(e),D(s)}async function D(e){try{const t=await h.get(`${Le}exercises`,{params:e}),{totalPages:s,results:o}=t.data;if(o.length==0){g.innerHTML="",Ae();return}let n=o.reduce((l,r)=>{const i=Re(r.rating);return l+`<li class="gallery-list-item">
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
            </li>`},"");v=Math.ceil(t.data.totalPages/t.data.perPage),g.innerHTML="",g.insertAdjacentHTML("beforeend",n),T="workout"}catch(t){console.log(t)}}function He(e){m=document.createElement("span"),m.classList.add("exercise-title-card"),m.innerHTML=e,L.classList.add("exercises-gallery-label"),L.innerHTML=" / ",E.appendChild(L),E.appendChild(m)}function se(){m&&(E.removeChild(m),E.removeChild(L),m=null,$())}const Pe="feedback-form",R=document.querySelector(".footer-modal-form");R.addEventListener("submit",e=>{e.preventDefault();const{email:t}=R.elements,s={email:t.value.trim()};U.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(s),localStorage.removeItem(Pe),R.reset()});
//# sourceMappingURL=commonHelpers2.js.map
