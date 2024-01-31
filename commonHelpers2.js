import{o as j}from"./assets/mob-menu-1d0d75a8.js";/* empty css                      */import{i as f,a as $}from"./assets/vendor-8cce9181.js";const S=document.querySelector(".back-to-top"),q=()=>{const e=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e>0&&(window.requestAnimationFrame(q),window.scrollTo(0,e-e/8))};S.addEventListener("click",q);window.addEventListener("scroll",()=>{(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>350?S.classList.add("active"):S.classList.remove("active")});var F=document.getElementById("myAudio");F.addEventListener("ended",function(){f.show({title:"Lets do it!",message:"Subscribe in the bottom, and learn about new exercises!",position:"bottomCenter",timeout:1e4,backgroundColor:"var( --dark-gray-hover)",messageColor:"var( --white-smoke)"})});const b=document.querySelector(".exercises-gallery-label"),l=document.querySelector(".exercises-gallery-group"),p=document.querySelector(".exercises-gallery-filter"),g=document.querySelector(".page-buttons-container");let c=null;const y=document.createElement("span"),C=document.querySelector("#filtre-key"),h=document.querySelector(".search-tool"),O=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location),M=document.querySelector(".error-card-message"),D="https://energyflow.b.goit.study/api/";let u=1;const i={content:null,title:null},I="https://energyflow.b.goit.study/api/filters";let a={filter:"Muscles",page:1,limit:8},m="filter";const A="muscles",W=$.create({baseURL:I});function B(e){l.innerHTML="";const t=e.results.map(r=>`<li class="exercises-item-background">
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
    </li>`);return l.insertAdjacentHTML("beforeend",t.join("")),e}p.addEventListener("click",function(e){if(R(),v(),h.style.display="none",e.target.tagName==="BUTTON"){m="filter";const t=e.target.getAttribute("name");E(t)}});function E(e){h.style.display="none";let t={};switch(H(),e){case"body":a.filter="Body parts",t=p.querySelectorAll(`button[name="${e}"]`);break;case"equipment":a.filter="Equipment",t=p.querySelectorAll(`button[name="${e}"]`);break;default:a.filter="Muscles",t=p.querySelectorAll(`button[name="${e}"]`)}Q(t);const s=`?${new URLSearchParams(a).toString()}`;U(s).then(o=>B(o)).then(o=>L(o.totalPages)).catch(o=>console.error(o))}function N(){const t=`?${new URLSearchParams(a).toString()}`;U(t).then(r=>B(r)).catch(r=>console.error(r))}async function U(e){try{return(await W.get(e)).data}catch(t){console.error(t)}}function Q(e){const t=p.querySelectorAll("button"),r=Array.from(e);for(let s=0;s<t.length;s++){const o=t[s];r.includes(o)?(o.style.backgroundColor="var(--dark-gray)",o.style.color="var(--white)"):(o.style.backgroundColor="var(--white-smoke)",o.style.color="var(--black)")}console.log("changeButtonColor function toggle is: "+m)}function L(e){let t="";g.innerHTML="";for(let r=1;r<=e;r++)r===1?t+=`<li>
      <button class="page-button active" type="button" id="${r}">${r}</button>
    </li>`:t+=`<li>
      <button class="page-button" type="button" id="${r}">${r}</button>`;g.insertAdjacentHTML("afterbegin",t)}g.addEventListener("click",function(e){const t=e.target.closest(".page-button");if(t){const r=t.id;P(r)}});function P(e){document.querySelectorAll(".page-button").forEach(r=>{if(r.id===e)switch(r.classList.add("active"),m){case"filter":a.page=e,N();break;case"workout":u=e;const s={limit:x(),page:u};s[i.content]=i.title,T(s);break}else r.classList.remove("active")})}window.addEventListener("resize",e=>{e.preventDefault(),H(),E(A),P(1)});function H(){document.documentElement.clientWidth>1440?(a.page=1,a.limit=12):(a.page=1,a.limit=8)}E(A);l.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".exercises-item-background");if(t){m="workout",h.style.display="flex";const r=t.querySelector(".name-card").textContent;let s=t.querySelector(".type-card").textContent.toLowerCase().replace(/\s/g,"");s==="bodyparts"&&(s=s.slice(0,-1)),G(r,s)}});function V(){v(),R(),l.innerHTML="",g.innerHTML=""}function _(e){let t="";e=Math.floor(e);for(let r=0;r<e;r++)t+=`
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;return t}h.addEventListener("click",e=>{if(e.preventDefault(),e.target.localName!="svg")return;u=1;const t=C.value.trim();if(console.log(t),t.length===0){f.error({title:"Error",position:"topCenter",message:"Sorry, Please choose an exercise."});return}V();const r={limit:x(),page:u,keyword:t};r[i.content]=i.title,C.value="",T(r)});function x(){return document.documentElement.clientWidth>768?12:8}function z(){M.style.display="block"}function v(){M.style.display="none"}v();function G(e,t){i.title=e,i.content=t,u=1;const r={limit:x(),page:u};r[i.content]=e,Y(e),T(r)}async function T(e){try{const t=await $.get(`${D}exercises`,{params:e}),{totalPages:r,results:s}=t.data;if(s.length==0){z();return}let o=s.reduce((d,n)=>{l.innerHTML="",g.innerHTML="";const w=_(n.rating);return d+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-rating">
                        <p class="workout-title">WORKOUT</p>
                        <p class="rating-title">${n.rating}
                          ${w}
                        </p>
            <button type="button" class="start-button" data-exercise-id=${n._id} >Start
                            <span class="arrow-icon">
                                <svg class="start-arrow-icon" width="16" height="16" aria-label="start-arrow">
                                    <use href=${O}></use>
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
                            <span class="filter-type">${i.content}</span>
                        </p>
                        <p class="target">Target:
                        <span class="key-word">${n.target}</span>
                        </p>
                    </div>
                </div>
            </li>`},"");l.insertAdjacentHTML("beforeend",o),l.addEventListener("click",async d=>{let n;const w=d.target;d.target&&d.target.closest(".start-button")&&(n=w.closest(".start-button").getAttribute("data-exercise-id"),await j(n))}),m="workout",r<3?L(r):L(3)}catch(t){console.log(t)}}function Y(e){c=document.createElement("span"),c.classList.add("exercise-title-card"),c.innerHTML=e,y.classList.add("exercises-gallery-label"),y.innerHTML=" / ",b.appendChild(y),b.appendChild(c)}function R(){c&&(b.removeChild(c),b.removeChild(y),c=null,v())}const J="https://energyflow.b.goit.study/api/subscription",k=document.querySelector(".footer-modal-form");k.addEventListener("submit",async e=>{e.preventDefault();const{email:t}=k.elements;try{if((await fetch(J,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value.trim()})})).ok){const s={email:t.value.trim()};f.success({position:"topCenter",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"}),console.log(s),k.reset()}else f.error({position:"topCenter",message:"This email is already in the subscriber base. Maybe you should use another one",backgroundColor:"var(--dark-gray-hover)",messageColor:"var(--white-smoke)"})}catch(r){console.error("Error POST API:",r.message)}});
//# sourceMappingURL=commonHelpers2.js.map
