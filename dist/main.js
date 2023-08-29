(()=>{"use strict";class e{constructor(e,t,s){this.name=e,this.length=t,this.timesHit=0,this.isSunk=!1,this.cordinates=s}hit(){this.timesHit++}checkIsSunk(){if(this.length===this.timesHit)return this.isSunk=!0,console.log(this.name+" is Sunk!"),!0}}class t{constructor(){this.board=this.createBoard(),this.numberOfShipsSunk=0,this.ships=[]}placeShip(t,s,i){let r=new e(t,s,i);for(let e=0;e<i.length;e++)this.board[i[e]]=r.name;this.ships.push(r)}receiveAttack(e){let t=this.board[e];if("miss"!==t&&"hit"!==t&&(null===t&&(this.board[e]="miss",console.log("miss")),null!=t&&"miss"!=t&&"hit"!=t)){let t=this.board[e];this.board[e]="hit";let s=this.ships.find((e=>e.name===t));return s.hit(),void(s.checkIsSunk()&&(this.numberOfShipsSunk++,console.log("Number of Ships Sunk: "+this.numberOfShipsSunk)))}}getSunkShipCount(){return this.numberOfShipsSunk}createBoard(){let e=[];for(let t=0;t<100;t++)e.push(null);return e}}let s=new t,i=new t;function r(e,t){let s=document.querySelector(e);s.innerHTML="";for(let e=0;e<100;e++){const i=document.createElement("div");i.classList.add("board-cell"),i.id=e,"hit"===t[e]?i.classList.add("red"):"miss"===t[e]&&i.classList.add("blue"),s.append(i)}}console.log(s),console.log(i),r("#player-board",s.board),r("#computer-board",i.board),s.placeShip("Cruiser",3,[55,65,75]),s.receiveAttack(34),s.receiveAttack(55),s.receiveAttack(56),s.receiveAttack(45),s.receiveAttack(54),s.receiveAttack(65),s.receiveAttack(75),s.receiveAttack(85),r("#player-board",s.board)})();