import{o as u}from"./assets/mob-menu-1d0d75a8.js";import"./assets/vendor-8cce9181.js";const l=document.querySelector(".favorites-page-items-not-found"),o=document.querySelector(".favorites-page-items-gallery"),g=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location),r="favorites",c=localStorage.getItem(r),a=JSON.parse(c);function n(e){e.style.display="none"}function p(e){e.style.display="flex"}function d(e){const i=e.reduce((s,t)=>s+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-header">
                        <div class="workout-header-wrap">
                            <span class="workout-title">WORKOUT</span>
                            <button type="button" class="delete-workout-btn" id="${t._id}">                            
                                <svg class="trash-icon" id="${t._id}" width="16" height="16" aria-label="trash-icon">
                                  <use href="./img/sprite.svg#icon-trash" id="${t._id}"></use>
                                </svg>
                            </button>
                        </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button" id=${t._id}>Start
                                <svg class="start-arrow-icon" id=${t._id} width="14" height="14" aria-label="start-arrow">
                                  <use href=${g}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="workout-type">
                        <svg class="run-man-icon" width="24" height="24" aria-label="run-man">
                            <use href="./img/sprite.svg#icon-lighticon"></use>
                        </svg>
                        <h3 class="workout-name">${t.name}</h3>
                    </div>
                    <div class="workout-description">
                        <p class="description-item-name">Burned calories:
                            <span class="description-item-value">${t.burnedCalories} / ${t.time} min</span>
                        </p>
                        <p class="description-item-name">Body part:
                            <span class="description-item-value">${t.bodyPart}</span>
                        </p>
                        <p class="description-item-name">Target:
                            <span class="description-item-value">${t.target}</span>
                        </p>
                    </div>
                </div>
            </li>`,"");o.innerHTML=i}console.log(a);c===null||a.length===0?n(o):(n(l),d(a));o.addEventListener("click",async e=>{let i;const s=e.target;console.log(s),s&&s.closest(".start-button")&&(i=s.closest(".start-button").getAttribute("id"),await u(i))});o.addEventListener("click",e=>{if(e.target.className==="delete-workout-btn"||e.target.ariaLabel==="trash-icon"){const i=a.filter(s=>s._id!==e.target.id);if(localStorage.setItem(r,JSON.stringify(i)),i.length===0)n(o),p(l);else{const s=localStorage.getItem(r),t=JSON.parse(s);d(t)}}});
//# sourceMappingURL=commonHelpers.js.map
