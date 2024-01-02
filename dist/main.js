(()=>{"use strict";class e{constructor(e,t){this.name=e,this.length=t,this.numberOfHits=0,this.isSunk=!1,this.isHorizontal=!1}hit(){this.numberOfHits+=1}checkIfSunk(){this.length===this.numberOfHits&&(this.isSunk=!0)}}class t{constructor(){this.board=this.createBoard(),this.numberOfShipsSunk=0,this.ships=[this.createShip("patrolboat",2),this.createShip("submarine",3),this.createShip("cruiser",3),this.createShip("battleship",4),this.createShip("carrier",5)]}createBoard(){let e=[];for(let t=0;t<100;t++)e.push(void 0);return e}createShip(t,o){return new e(t,o)}placeShip(e,t){}receiveAttack(e){}testAllSunk(){return 5===this.numberOfShipsSunk}getShipOrientation(e){console.log("nothing")}getShipSize(e){this.ships.find((e=>e===this.ships.name))}}let o,n;function i(){r(document.getElementById("computer-area")),n.board=[],function(e,t,o){for(let e=1;e<=100;e++){const t=document.querySelector("#computer-area"),o=document.createElement("div");o.className="cgrid",o.id="c"+e,t.append(o),void 0!==n.board[e-1]&&document.getElementById("c"+e).classList.add(n.board[e-1])}}();for(let e=0;e<5;e++){let t=n.ships[e],o=a(),i=!1,r=[];for(;!1===i;)if(!0===o){let e=d(t.length),o=!0;for(let t of e)t<=0?o=!1:void 0!==n.board[t]&&(console.log("cpu space taken"),o=!1);!0===o&&(i=!0,r=e)}else{let e=l(t.length),o=!0;for(let t of e)(t<0||t%10==0&&t!=e[0]||void 0!==n.board[t])&&(o=!1);!0===o&&(i=!0,r=e)}for(let e of r)n.board[e]=t.name}for(let e=0;e<100;e++)void 0!==n.board[e]&&document.getElementById("c"+e).classList.add(n.board[e])}function r(e){for(;e.firstChild;)e.firstChild.className="",e.removeChild(e.firstChild)}function s(){r(document.getElementById("player-area")),o.board=[],function(e,t,n){for(let e=1;e<=100;e++){const t=document.querySelector("#player-area"),n=document.createElement("div");n.className="pgrid",n.id=""+e,t.append(n),void 0!==o.board[e-1]&&document.getElementById(""+e).classList.add(o.board[e-1])}}();for(let e=0;e<5;e++){let t=o.ships[e],n=a(),i=!1,r=[];for(;!1===i;)if(!0===n){let e=d(t.length),n=!0;for(let t of e)t<=0?n=!1:void 0!==o.board[t]&&(console.log("space taken"),n=!1);!0===n&&(i=!0,r=e)}else{let e=l(t.length),n=!0;for(let t of e)(t<0||t%10==0&&t!=e[0]||void 0!==o.board[t])&&(n=!1);!0===n&&(i=!0,r=e)}for(let e of r)o.board[e]=t.name}for(let e=0;e<100;e++)void 0!==o.board[e]&&document.getElementById(e).classList.add(o.board[e])}function d(e){let t=c(),o=[t];for(let n=1;n<e;n++)t-=10,o.push(t);return o}function l(e){let t=c(),o=[t];for(let n=1;n<e;n++)t-=1,o.push(t);return o}function c(){return Math.floor(100*Math.random())}function a(){return Math.random()>=.5}o=new t,n=new t,s(),i(),function(){const e=document.getElementById("randomize-button"),r=document.getElementById("start-button"),d=document.getElementById("reset-button");e.addEventListener("click",(()=>{s()})),r.addEventListener("click",(()=>{e.classList.toggle("hidden"),r.classList.toggle("hidden"),d.classList.toggle("hidden"),function(){const e=document.querySelectorAll(".pgrid"),t=document.querySelectorAll(".cgrid");for(let t of e)t.addEventListener("click",(()=>{}));for(let e of t)e.addEventListener("click",(()=>{}))}()})),d.addEventListener("click",(()=>{e.classList.toggle("hidden"),r.classList.toggle("hidden"),d.classList.toggle("hidden"),o=new t,n=new t,s(),i()}))}()})();