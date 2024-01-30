import{o as R}from"./assets/modal-window-exercise-6828e0d1.js";/* empty css                      */import{i as S,a as q}from"./assets/vendor-8cce9181.js";const k=document.querySelector(".back-to-top"),C=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(C),window.scrollTo(0,e-e/8))};k.addEventListener("click",C);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?k.classList.add("active"):k.classList.remove("active")});var j=document.getElementById("myAudio");j.addEventListener("ended",function(){S.show({title:"Lets do it!",message:"Subscribe in the bottom, and learn about new exercises!",position:"bottomCenter",timeout:1e4,backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"})});const y=document.querySelector(".exercises-gallery-label"),i=document.querySelector(".exercises-gallery-group"),p=document.querySelector(".exercises-gallery-filter"),g=document.querySelector(".page-buttons-container");let l=null;const f=document.createElement("span"),$=document.querySelector("#filtre-key"),b=document.querySelector(".search-tool"),D=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location),M=document.querySelector(".error-card-message"),O="https://energyflow.b.goit.study/api/";let u=1;const c={content:null,title:null},W="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},m="filter";const A="muscles",I=q.create({baseURL:W});function B(e){i.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return i.insertAdjacentHTML("beforeend",t.join("")),e}p.addEventListener("click",function(e){if(P(),h(),b.style.display="none",e.target.tagName==="BUTTON"){m="filter";const t=e.target.getAttribute("name");E(t)}});function E(e){b.style.display="none";let t={};switch(F(),e){case"body":a.filter="Body parts",t=p.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=p.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=p.querySelectorAll(`button[name="${e}"]`)}Q(t);const s=`?${new URLSearchParams(a).toString()}`;U(s).then(o=>B(o)).then(o=>L(o.totalPages)).catch(o=>console.error(o))}function N(){const t=`?${new URLSearchParams(a).toString()}`;U(t).then(r=>B(r)).catch(r=>console.error(r))}async function U(e){try{return(await I.get(e)).data}catch(t){console.error(t)}}function Q(e){const t=p.querySelectorAll("button"),r=Array.from(e);for(let s=0;s<t.length;s++){const o=t[s];r.includes(o)?(o.style.backgroundColor="var(--dark-gray)",o.style.color="var(--white)"):(o.style.backgroundColor="var(--white-smoke)",o.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+m)}function L(e){let t="";g.innerHTML="";for(let r=1;r<=e;r++)r===1?t+=`<li>
      <button class="page-button active" type="button" id="${r}">${r}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${r}">${r}</button>`;g.insertAdjacentHTML("afterbegin",t)}g.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;H(r)}});function H(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),m){case"filter":a.page=e,N();break;case"workout":u=e;const s={limit:x(),page:u};s[c.content]=c.title,T(s);break}else r.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),F(),E(A),H(1)});function F(){document.documentElement.clientWidth>1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}E(A);i.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){m="workout",b.style.display="flex";const r=t.querySelector(".name-card").textContent;let s=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");s==="bodyparts"&&(s=s.slice(0,-1)),z(r,s)}});function V(){h(),P(),i.innerHTML="",g.innerHTML=""}function Y(e){let t="";e=Math.floor(e);for(let r=0;r<e;r++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}b.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;u=1;const t=$.value.trim();if(console.log(t),t.length===0){S.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}V();const r={limit:x(),page:u,keyword:t};r[c.content]=c.title,$.value="",T(r)});function x(){return document.documentElement.clientWidth>768?12:8}function _(){M.style.display="block"}function h(){M.style.display="none"}h();function z(e,t){c.title=e,c.content=t,u=1;const r={limit:x(),page:u};r[c.content]=e,G(e),T(r)}async function T(e){try{const t=await q.get(`${O}exercises`,{params:e}),{totalPages:r,results:s}=t.data;if(s.length==0){_();return}let o=s.reduce((d,n)=>{i.innerHTML="",g.innerHTML="";const v=Y(n.rating);return d+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-rating">
                        <p class="workout-title">WORKOUT</p>
                        <p class="rating-title">${n.rating}
                          ${v}
                        </p>
            <button type="button" class="start-button" data-exercise-id=${n._id} >Start
                            <span class="arrow-icon">
                                <svg class="start-arrow-icon" width="16" height="16" aria-label="start-arrow">
                                    <use href=${D}></use>
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
            </li>`},"");i.insertAdjacentHTML("beforeend",o),i.addEventListener("click",async d=>{let n;const v=d.target;d.target&&d.target.closest(".start-button")&&(n=v.closest(".start-button").getAttribute("data-exercise-id"),await R(n))}),m="workout",r<3?L(r):L(3)}catch(t){console.log(t)}}function G(e){l=document.createElement("span"),l.classList.add("exercise-title-card"),l.innerHTML=e,f.classList.add("exercises-gallery-label"),f.innerHTML=" / ",y.appendChild(f),y.appendChild(l)}function P(){l&&(y.removeChild(l),y.removeChild(f),l=null,h())}const K="feedback-form",w=document.querySelector(".footer-modal-form");w.addEventListener("submit",e=>{e.preventDefault();const{email:t}=w.elements,r={email:t.value.trim()};S.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"}),console.log(r),localStorage.removeItem(K),w.reset()});
//# sourceMappingURL=commonHelpers2.js.map
