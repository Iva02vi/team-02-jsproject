import{o as L}from"./assets/mob-menu-fc4d99a8.js";import"./assets/vendor-8cce9181.js";const w=document.querySelector(".favorites-page-items-not-found"),c=document.querySelector(".favorites-page-items-gallery"),l=document.querySelector(".favorites-mobile-pagination"),S=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location),p="favorites",y=localStorage.getItem(p),u=JSON.parse(y),k=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-lighticon",self.location),E=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-trash",self.location),n=8;let r=1,o=r*n,d=o-n,a="",v,f,m,h=Math.ceil(u.length/n);console.log("totalPages: ",h);console.log("savedInStorageExercises.length:",u.length);function b(t){t.style.display="none"}function $(t){t.style.display="flex"}window.innerWidth<768&&$(l);function g(t){c.innerHTML="";const s=t.reduce((e,i)=>e+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-header">
                        <div class="workout-header-wrap">
                            <span class="workout-title">WORKOUT</span>
                            <button type="button" class="delete-workout-btn" id="${i._id}">                            
                                <svg class="trash-icon" id="${i._id}" width="16" height="16" aria-label="trash-icon">
                                  <use href=${E} id="${i._id}"></use>
                                </svg>
                            </button>
                        </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button" id=${i._id}>Start
                                <svg class="start-arrow-icon" id=${i._id} width="14" height="14" aria-label="start-arrow">
                                  <use href=${S}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="workout-type">
                        <svg class="run-man-icon" width="24" height="24" aria-label="run-man">
                            <use href="${k}"></use>
                        </svg>
                        <h3 class="workout-name">${i.name}</h3>
                    </div>
                    <div class="workout-description">
                        <p class="description-item-name">Burned calories:
                            <span class="description-item-value">${i.burnedCalories} / ${i.time} min</span>
                        </p>
                        <p class="description-item-name">Body part:
                            <span class="description-item-value">${i.bodyPart}</span>
                        </p>
                        <p class="description-item-name">Target:
                            <span class="description-item-value">${i.target}</span>
                        </p>
                    </div>
                </div>
            </li>`,"");c.innerHTML=s}y===null||u.length===0?b(c):(b(w),g(u));c.addEventListener("click",async t=>{let s;const e=t.target;console.log(e),e&&e.closest(".start-button")&&(s=e.closest(".start-button").getAttribute("id"),await L(s))});if(window.innerWidth<768){a="",l.innerHTML="";for(let t=1;t<=h;t++)t===1?a+=`
        <li>
          <button class="favorites-pagination-button fav-active-page" type="button" id="${t}">${t}</button>
        </li>`:a+=`
        <li>
          <button class="favorites-pagination-button" type="button" id="${t}">${t}</button>
        </li>`;l.innerHTML=a,g(u.slice(d,o)),l.addEventListener("click",t=>{if(t.preventDefault(),t.target.classList.value.includes("favorites-pagination-button")){r=t.target.id,o=r*n,d=o-n,v=localStorage.getItem(p),f=JSON.parse(v),g(f.slice(d,o));const s=t.target.closest(".favorites-pagination-button");m=document.querySelectorAll(".favorites-pagination-button"),m.forEach(e=>{e.id===s.id?e.classList.add("fav-active-page"):e.classList.remove("fav-active-page")}),window.scrollBy({top:700,behavior:"smooth"})}})}c.addEventListener("click",t=>{if(t.preventDefault(),t.target.className==="delete-workout-btn"){v=localStorage.getItem(p),f=JSON.parse(v);const s=f.filter(e=>e._id!==t.target.id);if(localStorage.setItem(p,JSON.stringify(s)),s.length===0)b(c),$(w),window.scrollBy({top:700,behavior:"smooth"}),window.innerWidth<768&&b(l);else if(window.innerWidth<768){h=Math.ceil(s.length/n),a="";for(let e=1;e<=h;e++)e===Number(r)?a+=`
              <li>
                <button class="favorites-pagination-button fav-active-page" type="button" id="${e}">${e}</button>
              </li>`:a+=`
              <li>
                <button class="favorites-pagination-button" type="button" id="${e}">${e}</button>
              </li>`;console.log("currentPage: ",r),l.innerHTML=a,o=r*n,d=o-n,g(s.slice(d,o)),window.scrollBy({top:700,behavior:"smooth"})}else g(s)}});
//# sourceMappingURL=commonHelpers.js.map
