(()=>{"use strict";let t=new class{constructor(t,s){this.name=t,this.length=s,this.timesHit=0,this.isSunk=!1}hit(){this.timesHit++}checkIsSunk(){this.length===this.timesHit&&(this.isSunk=!0)}}("terst",5);console.log(t)})();