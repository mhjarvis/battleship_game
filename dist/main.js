(()=>{"use strict";class t{constructor(t,e,s){this.name=t,this.length=e,this.timesHit=0,this.isSunk=!1,this.cordinates=s}hit(){this.timesHit++}checkIsSunk(){if(this.length===this.timesHit)return this.isSunk=!0,console.log(this.name+" is Sunk!"),!0}}class e{constructor(){this.board=this.createBoard(),this.numberOfShipsSunk=0,this.ships=[]}placeShip(e,s,i){let r=new t(e,s,i);for(let t=0;t<i.length;t++)this.board[i[t]]=r.name;this.ships.push(r)}receiveAttack(t){let e=this.board[t];if(void 0===this.board[t])return this.board[t]="miss","miss";if("Cruiser"===this.board[t]){this.board[t]="hit";let s=this.ships.find((t=>t.name==e));return s.hit(),s.checkIsSunk()&&(this.numberOfShipsSunk++,console.log("Number of Ships Sunk: "+this.numberOfShipsSunk)),"hit"}console.log("Error in: receiveAttack(coordinate)")}getSunkShipCount(){return this.numberOfShipsSunk}createBoard(){let t=[];for(let e=0;e<100;e++)t.push(void 0);return t}}class s{constructor(t){this.name=t}}new s("Human Player"),new s("Computer Player");let i=new e,r=new e;n("#player-board",i),n("#computer-board",r),i.placeShip("Cruiser",3,[55,65,75]);let o=0;for(let t=0;t<10;t++)a(),o++;function n(t,e){let s=document.querySelector(t);s.innerHTML="";for(let t=0;t<100;t++){const i=document.createElement("div");i.classList.add("board-cell"),i.id=t,"hit"===e.board[t]?i.classList.add("red"):"miss"===e.board[t]?i.classList.add("blue"):"Cruiser"===e.board[t]&&i.classList.add("ship-color"),s.append(i)}}function a(){let t=i;for(;;){let e=(0,99,Math.floor(100*Math.random()+0));if(void 0===t.board[e]||"Cruiser"===t.board[e])return void t.receiveAttack(e)}t.receiveAttack(loc)}console.log(o),n("#player-board",i)})();