import{o as g}from"./assets/mob-menu-1d0d75a8.js";import"./assets/vendor-8cce9181.js";const l=document.querySelector(".favorites-page-items-not-found"),o=document.querySelector(".favorites-page-items-gallery"),p=new URL("/team-02-jsproject/assets/sprite-7048d1fb.svg#icon-arrow",self.location),r="favorites",c=localStorage.getItem(r),a=JSON.parse(c);let m=Math.ceil(a.length/3);console.log(m);console.log(a);function n(e){e.style.display="none"}function v(e){e.style.display="flex"}function d(e){const i=e.reduce((s,t)=>s+`<li class="gallery-list-item">
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
                                  <use href=${p}></use>
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
            </li>`,"");o.innerHTML=i}c===null||a.length===0?n(o):(n(l),d(a));o.addEventListener("click",async e=>{let i;const s=e.target;console.log(s),s&&s.closest(".start-button")&&(i=s.closest(".start-button").getAttribute("id"),await g(i))});o.addEventListener("click",e=>{if(e.target.className==="delete-workout-btn"){const i=localStorage.getItem(r),t=JSON.parse(i).filter(u=>u._id!==e.target.id);localStorage.setItem(r,JSON.stringify(t)),t.length===0?(n(o),v(l)):d(t)}});
//# sourceMappingURL=commonHelpers.js.map
