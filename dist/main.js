(()=>{"use strict";class e{constructor(e,t){this.name=e,this.length=t,this.numberOfHits=0,this.isSunk=!1,this.isHorizontal=!1}hit(){this.numberOfHits+=1}checkIfSunk(){this.length===this.numberOfHits&&(this.isSunk=!0)}}class t{constructor(){this.board=this.createBoard(),this.numberOfShipsSunk=0,this.ships=[this.createShip("patrolboat",2),this.createShip("submarine",3),this.createShip("cruiser",3),this.createShip("battleship",4),this.createShip("carrier",5)]}createBoard(){let e=[];for(let t=0;t<100;t++)e.push(void 0);return e}createShip(t,i){return new e(t,i)}placeShip(e){}receiveAttack(e){}testAllSunk(){return 5===this.numberOfShipsSunk}getShipOrientation(e){console.log("nothing")}getShipSize(e){this.ships.find((e=>e===this.ships.name))}}let i,r="",n=!1;const s=e=>{let t=document.querySelector(`#${e.id}`);const i=document.querySelector(".ship-container");if(t.classList.contains("test")){t.classList.remove("test");let e=t.clientWidth,r=t.clientHeight;t.style.width=`${r}px`,t.style.height=`${e}px`,i.style.flexDirection="row"}else{t.classList.add("test");let e=t.clientWidth,r=t.clientHeight;t.style.width=`${r}px`,t.style.height=`${e}px`,i.style.flexDirection="column"}},o=e=>{var t;r=e.target.id,i="carrier"===(t=r)?5:"battleship"===t?4:"cruiser"===t||"submarine"===t?3:"patrolboat"===t?2:void 0,console.log("Current ship length is ",i),e.dataTransfer.setData("text/plain",e.target.id),e.dataTransfer.dropEffect="move",l(i,e.target.id)},a=e=>{e.addEventListener("dragenter",(e=>{e.preventDefault(),document.getElementById(e.target.id).style.backgroundColor="gray",console.log("getAffectedGridBoxes returns: "+l(e.target.id))})),e.addEventListener("dragover",(e=>{e.preventDefault()})),e.addEventListener("dragleave",(e=>{e.preventDefault(),document.getElementById(e.target.id).style.backgroundColor="white"})),e.addEventListener("drop",(e=>{e.preventDefault();const t=e.dataTransfer.getData("text/plain");console.log(t)}))};function l(e){let t=parseInt(e),r=[t];if(!1===n)for(let e=1;e<i;e++)t+=10,r.push(t);else for(let e=1;e<i;e++)t-=1,r.push(t);return r}let c,d;function h(e){const t=c.ships.findIndex((t=>t.name===e));c.ships[t].isHorizontal=!c.ships[t].isHorizontal,console.log("ship isHorizontal: ",c.ships[t].isHorizontal)}!function(){function e(e,t,i,r){for(let n=1;n<=e.board.length;n++){const e=document.querySelector(`#${t}`),s=document.createElement("div");s.className=i+"grid",s.id=r+n,s.innerText=n,e.append(s)}}c=new t,d=new t,e(c,"player-area","p",""),e(d,"computer-area","c","c"),function(){const e=document.querySelector("#flip"),t=document.querySelectorAll(".ship-piece"),i=document.querySelectorAll(".pgrid");e.addEventListener("click",(()=>{for(let e of t)s(e),h(e.id),n=!n}));for(let e of t)window.addEventListener("DOMContentLoaded",(()=>{document.getElementById(e.id).addEventListener("dragstart",o)}));for(let e of i)a(e)}()}()})();