(()=>{"use strict";const e=document.querySelector(".place-ships-board");class t{constructor(){this.board=this.createBoard()}createBoard(){let e=[];for(let t=0;t<10;t++)for(let t=0;t<10;t++)e.push({ship:!1,shot:!1});return e}}!function(){!function(){const e=document.querySelector(".form-container");let t=document.querySelector(".start-game-btn"),o=document.querySelector(".restart-game-btn"),i=document.querySelector("#submit-button");t.addEventListener("click",(()=>{e.style.visibility="visible",console.log("start")})),o.addEventListener("click",(()=>{e.style.visibility="visible",console.log("reset")})),i.addEventListener("click",(()=>{e.style.visibility="hidden"}))}(),function(){for(let t=0;t<10;t++){const o=document.createElement("div");o.setAttribute("id","box-container"+t),o.setAttribute("class","box-container"),e.appendChild(o);for(let e=0;e<10;e++){const o=document.querySelector("#box-container"+t),i=document.createElement("div");i.setAttribute("class","box"),i.setAttribute("id","box"+t+e),i.innerHTML="id"+t+e,o.appendChild(i)}}}();let o=new t;console.log(o)}()})();