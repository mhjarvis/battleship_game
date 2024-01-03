(()=>{"use strict";class e{constructor(e,t){this.name=e,this.length=t,this.numberOfHits=0,this.isSunk=!1,this.isHorizontal=!1}hit(){this.numberOfHits+=1}checkIfSunk(){this.length===this.numberOfHits&&(this.isSunk=!0)}}class t{constructor(){this.board=this.createBoard(),this.numberOfShipsSunk=0,this.ships=[this.createShip("patrolboat",2),this.createShip("submarine",3),this.createShip("cruiser",3),this.createShip("battleship",4),this.createShip("carrier",5)]}createBoard(){let e=[];for(let t=0;t<100;t++)e.push(void 0);return e}createShip(t,i){return new e(t,i)}placeShip(e,t){}receiveAttack(e,t){const i=this.board[e],o=document.getElementById(t);if(void 0===i)this.board[e]="miss",o.classList.add("miss");else{this.board[e]="hit",o.classList.add("hit"),o.classList.remove("ship-color");for(let e of this.ships)e.name===i&&(e.hit(),e.checkIfSunk(),!0===e.isSunk&&this.numberOfShipsSunk++)}}testAllSunk(){return 5===this.numberOfShipsSunk}getShipOrientation(e){console.log("nothing")}getShipSize(e){this.ships.find((e=>e===this.ships.name))}}function i(e){!function(e){let t=e.slice(1);n.receiveAttack(t,e),console.log(n.numberOfShipsSunk),!0===o.testAllSunk()&&console.log("Computer Wins"),!0===n.testAllSunk()&&console.log("Player Wins")}(e.target.id),document.getElementById(e.target.id).removeEventListener("click",i)}let o,n;function s(){r(document.getElementById("computer-area")),n.board=[],function(e,t,i){for(let e=1;e<=100;e++){const t=document.querySelector("#computer-area"),i=document.createElement("div");i.className="cgrid",i.id="c"+e,t.append(i),void 0!==n.board[e-1]&&document.getElementById("c"+e).classList.add(n.board[e-1])}}();for(let e=0;e<5;e++){let t=n.ships[e],i=h(),o=!1,s=[];for(;!1===o;)if(!0===i){let e=d(t.length),i=!0;for(let t of e)(t<=0||void 0!==n.board[t])&&(i=!1);!0===i&&(o=!0,s=e)}else{let e=c(t.length),i=!0;for(let t of e)(t<0||t%10==0&&t!=e[0]||void 0!==n.board[t])&&(i=!1);!0===i&&(o=!0,s=e)}for(let e of s)n.board[e]=t.name}for(let e=0;e<100;e++)void 0!==n.board[e]&&document.getElementById("c"+e).classList.add("ship-color")}function r(e){for(;e.firstChild;)e.firstChild.className="",e.removeChild(e.firstChild)}function l(){r(document.getElementById("player-area")),o.board=[],function(e,t,i){for(let e=1;e<=100;e++){const t=document.querySelector("#player-area"),i=document.createElement("div");i.className="pgrid",i.id=""+e,t.append(i),void 0!==o.board[e-1]&&document.getElementById(""+e).classList.add("playerBoard.board[i - 1]")}}();for(let e=0;e<5;e++){let t=o.ships[e],i=h(),n=!1,s=[];for(;!1===n;)if(!0===i){let e=d(t.length),i=!0;for(let t of e)(t<=0||void 0!==o.board[t])&&(i=!1);!0===i&&(n=!0,s=e)}else{let e=c(t.length),i=!0;for(let t of e)(t<0||t%10==0&&t!=e[0]||void 0!==o.board[t])&&(i=!1);!0===i&&(n=!0,s=e)}for(let e of s)o.board[e]=t.name}for(let e=0;e<100;e++)void 0!==o.board[e]&&document.getElementById(e).classList.add("ship-color")}function d(e){let t=a(),i=[t];for(let o=1;o<e;o++)t-=10,i.push(t);return i}function c(e){let t=a(),i=[t];for(let o=1;o<e;o++)t-=1,i.push(t);return i}function a(){return Math.floor(100*Math.random())}function h(){return Math.random()>=.5}o=new t,n=new t,l(),s(),function(){const e=document.getElementById("randomize-button"),r=document.getElementById("start-button"),d=document.getElementById("reset-button");e.addEventListener("click",(()=>{l()})),r.addEventListener("click",(()=>{e.classList.toggle("hidden"),r.classList.toggle("hidden"),d.classList.toggle("hidden"),function(){const e=document.querySelectorAll(".pgrid"),t=document.querySelectorAll(".cgrid");for(let t of e)t.addEventListener("click",(function(){}));for(let e of t)e.addEventListener("click",i)}(),document.getElementById("output").innerText="Your Shot!"})),d.addEventListener("click",(()=>{e.classList.toggle("hidden"),r.classList.toggle("hidden"),d.classList.toggle("hidden"),o=new t,n=new t,l(),s()}))}()})();