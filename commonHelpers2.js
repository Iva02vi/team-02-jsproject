import"./assets/mob-menu-fd6c460a.js";import{a as y,i as N}from"./assets/vendor-8cce9181.js";const F=document.querySelector(".back-to-top"),ce=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(ce),window.scrollTo(0,e-e/8))};F.addEventListener("click",ce);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?F.classList.add("active"):F.classList.remove("active")});const de=document.querySelector(".modal-give-rating"),D=document.querySelector(".give-rating-form"),$e=document.querySelector(".give-rating-close"),ae=D.querySelector('button[type="submit"]'),xe=document.querySelector(".give-rating-p1"),qe=document.querySelector(".backdrop"),Te=document.querySelector(".modal-window"),oe="https://energyflow.b.goit.study/api",P=document.querySelector(".give-rating-stars"),Me=5;let k,H;const Ce=(e,t)=>{P.innerHTML="",H=e,xe.innerHTML=t;const s=`
  <svg
    class="icon-Star-2"
    width="24"
    height="24"
    aria-label="modal rating star icon"
  >
    <use href="/img/sprite.svg#icon-Star-2"></use>
  </svg>`,r=[];for(let o=0;o<Me;o++){const n=document.createElement("li");n.classList.add("li-star");const l=document.createElement("label");l.innerHTML=s,l.style.pointerEvents="none";const d=document.createElement("input");d.setAttribute("type","checkbox"),d.style.display="none",d.setAttribute("value",`${o+1}`),n.append(l,d),r.push(n)}P.append(...r);const a=P.querySelectorAll("li");a.forEach(o=>{o.addEventListener("click",n=>{k=n.currentTarget.querySelector("input").value;const l=Array.from(a).slice(0,k),d=Array.from(a).slice(k);l.forEach(f=>f.classList.add("li-selected")),d.forEach(f=>f.classList.replace("li-selected","li-unselected"))})}),D.addEventListener("submit",async o=>{ae.disabled=!0,o.preventDefault();try{if(!k)throw Error("Please select rating!");console.log(`${oe}/exercises/${H}/rating`),await y.patch(`${oe}/exercises/${H}/rating`,{rate:+k,email:o.target.email.value,review:o.target.comment.value}),D.reset(),de.classList.add("hidden")}catch(n){console.error(n.message)}finally{ae.disabled=!1}return!1})};$e.addEventListener("click",()=>{de.classList.add("hidden"),qe.classList.remove("visually-hidden"),Te.style.display="block"});const T=document.querySelector(".modal-window");console.log(T);const Be=document.querySelector(".modal-btn-rating"),Re=document.querySelector(".modal-give-rating"),Ae="https://energyflow.b.goit.study/api";async function Pe(e){try{let d=function(g){g.preventDefault();const S=favorites.findIndex(q=>q.name===n.name);S!==-1?(favorites.splice(S,1),iziToast.show({message:"Упражнение удалено из избранного",messageColor:"#f7f7fc",backgroundColor:"#3939db",position:"topRight"})):(favorites.push(n[0]),l.innerText="Убрать из избранного",iziToast.show({message:"Упражнение добавлено в избранное",messageColor:"#f7f7fc",backgroundColor:"#219c2b",position:"topRight"})),updateFavorites()},x=function(){T.innerHTML="",t.classList.add("visually-hidden"),l.removeEventListener("click",d),f.removeEventListener("click",x),document.removeEventListener("keydown",z),t.removeEventListener("click",K)},z=function(g){g.key==="Escape"&&x()},K=function(g){g.target===t&&x()};const t=document.querySelector(".backdrop"),s=(await y.get(`${Ae}/exercises`)).data.results,{_id:r,rating:a}=s[s.length*Math.random()|0];Be.addEventListener("click",async()=>{t.classList.add("visually-hidden"),T.classList.add("hidden"),Ce(r,a),Re.classList.remove("hidden")});const o=await y.get(`https://energyflow.b.goit.study/api/exercises/${_id}`);console.log("test",n);const n=o.data;console.log(n),T.innerHTML=n.map(({gifUrl:g,name:S,rating:q,target:Y,bodyPart:X,equipment:J,popularity:Z,burnedCalories:ee,time:te,description:se})=>{const re=Math.round(parseFloat(q));console.log(g,S,q,Y,X,J,Z,ee,te,se);const Le=Array.from({length:5},(A,ne)=>`
          <li>
            <svg class="modal-rating-stars-svg" width="18" height="18">
              <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
          </li>
        `).map((A,ne)=>ne<re?A.replace("<svg",'<svg class="is-active"'):A).join("");return`
          <div class="modal-tablet-pc-ver">
            <div class="modal-video"><img src="${g}" alt="Animated GIF"></div>
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
        `}).join("");const l=document.querySelector(".add-to-favorites-btn");l.addEventListener("click",d);const f=document.querySelector(".modal-btn-close");f.addEventListener("click",x),document.addEventListener("keydown",z),t.addEventListener("click",K)}catch{}}Pe();const j=document.querySelector(".gallery-collection");document.querySelector(".gallery-item");document.querySelector(".filtred-submit");const ue=document.querySelector(".gallery-list"),He=document.querySelector(".exercise-title"),O=document.querySelector(".page-button-list"),le=document.querySelector(".input-submit-key"),Ue=document.querySelector(".filtred-submit"),ge="https://energyflow.b.goit.study/api/",Fe="muscles",De="bodypart",Ie="equipment";let u=1;const c={content:null,title:null},me=document.querySelector(".muscles");me.classList.add(".active");me.addEventListener("click",pe);const Ne=document.querySelector(".body-parts");Ne.addEventListener("click",Oe);const je=document.querySelector(".equipment");je.addEventListener("click",Qe);O.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!=="button")return;b(),u=parseInt(e.target.value);const t={limit:w(),page:u};t[c.content]=c.title,G(t)});function pe(){b();const e={limit:w(),page:u,filter:"Muscles"};c.content=Fe,Q(e)}function Oe(){b();const e={limit:w(),page:u,filter:"Body parts"};c.content=De,Q(e)}function Qe(){b();const e={limit:w(),page:u,filter:"Equipment"};c.content=Ie,Q(e)}function b(){fe(),_e(),We()}async function Q(e){try{const t=await y.get(`${ge}filters`,{params:e});console.log(t);const{totalPages:s,results:r}=t.data;if(r.length==0)return alert("NO MORE EXEERCISES"),console.log(r.data);let a=r.reduce((o,n)=>o+`<li class="gallery-item">
                        <a class="gallery-link" href="${n.imgUrl}">
                            <img class="gallery-image" data-source="${n.imgUrl}" src="${n.imgUrl}" alt="${n.name}" width="360" height="200"/>
                        </a>
                        <div class='title'>
                            <p>${n.name}</p>
                        </div>
                </li>`,"");j.insertAdjacentHTML("beforeend",a)}catch(t){console.log(t)}}j.addEventListener("click",e=>{e.preventDefault(),b();const t=e.target.alt;c.title=t,u=1;const s={limit:w(),page:u};s[c.content]=t,Ge(t),G(s)});function Ge(e){He.innerHTML=`Exercises / <span class="exercise-title-card"> ${e}</span>`}async function G(e){try{const t=await y.get(`${ge}exercises`,{params:e}),{totalPages:s,results:r}=t.data;if(r.length==0){Ye(),Ke();return}let a=r.reduce((o,n)=>{const l=Ve(n.rating);return o+`<li class="gallery-list-item">
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
            </li>`},"");ue.insertAdjacentHTML("beforeend",a),O.innerHTML=ze(s)}catch(t){console.log(t)}}function _e(){j.replaceChildren()}function We(){ue.replaceChildren()}function Ve(e){let t="";e=Math.floor(e);for(let s=0;s<e;s++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}function ze(e){let t="";const s=Math.min(e,5);for(let r=1;r<=s;r++)t+=`<button class="button-next-page" value="${r}">${r}</button>`;return t}const ye=document.querySelector(".card-error-message");function Ke(){ye.style.visibility="visible"}function fe(){ye.style.visibility="hidden"}Ue.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;u=1;const t=le.value.trim();if(console.log(t),t.length===0){N.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}b();const s={limit:w(),page:u,keyword:t};s[c.content]=c.title,le.value="",G(s)});function Ye(){O.replaceChildren()}function w(){return document.documentElement.clientWidth>768?12:8}fe();pe();const C=document.querySelector(".exercises-gallery-label"),v=document.querySelector(".exercises-gallery-group"),E=document.querySelector(".exercises-gallery-filter"),L=document.querySelector(".page-buttons-container");let p=null;const M=document.createElement("span"),ie=document.querySelector("#filtre-key"),B=document.querySelector(".search-tool"),ve=document.querySelector(".error-card-message"),Xe="https://energyflow.b.goit.study/api/";let h=1;const m={content:null,title:null},Je="https://energyflow.b.goit.study/api/filters";let i={filter:"Muscles",page:1,limit:8},$="filter";const he="muscles",Ze=y.create({baseURL:Je});function be(e){v.innerHTML="";const t=e.results.map(s=>`<li class="exercises-item-background">
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
    </li>`);return v.insertAdjacentHTML("beforeend",t.join("")),e}E.addEventListener("click",function(e){if(Ee(),R(),B.style.display="none",e.target.tagName==="BUTTON"){$="filter";const t=e.target.getAttribute("name");_(t)}});function _(e){B.style.display="none";let t={};switch(ke(),e){case"body":i.filter="Body parts",t=E.querySelectorAll(`button[name="${e}"]`);break;case"equipment":i.filter="Equipment",t=E.querySelectorAll(`button[name="${e}"]`);break;default:i.filter="Muscles",t=E.querySelectorAll(`button[name="${e}"]`)}tt(t);const r=`?${new URLSearchParams(i).toString()}`;we(r).then(a=>be(a)).then(a=>I(a.totalPages)).catch(a=>console.error(a))}function et(){const t=`?${new URLSearchParams(i).toString()}`;we(t).then(s=>be(s)).catch(s=>console.error(s))}async function we(e){try{return(await Ze.get(e)).data}catch(t){console.error(t)}}function tt(e){const t=E.querySelectorAll("button"),s=Array.from(e);for(let r=0;r<t.length;r++){const a=t[r];s.includes(a)?(a.style.backgroundColor="var(--dark-gray)",a.style.color="var(--white)"):(a.style.backgroundColor="var(--white-smoke)",a.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+$)}function I(e){let t="";L.innerHTML="";for(let s=1;s<=e;s++)s===1?t+=`<li>
      <button class="page-button active" type="button" id="${s}">${s}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${s}">${s}</button>`;L.insertAdjacentHTML("afterbegin",t)}L.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const s=t.id;Se(s)}});function Se(e){document.querySelectorAll(".page-button").forEach(s=>{if(s.id===e)switch(s.classList.add("active"),$){case"filter":i.page=e,et();break;case"workout":h=e;const r={limit:W(),page:h};r[m.content]=m.title,V(r);break}else s.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),ke(),_(he),Se(1)});function ke(){document.documentElement.clientWidth>1440?(i.page=1,i.limit=12):(i.page=1,i.limit=8)}_(he);v.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){$="workout",B.style.display="flex";const s=t.querySelector(".name-card").textContent;let r=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");r==="bodyparts"&&(r=r.slice(0,-1)),at(s,r)}});function st(){R(),Ee(),v.innerHTML="",L.innerHTML=""}function rt(e){let t="";e=Math.floor(e);for(let s=0;s<e;s++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}B.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;h=1;const t=ie.value.trim();if(console.log(t),t.length===0){N.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}st();const s={limit:W(),page:h,keyword:t};s[m.content]=m.title,ie.value="",V(s)});function W(){return document.documentElement.clientWidth>768?12:8}function nt(){ve.style.display="block"}function R(){ve.style.display="none"}R();function at(e,t){m.title=e,m.content=t,h=1;const s={limit:W(),page:h};s[m.content]=e,ot(e),V(s)}async function V(e){try{const t=await y.get(`${Xe}exercises`,{params:e}),{totalPages:s,results:r}=t.data;if(r.length==0){nt();return}let a=r.reduce((o,n)=>{v.innerHTML="",L.innerHTML="";const l=rt(n.rating);return o+`<li class="gallery-list-item">
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
            </li>`},"");v.insertAdjacentHTML("beforeend",a),$="workout",s<3?I(s):I(3)}catch(t){console.log(t)}}function ot(e){p=document.createElement("span"),p.classList.add("exercise-title-card"),p.innerHTML=e,M.classList.add("exercises-gallery-label"),M.innerHTML=" / ",C.appendChild(M),C.appendChild(p)}function Ee(){p&&(C.removeChild(p),C.removeChild(M),p=null,R())}const lt="feedback-form",U=document.querySelector(".footer-modal-form");U.addEventListener("submit",e=>{e.preventDefault();const{email:t}=U.elements,s={email:t.value.trim()};N.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(s),localStorage.removeItem(lt),U.reset()});
//# sourceMappingURL=commonHelpers2.js.map
