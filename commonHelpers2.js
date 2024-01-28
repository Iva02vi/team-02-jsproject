import"./assets/quote-1da8f9b3.js";import{a as f,i as L}from"./assets/vendor-8cce9181.js";const p=document.querySelector(".back-to-top"),q=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(q),window.scrollTo(0,e-e/8))};p.addEventListener("click",q);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?p.classList.add("active"):p.classList.remove("active")});const b=document.querySelector(".gallery-collection");document.querySelector(".gallery-item");document.querySelector(".filtred-submit");const x=document.querySelector(".gallery-list"),N=document.querySelector(".exercise-title"),h=document.querySelector(".page-button-list"),E=document.querySelector(".input-submit-key"),O=document.querySelector(".filtred-submit"),$="https://energyflow.b.goit.study/api/",j="muscles",D="bodypart",I="equipment";let l=1;const c={content:null,title:null},T=document.querySelector(".muscles");T.classList.add(".active");T.addEventListener("click",C);const Q=document.querySelector(".body-parts");Q.addEventListener("click",G);const W=document.querySelector(".equipment");W.addEventListener("click",V);h.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!=="button")return;i(),l=parseInt(e.target.value);const t={limit:u(),page:l};t[c.content]=c.title,w(t)});function C(){i();const e={limit:u(),page:l,filter:"Muscles"};c.content=j,v(e)}function G(){i();const e={limit:u(),page:l,filter:"Body parts"};c.content=D,v(e)}function V(){i();const e={limit:u(),page:l,filter:"Equipment"};c.content=I,v(e)}function i(){B(),z(),K()}async function v(e){try{const t=await f.get(`${$}filters`,{params:e});console.log(t);const{totalPages:r,results:n}=t.data;if(n.length==0)return alert("NO MORE EXEERCISES"),console.log(n.data);let s=n.reduce((m,o)=>m+`<li class="gallery-item">
                        <a class="gallery-link" href="${o.imgUrl}">
                            <img class="gallery-image" data-source="${o.imgUrl}" src="${o.imgUrl}" alt="${o.name}" width="360" height="200"/>
                        </a>
                        <div class='title'>
                            <p>${o.name}</p>
                        </div>
                </li>`,"");b.insertAdjacentHTML("beforeend",s)}catch(t){console.log(t)}}b.addEventListener("click",e=>{e.preventDefault(),i();const t=e.target.alt;c.title=t,l=1;const r={limit:u(),page:l};r[c.content]=t,Y(t),w(r)});function Y(e){N.innerHTML=`Exercises / <span class="exercise-title-card"> ${e}</span>`}async function w(e){try{const t=await f.get(`${$}exercises`,{params:e}),{totalPages:r,results:n}=t.data;if(n.length==0){Z(),J();return}let s=n.reduce((m,o)=>{const H=_(o.rating);return m+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-rating">
                        <p class="workout-title">WORKOUT</p>
                        <p class="rating-title">${o.rating}
                          ${H}
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
                            <span class="filter-type">${c.content}</span>
                        </p>
                        <p class="target">Target:
                        <span class="key-word">${o.target}</span>
                        </p>
                    </div>
                </div>
            </li>`},"");x.insertAdjacentHTML("beforeend",s),h.innerHTML=X(r)}catch(t){console.log(t)}}function z(){b.replaceChildren()}function K(){x.replaceChildren()}function _(e){let t="";e=Math.floor(e);for(let r=0;r<e;r++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}function X(e){let t="";const r=Math.min(e,5);for(let n=1;n<=r;n++)t+=`<button class="button-next-page" value="${n}">${n}</button>`;return t}const P=document.querySelector(".card-error-message");function J(){P.style.visibility="visible"}function B(){P.style.visibility="hidden"}O.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;l=1;const t=E.value.trim();if(console.log(t),t.length===0){L.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}i();const r={limit:u(),page:l,keyword:t};r[c.content]=c.title,E.value="",w(r)});function Z(){h.replaceChildren()}function u(){return document.documentElement.clientWidth>768?12:8}B();C();const k=document.querySelector(".exercises-gallery"),d=document.querySelector(".exercises-gallery-filter"),y=document.querySelector(".page-buttons-container"),ee="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},te=0;const M="muscles",re=f.create({baseURL:ee});function A(e){k.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
      <a href="${r.imgUrl}">
      <div>
        <img
          class="exercises-item"
          src="${r.imgUrl}"
          alt="${r.name}">
          <div class="text-card">
          <p class = "name-card">${r.name}</p>
          <p class = "type-card">${r.filter}</p>
          </div>
          </div>
      </a>
    </li>`);return k.insertAdjacentHTML("beforeend",t.join("")),e}function ne(e){let t="";y.innerHTML="";for(let r=1;r<=e.totalPages;r++)r===1?t+=`<li>
      <button class="page-button active" type="button" id="${r}">${r}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${r}">${r}</button>`;y.insertAdjacentHTML("afterbegin",t)}d.addEventListener("click",function(e){if(e.target.tagName==="BUTTON"){const t=e.target.getAttribute("name");S(t)}});function S(e){let t={};switch(F(),e){case"body":a.filter="Body parts",t=d.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=d.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=d.querySelectorAll(`button[name="${e}"]`)}oe(t);const n=`?${new URLSearchParams(a).toString()}`;U(n).then(s=>A(s)).then(s=>ne(s)).catch(s=>console.error(s))}function se(){const t=`?${new URLSearchParams(a).toString()}`;U(t).then(r=>A(r)).catch(r=>console.error(r))}async function U(e){try{const t=await re.get(e);return te=t.data.totalPages,t.data}catch(t){console.error(t)}}function oe(e){const t=d.querySelectorAll("button"),r=Array.from(e);for(let n=0;n<t.length;n++){const s=t[n];r.includes(s)?(s.style.backgroundColor="var(--dark-gray)",s.style.color="var(--white)"):(s.style.backgroundColor="var(--white-smoke)",s.style.color="var(--black)")}}y.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;console.log("Clicked button value: "+r),R(r)}});function R(e){document.querySelectorAll(".page-button").forEach(r=>{r.id===e?(r.classList.add("active"),a.page=e,se()):r.classList.remove("active")})}window.addEventListener("resize",()=>{F(),S(M),R(1)});function F(){document.documentElement.clientWidth>1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}S(M);const ae="feedback-form",g=document.querySelector(".footer-modal-form");g.addEventListener("submit",e=>{e.preventDefault();const{email:t}=g.elements,r={email:t.value.trim()};L.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(r),localStorage.removeItem(ae),g.reset()});
//# sourceMappingURL=commonHelpers2.js.map
