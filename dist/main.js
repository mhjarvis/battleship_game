(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){return{length:e,numberOfTimesHit:0,hit(){this.numberOfTimesHit++},isSunk(){return this.length===this.numberOfTimesHit}}}function o(){return{board:[],ships:[t(5),t(4),t(3),t(3),t(2)],allShipsSunk:[!1,!1,!1,!1,!1],placeShip(e){},receiveAttack:()=>!0,assignHit(e){this.board[e]="hit"},assignMiss(e){this.board[e]="miss"},createBoard(){for(let e=0;e<100;e++)this.board.push(null)}}}let n,r;function c(e,t){const o=document.querySelector("#"+t);for(let n=0;n<e.board.length;n++){const e=document.createElement("div");e.classList.add(t+"-cell"),e.id=n,o.append(e)}}function l(e){console.log(e)}function i(e){console.log(e)}function s(){const e=document.querySelector("#place-ships-board");for(let t=0;t<100;t++){const o=document.createElement("div");o.classList.add("place-ships-board-cell"),o.id="i"+t,e.append(o)}}e.d({},{nx:()=>s,E4:()=>i,xb:()=>l}),n=o(),n.createBoard(),r=o(),r.createBoard(),c(n,"player-board"),c(r,"computer-board"),function(){document.querySelector(".cover").addEventListener("click",(function(){document.querySelector(".cover").style.display="none",document.querySelector(".place-ships").style.display="flex",s()}));const e=document.querySelectorAll(".player-board-cell"),t=document.querySelectorAll(".computer-board-cell");for(let o=0;o<e.length;o++)e[o].addEventListener("click",(function(){l(event.target.id)})),t[o].addEventListener("click",(function(){i(event.target.id)}))}(),console.log(n.board.indexOf(33)),n.assignMiss(33),console.log(n.board.indexOf(34)),console.log(n),console.log(r)})();