const requestUrl="db.json";fetch("db.json").then((t=>t.json())).then((t=>{let e=t.flatlist;const s=document.querySelector(".flat-list");function i(){n=0;let t=Object.assign([],updateList()).splice(0,10),e="";t.forEach((function(t){e+=`\n                    <li class="flat-list__item flat-item">\n                        <div class="flat-item__content">\n                            <span class="flat-item__rooms">${t.rooms}${t.text}</span>\n                            <div class="flat-item__description">\n                            <span class="flat-item__size">${t.size}</span>\n                            <span class="flat-item__floor">${t.floor}</span>\n                            <span class="flat-item__price">${t.price}</span></div>\n                            <img class="flat-item__img" src="${t.img}" alt="flat plan">\n                        </div>\n                    </li>\n                    `})),s.innerHTML=e,a()}updateList=t=>e.filter((function(t){let e=sliderByPrice.noUiSlider.get(),s=sliderBySize.noUiSlider.get();const i=document.querySelector("input:checked");return t.price>=e[0]&&t.price<=e[1]&&t.size>=s[0]&&t.size<=s[1]&&t.rooms===Number(i.value)}));let n=0;const l=document.querySelector("#more-btn");function a(){document.querySelectorAll(".flat-item").length>=updateList().length?l.classList.add("main__btn--hide"):l.classList.remove("main__btn--hide")}l.addEventListener("click",(()=>{n+=10,Object.assign([],updateList()).splice(n,10).forEach((function(t){s.innerHTML+=`\n                    <li class="flat-list__item flat-item">\n                        <div class="flat-item__content">\n                            <span class="flat-item__rooms">${t.rooms}${t.text}</span>\n                            <div class="flat-item__description">\n                            <span class="flat-item__size">${t.size}</span>\n                            <span class="flat-item__floor">${t.floor}</span>\n                            <span class="flat-item__price">${t.price}</span></div>\n                            <img class="flat-item__img" src="${t.img}" alt="flat plan">\n                        </div>\n                    </li>\n                    `})),a()}));const c=document.querySelectorAll("#sort-btn");let o=!1;c.forEach((t=>{t.addEventListener("click",(()=>{let s=t;c.forEach((t=>{t.classList.remove("sort__btn--active")})),s.classList.add("sort__btn--active");let n=s.dataset.target;"price"===n?!1===o?e.sort(((t,e)=>t.price>e.price?1:-1)):e.sort(((t,e)=>t.price<e.price?1:-1)):"size"===n?!1===o?e.sort(((t,e)=>t.size>e.size?1:-1)):e.sort(((t,e)=>t.size<e.size?1:-1)):"floor"===n&&(!1===o?e.sort(((t,e)=>t.floor>e.floor?1:-1)):e.sort(((t,e)=>t.floor<e.floor?1:-1))),o=!o,i()}))})),sliderByPrice.noUiSlider.on("change",(function(){fetch("db.json").then((t=>t.json())).then((t=>{e=t.flatlist,i()}))})),sliderBySize.noUiSlider.on("change",(function(){fetch("db.json").then((t=>t.json())).then((t=>{e=t.flatlist,i()}))}));document.querySelectorAll(".radio__input").forEach((function(t){t.addEventListener("click",(()=>{fetch("db.json").then((t=>t.json())).then((t=>{e=t.flatlist,i()}))}))}));document.querySelector(".filter__reset").addEventListener("click",(()=>{sliderBySize.noUiSlider.reset(),e=t.flatlist,i()}));i()})).catch((t=>console.log(t)));