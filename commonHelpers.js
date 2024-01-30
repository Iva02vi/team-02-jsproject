import"./assets/modal-window-exercise-aa4bedeb.js";import"./assets/vendor-8cce9181.js";const l=document.querySelector(".favorites-page-items-not-found"),a=document.querySelector(".favorites-page-items-gallery"),o="savedExercises",c=localStorage.getItem(o),r=JSON.parse(c);function n(t){t.style.display="none"}function u(t){t.style.display="flex"}function d(t){const i=t.reduce((s,e)=>s+`<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-header">
                        <div class="workout-header-wrap">
                            <span class="workout-title">WORKOUT</span>
                            <button type="button" class="delete-workout-btn" id="${e._id}">                            
                                <svg class="trash-icon" id="${e._id}" width="16" height="16" aria-label="trash-icon">
                                  <use href="./img/sprite.svg#icon-trash" id="${e._id}"></use>
                                </svg>
                            </button>
                        </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button" id="${e._id}>Start
                                <svg class="start-arrow-icon" id="${e._id} width="14" height="14" aria-label="start-arrow">
                                  <use href="./img/sprite.svg#icon-arrow"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="workout-type">
                        <svg class="run-man-icon" width="24" height="24" aria-label="run-man">
                            <use href="./img/sprite.svg#icon-lighticon"></use>
                        </svg>
                        <h3 class="workout-name">${e.name}</h3>
                    </div>
                    <div class="workout-description">
                        <p class="description-item-name">Burned calories:
                            <span class="description-item-value">${e.burnedCalories} / ${e.time} min</span>
                        </p>
                        <p class="description-item-name">Body part:
                            <span class="description-item-value">${e.bodyPart}</span>
                        </p>
                        <p class="description-item-name">Target:
                            <span class="description-item-value">${e.target}</span>
                        </p>
                    </div>
                </div>
            </li>`,"");a.innerHTML=i}c===null||r.length===0?n(a):(n(l),d(r));a.addEventListener("click",t=>{if(t.target.className==="delete-workout-btn"||t.target.ariaLabel==="trash-icon"){const i=r.filter(s=>s._id!==t.target.id);if(localStorage.setItem(o,JSON.stringify(i)),i.length===0)n(a),u(l);else{const s=localStorage.getItem(o),e=JSON.parse(s);d(e)}}});
//# sourceMappingURL=commonHelpers.js.map
