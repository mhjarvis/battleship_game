(()=>{"use strict";class e{constructor(e,t){this.name=e,this.length=t,this.numberOfHits=0,this.isSunk=!1}hit(){this.numberOfHits+=1}checkIfSunk(){this.length===this.numberOfHits&&(this.isSunk=!0)}}class t{constructor(){this.board=this.createBoard(),this.numberOfShipsSunk=0,this.ships=[this.createShip("destroyer",2),this.createShip("submarine",3),this.createShip("cruiser",3),this.createShip("battleship",4),this.createShip("carrier",5)]}createBoard(){let e=[];for(let t=0;t<100;t++)e.push(void 0);return console.log(e),e}createShip(t,i){return new e(t,i)}placeShip(e){}receiveAttack(e){}testAllSunk(){return 5===this.numberOfShipsSunk}}!function(){let e=new t,i=new t;function s(e,t){for(let i=1;i<=e.board.length;i++){const e=document.querySelector(`#${t}`),s=document.createElement("div");s.className="grid",s.id=i,s.innerText=i,e.append(s)}}s(e,"player-area"),s(i,"computer-area"),function(){const e=document.querySelector("#flip"),t=document.querySelectorAll(".ship-piece"),i=document.querySelector(".ship-container");e.addEventListener("click",(()=>{for(let e of t){let t=document.querySelector(`#${e.id}`);if(t.classList.contains("test")){t.classList.remove("test");let e=t.clientWidth,s=t.clientHeight;t.style.width=`${s}px`,t.style.height=`${e}px`,i.style.flexDirection="row"}else{t.classList.add("test");let e=t.clientWidth,s=t.clientHeight;t.style.width=`${s}px`,t.style.height=`${e}px`,i.style.flexDirection="column"}}}))}()}()})();