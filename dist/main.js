(()=>{"use strict";class e{constructor(){this.board=this.createBoard()}createBoard(){let e=[],t=[];for(let o=0;o<10;o++){for(let e=0;e<10;e++)t.push({coordinate:[o,e],ship:!1,shot:!1});e.push(t),t=[]}return e}buildBoard(e){const t=document.querySelector(e);for(let e=0;e<10;e++)for(let o=0;o<10;o++){const r=document.createElement("div");r.setAttribute("id","id"+e+o),r.setAttribute("class","box"),t.appendChild(r),r.innerHTML=this.board[e][o].coordinate,console.log("test")}}}document.querySelector(".place-ships-board"),function(){const t=document.querySelector(".form-container");let o=document.querySelector(".start-game-btn"),r=document.querySelector(".restart-game-btn"),i=document.querySelector("#submit-button");o.addEventListener("click",(()=>{t.style.visibility="visible",(new e).buildBoard(".place-ships-board"),console.log("start")})),r.addEventListener("click",(()=>{t.style.visibility="visible",console.log("reset")})),i.addEventListener("click",(()=>{t.style.visibility="hidden"}))}(),(new e).buildBoard(".player-board"),(new e).buildBoard(".computer-board")})();