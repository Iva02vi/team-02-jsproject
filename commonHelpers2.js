import"./assets/mob-menu-fd6c460a.js";import{a as y,i as C}from"./assets/vendor-8cce9181.js";const U=document.querySelector(".back-to-top"),ie=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(ie),window.scrollTo(0,e-e/8))};U.addEventListener("click",ie);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?U.classList.add("active"):U.classList.remove("active")});const $e=document.querySelector(".modal-give-rating"),I=document.querySelector(".give-rating-form"),xe=document.querySelector(".give-rating-close"),ae=I.querySelector('button[type="submit"]'),qe=document.querySelector(".give-rating-p1"),Te=document.querySelector(".backdrop"),Me=document.querySelector(".modal-window"),Ce="https://energyflow.b.goit.study/api",P=document.querySelector(".give-rating-stars"),Be=5;let f,F;const Re=(e,t)=>{f=e.currentTarget.querySelector("input").value;const s=Array.from(t).slice(0,f),r=Array.from(t).slice(f);s.forEach(a=>a.classList.add("li-selected")),r.forEach(a=>a.classList.replace("li-selected","li-unselected"))},Ae=async e=>{var t,s;ae.disabled=!0,e.preventDefault();try{if(!f)throw Error("Please select rating!");await y.patch(`${Ce}/exercises/${F}/rating`,{rate:+f,email:e.target.email.value,review:e.target.comment.value}),I.reset(),ce(),de(F)}catch(r){C.error({message:((s=(t=r.response)==null?void 0:t.data)==null?void 0:s.message)||r.message,position:"topRight",icon:""})}finally{ae.disabled=!1}return!1},Pe=(e,t)=>{P.innerHTML="",f=void 0,F=e,qe.innerHTML=t;const s=`
  <svg
    class="icon-Star-2"
    width="24"
    height="24"
    aria-label="modal rating star icon"
  >
    <use href="./img/sprite.svg#icon-Star-2"></use>
  </svg>`,r=[];for(let o=0;o<Be;o++){const n=document.createElement("li");n.classList.add("li-star");const l=document.createElement("label");l.innerHTML=s,l.style.pointerEvents="none";const g=document.createElement("input");g.setAttribute("type","checkbox"),g.style.display="none",g.setAttribute("value",`${o+1}`),n.append(l,g),r.push(n)}P.append(...r);const a=P.querySelectorAll("li");a.forEach(o=>{o.addEventListener("click",n=>Re(n,a))}),I.addEventListener("submit",Ae)};xe.addEventListener("click",()=>{ce()});const ce=()=>{$e.classList.add("hidden"),Te.classList.remove("visually-hidden"),Me.style.display="block"},q=document.querySelector(".modal-window");console.log(q);const He=document.querySelector(".modal-btn-rating"),Ue=document.querySelector(".modal-give-rating"),Fe="https://energyflow.b.goit.study/api";async function de(e){try{let g=function(u){u.preventDefault();const S=favorites.findIndex(x=>x.name===n.name);S!==-1?(favorites.splice(S,1),iziToast.show({message:"Упражнение удалено из избранного",messageColor:"#f7f7fc",backgroundColor:"#3939db",position:"topRight"})):(favorites.push(n[0]),l.innerText="Убрать из избранного",iziToast.show({message:"Упражнение добавлено в избранное",messageColor:"#f7f7fc",backgroundColor:"#219c2b",position:"topRight"})),updateFavorites()},$=function(){q.innerHTML="",t.classList.add("visually-hidden"),l.removeEventListener("click",g),V.removeEventListener("click",$),document.removeEventListener("keydown",z),t.removeEventListener("click",K)},z=function(u){u.key==="Escape"&&$()},K=function(u){u.target===t&&$()};const t=document.querySelector(".backdrop"),s=(await y.get(`${Fe}/exercises`)).data.results,{_id:r,rating:a}=s[s.length*Math.random()|0];He.addEventListener("click",async()=>{t.classList.add("visually-hidden"),q.classList.add("hidden"),Pe(r,a),Ue.classList.remove("hidden")});const o=await y.get(`https://energyflow.b.goit.study/api/exercises/${_id}`);console.log("test",n);const n=o.data;console.log(n),q.innerHTML=n.map(({gifUrl:u,name:S,rating:x,target:Y,bodyPart:X,equipment:J,popularity:Z,burnedCalories:ee,time:te,description:se})=>{const re=Math.round(parseFloat(x));console.log(u,S,x,Y,X,J,Z,ee,te,se);const Le=Array.from({length:5},(A,ne)=>`
          <li>
            <svg class="modal-rating-stars-svg" width="18" height="18">
              <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
          </li>
        `).map((A,ne)=>ne<re?A.replace("<svg",'<svg class="is-active"'):A).join("");return`
          <div class="modal-tablet-pc-ver">
            <div class="modal-video"><img src="${u}" alt="Animated GIF"></div>
            <div>
              <h1 class="modal-title">${S}</h1>
              <div class="modal-rating">
                <p class="modal-rating-numbers">${re}</p>
                <ul class="modal-rating-stars">
                  ${Le}
                </ul>
              </div>
              <div class="modal-info">
                <ul class="modal-info-list">
                  <li>
                    <h3 class="modal-info-list-title">Target</h3>
                    <p class="modal-info-list-title-value">${Y}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Body Part</h3>
                    <p class="modal-info-list-title-value">${X}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Equipment</h3>
                    <p class="modal-info-list-title-value">${J}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Popular</h3>
                    <p class="modal-info-list-title-value">${Z}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Burned Calories</h3>
                    <p class="modal-info-list-title-value">${ee}/${te} min</p>
                  </li>
                </ul>
              </div>
              <p class="descr">${se}</p>
            </div>
          </div>
        `}).join("");const l=document.querySelector(".add-to-favorites-btn");l.addEventListener("click",g);const V=document.querySelector(".modal-btn-close");V.addEventListener("click",$),document.addEventListener("keydown",z),t.addEventListener("click",K)}catch{}}de();const N=document.querySelector(".gallery-collection");document.querySelector(".gallery-item");document.querySelector(".filtred-submit");const ue=document.querySelector(".gallery-list"),De=document.querySelector(".exercise-title"),j=document.querySelector(".page-button-list"),oe=document.querySelector(".input-submit-key"),Ie=document.querySelector(".filtred-submit"),me="https://energyflow.b.goit.study/api/",Ne="muscles",je="bodypart",Oe="equipment";let d=1;const c={content:null,title:null},ge=document.querySelector(".muscles");ge.classList.add(".active");ge.addEventListener("click",pe);const Qe=document.querySelector(".body-parts");Qe.addEventListener("click",_e);const Ge=document.querySelector(".equipment");Ge.addEventListener("click",We);j.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!=="button")return;b(),d=parseInt(e.target.value);const t={limit:w(),page:d};t[c.content]=c.title,Q(t)});function pe(){b();const e={limit:w(),page:d,filter:"Muscles"};c.content=Ne,O(e)}function _e(){b();const e={limit:w(),page:d,filter:"Body parts"};c.content=je,O(e)}function We(){b();const e={limit:w(),page:d,filter:"Equipment"};c.content=Oe,O(e)}function b(){fe(),ze(),Ke()}async function O(e){try{const t=await y.get(`${me}filters`,{params:e});console.log(t);const{totalPages:s,results:r}=t.data;if(r.length==0)return alert("NO MORE EXEERCISES"),console.log(r.data);let a=r.reduce((o,n)=>o+`<li class="gallery-item">
                        <a class="gallery-link" href="${n.imgUrl}">
                            <img class="gallery-image" data-source="${n.imgUrl}" src="${n.imgUrl}" alt="${n.name}" width="360" height="200"/>
                        </a>
                        <div class='title'>
                            <p>${n.name}</p>
                        </div>
                </li>`,"");N.insertAdjacentHTML("beforeend",a)}catch(t){console.log(t)}}N.addEventListener("click",e=>{e.preventDefault(),b();const t=e.target.alt;c.title=t,d=1;const s={limit:w(),page:d};s[c.content]=t,Ve(t),Q(s)});function Ve(e){De.innerHTML=`Exercises / <span class="exercise-title-card"> ${e}</span>`}async function Q(e){try{const t=await y.get(`${me}exercises`,{params:e}),{totalPages:s,results:r}=t.data;if(r.length==0){Ze(),Je();return}let a=r.reduce((o,n)=>{const l=Ye(n.rating);return o+`<li class="gallery-list-item">
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
            </li>`},"");ue.insertAdjacentHTML("beforeend",a),j.innerHTML=Xe(s)}catch(t){console.log(t)}}function ze(){N.replaceChildren()}function Ke(){ue.replaceChildren()}function Ye(e){let t="";e=Math.floor(e);for(let s=0;s<e;s++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}function Xe(e){let t="";const s=Math.min(e,5);for(let r=1;r<=s;r++)t+=`<button class="button-next-page" value="${r}">${r}</button>`;return t}const ye=document.querySelector(".card-error-message");function Je(){ye.style.visibility="visible"}function fe(){ye.style.visibility="hidden"}Ie.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;d=1;const t=oe.value.trim();if(console.log(t),t.length===0){C.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}b();const s={limit:w(),page:d,keyword:t};s[c.content]=c.title,oe.value="",Q(s)});function Ze(){j.replaceChildren()}function w(){return document.documentElement.clientWidth>768?12:8}fe();pe();const M=document.querySelector(".exercises-gallery-label"),v=document.querySelector(".exercises-gallery-group"),k=document.querySelector(".exercises-gallery-filter"),E=document.querySelector(".page-buttons-container");let p=null;const T=document.createElement("span"),le=document.querySelector("#filtre-key"),B=document.querySelector(".search-tool"),ve=document.querySelector(".error-card-message"),et="https://energyflow.b.goit.study/api/";let h=1;const m={content:null,title:null},tt="https://energyflow.b.goit.study/api/filters";let i={filter:"Muscles",page:1,limit:8},L="filter";const he="muscles",st=y.create({baseURL:tt});function be(e){v.innerHTML="";const t=e.results.map(s=>`<li class="exercises-item-background">
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
    </li>`);return v.insertAdjacentHTML("beforeend",t.join("")),e}k.addEventListener("click",function(e){if(Ee(),R(),B.style.display="none",e.target.tagName==="BUTTON"){L="filter";const t=e.target.getAttribute("name");G(t)}});function G(e){B.style.display="none";let t={};switch(ke(),e){case"body":i.filter="Body parts",t=k.querySelectorAll(`button[name="${e}"]`);break;case"equipment":i.filter="Equipment",t=k.querySelectorAll(`button[name="${e}"]`);break;default:i.filter="Muscles",t=k.querySelectorAll(`button[name="${e}"]`)}nt(t);const r=`?${new URLSearchParams(i).toString()}`;we(r).then(a=>be(a)).then(a=>D(a.totalPages)).catch(a=>console.error(a))}function rt(){const t=`?${new URLSearchParams(i).toString()}`;we(t).then(s=>be(s)).catch(s=>console.error(s))}async function we(e){try{return(await st.get(e)).data}catch(t){console.error(t)}}function nt(e){const t=k.querySelectorAll("button"),s=Array.from(e);for(let r=0;r<t.length;r++){const a=t[r];s.includes(a)?(a.style.backgroundColor="var(--dark-gray)",a.style.color="var(--white)"):(a.style.backgroundColor="var(--white-smoke)",a.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+L)}function D(e){let t="";E.innerHTML="";for(let s=1;s<=e;s++)s===1?t+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;E.insertAdjacentHTML("afterbegin",t)}E.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const s=t.id;Se(s)}});function Se(e){document.querySelectorAll(".page-button").forEach(s=>{if(s.id===e)switch(s.classList.add("active"),L){case"filter":i.page=e,rt();break;case"workout":h=e;const r={limit:_(),page:h};r[m.content]=m.title,W(r);break}else s.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),ke(),G(he),Se(1)});function ke(){document.documentElement.clientWidth>1440?(i.page=1,i.limit=12):(i.page=1,i.limit=8)}G(he);v.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){L="workout",B.style.display="flex";const s=t.querySelector(".name-card").textContent;let r=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");r==="bodyparts"&&(r=r.slice(0,-1)),it(s,r)}});function at(){R(),Ee(),v.innerHTML="",E.innerHTML=""}function ot(e){let t="";e=Math.floor(e);for(let s=0;s<e;s++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}B.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;h=1;const t=le.value.trim();if(console.log(t),t.length===0){C.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}at();const s={limit:_(),page:h,keyword:t};s[m.content]=m.title,le.value="",W(s)});function _(){return document.documentElement.clientWidth>768?12:8}function lt(){ve.style.display="block"}function R(){ve.style.display="none"}R();function it(e,t){m.title=e,m.content=t,h=1;const s={limit:_(),page:h};s[m.content]=e,ct(e),W(s)}async function W(e){try{const t=await y.get(`${et}exercises`,{params:e}),{totalPages:s,results:r}=t.data;if(r.length==0){lt();return}let a=r.reduce((o,n)=>{v.innerHTML="",E.innerHTML="";const l=ot(n.rating);return o+`<li class="gallery-list-item">
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
                            <span class="filter-type">${m.content}</span>
                        </p>
                        <p class="target">Target:
                        <span class="key-word">${n.target}</span>
                        </p>
                    </div>
                </div>
            </li>`},"");v.insertAdjacentHTML("beforeend",a),L="workout",s<3?D(s):D(3)}catch(t){console.log(t)}}function ct(e){p=document.createElement("span"),p.classList.add("exercise-title-card"),p.innerHTML=e,T.classList.add("exercises-gallery-label"),T.innerHTML=" / ",M.appendChild(T),M.appendChild(p)}function Ee(){p&&(M.removeChild(p),M.removeChild(T),p=null,R())}const dt="feedback-form",H=document.querySelector(".footer-modal-form");H.addEventListener("submit",e=>{e.preventDefault();const{email:t}=H.elements,s={email:t.value.trim()};C.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(s),localStorage.removeItem(dt),H.reset()});
//# sourceMappingURL=commonHelpers2.js.map
