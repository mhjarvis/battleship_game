(()=>{"use strict";class e{constructor(e,t){this.name=e,this.length=t,this.numberOfHits=0,this.isSunk=!1,this.isHorizontal=!1}hit(){this.numberOfHits+=1}checkIfSunk(){this.length===this.numberOfHits&&(this.isSunk=!0)}}class t{constructor(){this.board=this.createBoard(),this.numberOfShipsSunk=0,this.ships=[this.createShip("patrolboat",2),this.createShip("submarine",3),this.createShip("cruiser",3),this.createShip("battleship",4),this.createShip("carrier",5)]}createBoard(){let e=[];for(let t=0;t<100;t++)e.push(void 0);return e}createShip(t,i){return new e(t,i)}placeShip(e){}receiveAttack(e){}testAllSunk(){return 5===this.numberOfShipsSunk}getShipOrientation(e){console.log("nothing")}getShipSize(e){this.ships.find((e=>e===this.ships.name)),console.log("fuck")}}const i=e=>{let t=document.querySelector(`#${e.id}`);const i=document.querySelector(".ship-container");if(t.classList.contains("test")){t.classList.remove("test");let e=t.clientWidth,n=t.clientHeight;t.style.width=`${n}px`,t.style.height=`${e}px`,i.style.flexDirection="row"}else{t.classList.add("test");let e=t.clientWidth,n=t.clientHeight;t.style.width=`${n}px`,t.style.height=`${e}px`,i.style.flexDirection="column"}},n=e=>{e.dataTransfer.setData("text/plain",e.target.id),e.dataTransfer.dropEffect="move"},s=e=>{e.addEventListener("dragover",(e=>{e.preventDefault()})),e.addEventListener("drop",(e=>{e.preventDefault();const t=e.dataTransfer.getData("text/plain");console.log(t)})),e.addEventListener("dragenter",(e=>{e.preventDefault();let t=e.target.id;console.log(t);let i=document.getElementById(t);console.log(i),i.style.backgroundColor="gray"})),e.addEventListener("dragleave",(e=>{carrier,e.preventDefault();let t=e.target.id;document.getElementById(t).style.backgroundColor="white"}))};let r,o;function a(e){const t=r.ships.findIndex((t=>t.name===e));r.ships[t].isHorizontal=!r.ships[t].isHorizontal,console.log("ship isHorizontal: ",r.ships[t].isHorizontal)}getShipSize(boardName,shipName),function(){function e(e,t,i,n){for(let s=1;s<=e.board.length;s++){const e=document.querySelector(`#${t}`),r=document.createElement("div");r.className=i+"grid",r.id=n+s,r.innerText=s,e.append(r)}}r=new t,o=new t,e(r,"player-area","p",""),e(o,"computer-area","c","c"),function(){const e=document.querySelector("#flip"),t=document.querySelectorAll(".ship-piece"),r=document.querySelectorAll(".pgrid");e.addEventListener("click",(()=>{for(let e of t)i(e),a(e.id)}));for(let e of t)window.addEventListener("DOMContentLoaded",(()=>{document.getElementById(e.id).addEventListener("dragstart",n)}));for(let e of r)s(e)}()}()})();