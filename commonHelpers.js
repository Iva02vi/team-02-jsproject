import{o as S}from"./assets/mob-menu-fc4d99a8.js";import"./assets/vendor-8cce9181.js";const w=document.querySelector(".favorites-page-items-not-found"),l=document.querySelector(".favorites-page-items-gallery"),y=document.querySelector(".favorites-page-items"),r=document.querySelector(".favorites-mobile-pagination"),k=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location),p="favorites",$=localStorage.getItem(p),g=JSON.parse($),x=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-lighticon",self.location),E=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-trash",self.location),n=8;let d=1,o=d*n,c=o-n,a="",f,v,b,m=Math.ceil(g.length/n);function h(t){t.style.display="none",t===l&&innerWidth>768&&(y.style.paddingRight="48px")}function L(t){t.style.display="flex",t===l&&innerWidth>768&&(y.style.paddingRight="0")}window.innerWidth<768&&L(r);function u(t){l.innerHTML="";const i=t.reduce((e,s)=>e+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-header">
                        <div class="workout-header-wrap">
                            <span class="workout-title">WORKOUT</span>
                            <button type="button" class="delete-workout-btn" id="${s._id}">                            
                                <svg class="trash-icon" id="${s._id}" width="16" height="16" aria-label="trash-icon">
                                  <use href=${E} id="${s._id}"></use>
                                </svg>
                            </button>
                        </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button-item" id=${s._id}>Start
                                <svg class="start-arrow-icon" id=${s._id} width="14" height="14" aria-label="start-arrow">
                                  <use href=${k}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="workout-type">
                        <svg class="run-man-icon" width="24" height="24" aria-label="run-man">
                            <use href="${x}"></use>
                        </svg>
                        <h3 class="workout-name">${s.name}</h3>
                    </div>
                    <div class="workout-description">
                        <p class="description-item-name">Burned calories:
                            <span class="description-item-value">${s.burnedCalories} / ${s.time} min</span>
                        </p>
                        <p class="description-item-name">Body part:
                            <span class="description-item-value">${s.bodyPart}</span>
                        </p>
                        <p class="description-item-name">Target:
                            <span class="description-item-value">${s.target}</span>
                        </p>
                    </div>
                </div>
            </li>`,"");l.innerHTML=i}$===null||g.length===0?h(l):(h(w),u(g));l.addEventListener("click",async t=>{let i;const e=t.target;e&&e.closest(".start-button")&&(i=e.closest(".start-button").getAttribute("id"),await S(i))});if(window.innerWidth<768){a="",r.innerHTML="";for(let t=1;t<=m;t++)t===1?a+=`
        <li>
          <button class="favorites-pagination-button fav-active-page" type="button" id="${t}">${t}</button>
        </li>`:a+=`
        <li>
          <button class="favorites-pagination-button" type="button" id="${t}">${t}</button>
        </li>`;r.innerHTML=a,u(g.slice(c,o)),r.addEventListener("click",t=>{if(t.preventDefault(),t.target.classList.value.includes("favorites-pagination-button")){d=t.target.id,o=d*n,c=o-n,f=localStorage.getItem(p),v=JSON.parse(f),u(v.slice(c,o));const i=t.target.closest(".favorites-pagination-button");b=document.querySelectorAll(".favorites-pagination-button"),b.forEach(e=>{e.id===i.id?e.classList.add("fav-active-page"):e.classList.remove("fav-active-page")}),window.scrollBy({top:700,behavior:"smooth"})}})}l.addEventListener("click",t=>{if(t.preventDefault(),t.target.className==="delete-workout-btn"){f=localStorage.getItem(p),v=JSON.parse(f);const i=v.filter(e=>e._id!==t.target.id);if(localStorage.setItem(p,JSON.stringify(i)),i.length===0)h(l),L(w),window.scrollBy({top:700,behavior:"smooth"}),window.innerWidth<768&&h(r);else if(window.innerWidth<768){m=Math.ceil(i.length/n),a="";for(let e=1;e<=m;e++)e===Number(d)?a+=`
              <li>
                <button class="favorites-pagination-button fav-active-page" type="button" id="${e}">${e}</button>
              </li>`:a+=`
              <li>
                <button class="favorites-pagination-button" type="button" id="${e}">${e}</button>
              </li>`;r.innerHTML=a,o=d*n,c=o-n,u(i.slice(c,o)),window.scrollBy({top:700,behavior:"smooth"})}else u(i)}});
//# sourceMappingURL=commonHelpers.js.map
