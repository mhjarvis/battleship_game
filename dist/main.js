(()=>{"use strict";const e=document.querySelector(".place-ships-board");!function(){const e=document.querySelector(".form-container");let t=document.querySelector(".start-game-btn"),i=document.querySelector(".restart-game-btn"),n=document.querySelector("#submit-button");t.addEventListener("click",(()=>{e.style.visibility="visible",console.log("start")})),i.addEventListener("click",(()=>{e.style.visibility="visible",console.log("reset")})),n.addEventListener("click",(()=>{e.style.visibility="hidden"}))}(),function(){for(let t=0;t<10;t++){const i=document.createElement("div");i.setAttribute("id","box-container"+t),i.setAttribute("class","box-container"),e.appendChild(i);for(let e=0;e<10;e++){const i=document.querySelector("#box-container"+t),n=document.createElement("div");n.setAttribute("class","box"),n.setAttribute("id","box"+t+e),n.innerHTML="id"+t+e,i.appendChild(n)}}}()})();